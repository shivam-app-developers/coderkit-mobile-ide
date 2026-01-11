import { MDXRemote } from 'next-mdx-remote/rsc';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DocsSidebar from '@/components/docs/DocsSidebar';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';

export default async function DocPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const slugPath = slug.join('/');
  const fullPath = path.join(process.cwd(), 'content/docs', `${slugPath}.mdx`);

  if (!fs.existsSync(fullPath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex gap-12">

        <DocsSidebar />

        <article className="flex-1 min-w-0">
           <header className="mb-8 border-b border-gray-100 pb-8">
              <p className="text-sm font-semibold text-brand-primary mb-2">{data.section}</p>
              <h1 className="text-3xl font-black text-gray-900 mb-4">{data.title}</h1>
              <p className="text-xl text-gray-600">{data.description}</p>
           </header>

           <div className="prose prose-indigo max-w-none bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
             <MDXRemote source={content} />
           </div>
        </article>

      </div>
      <Footer />
    </div>
  );
}
