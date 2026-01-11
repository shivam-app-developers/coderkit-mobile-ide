import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';

const faqs = [
    // General
    {
        category: "General",
        question: "What is CoderKit?",
        answer: "CoderKit is a mobile IDE and learning platform that lets you write, compile, and run real code offline on your Android device. It includes 40+ structured courses, 20+ interactive visualizers, and supports Python, Java, Go, C, and web development."
    },
    {
        category: "General",
        question: "Is CoderKit free?",
        answer: "Yes! CoderKit is free to download with a generous free tier including the sandbox IDE and introductory lessons. Premium courses and advanced features are available via one-time purchases or subscription."
    },
    {
        category: "General",
        question: "Is there an iOS version?",
        answer: "CoderKit is currently available on Android only. iOS support is planned for the future. Join our newsletter to be notified when it launches."
    },
    // Offline & Technical
    {
        category: "Offline & Technical",
        question: "How does offline execution work?",
        answer: "CoderKit embeds real language runtimes directly in the app: Chaquopy for Python 3.10, ECJ for Java, Yaegi for Go, and TCC for C. Everything runs locally on your device - no internet required."
    },
    {
        category: "Offline & Technical",
        question: "Can I use NumPy, Pandas, Flask, Django?",
        answer: "Yes! Python comes pre-bundled with NumPy, Pandas, SciPy, Scikit-learn, Matplotlib, Flask, Django, Requests, BeautifulSoup, and 20+ other libraries. All work offline."
    },
    {
        category: "Offline & Technical",
        question: "Does it support interactive input?",
        answer: "Yes! You can use input() in Python, Scanner in Java, and fmt.Scanln() in Go. Build interactive CLI programs just like on a desktop."
    },
    {
        category: "Offline & Technical",
        question: "Can I build web pages on my phone?",
        answer: "Absolutely! Write HTML, CSS, and JavaScript with live preview. You can even use React and Vue.js with in-browser Babel compilation."
    },
    // Learning
    {
        category: "Learning",
        question: "What is Ghost Code practice?",
        answer: "Ghost Code shows faded target code that you type along character-by-character. It builds muscle memory and helps you internalize syntax faster than just reading or watching."
    },
    {
        category: "Learning",
        question: "What are the interactive visualizers?",
        answer: "Visualizers are animated, interactive tools that show how code works. Examples include Memory Manager (stack/heap), Execution Trace (step-by-step), Algorithm Sandbox (sorting/searching), SQL Visualizer, and more."
    },
    {
        category: "Learning",
        question: "How are courses structured?",
        answer: "Courses follow a spiral methodology: start with high-level concepts, then progressively dive deeper. Each concept uses our Explain → Visualize → Test loop to ensure understanding before moving on."
    },
    // IDE Features
    {
        category: "IDE Features",
        question: "Does the keyboard have arrow keys?",
        answer: "Yes! Our custom developer keyboard includes arrow keys, Tab, Ctrl modifier, and quick access to coding symbols like brackets, semicolons, and operators."
    },
    {
        category: "IDE Features",
        question: "Can I work on multi-file projects?",
        answer: "Yes! The workspace supports folders, multiple files, and asset management. Great for building real projects with HTML/CSS/JS or Python packages."
    },
    {
        category: "IDE Features",
        question: "Is there code formatting and linting?",
        answer: "Yes! Real-time linting catches errors as you type. Auto-formatting follows language standards (PEP8 for Python, gofmt for Go, etc.)."
    },
    // Purchasing
    {
        category: "Purchasing",
        question: "How do I buy a course?",
        answer: "Visit the Pricing page, select a course or subscription, and complete checkout with Cashfree. Purchases sync across devices when you log in with the same account."
    },
    {
        category: "Purchasing",
        question: "What payment methods are accepted?",
        answer: "We accept Credit/Debit cards (Visa, Mastercard, Amex), PayPal, UPI, and Netbanking. International payments in 140+ currencies are supported."
    },
    {
        category: "Purchasing",
        question: "Can I get a refund?",
        answer: "Yes, we offer a 7-day refund policy for courses. If you're not satisfied, contact support within 7 days of purchase for a full refund."
    },
    // Comparison
    {
        category: "Comparison",
        question: "How is CoderKit different from Pydroid?",
        answer: "Pydroid is a Python-only sandbox. CoderKit offers multiple languages (Python, Java, Go, C), structured courses, interactive visualizers, and Ghost Code practice - it's a complete learning platform."
    },
    {
        category: "Comparison",
        question: "Why not just use YouTube tutorials?",
        answer: "Watching doesn't equal learning. CoderKit makes you actively practice with Ghost Code, debug with Bug Squasher, and test your understanding with quizzes. Active learning beats passive watching."
    }
];

// Group FAQs by category
const faqsByCategory = faqs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
        acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
}, {} as Record<string, typeof faqs>);

export default function FAQPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <JsonLd data={faqSchema} />
            <Navbar />
            <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">

                <div className="text-center mb-16">
                    <h1 className="text-4xl font-black text-gray-900 mb-4">Frequently Asked Questions</h1>
                    <p className="text-xl text-gray-600">Everything you need to know about CoderKit</p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {Object.keys(faqsByCategory).map(category => (
                        <a
                            key={category}
                            href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                            className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-brand-primary hover:text-brand-primary transition"
                        >
                            {category}
                        </a>
                    ))}
                </div>

                {/* FAQ Sections */}
                {Object.entries(faqsByCategory).map(([category, categoryFaqs]) => (
                    <section key={category} id={category.toLowerCase().replace(/\s+/g, '-')} className="mb-12">
                        <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">{category}</h2>
                        <div className="space-y-4">
                            {categoryFaqs.map((faq, index) => (
                                <details key={index} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm group">
                                    <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                                        {faq.question}
                                        <i className="fa-solid fa-chevron-down text-gray-400 text-sm transition group-open:rotate-180"></i>
                                    </summary>
                                    <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
                                </details>
                            ))}
                        </div>
                    </section>
                ))}

                {/* Still have questions */}
                <div className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white rounded-2xl p-8 text-center mt-16">
                    <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
                    <p className="opacity-90 mb-6">We&apos;re here to help. Reach out to our support team.</p>
                    <Link href="mailto:support@shivamappstudio.com" className="inline-block bg-white text-brand-primary px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                        Contact Support
                    </Link>
                </div>

            </main>
            <Footer />
        </div>
    );
}
