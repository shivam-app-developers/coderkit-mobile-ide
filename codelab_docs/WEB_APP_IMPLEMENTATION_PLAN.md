# CoderKit Web App - Implementation Plan

## Goal Description

Build a comprehensive web portal for CoderKit at **coderkit.shivamappstudio.com** that:

1. **Drives app downloads** with a compelling landing page
2. **Showcases public coding profiles** with verified stats synced from mobile app
3. **Sells courses globally** via Cashfree payments (140+ currencies, PayPal built-in)
4. **Provides documentation** for the app and learning methodology
5. **Hosts a blog** for SEO content and updates
6. **Ranks in AI search engines** via structured data

---

## Configuration

| Setting | Value |
|---------|-------|
| **Domain** | `coderkit.shivamappstudio.com` |
| **Firebase** | Existing mobile app project (stats sync) |
| **Payments** | Cashfree (PayPal, Cards, UPI) - 140+ currencies |
| **Hosting** | Firebase Hosting |

---

## Reference Files

> **IMPORTANT**: Use these existing files from `codelab_docs/` as content sources:

| File | Use For |
|------|---------|
| `index.html` | **Landing page design template** - Convert this to Next.js components |
| `courses_metadata.json` | Course data (40+ courses with IDs, tracks, pricing) |
| `CoderKit Pricing Guide.md` | Product IDs and price tiers |
| `GEO Strategy for Coder.md` | FAQ Q&A pairs and keywords |
| `PROFILE_STATS_EXPLAINED.md` | Stats-explained page content |
| `WEB_APP_PROFILE_PAGE.md` | Profile page design and Firestore schema |
| `APP_CAPABILITIES.md` | Feature descriptions and language support |
| `visualizer_instructions.md` | Visualizer catalog |

---

## Project Structure

```
coderkit-web/
├── app/
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Landing page
│   ├── profile/[id]/page.tsx         # Public profiles
│   ├── stats-explained/page.tsx      # Stats docs
│   ├── blog/
│   │   ├── page.tsx                  # Blog listing
│   │   └── [slug]/page.tsx           # Blog post
│   ├── docs/
│   │   ├── page.tsx                  # Docs home
│   │   └── [...slug]/page.tsx        # Doc pages
│   ├── pricing/page.tsx              # Pricing page
│   └── api/
│       ├── cashfree/
│       │   ├── create-order/route.ts # Payment initiation
│       │   └── webhook/route.ts      # Payment callbacks
│       └── og/route.tsx              # Dynamic OG images
│
├── components/
│   ├── layout/                       # Navbar, Footer
│   ├── landing/                      # Hero, Courses, etc.
│   ├── profile/                      # Stats components
│   ├── blog/                         # Blog cards, MDX
│   ├── docs/                         # Sidebar, nav
│   └── payment/                      # Checkout UI
│
├── content/
│   ├── blog/                         # MDX blog posts
│   └── docs/                         # MDX documentation
│
├── lib/
│   ├── firebase.ts                   # Firebase config
│   ├── cashfree.ts                   # Cashfree helpers
│   ├── mdx.ts                        # MDX processing
│   └── achievements.ts               # Achievement defs
│
├── public/
│   ├── llms.txt                      # AI crawler
│   └── assets/                       # Images
│
└── firebase.json                     # Hosting config
```

---

## Phase 1: Project Setup & Design System

*Day 1*

---

### [NEW] Project Initialization

```bash
npx -y create-next-app@latest coderkit-web --typescript --tailwind --app --src-dir=false --import-alias="@/*"
cd coderkit-web
npm install firebase @cashfreepayments/cashfree-js gray-matter next-mdx-remote
```

---

### [NEW] `tailwind.config.ts`

Design tokens (extract from `index.html`):

- **Brand Primary**: #4F46E5 (Indigo)
- **Brand Secondary**: #7C3AED (Purple)
- **Accent**: #10B981 (Emerald)
- **Dark**: #111827

---

### [NEW] `lib/firebase.ts`

Connect to existing mobile app Firebase project:

- Firestore for user profiles (read-only for web)
- Environment variables for config

---

## Phase 2: Landing Page

*Days 2-4*

> **CRITICAL**: The landing page design **already exists** in `codelab_docs/index.html` (~900 lines).
> **DO NOT design from scratch.** Convert the existing HTML to Next.js components.

---

### [CONVERT] `codelab_docs/index.html` → Next.js Components

Extract these sections from `index.html` into React components:

