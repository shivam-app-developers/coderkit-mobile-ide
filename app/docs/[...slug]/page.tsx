import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DocsSidebar from '@/components/docs/DocsSidebar';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

// Define the documentation folders
const docsFolders = ['user-guides', 'product', 'marketing'];

function getAllDocSlugs(): { slug: string[]; folder: string }[] {
  const slugs: { slug: string[]; folder: string }[] = [];

  for (const folder of docsFolders) {
    const folderPath = path.join(process.cwd(), 'content', folder);
    if (!fs.existsSync(folderPath)) continue;

    const files = fs.readdirSync(folderPath);
    for (const file of files) {
      if (file.endsWith('.md') || file.endsWith('.mdx')) {
        const slug = file.replace(/\.(md|mdx)$/, '');
        slugs.push({ slug: [folder, slug], folder });
      }
    }
  }

  return slugs;
}

function getDocBySlug(slugPath: string): { content: string; data: Record<string, unknown>; folder: string } | null {
  // slugPath format: "user-guides/getting-started" or "product/product-overview"
  const parts = slugPath.split('/');

  if (parts.length < 2) {
    // If single slug, search in all folders
    for (const folder of docsFolders) {
      const mdxPath = path.join(process.cwd(), 'content', folder, `${parts[0]}.mdx`);
      const mdPath = path.join(process.cwd(), 'content', folder, `${parts[0]}.md`);

      if (fs.existsSync(mdxPath)) {
        const fileContents = fs.readFileSync(mdxPath, 'utf8');
        const { content, data } = matter(fileContents);
        return { content, data, folder };
      }
      if (fs.existsSync(mdPath)) {
        const fileContents = fs.readFileSync(mdPath, 'utf8');
        const { content, data } = matter(fileContents);
        return { content, data, folder };
      }
    }
    return null;
  }

  // Two-part slug: folder/file
  const folder = parts[0];
  const fileName = parts.slice(1).join('/');

  const mdxPath = path.join(process.cwd(), 'content', folder, `${fileName}.mdx`);
  const mdPath = path.join(process.cwd(), 'content', folder, `${fileName}.md`);

  if (fs.existsSync(mdxPath)) {
    const fileContents = fs.readFileSync(mdxPath, 'utf8');
    const { content, data } = matter(fileContents);
    return { content, data, folder };
  }
  if (fs.existsSync(mdPath)) {
    const fileContents = fs.readFileSync(mdPath, 'utf8');
    const { content, data } = matter(fileContents);
    return { content, data, folder };
  }

  return null;
}

export function generateStaticParams() {
  const slugs = getAllDocSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

// Helper to get a friendly section title
function getSectionTitle(folder: string): string {
  const titles: Record<string, string> = {
    'user-guides': 'User Guides',
    'product': 'Product',
    'marketing': 'Marketing',
  };
  return titles[folder] || 'Documentation';
}

export default function DocPage({ params }: { params: { slug: string[] } }) {
  const slugPath = params.slug.join('/');
  const doc = getDocBySlug(slugPath);

  if (!doc) {
    notFound();
  }

  const { content, data, folder } = doc;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex gap-12">

        <DocsSidebar />

        <article className="flex-1 min-w-0">
          <header className="mb-8 border-b border-gray-100 pb-8">
            <p className="text-sm font-semibold text-brand-primary mb-2">{(data as any).section || getSectionTitle(folder)}</p>
            <h1 className="text-3xl font-black text-gray-900 mb-4">{(data as any).title || slugPath}</h1>
            {(data as any).description && (
              <p className="text-xl text-gray-600">{(data as any).description}</p>
            )}
          </header>

          <div className="prose prose-indigo max-w-none bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <MDXRemote source={content} />
          </div>

          {/* Prev / Next Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex gap-4">
            <Link href="/docs" className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg transition">
              ← Back to Docs
            </Link>
          </div>
        </article>

      </div>
      <Footer />
    </div>
  );
}
