export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How <span className="gradient-text">CoderKit Works</span></h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">A proven 3-step approach that turns beginners into confident developers.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl border border-purple-100 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-600 text-white flex items-center justify-center text-2xl font-bold">1</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">📖 Learn</h3>
            <p className="text-gray-600 text-sm">Learn with <strong>20+ interactive visualizers</strong> - Algorithm Sandbox, Memory Manager, SQL Visualizer, Graph Visualizer and more. See exactly how code executes.</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-2xl font-bold">2</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">✍️ Practice</h3>
            <p className="text-gray-600 text-sm">Write and compile code with <strong>real offline runtimes</strong> - just like desktop. <strong>Ghost Code™</strong> type-along builds muscle memory.</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-100 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-500 text-white flex items-center justify-center text-2xl font-bold">3</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">🧪 Test</h3>
            <p className="text-gray-600 text-sm"><strong>Bug Squasher</strong>, <strong>Code Scramble</strong>, and <strong>Code Refactor</strong> challenges. Find bugs, reorder code, improve structure.</p>
          </div>
        </div>
        <div className="text-center">
          <p className="inline-flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-full text-gray-700 font-medium">
            <i className="fa-solid fa-arrow-right text-brand-primary"></i> Then <strong>BUILD</strong> real projects with our offline sandbox
          </p>
        </div>
      </div>
    </section>
  );
}
