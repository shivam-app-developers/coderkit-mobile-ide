import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

interface CreateOrderPayload {
  order_id: string;
  order_amount: number;
  order_currency: string;
  customer_details: {
    customer_id: string;
    customer_email: string;
    customer_phone: string;
  };
  order_meta: {
    return_url: string;
    notify_url: string;
  };
  course_id: string;
}

function generateSignature(payload: string, secret: string): string {
  return crypto.createHmac('sha256', secret).update(payload).digest('hex');
}

export async function POST(request: NextRequest) {
  try {
    const body: CreateOrderPayload = await request.json();
    const appId = process.env.CASHFREE_APP_ID;
    const secretKey = process.env.CASHFREE_SECRET_KEY;

    if (!appId || !secretKey) {
      return NextResponse.json(
        { error: 'Cashfree credentials not configured' },
        { status: 500 }
      );
    }

    // Prepare request body
    const requestBody = {
      order_id: body.order_id,
      order_amount: body.order_amount,
      order_currency: body.order_currency,
      customer_details: body.customer_details,
      order_meta: body.order_meta,
      order_tags: {
        course_id: body.course_id,
      },
    };

    const requestBodyString = JSON.stringify(requestBody);
    const signature = generateSignature(requestBodyString, secretKey);

    // Call Cashfree API
    const response = await fetch('https://sandbox.cashfree.com/pg/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-version': '2023-08-01',
        'x-client-id': appId,
        'x-client-secret': secretKey,
        'x-request-id': `${body.order_id}_${Date.now()}`,
        'x-idempotency-key': body.order_id,
      },
      body: requestBodyString,
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error('Cashfree API error:', responseData);
      return NextResponse.json(
        { error: responseData.message || 'Failed to create order' },
        { status: response.status }
      );
    }

    return NextResponse.json({
      session_id: responseData.payments.session_id,
      order_id: responseData.order_id,
    });
  } catch (error) {
    console.error('Order creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
