import Link from 'next/link';

export default function FAQSection() {
  const faqs = [
    {
      question: "How does offline execution work?",
      answer: "CoderKit embeds real runtimes (Chaquopy for Python, ECJ for Java, Yaegi for Go, TCC for C) directly in the app. No internet required."
    },
    {
      question: "Can I use NumPy, Pandas, Flask, Django?",
      answer: "Yes! Python comes pre-bundled with NumPy, Pandas, Matplotlib, Scikit-learn, Flask, Django, and 20+ libraries."
    },
    {
      question: "What is Ghost Code practice?",
      answer: "You see faded code and type along character-by-character. It builds muscle memory faster than passive learning."
    },
    {
      question: "Does the keyboard have arrow keys?",
      answer: "Yes! Our custom developer keyboard includes arrow keys, Tab, Ctrl, and quick access to coding symbols."
    },
    {
      question: "Is CoderKit free?",
      answer: "Yes! CoderKit is free to download with a generous free tier. Premium courses available via subscription."
    },
    {
      question: "How is it different from Pydroid?",
      answer: "Pydroid is Python-only. CoderKit offers multiple languages, structured courses, 20+ visualizers, and Ghost Code practice."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <Link href="/faq" className="text-brand-primary font-medium hover:underline flex items-center gap-2">
            View all <i className="fa-solid fa-arrow-right text-sm"></i>
          </Link>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-white p-5 rounded-xl border border-gray-100">
              <summary className="font-semibold text-gray-900 cursor-pointer">{faq.question}</summary>
              <p className="mt-3 text-gray-600 text-sm">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
