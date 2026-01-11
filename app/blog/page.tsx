import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getAllPosts } from '@/lib/mdx';

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">

        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-gray-900 mb-4">CoderKit Blog</h1>
          <p className="text-xl text-gray-600">Insights on coding, education, and mobile development.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="h-48 bg-gray-200 w-full relative">
                {/* Placeholder for Image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100">
                  <i className="fa-regular fa-image text-4xl"></i>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                   <span className="text-xs font-bold text-brand-primary uppercase tracking-wider">{post.frontmatter.category}</span>
                   <span className="text-gray-400 text-xs">•</span>
                   <span className="text-xs text-gray-500">{post.frontmatter.date}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition">{post.frontmatter.title}</h2>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">{post.frontmatter.excerpt}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                  <span>Read more</span>
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </main>
      <Footer />
    </div>
  );
}
