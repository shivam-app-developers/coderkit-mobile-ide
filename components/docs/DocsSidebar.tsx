'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const docSections = [
  {
    title: "User Guides",
    items: [
      { title: "Getting Started", href: "/docs/user-guides/getting-started" },
      { title: "Features Overview", href: "/docs/user-guides/features-overview" },
      { title: "IDE Guide", href: "/docs/user-guides/ide-guide" },
      { title: "Learn Mode Guide", href: "/docs/user-guides/learn-mode-guide" },
      { title: "Supported Languages", href: "/docs/user-guides/supported-languages" },
      { title: "FAQ", href: "/docs/user-guides/faq" },
    ]
  },
  {
    title: "Product",
    items: [
      { title: "Product Overview", href: "/docs/product/product-overview" },
      { title: "Why CoderKit", href: "/docs/product/why-codelab" },
      { title: "Education Guide", href: "/docs/product/education-guide" },
      { title: "Success Stories", href: "/docs/product/success-stories" },
    ]
  },
  {
    title: "Marketing",
    items: [
      { title: "Landing Page Hero", href: "/docs/marketing/landing-page-hero" },
      { title: "Pricing Page", href: "/docs/marketing/pricing-page" },
      { title: "Social Media Snippets", href: "/docs/marketing/social-media-snippets" },
    ]
  },
];

export default function DocsSidebar() {
  const pathname = usePathname();

  return (
    <nav className="w-64 flex-shrink-0 border-r border-gray-100 pr-8 hidden lg:block h-[calc(100vh-8rem)] sticky top-28 overflow-y-auto">
      {docSections.map((section, idx) => (
        <div key={idx} className="mb-8">
          <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">{section.title}</h3>
          <ul className="space-y-2">
            {section.items.map((item, i) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <li key={i}>
                  <Link
                    href={item.href}
                    className={`block text-sm py-1 border-l-2 pl-3 transition ${isActive
                        ? 'border-brand-primary text-brand-primary font-medium'
                        : 'border-transparent text-gray-600 hover:text-brand-primary hover:border-brand-primary'
                      }`}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