| HTML Section | Component File |
|--------------|----------------|
| `<nav>` | `components/layout/Navbar.tsx` |
| Hero section | `components/landing/HeroSection.tsx` |
| "How It Works" | `components/landing/HowItWorks.tsx` |
| Courses grid | `components/landing/CoursesSection.tsx` |
| Visualizers | `components/landing/VisualizersSection.tsx` |
| Sandbox/Runtime | `components/landing/SandboxSection.tsx` |
| VS Code | `components/landing/VSCodeSection.tsx` |
| Comparison table | `components/landing/ComparisonTable.tsx` |
| FAQ accordion | `components/landing/FAQSection.tsx` |
| `<footer>` | `components/layout/Footer.tsx` |

Keep all existing:

- Tailwind classes
- Animations (`.animate-float`, `.card-hover`)
- Gradient utilities (`.gradient-text`, `.gradient-bg`)
- Responsive breakpoints

---

## Phase 3: Public Profile System

*Days 5-6*

---

### [NEW] `app/profile/[id]/page.tsx`

- Decode Base64 user ID from URL
- Fetch from Firestore (existing mobile data)
- Display: Learning, Problem Solving, Building, Consistency stats
- Achievement badges grid
- Share button with clipboard copy

---

### [NEW] `app/stats-explained/page.tsx`

Static page explaining each stat metric for recruiters.

---

## Phase 4: Cashfree Global Payments

*Days 7-9*

---

### Cashfree Capabilities (Research Findings)

| Feature | Details |
|---------|---------|
| **Currencies** | 140+ international currencies |
| **Payment Methods** | Cards (Visa, MC, Amex), PayPal, UPI, Netbanking |
| **PayPal** | Built-in integration (no separate setup) |
| **Settlement** | INR in 1-3 business days |
| **License** | RBI PA-CB approved for cross-border |
| **SDK** | `@cashfreepayments/cashfree-js` |

---

### [NEW] `lib/cashfree.ts`

```typescript
// Server-side helpers
export async function createOrder(amount: number, currency: string, customerId: string) {
  const response = await fetch('https://api.cashfree.com/pg/orders', {
    method: 'POST',
    headers: {
      'x-client-id': process.env.CASHFREE_APP_ID!,
      'x-client-secret': process.env.CASHFREE_SECRET_KEY!,
      'x-api-version': '2023-08-01',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      order_amount: amount,
      order_currency: currency, // "USD", "EUR", "INR", etc.
      customer_details: { customer_id: customerId },
      order_meta: { return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment/success?order_id={order_id}` }
    })
  });
  return response.json();
}
```

---

### [NEW] `app/api/cashfree/create-order/route.ts`

API route for order creation:

1. Receive course ID and user ID
2. Look up course price from database
3. Create Cashfree order
4. Return `payment_session_id` to frontend

---

### [NEW] `app/api/cashfree/webhook/route.ts`

Webhook handler:

1. Verify Cashfree signature
2. Parse payment status
3. Update Firestore: `users/{uid}/purchases/{courseId}`
4. Return 200 OK

---

### [NEW] `app/pricing/page.tsx`

Pricing page with:

- Course cards organized by track
- Price display with currency detection
- "Buy Now" buttons triggering Cashfree checkout
- Subscription options grid

---

### [NEW] `components/payment/CheckoutButton.tsx`

Client component using Cashfree SDK:

```typescript
import { load } from "@cashfreepayments/cashfree-js";

export function CheckoutButton({ courseId, price }: Props) {
  const handlePayment = async () => {
    const cashfree = await load({ mode: "production" });
    const { payment_session_id } = await fetch('/api/cashfree/create-order', {
      method: 'POST',
      body: JSON.stringify({ courseId })
    }).then(r => r.json());
    
    cashfree.checkout({ paymentSessionId: payment_session_id });
  };
  // ...
}
```

---

### Environment Variables

```env
# .env.local
CASHFREE_APP_ID=your_app_id
CASHFREE_SECRET_KEY=your_secret_key
CASHFREE_WEBHOOK_SECRET=your_webhook_secret
NEXT_PUBLIC_SITE_URL=https://coderkit.shivamappstudio.com
```

---

## Phase 5: Blog System

*Days 10-11*

---

### [NEW] `content/blog/` (MDX Files)

Initial blog posts:

1. `why-visual-learning-works.mdx` - Educational philosophy
2. `offline-coding-android.mdx` - Technical differentiator
3. `rhombus-methodology-explained.mdx` - Learning system
4. `announcing-go-support.mdx` - Feature announcement
5. `vs-code-extension-launch.mdx` - Desktop sync

---

### [NEW] `app/blog/page.tsx`

Blog listing:

- Card grid with featured image, title, excerpt
- Category filtering
- Pagination

---

### [NEW] `app/blog/[slug]/page.tsx`

Blog post page:

- MDX rendering with custom components
- Table of contents generation
- Author info
- Related posts
- Social share buttons

---

### [NEW] `lib/mdx.ts`

MDX processing utilities:

- `getPostBySlug()` - Load single post
- `getAllPosts()` - List all posts with metadata
- Custom MDX components (code blocks, callouts)

---

## Phase 6: Documentation Hub

*Days 12-14*

---

### [NEW] `content/docs/` (MDX Structure)

```
docs/
├── getting-started/
│   ├── installation.mdx
│   ├── first-program.mdx
│   └── developer-keyboard.mdx
├── languages/
│   ├── python.mdx
│   ├── java.mdx
│   ├── go.mdx
│   ├── web.mdx
│   └── sql.mdx
├── learning/
│   ├── rhombus-methodology.mdx
│   ├── visualizers.mdx
│   └── capstone-projects.mdx
├── profile/
│   ├── stats-explained.mdx
│   └── achievements.mdx
└── api/
    └── course-format.mdx
