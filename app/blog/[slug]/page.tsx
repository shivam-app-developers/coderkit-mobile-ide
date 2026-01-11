import { MDXRemote } from 'next-mdx-remote/rsc';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getPostBySlug } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/seo/JsonLd';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.frontmatter.title,
    "datePublished": post.frontmatter.date,
    "author": {
        "@type": "Person",
        "name": post.frontmatter.author
    },
    "articleBody": post.content.substring(0, 150) + "..."
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <JsonLd data={blogSchema} />
      <Navbar />
      <article className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full">

        <header className="mb-10 text-center">
           <div className="flex items-center justify-center gap-2 mb-4">
               <span className="px-3 py-1 bg-indigo-50 text-brand-primary text-xs font-bold rounded-full uppercase tracking-wider">{post.frontmatter.category}</span>
               <span className="text-gray-400 text-sm">•</span>
               <span className="text-gray-500 text-sm">{post.frontmatter.date}</span>
           </div>
           <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">{post.frontmatter.title}</h1>
           <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="text-left">
                 <p className="text-sm font-bold text-gray-900">{post.frontmatter.author}</p>
                 <p className="text-xs text-gray-500">Author</p>
              </div>
           </div>
        </header>

        <div className="prose prose-lg prose-indigo mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
           <MDXRemote source={post.content} />
        </div>

      </article>
      <Footer />
    </div>
  );
}
