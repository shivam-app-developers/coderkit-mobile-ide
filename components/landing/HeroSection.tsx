import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-brand-primary font-semibold text-sm mb-3">📱 Available on Android • iOS Coming Soon</p>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-6">
            Learn Coding.<br /><span className="gradient-text">Practice Smart.</span><br />Build Real.
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Master Python, Java, Go, C with <strong>interactive visualizers</strong>, <strong>ghost-code practice</strong>, and <strong>real offline runtimes</strong>. From absolute beginner to job-ready.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#" className="gradient-bg text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:opacity-90">
              <i className="fa-brands fa-google-play"></i> Start Learning Free
            </Link>
            <a href="#courses" className="border-2 border-gray-200 px-6 py-3 rounded-xl font-semibold text-gray-700 hover:border-brand-primary hover:text-brand-primary transition">
              Browse 40+ Courses
            </a>
          </div>
        </div>
        <div className="relative flex justify-center">
          {/* Floating language badges */}
          <div className="absolute -top-4 -left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-float">
            🐍 Python
          </div>
          <div className="absolute top-20 -right-8 bg-cyan-400 text-cyan-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-float-delayed">
            🔷 Go
          </div>
          <div className="absolute bottom-32 -left-6 bg-red-400 text-red-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-float">
            ☕ Java
          </div>
          <div className="absolute bottom-10 -right-4 bg-blue-400 text-blue-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-float-delayed">
            ⚙️ C
          </div>

          <div className="w-64 h-[450px] bg-brand-dark rounded-[2.5rem] border-4 border-gray-700 p-4 shadow-2xl">
            <div className="bg-gray-800 rounded-2xl h-full p-4 flex flex-col justify-center items-center">
              <div className="w-full bg-gray-700 rounded-lg p-3 font-mono text-xs text-green-400 mb-4">
                <div className="text-gray-500"># Ghost Code Practice</div>
                <div><span className="text-purple-400">def</span> <span className="text-yellow-400">sort</span>(arr):</div>
                <div className="text-gray-600 opacity-50"> for i in range...</div>
              </div>
              <p className="text-gray-400 text-sm">App Preview</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
