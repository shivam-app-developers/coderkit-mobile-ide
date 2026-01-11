import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CheckoutButton } from '@/components/payment/CheckoutButton';
import coursesMetadata from '@/codelab_docs/courses_metadata.json';
import JsonLd from '@/components/seo/JsonLd';

// Simplify type for this demo, usually defined in a types file
interface Course {
  id: string;
  title: string;
  track: string;
  level: string;
  icon: string;
}

// Group courses by track
const coursesByTrack = (coursesMetadata as Course[]).reduce((acc, course) => {
  if (!acc[course.track]) {
    acc[course.track] = [];
  }
  acc[course.track].push(course);
  return acc;
}, {} as Record<string, Course[]>);

export default function PricingPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "CoderKit Premium Subscription",
    "description": "Access to all interactive coding courses, visualizers, and offline runtimes.",
    "brand": {
      "@type": "Brand",
      "name": "CoderKit"
    },
    "offers": {
      "@type": "Offer",
      "price": "4.99",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <JsonLd data={productSchema} />
      <Navbar />
      <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">

        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-gray-900 mb-4">Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Pay per course or subscribe for workspaces. Lifetime access to purchased content.</p>
        </div>

        {/* Subscriptions */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Web Workspace */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition">
             <h3 className="text-lg font-bold text-gray-900 mb-2">Web Workspace</h3>
             <div className="text-3xl font-black text-brand-primary mb-4">$1.99<span className="text-sm font-medium text-gray-500">/mo</span></div>
             <p className="text-sm text-gray-600 mb-6">Perfect for HTML/CSS/JS learners.</p>
             <ul className="space-y-3 mb-8 text-sm text-gray-700">
               <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Unlimited Web Projects</li>
               <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Cloud Sync</li>
             </ul>
             <button className="w-full py-2 border-2 border-brand-primary text-brand-primary font-bold rounded-lg hover:bg-brand-primary hover:text-white transition">Subscribe</button>
          </div>

           {/* Full Stack Pro */}
           <div className="bg-brand-dark rounded-2xl p-8 border border-gray-700 shadow-xl transform scale-105 relative">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Best Value</div>
             <h3 className="text-lg font-bold text-white mb-2">Full Stack Pro</h3>
             <div className="text-3xl font-black text-white mb-4">$4.99<span className="text-sm font-medium text-gray-400">/mo</span></div>
             <p className="text-sm text-gray-400 mb-6">Everything you need to go pro.</p>
             <ul className="space-y-3 mb-8 text-sm text-gray-300">
               <li><i className="fa-solid fa-check text-brand-accent mr-2"></i> All Workspaces</li>
               <li><i className="fa-solid fa-check text-brand-accent mr-2"></i> Advanced Visualizers</li>
               <li><i className="fa-solid fa-check text-brand-accent mr-2"></i> Priority Support</li>
             </ul>
             <button className="w-full py-2 bg-brand-primary text-white font-bold rounded-lg hover:bg-opacity-90 transition">Start Free Trial</button>
          </div>

          {/* Enterprise */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition">
             <h3 className="text-lg font-bold text-gray-900 mb-2">Lifetime Power Pack</h3>
             <div className="text-3xl font-black text-brand-secondary mb-4">$79.99<span className="text-sm font-medium text-gray-500">/once</span></div>
             <p className="text-sm text-gray-600 mb-6">One-time payment for everything.</p>
             <ul className="space-y-3 mb-8 text-sm text-gray-700">
               <li><i className="fa-solid fa-check text-green-500 mr-2"></i> All Future Courses</li>
               <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Forever Access</li>
             </ul>
             <button className="w-full py-2 border-2 border-brand-secondary text-brand-secondary font-bold rounded-lg hover:bg-brand-secondary hover:text-white transition">Get Lifetime</button>
          </div>
        </div>

        {/* Individual Courses */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">Individual Courses</h2>

        {Object.entries(coursesByTrack).map(([trackName, courses]) => (
          <div key={trackName} className="mb-12">
            <h3 className="text-xl font-bold text-gray-800 mb-6">{trackName}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map(course => {
                // Determine price based on level (simplified logic from pricing guide)
                let price = 5.99;
                if (course.level.includes("Intermediate")) price = 9.99;
                if (course.level.includes("Advanced")) price = 14.99;
                if (course.level.includes("Professional") || course.level.includes("Expert")) price = 19.99;

                return (
                  <div key={course.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{course.icon}</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">{course.level}</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{course.title}</h4>
                    <p className="text-sm text-gray-500 mb-4 flex-grow">Master {course.title} with interactive lessons.</p>
                    <div className="pt-4 border-t border-gray-50 mt-auto">
                       <CheckoutButton courseId={course.id} price={price} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

      </main>
      <Footer />
    </div>
  );
}
