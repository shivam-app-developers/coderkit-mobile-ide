# Cashfree Payment Integration Guide

## Overview
CoderKit now supports real payment processing via **Cashfree Payments** in sandbox mode (testing environment).

## Setup Instructions

### 1. Get Cashfree Sandbox Credentials

1. Sign up at [Cashfree Dashboard](https://dashboard.cashfree.com)
2. Go to **Settings → API Keys**
3. Copy your **App ID** and **Secret Key** from the sandbox environment
4. These are already added to `.env.local`:
   ```
   CASHFREE_APP_ID=TEST100510579c845f1f0aab3929238075015001
   CASHFREE_SECRET_KEY=TESTb5ecbe38d903cb8f7ace4020d0ed67496a9ddb95
   ```

### 2. Setup Webhook Secret

**⚠️ Current Status**: Webhook secret placeholder is configured.

To get real webhook secret:
1. Log in to [Cashfree Dashboard](https://dashboard.cashfree.com)
2. Go to **Settings → Webhooks**
3. Click **Add Webhook**
4. **Webhook URL**: `{NEXT_PUBLIC_SITE_URL}/api/webhooks/cashfree`
   - Example: `https://coderkit.vercel.app/api/webhooks/cashfree`
5. **Events**: Select
   - `order.paid` - Payment successful
   - `order.failed` - Payment failed
   - `order.cancelled` - Order cancelled
6. Copy the generated **Webhook Secret** 
7. Add to `.env.local`:
   ```
   CASHFREE_WEBHOOK_SECRET=your_actual_webhook_secret
   ```

### 3. Environment Variables

Ensure these are set in `.env.local`:

```env
# Cashfree Configuration (Sandbox)
CASHFREE_APP_ID=TEST100510579c845f1f0aab3929238075015001
CASHFREE_SECRET_KEY=TESTb5ecbe38d903cb8f7ace4020d0ed67496a9ddb95
CASHFREE_WEBHOOK_SECRET=your_actual_webhook_secret

# Site URL for webhooks
NEXT_PUBLIC_SITE_URL=http://localhost:3000  # Local development
# NEXT_PUBLIC_SITE_URL=https://yourdomain.com  # Production
```

## Payment Flow

### 1. User Initiates Checkout
- User clicks "Complete Purchase" on checkout page
- Frontend generates unique order ID: `{userId}_{timestamp}_{random}`

### 2. Create Order
- Frontend calls `/api/orders/create` (POST)
- Backend creates order via Cashfree API
- Cashfree returns `session_id` for payment initialization

### 3. Cashfree Checkout
- Cashfree SDK initializes with `session_id`
- User enters card/UPI/netbanking details
- Payment processed by Cashfree

### 4. Webhook Callback
- On successful payment, Cashfree calls webhook at `/api/webhooks/cashfree`
- Backend verifies webhook signature using `CASHFREE_WEBHOOK_SECRET`
- Backend creates purchase record in Firestore:
  ```
  purchases/{docId}
  ├── userId
  ├── orderId
  ├── amount
  ├── status: "completed"
  ├── courseId
  ├── createdAt
  └── metadata (Cashfree details)
  ```
- Backend updates user subscription status:
  ```
  users/{userId}
  └── subscription
      ├── status: "active"
      ├── purchasedAt
      └── orderId
  ```

### 5. Redirect to Success Page
- Cashfree redirects to `/order/success?orderId={orderId}`
- User sees confirmation with order details

## Testing Payment Integration

### Test Card Numbers (Sandbox)

**Success Card**:
- Number: `4111111111111111`
- Expiry: Any future date (e.g., 12/29)
- CVV: Any 3 digits (e.g., 123)

**Failed Payment**:
- Number: `4000000000000002`
- Expiry: Any future date
- CVV: Any 3 digits

### Webhook Testing

**Option 1: Manual Test via Cashfree Dashboard**
1. Go to **Settings → Webhooks**
2. Find your webhook
3. Click **Test** to send sample webhook
4. Check logs at `/api/webhooks/cashfree`

**Option 2: Local Testing with ngrok**
1. Install [ngrok](https://ngrok.com)
2. Run locally: `npm run dev`
3. Expose to public: `ngrok http 3000`
4. Update Cashfree webhook URL to ngrok tunnel
5. Test payments locally

### Verify in Firestore

After successful payment:
1. Check **Cloud Firestore Console**
2. Navigate to `purchases` collection
3. Find purchase record with order ID
4. Verify `status: "completed"`

Also check `users/{userId}` document:
- `subscription.status` should be `"active"`

## API Reference

### POST `/api/orders/create`

**Request**:
```json
{
  "order_id": "user123_1234567890_abc123",
  "order_amount": 9.99,
  "order_currency": "INR",
  "customer_details": {
    "customer_id": "user123",
    "customer_email": "user@example.com",
    "customer_phone": "9999999999"
  },
  "order_meta": {
    "return_url": "https://coderkit.vercel.app/order/success?orderId=...",
    "notify_url": "https://coderkit.vercel.app/api/webhooks/cashfree"
  },
  "course_id": "python_101"
}
```

**Response** (Success):
```json
{
  "session_id": "session_abc123...",
  "order_id": "user123_1234567890_abc123"
}
```

**Response** (Error):
```json
{
  "error": "Failed to create order"
}
```

### POST `/api/webhooks/cashfree`

**Webhook Payload** (order.paid):
```json
{
  "event": "order.paid",
  "data": {
    "order": {
      "order_id": "user123_1234567890_abc123",
      "order_amount": 9.99,
      "order_currency": "INR",
      "order_status": "PAID",
      "payment_method": "card",
      "cf_order_id": "123456789",
      "customer_details": {
        "customer_id": "user123",
        "customer_email": "user@example.com",
        "customer_phone": "9999999999"
      }
    }
  }
}
```

## Troubleshooting

### Issue: "Cashfree not loaded"
**Solution**: 
- Ensure Cashfree SDK is loaded: `https://sdk.cashfree.com/js/v3/cashfree.js`
- Check browser console for script loading errors
- Try hard refresh (Ctrl+Shift+R)

### Issue: "Invalid webhook signature"
**Solution**:
- Verify `CASHFREE_WEBHOOK_SECRET` is correct in `.env.local`
- Ensure secret matches Cashfree dashboard
- Check webhook logs in Cashfree dashboard

### Issue: Order creation fails
**Solution**:
- Verify `CASHFREE_APP_ID` and `CASHFREE_SECRET_KEY` are correct
- Check Cashfree dashboard for rate limits
- Review API response in browser console

### Issue: Webhook not called
**Solution**:
- Verify webhook URL is publicly accessible (not localhost)
- Check Cashfree dashboard webhook delivery logs
- Ensure webhook endpoint returns 200 status

## Production Deployment

When deploying to production:

1. **Get Production Credentials**
   - Go to Cashfree Dashboard
   - Switch from Sandbox to Production environment
   - Copy Production App ID and Secret Key

2. **Update Environment**
   ```env
   CASHFREE_APP_ID=your_production_app_id
   CASHFREE_SECRET_KEY=your_production_secret_key
   CASHFREE_WEBHOOK_SECRET=your_production_webhook_secret
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```

3. **Update Webhook URL**
   - Change from sandbox to production Cashfree dashboard
   - Update webhook URL to production domain
   - Regenerate webhook secret for production

4. **Enable in Checkout**
   - Update checkout to use production API endpoint:
   ```typescript
   fetch('https://api.cashfree.com/pg/orders')  // Instead of sandbox URL
   ```

5. **Test End-to-End**
   - Process test transaction
   - Verify webhook delivery
   - Check Firestore purchase record

## Files Modified

- `app/checkout/[courseId]/CheckoutClient.tsx` - Cashfree SDK integration
- `app/api/orders/create/route.ts` - Create Cashfree order
- `app/api/webhooks/cashfree/route.ts` - Process webhook callbacks
- `app/order/success/page.tsx` - Display order details
- `.env.local` - Added Cashfree credentials

## Next Steps

1. ✅ Add Cashfree credentials to `.env.local`
2. ⏳ Get webhook secret from Cashfree dashboard
3. ⏳ Test checkout flow with sandbox card
4. ⏳ Verify webhook delivery
5. ⏳ Add purchase history to account page
6. ⏳ Setup production credentials for deployment