```

---

### [NEW] `app/docs/page.tsx`

Documentation home:

- Quick start guide
- Section cards linking to categories
- Search functionality

---

### [NEW] `app/docs/[...slug]/page.tsx`

Doc page layout:

- Left sidebar navigation
- Main content area
- Right sidebar (table of contents)
- Previous/Next navigation
- Edit on GitHub link

---

### [NEW] `components/docs/DocsSidebar.tsx`

Collapsible navigation tree:

- Auto-generated from folder structure
- Active link highlighting
- Category icons

---

## Phase 7: SEO/GEO & Deployment

*Days 15-16*

---

### [NEW] `public/llms.txt`

```
# CoderKit Mobile IDE
Product: CoderKit - Learn. Practice. Build.
Capabilities: Offline Python/Java/Go/C, 28 Visualizers, Rhombus Learning
Platform: Android (iOS coming soon)
Differentiator: True offline execution, verified coding profiles
Website: https://coderkit.shivamappstudio.com
Download: [Play Store URL]
```

---

### JSON-LD Schemas

1. **SoftwareApplication** - App metadata
2. **FAQPage** - All FAQ questions
3. **Organization** - Shivam App Studio
4. **Product** - Each course as purchasable product
5. **Course** - Educational course schema
6. **BlogPosting** - Each blog post

---

### Firebase Hosting

```json
// firebase.json
{
  "hosting": {
    "public": "out",
    "rewrites": [{ "source": "**", "destination": "/index.html" }],
    "headers": [{
      "source": "**",
      "headers": [{ "key": "X-Frame-Options", "value": "DENY" }]
    }]
  }
}
```

---

### Deployment

```bash
npm run build
firebase deploy --only hosting
```

---

## Verification Plan

### Phase 1-2

| Test | Method |
|------|--------|
| Build succeeds | `npm run build` |
| Dev server runs | `npm run dev` |
| All 8 landing sections render | Visual inspection |
| Mobile responsive | Chrome DevTools |

### Phase 3

| Test | Method |
|------|--------|
| Profile loads | `/profile/{valid-id}` |
| 404 for invalid | `/profile/invalid` |
| Stats match Firestore | Compare with DB |

### Phase 4

| Test | Method |
|------|--------|
| Test order creation | Cashfree sandbox mode |
| Webhook receives events | Cashfree dashboard logs |
| Purchase recorded in Firestore | Check DB after payment |

### Phase 5-6

| Test | Method |
|------|--------|
| Blog post renders | Navigate to `/blog/test-post` |
| Docs navigation works | Click through sidebar |
| MDX code blocks styled | Check syntax highlighting |

### Phase 7

| Test | Method |
|------|--------|
| JSON-LD valid | schema.org validator |
| Lighthouse SEO 90+ | Chrome DevTools |
| Live site accessible | Firebase deployed URL |

---

## Timeline Summary

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| 1. Setup | Day 1 | Next.js, Tailwind, Firebase |
| 2. Landing | Days 2-4 | Full landing page |
| 3. Profile | Days 5-6 | Public profiles, stats |
| 4. Payments | Days 7-9 | Cashfree integration |
| 5. Blog | Days 10-11 | MDX blog system |
| 6. Docs | Days 12-14 | Documentation hub |
| 7. SEO/Deploy | Days 15-16 | Optimization, launch |

**Total: ~16 days**

---

## Required From You

1. **Cashfree Credentials**: App ID, Secret Key from your existing Cashfree account
2. **Firebase Config**: Web app config from existing Firebase project
3. **App Screenshots**: Hero mockup, keyboard demo, visualizer screenshots
4. **Blog Content**: 3-5 initial blog post topics/drafts
5. **Play Store URL**: Final URL for download links
