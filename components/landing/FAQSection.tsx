export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="bg-white p-5 rounded-xl border border-gray-100">
            <summary className="font-semibold text-gray-900 cursor-pointer">How does offline execution work?</summary>
            <p className="mt-3 text-gray-600 text-sm">CoderKit embeds real runtimes (Chaquopy for Python, ECJ for Java, Yaegi for Go, TCC for C) directly in the app.</p>
          </details>
          <details className="bg-white p-5 rounded-xl border border-gray-100">
            <summary className="font-semibold text-gray-900 cursor-pointer">What is Ghost Code practice?</summary>
            <p className="mt-3 text-gray-600 text-sm">You see faded code and type along character-by-character. It builds muscle memory.</p>
          </details>
          <details className="bg-white p-5 rounded-xl border border-gray-100">
            <summary className="font-semibold text-gray-900 cursor-pointer">Can I use NumPy, Pandas, Flask?</summary>
            <p className="mt-3 text-gray-600 text-sm">Yes! Python comes pre-bundled with NumPy, Pandas, Matplotlib, Scikit-learn, Flask, Django, and 20+ libraries.</p>
          </details>
          <details className="bg-white p-5 rounded-xl border border-gray-100">
            <summary className="font-semibold text-gray-900 cursor-pointer">Does the keyboard have arrow keys?</summary>
            <p className="mt-3 text-gray-600 text-sm">Yes! Our custom developer keyboard includes arrow keys, Tab, Ctrl, and quick access to coding symbols.</p>
          </details>
          <details className="bg-white p-5 rounded-xl border border-gray-100">
            <summary className="font-semibold text-gray-900 cursor-pointer">Is CoderKit free?</summary>
            <p className="mt-3 text-gray-600 text-sm">Yes! CoderKit is free to download with a generous free tier. Premium courses available via subscription.</p>
          </details>
        </div>
      </div>
    </section>
  );
}
