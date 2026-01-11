export default function VisualizersSection() {
  return (
    <section id="visualizers" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">20+ <span className="gradient-text">Interactive Visualizers</span></h2>
          <p className="text-gray-600 text-lg">See how code really works. Not just read about it.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100">
            <i className="fa-solid fa-clock-rotate-left text-2xl text-purple-600 mb-3"></i>
            <h4 className="font-bold text-gray-900 mb-2">Time Travel</h4>
            <p className="text-sm text-gray-600">Step through code line-by-line. Rewind. See variable changes.</p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
            <i className="fa-solid fa-chart-bar text-2xl text-blue-600 mb-3"></i>
            <h4 className="font-bold text-gray-900 mb-2">Algorithm Sandbox</h4>
            <p className="text-sm text-gray-600">Visualize sorting, searching, BFS, DFS, Dijkstra.</p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-red-50 to-pink-50 border border-red-100">
            <i className="fa-solid fa-bug-slash text-2xl text-red-600 mb-3"></i>
            <h4 className="font-bold text-gray-900 mb-2">Bug Squasher</h4>
            <p className="text-sm text-gray-600">Gamified debugging. Find bugs, earn points.</p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
            <i className="fa-solid fa-ghost text-2xl text-emerald-600 mb-3"></i>
            <h4 className="font-bold text-gray-900 mb-2">Ghost Code™</h4>
            <p className="text-sm text-gray-600">Type-along practice. Build muscle memory.</p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
            <i className="fa-solid fa-memory text-2xl text-amber-600 mb-3"></i>
            <h4 className="font-bold text-gray-900 mb-2">Memory Manager</h4>
            <p className="text-sm text-gray-600">Visualize Stack vs Heap, pointers, allocation.</p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100">
            <i className="fa-solid fa-database text-2xl text-violet-600 mb-3"></i>
            <h4 className="font-bold text-gray-900 mb-2">SQL Visualizer</h4>
            <p className="text-sm text-gray-600">Watch tables transform with JOINs and queries.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
