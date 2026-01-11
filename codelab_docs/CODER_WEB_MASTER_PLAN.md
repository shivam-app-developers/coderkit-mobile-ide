# **Project Master Plan: Coder Web Portal**

## **1\. Project Identity**

* **App Name:** Coder (formerly CodeLab)  
* **Organization:** Shivam App Studio  
* **Web Domain:** coder.shivamappstudio.com (Subdomain)  
* **Hosting:** Firebase Hosting  
* **Primary Goal:** A high-performance, SEO/GEO-optimized web portal to drive downloads, showcase features, and sell courses globally.

## **2\. Product Positioning**

**"The Mobile-First Coding Sandbox"**

* **Core Value Proposition:** A lightweight mobile IDE that runs **Python (Chaquopy)** and **Java** offline on Android, featuring a custom developer keyboard and algorithm visualizers.  
* **Target Audience:** CS Students, Data Science Learners, and Mobile Developers who need to code on the go.  
* **Differentiation:** unlike cloud-based editors (Replit), Coder runs **offline** on the device hardware.

## **3\. Technology Stack (Web Portal)**

* **Framework:** Next.js 14+ (App Router)  
* **Language:** TypeScript  
* **Styling:** Tailwind CSS \+ clsx \+ tailwind-merge  
* **Icons:** Lucide React  
* **Backend/Auth:** Firebase (Auth, Firestore)  
* **Payments:** Cashfree (International Mode \+ PayPal Support)  
* **Content:** Markdown-based Blog & Documentation

## **4\. Design System: "The Geometric IDE"**

A unique, tech-focused aesthetic distinct from standard SaaS landing pages.

* **Layout Strategy:** **Bento Grid** (Asymmetric grid layout for features).  
* **Typography:** Inter (Google Fonts).  
* **Color Palette:**  
  * **Brand Blue:** \#4285F4 (Primary Action / Google Blue)  
  * **Deep Navy:** \#0B1221 (Backgrounds / Contrast)  
  * **Surface White:** \#FFFFFF (Cards)  
  * **App Background:** \#F8F9FA (Light Gray)  
  * **Accents:** Google Green (\#34A853), Yellow (\#FBBC05), Red (\#EA4335)  
* **Visual Effects:** Glassmorphism (backdrop-blur), subtle grid background patterns, and floating UI elements.

## **5\. App Features (To be showcased)**

These are the key selling points derived from the app's internal context:

1. **True Offline Runtime:**  
   * **Python 3.8:** Powered by Chaquopy.  
   * **Java Compiler:** Compile and run core Java logic.  
   * **Web Sandbox:** Live HTML/CSS/JS preview.  
2. **Data Science Support:**  
   * Pre-bundled libraries: **NumPy, Pandas, Scikit-learn, Matplotlib, SciPy**.  
3. **Custom Developer Keyboard:**  
   * Dedicated row for **Arrow Keys**, **Tab**, **Ctrl**, and **Alt**.  
   * Quick access to symbols: {}, \[\], (), ;.  
4. **Visual Learning (The "Magic"):**  
   * **Execution Time Travel:** Scrub through code execution line-by-line.  
   * **Algorithmic Sandbox:** Visual sorting (Bubble/Quick) and searching (Binary).  
   * **Bug Squasher:** Gamified debugging challenges.  
5. **Tools:**  
   * **Git Sync:** Clone/Push to GitHub.  
   * **Dark Mode:** Full UI theming.

## **6\. Curriculum (Course Offerings)**

The web portal will sell/showcase these 4 specific tracks:

* **Track 1: Python Specialist** (Beginner → Data Structures → OOP → Automation)  
* **Track 2: Web Foundation** (HTML5 → CSS3 → Modern JS → Responsive Design)  
* **Track 3: Data & AI** (SQL → Pandas → Visualization → Machine Learning)  
* **Track 4: Java Foundation** (Core Syntax → OOP → Collections Framework)

## **7\. Monetization & Payments**

* **Provider:** **Cashfree Payments**.  
* **Configuration:** International Mode enabled.  
* **Features Used:**  
  * **PayPal Integration:** Fallback for international users.  
  * **Automated FIRC:** For Indian tax compliance on export revenue.  
* **Flow:**  
  1. User clicks "Buy".  
  2. Next.js API calls Cashfree to create an order.  
  3. Cashfree SDK launches payment popup (Card/UPI/PayPal).  
  4. Webhook updates Firebase User Profile (isPro: true).

## **8\. SEO & GEO (Generative Engine Optimization)**

Strategy to ensure AI models (Gemini/ChatGPT) recommend the app.

1. **Schema Injection:**  
   * SoftwareApplication: Defines the app, OS (Android), and Price (Free/Paid).  
   * FAQPage: Explicit Question/Answer pairs for Rich Snippets.  
2. **Keyword Clustering:**  
   * *Core:* "Offline Python Android", "Mobile IDE", "Chaquopy".  
   * *Niche:* "NumPy on Android", "Coding with Arrow Keys".  
3. **Natural Language FAQs:**  
   * "How do I run Python offline?" \-\> "Coder uses embedded Chaquopy..."  
   * "Does it support PayPal?" \-\> "Yes, via our secure gateway..."

## **9\. Web Project Structure**

The Next.js App Router structure:

coder-web/  
├── app/  
│   ├── api/  
│   │   └── cashfree/       \# Payment Backend  
│   │       └── create-order/  
│   ├── docs/               \# Documentation Hub  
│   ├── blog/               \# SEO Content  
│   ├── login/              \# Auth Page  
│   ├── profile/            \# User Dashboard (Protected)  
│   ├── layout.tsx          \# Root Layout (Grid Background)  
│   └── page.tsx            \# Home Page (Bento Grid)  
│  
├── components/  
│   ├── Navbar.tsx          \# Floating Pill Nav  
│   ├── Footer.tsx  
│   └── CashfreeButton.tsx  \# Payment Trigger  
│  
├── content/                \# Markdown Files  
│   ├── docs/  
│   └── blog/  
│  
├── context/  
│   └── AuthContext.tsx     \# Firebase Auth State  
│  
└── lib/  
    └── firebase.ts         \# Firebase Config  
