export default function SandboxSection() {
  return (
    <section id="sandbox" className="py-20 bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Build with Real <span className="text-brand-accent">Offline Runtimes</span></h2>
            <p className="text-gray-400 text-lg mb-8">No cloud compilers. No internet required. Desktop-class runtimes in your pocket.</p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center"><i className="fa-brands fa-python text-yellow-400"></i></div><span className="text-sm">Python 3.10</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center"><i className="fa-brands fa-java text-red-400"></i></div><span className="text-sm">Java</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center"><i className="fa-brands fa-golang text-cyan-400"></i></div><span className="text-sm">Go</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center"><i className="fa-solid fa-c text-blue-400"></i></div><span className="text-sm">C</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center"><i className="fa-brands fa-html5 text-orange-400"></i></div><span className="text-sm">Web</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center"><i className="fa-solid fa-database text-emerald-400"></i></div><span className="text-sm">SQL</span>
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 inline-flex items-center gap-3">
              <i className="fa-solid fa-keyboard text-brand-accent text-xl"></i>
              <span className="text-sm"><strong>Developer Keyboard</strong> - Arrow keys, Tab, and coding symbols</span>
            </div>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="font-mono text-sm space-y-1">
              <div><span className="text-gray-500">$</span> python app.py</div>
              <div className="text-purple-400">from flask import Flask</div>
              <div className="text-gray-400">app = Flask(__name__)</div>
              <div className="text-green-400 mt-2">{`>>> Server running ✓`}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
