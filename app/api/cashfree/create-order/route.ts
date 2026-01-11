import { NextRequest, NextResponse } from 'next/server';
import { createOrder } from '@/lib/cashfree';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { courseId, price, currency = 'USD' } = body;

    // In a real app, get user ID from auth context
    const customerId = "user_123_placeholder";

    const order = await createOrder(price, currency, customerId, courseId);

    return NextResponse.json(order);
  } catch (error) {
    console.error("Order creation failed:", error);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}
