'use client';

import { load } from "@cashfreepayments/cashfree-js";

interface Props {
  courseId: string;
  price: number;
  currency?: string;
}

export function CheckoutButton({ courseId, price, currency = 'USD' }: Props) {
  const handlePayment = async () => {
    try {
      const cashfree = await load({ mode: "sandbox" }); // Use "production" for real

      const response = await fetch('/api/cashfree/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId, price, currency })
      });

      const data = await response.json();

      if (data.payment_session_id) {
        cashfree.checkout({ paymentSessionId: data.payment_session_id });
      } else {
        alert("Failed to initiate payment");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="w-full mt-4 bg-brand-primary text-white py-2 rounded-lg font-semibold hover:opacity-90 transition shadow-sm"
    >
      Buy for ${price}
    </button>
  );
}
