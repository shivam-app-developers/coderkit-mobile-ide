import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 gradient-bg rounded-lg flex items-center justify-center text-white font-bold text-sm">
            &lt;/&gt;
          </div>
          <span className="font-bold text-lg text-gray-900">CoderKit</span>
        </Link>
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#how-it-works" className="text-gray-600 hover:text-brand-primary">How It Works</a>
          <a href="#courses" className="text-gray-600 hover:text-brand-primary">Courses</a>
          <a href="#visualizers" className="text-gray-600 hover:text-brand-primary">Visualizers</a>
          <a href="#sandbox" className="text-gray-600 hover:text-brand-primary">Sandbox</a>
          <a href="#faq" className="text-gray-600 hover:text-brand-primary">FAQ</a>
        </div>
        <Link href="#" className="gradient-bg text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90">
          Get App
        </Link>
      </div>
    </nav>
  );
}
