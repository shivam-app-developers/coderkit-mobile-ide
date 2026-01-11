export default function VSCodeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full mb-4">VS Code Extension</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Continue on <span className="gradient-text">Desktop</span></h2>
            <p className="text-gray-600 mb-6">Start a course on your phone. Continue on VS Code. Progress syncs automatically.</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-700"><i className="fa-solid fa-check-circle text-green-500"></i> Progress syncs instantly</li>
              <li className="flex items-center gap-2 text-gray-700"><i className="fa-solid fa-check-circle text-green-500"></i> Ghost Code practice in IDE</li>
              <li className="flex items-center gap-2 text-gray-700"><i className="fa-solid fa-check-circle text-green-500"></i> Bug Squasher challenges</li>
            </ul>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 shadow-xl">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div><span className="ml-2 text-gray-500 text-xs">VS Code</span>
            </div>
            <div className="flex gap-4">
              <div className="w-48 bg-gray-800 rounded-lg p-3 text-xs">
                <p className="text-indigo-400 font-semibold mb-2"><i className="fa-solid fa-graduation-cap mr-1"></i> CoderKit</p>
                <div className="bg-indigo-500/20 p-1.5 rounded text-indigo-300">Python - 80%</div>
              </div>
              <div className="flex-1 bg-gray-800 rounded-lg p-3 font-mono text-xs text-gray-400">
                <div className="text-gray-600"># Practice</div>
                <div><span className="text-purple-400">def</span> sort(arr):</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
