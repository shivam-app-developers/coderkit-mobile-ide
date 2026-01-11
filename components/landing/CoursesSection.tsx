export default function CoursesSection() {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">40+ Courses Across <span className="gradient-text">12 Tracks</span></h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">From &quot;Hello World&quot; to job-ready. Powered by the Rhombus Methodology.</p>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <i className="fa-solid fa-globe text-brand-primary"></i> Universal Tracks <span className="text-sm font-normal text-gray-500">(Mobile + VS Code)</span>
        </h3>
        <p className="text-gray-500 text-sm mb-6">Available on both mobile app and VS Code extension. Learn anywhere, continue on desktop.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* PYTHON */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm card-hover">
            <div className="h-2 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg shadow-yellow-200/50">
                    <i className="fa-brands fa-python text-white text-xl"></i>
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 text-lg">Python</span>
                    <span className="block text-xs text-gray-500">Developer Track</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">6 Courses</span>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-sm"><span className="w-7 h-7 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">101</span><span className="text-gray-700">Syntax & Logic</span><span className="ml-auto text-xs text-green-600">Beginner</span></div>
                <div className="flex items-center gap-2 text-sm"><span className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">201</span><span className="text-gray-700">Data Structures</span><span className="ml-auto text-xs text-blue-600">Intermediate</span></div>
                <div className="flex items-center gap-2 text-sm"><span className="w-7 h-7 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold">301</span><span className="text-gray-700">NumPy & Pandas</span><span className="ml-auto text-xs text-purple-600">Advanced</span></div>
                <div className="flex items-center gap-2 text-sm"><span className="w-7 h-7 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold">302</span><span className="text-gray-700">Machine Learning</span><span className="ml-auto text-xs text-purple-600">Advanced</span></div>
                <div className="flex items-center gap-2 text-sm"><span className="w-7 h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">401</span><span className="text-gray-700">Flask Backend</span><span className="ml-auto text-xs text-red-600">Pro</span></div>
                <div className="flex items-center gap-2 text-sm"><span className="w-7 h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">402</span><span className="text-gray-700">Django Enterprise</span><span className="ml-auto text-xs text-red-600">Expert</span></div>
              </div>
              <div className="pt-4 mt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 flex items-center gap-1"><i className="fa-solid fa-graduation-cap text-yellow-500"></i> From scripting to AI & Enterprise Web</p>
              </div>
            </div>
          </div>

          {/* JAVA */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm card-hover">
            <div className="h-2 bg-gradient-to-r from-red-500 to-rose-600"></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-lg shadow-red-200/50">
                    <i className="fa-brands fa-java text-white text-xl"></i>
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 text-lg">Java</span>
                    <span className="block text-xs text-gray-500">Enterprise Developer</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">3 Courses</span>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-sm"><span className="w-7 h-7 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">101</span><span className="text-gray-700">Java Foundations</span><span className="ml-auto text-xs text-green-600">Beginner</span></div>
                <div className="flex items-center gap-2 text-sm"><span className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">201</span><span className="text-gray-700">Collections & OOP</span><span className="ml-auto text-xs text-blue-600">Intermediate</span></div>
                <div className="flex items-center gap-2 text-sm"><span className="w-7 h-7 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold">301</span><span className="text-gray-700">Web & Networking</span><span className="ml-auto text-xs text-purple-600">Advanced</span></div>
              </div>
              <div className="pt-4 mt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 flex items-center gap-1"><i className="fa-solid fa-building text-red-500"></i> Build robust enterprise software</p>
              </div>
            </div>
          </div>

          {/* WEB */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm card-hover">
            <div className="h-2 bg-gradient-to-r from-orange-500 to-pink-500"></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shadow-lg shadow-orange-200/50">
                    <i className="fa-brands fa-html5 text-white text-xl"></i>
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 text-lg">Web</span>
                    <span className="block text-xs text-gray-500">Full Stack Developer</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full">4 Courses</span>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-sm"><span className="w-7 h-7 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">101</span><span className="text-gray-700">HTML & CSS</span><span className="ml-auto text-xs text-green-600">Beginner</span></div>
                <div className="flex items-center gap-2 text-sm"><span className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">201</span><span className="text-gray-700">JavaScript</span><span className="ml-auto text-xs text-blue-600">Intermediate</span></div>
                <div className="flex items-center gap-2 text-sm"><span className="w-7 h-7 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold">301</span><span className="text-gray-700">React</span><span className="ml-auto text-xs text-purple-600">Advanced</span></div>
                <div className="flex items-center gap-2 text-sm"><span className="w-7 h-7 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold">302</span><span className="text-gray-700">Vue.js</span><span className="ml-auto text-xs text-purple-600">Advanced</span></div>
              </div>
              <div className="pt-4 mt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 flex items-center gap-1"><i className="fa-solid fa-globe text-orange-500"></i> Build the visible internet</p>
              </div>
            </div>
          </div>

          {/* GO */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm card-hover">
            <div className="h-2 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-200/50">
                    <i className="fa-brands fa-golang text-white text-xl"></i>
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 text-lg">Go</span>
                    <span className="block text-xs text-gray-500">Systems Engineer</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-cyan-100 text-cyan-700 text-xs font-bold rounded-full">3 Courses</span>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-sm"><span className="w-7 h-7 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">101</span><span className="text-gray-700">Go Fundamentals</span><span className="ml-auto text-xs text-green-600">Beginner</span></div>
                <div className="flex items-center gap-2 text-sm"><span className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">201</span><span className="text-gray-700">Structs & Interfaces</span><span className="ml-auto text-xs text-blue-600">Intermediate</span></div>
                <div className="flex items-center gap-2 text-sm"><span className="w-7 h-7 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold">301</span><span className="text-gray-700">Concurrency</span><span className="ml-auto text-xs text-purple-600">Advanced</span></div>
              </div>
              <div className="pt-4 mt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 flex items-center gap-1"><i className="fa-solid fa-cloud text-cyan-500"></i> Fast software for the cloud</p>
              </div>
            </div>
          </div>
        </div>

        {/* More Tracks Row 2 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* SQL */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm card-hover">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-200/50">
                    <i className="fa-solid fa-database text-white text-lg"></i>
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 text-lg">SQL</span>
                    <span className="block text-xs text-gray-500">Data Engineer</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">1 Course</span>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-sm"><span className="w-7 h-7 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">101</span><span className="text-gray-700">SQL Mastery</span><span className="ml-auto text-xs text-green-600">All Levels</span></div>
              </div>
              <div className="pt-4 mt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 flex items-center gap-1"><i className="fa-solid fa-table text-blue-500"></i> Schema, Joins, Queries</p>
              </div>
            </div>
          </div>

          {/* C Language */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm card-hover">
            <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-800"></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg shadow-blue-200/50">
                    <span className="text-white font-bold text-lg">C</span>
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 text-lg">C</span>
                    <span className="block text-xs text-gray-500">Systems Programming</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">1 Course</span>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-sm"><span className="w-7 h-7 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">101</span><span className="text-gray-700">C Fundamentals</span><span className="ml-auto text-xs text-green-600">Beginner</span></div>
              </div>
              <div className="pt-4 mt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 flex items-center gap-1"><i className="fa-solid fa-microchip text-blue-600"></i> Low-level power</p>
              </div>
            </div>
          </div>

          {/* Groovy */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm card-hover">
            <div className="h-2 bg-gradient-to-r from-teal-500 to-emerald-500"></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-teal-200/50">
                    <span className="text-white font-bold">G</span>
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 text-lg">Groovy</span>
                    <span className="block text-xs text-gray-500">Automation</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-teal-100 text-teal-700 text-xs font-bold rounded-full">2 Courses</span>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-sm"><span className="w-7 h-7 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">101</span><span className="text-gray-700">Groovy Basics</span><span className="ml-auto text-xs text-green-600">Beginner</span></div>
                <div className="flex items-center gap-2 text-sm"><span className="w-7 h-7 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold">201</span><span className="text-gray-700">DSLs</span><span className="ml-auto text-xs text-purple-600">Advanced</span></div>
              </div>
              <div className="pt-4 mt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 flex items-center gap-1"><i className="fa-solid fa-wand-magic-sparkles text-teal-500"></i> Automate boring tasks</p>
              </div>
            </div>
          </div>

          {/* Clojure */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm card-hover">
            <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-200/50">
                    <i className="fa-solid fa-infinity text-white text-lg"></i>
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 text-lg">Clojure</span>
                    <span className="block text-xs text-gray-500">Functional Thinking</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full">2 Courses</span>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-sm"><span className="w-7 h-7 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">101</span><span className="text-gray-700">Functional Foundations</span><span className="ml-auto text-xs text-green-600">Beginner</span></div>
                <div className="flex items-center gap-2 text-sm"><span className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">201</span><span className="text-gray-700">Recursion & Logic</span><span className="ml-auto text-xs text-blue-600">Intermediate</span></div>
              </div>
              <div className="pt-4 mt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 flex items-center gap-1"><i className="fa-solid fa-brain text-indigo-500"></i> Think differently</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Tracks */}
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2"><i className="fa-solid fa-laptop-code text-brand-secondary"></i> Desktop Tracks (VS Code Extension)</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="bg-gray-100 rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-gray-300 flex items-center justify-center"><i className="fa-solid fa-c text-gray-600"></i></div>
              <span className="font-bold text-gray-700">C++ (5)</span>
            </div>
            <p className="text-xs text-gray-500">Game Engines, STL</p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-gray-300 flex items-center justify-center"><i className="fa-brands fa-microsoft text-gray-600"></i></div>
              <span className="font-bold text-gray-700">C# .NET (5)</span>
            </div>
            <p className="text-xs text-gray-500">ASP.NET, LINQ</p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-gray-300 flex items-center justify-center"><i className="fa-solid fa-leaf text-gray-600"></i></div>
              <span className="font-bold text-gray-700">Spring Boot</span>
            </div>
            <p className="text-xs text-gray-500">Java Enterprise</p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-gray-300 flex items-center justify-center"><i className="fa-brands fa-node-js text-gray-600"></i></div>
              <span className="font-bold text-gray-700">MERN Stack</span>
            </div>
            <p className="text-xs text-gray-500">Full Stack JS</p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-gray-300 flex items-center justify-center"><span className="font-bold text-gray-600">K</span></div>
              <span className="font-bold text-gray-700">Kotlin (3)</span>
            </div>
            <p className="text-xs text-gray-500">Essentials, OOP, Ktor</p>
          </div>
        </div>
      </div>
    </section>
  );
}
