import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center text-white text-sm font-bold">
                &lt;/&gt;
              </div>
              <span className="font-bold text-white">CoderKit</span>
            </div>
            <p className="text-sm">Learn. Practice. Build.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Product</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#courses" className="hover:text-white">Courses</a></li>
              <li><a href="#visualizers" className="hover:text-white">Visualizers</a></li>
              <li><a href="#sandbox" className="hover:text-white">Sandbox</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Resources</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/docs" className="hover:text-white">Docs</Link></li>
              <li><Link href="#" className="hover:text-white">Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Connect</h4>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-primary">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-primary">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <p className="text-xs mt-3">Made with ❤️ by<br /><a href="#" className="text-brand-accent">Shivam App Studio</a></p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2025 Shivam App Studio</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">Privacy</Link>
            <Link href="#" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
