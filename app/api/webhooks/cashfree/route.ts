import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { db } from '@/lib/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export const dynamic = 'force-dynamic';

interface CashfreeWebhookPayload {
  event: string;
  data: {
    order: {
      order_id: string;
      order_amount: number;
      order_currency: string;
      customer_details: {
        customer_id: string;
        customer_email: string;
        customer_phone: string;
      };
      order_status: string;
      payment_method?: string;
      cf_order_id?: string;
      created_at?: string;
    };
  };
}

function verifyWebhookSignature(
  payload: string,
  signature: string,
  webhookSecret: string
): boolean {
  const hash = crypto
    .createHmac('sha256', webhookSecret)
    .update(payload)
    .digest('base64');
  return hash === signature;
}

async function handlePaymentSuccess(orderData: any, userId: string) {
  if (!db) {
    console.error('Firebase not initialized');
    return false;
  }

  try {
    // Create purchase record
    const purchaseId = `${userId}_${orderData.order_id}`;
    const purchaseRef = doc(db, 'purchases', purchaseId);
    
    await setDoc(purchaseRef, {
      userId,
      orderId: orderData.order_id,
      amount: orderData.order_amount,
      currency: orderData.order_currency,
      status: 'completed',
      paymentMethod: orderData.payment_method || 'cashfree',
      createdAt: new Date(),
      courseId: orderData.course_id || null,
      metadata: {
        cfOrderId: orderData.cf_order_id,
        customerEmail: orderData.customer_details?.customer_email,
      },
    });

    // Update user subscription status
    const userRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userRef);
    
    if (userDoc.exists()) {
      await setDoc(
        userRef,
        {
          subscription: {
            status: 'active',
            purchasedAt: new Date(),
            orderId: orderData.order_id,
          },
        },
        { merge: true }
      );
    }

    console.log(`Payment processed for user ${userId}, order ${orderData.order_id}`);
    return true;
  } catch (error) {
    console.error('Error processing payment:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.text();
    const signature = request.headers.get('x-webhook-signature');
    const webhookSecret = process.env.CASHFREE_WEBHOOK_SECRET;

    if (!signature || !webhookSecret) {
      console.error('Missing signature or webhook secret');
      return NextResponse.json(
        { error: 'Invalid request' },
        { status: 400 }
      );
    }

    // Verify webhook signature
    if (!verifyWebhookSignature(rawBody, signature, webhookSecret)) {
      console.error('Invalid webhook signature');
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      );
    }

    const payload: CashfreeWebhookPayload = JSON.parse(rawBody);

    // Extract user ID from order_id (format: {userId}_{randomId})
    const [userId] = payload.data.order.order_id.split('_');

    switch (payload.event) {
      case 'order.paid':
        await handlePaymentSuccess(payload.data.order, userId);
        return NextResponse.json({ status: 'ok' }, { status: 200 });

      case 'order.failed':
        console.log(`Payment failed for order ${payload.data.order.order_id}`);
        return NextResponse.json({ status: 'ok' }, { status: 200 });

      case 'order.cancelled':
        console.log(`Payment cancelled for order ${payload.data.order.order_id}`);
        return NextResponse.json({ status: 'ok' }, { status: 200 });

      default:
        console.log(`Unhandled webhook event: ${payload.event}`);
        return NextResponse.json({ status: 'ok' }, { status: 200 });
    }
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
