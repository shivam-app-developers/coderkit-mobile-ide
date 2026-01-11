import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function StatsExplainedPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full prose prose-indigo">

        <h1 className="text-4xl font-black text-gray-900 mb-8">Understanding Your CoderKit Profile</h1>
        <p className="text-xl text-gray-600 mb-12">Your CoderKit profile showcases <strong>verified coding activity</strong> — not just courses completed, but real skills demonstrated through practice and problem-solving.</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🏆 Learning Stats</h2>
          <p className="text-gray-600 mb-6">These metrics track your educational progress and time invested.</p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-lg text-brand-primary mb-2">Courses</h3>
              <p className="text-gray-700"><strong>What it measures:</strong> Complete learning paths finished on CoderKit.</p>
              <p className="text-gray-600 text-sm mt-2">Each course contains multiple modules with interactive lessons, coding exercises, and assessments. Completing a course means you&apos;ve mastered all concepts within that track.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-lg text-brand-secondary mb-2">XP (Experience Points)</h3>
              <p className="text-gray-700"><strong>What it measures:</strong> Cumulative learning activity across all interactions.</p>
              <ul className="list-disc list-inside text-gray-600 text-sm mt-2 space-y-1">
                <li>Completing lessons</li>
                <li>Solving challenges</li>
                <li>Maintaining streaks</li>
                <li>Achieving milestones</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-lg text-brand-accent mb-2">Lines Typed</h3>
              <p className="text-gray-700"><strong>What it measures:</strong> Total lines of code you&apos;ve written in the editor.</p>
              <p className="text-gray-600 text-sm mt-2"><strong>Why it matters:</strong> This stat only counts code typed through CoderKit&apos;s custom keyboard — not pasted text. It represents genuine coding practice, building muscle memory and syntax familiarity.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🔧 Problem Solving Stats</h2>
          <p className="text-gray-600 mb-6">These metrics demonstrate your debugging and code improvement abilities — the skills recruiters value most.</p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-lg text-red-500 mb-2">Bug Squasher</h3>
              <p className="text-gray-700"><strong>What it measures:</strong> Debugging challenges completed.</p>
              <p className="text-gray-600 text-sm mt-2">In Bug Squasher challenges, you&apos;re given broken code and must identify and fix the errors to make it run correctly. This directly mirrors real-world debugging scenarios.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-lg text-purple-500 mb-2">Code Refactor</h3>
              <p className="text-gray-700"><strong>What it measures:</strong> Code improvement challenges completed.</p>
              <p className="text-gray-600 text-sm mt-2">Code Refactor challenges present inefficient or poorly-structured code. Your task is to rewrite it following best practices — improving readability, performance, or maintainability.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-lg text-orange-500 mb-2">Errors Fixed</h3>
              <p className="text-gray-700"><strong>What it measures:</strong> Total syntax and runtime errors you&apos;ve resolved in the IDE.</p>
              <p className="text-gray-600 text-sm mt-2">Every time you write code with errors and then correct them, the system tracks it. This shows your ability to identify and resolve issues independently — a critical developer skill.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🔥 Consistency Stats</h2>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-6">
            <h3 className="font-bold text-lg text-orange-600 mb-2">Streak</h3>
            <p className="text-gray-700"><strong>What it measures:</strong> Consecutive days of coding activity.</p>
            <p className="text-gray-600 text-sm mt-2"><strong>Why recruiters care:</strong> A long streak shows discipline and commitment — qualities that translate directly to workplace reliability.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">✓ Verified & Authentic</h2>
          <div className="bg-green-50 p-6 rounded-xl border border-green-100">
             <h3 className="font-bold text-lg text-green-800 mb-3">How We Ensure Authenticity</h3>
             <p className="text-green-800 mb-4">Your CoderKit stats are <strong>verified</strong> — meaning they reflect genuine coding activity.</p>
             <ul className="list-disc list-inside text-green-700 text-sm space-y-2">
               <li><strong>Custom Keyboard Only:</strong> In challenges, code must be typed through our custom keyboard.</li>
               <li><strong>Activity Tracking:</strong> We track when and how code is written, not just the final result.</li>
               <li><strong>First-Try Tracking:</strong> Your initial attempt is recorded, preventing brute-force solutions.</li>
             </ul>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
