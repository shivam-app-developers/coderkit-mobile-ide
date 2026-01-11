// Placeholder Cashfree helpers
// In production, implement real API calls here

export async function createOrder(amount: number, currency: string, customerId: string, courseId: string) {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));

  console.log(`[Mock Cashfree] Creating order for ${courseId}: ${amount} ${currency} (Customer: ${customerId})`);

  // Return mock response
  return {
    cf_order_id: `order_${Math.floor(Math.random() * 1000000)}`,
    order_id: `order_${Math.floor(Math.random() * 1000000)}`,
    payment_session_id: `session_${Math.floor(Math.random() * 1000000)}`,
    order_status: "ACTIVE"
  };
}

export async function verifySignature(_orderId: string, _paymentId: string, _signature: string) {
    // Placeholder verification logic
    return true;
}
