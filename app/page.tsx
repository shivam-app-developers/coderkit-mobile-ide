import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/landing/HeroSection';
import HowItWorks from '@/components/landing/HowItWorks';
import CoursesSection from '@/components/landing/CoursesSection';
import VisualizersSection from '@/components/landing/VisualizersSection';
import SandboxSection from '@/components/landing/SandboxSection';
import VSCodeSection from '@/components/landing/VSCodeSection';
import ComparisonTable from '@/components/landing/ComparisonTable';
import FAQSection from '@/components/landing/FAQSection';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is CoderKit free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The app is free to download with basic lessons. Full courses and certificates require a premium subscription."
        }
      },
      {
        "@type": "Question",
        "name": "Does it work offline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, CoderKit includes a true offline compiler for Python, C, C++, and Java. You can code without an internet connection."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <JsonLd data={faqSchema} />
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <CoursesSection />
        <VisualizersSection />
        <SandboxSection />

        {/* OFFLINE */}
        <section className="py-16 bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Learn Anywhere. No WiFi Needed.</h2>
            <div className="flex flex-wrap justify-center gap-8 text-lg">✈️ On a plane &nbsp;&nbsp; 🚇 In the subway &nbsp;&nbsp; 🏕️ While camping &nbsp;&nbsp; ☕ At a café</div>
          </div>
        </section>

        <VSCodeSection />

        {/* OBJECTIONS */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Why Choose CoderKit?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-100">
                <p className="font-semibold text-gray-900 mb-2">&quot;Why not Pydroid?&quot;</p>
                <p className="text-sm text-gray-600">No visualizers. No courses. No practice mode.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100">
                <p className="font-semibold text-gray-900 mb-2">&quot;Why not YouTube?&quot;</p>
                <p className="text-sm text-gray-600">Watching ≠ Learning. CoderKit makes you practice.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100">
                <p className="font-semibold text-gray-900 mb-2">&quot;Why not my laptop?&quot;</p>
                <p className="text-sm text-gray-600">CoderKit is always in your pocket.</p>
              </div>
            </div>
          </div>
        </section>

        <ComparisonTable />
        <FAQSection />

        {/* CTA */}
        <section className="py-20 gradient-bg text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-lg opacity-90 mb-8">Download CoderKit and master coding today.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#" className="bg-white text-brand-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-100">
                <i className="fa-brands fa-google-play text-xl"></i> Get on Google Play
              </Link>
              <Link href="#" className="border-2 border-white/30 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/10">
                <i className="fa-brands fa-apple text-xl"></i> iOS Coming Soon
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
