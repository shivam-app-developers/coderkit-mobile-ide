import { NextRequest, NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/mdx';
import fs from 'fs';
import path from 'path';

interface SearchResult {
  type: 'blog' | 'doc';
  title: string;
  description: string;
  slug: string;
  url: string;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q')?.toLowerCase() || '';

  if (!query || query.length < 2) {
    return NextResponse.json([], { status: 200 });
  }

  const results: SearchResult[] = [];

  // Search blog posts
  try {
    const posts = getAllPosts();
    posts.forEach((post) => {
      const titleMatch = post.frontmatter.title.toLowerCase().includes(query);
      const descriptionMatch = post.frontmatter.excerpt?.toLowerCase().includes(query);
      const contentMatch = post.content.toLowerCase().includes(query);

      if (titleMatch || descriptionMatch || contentMatch) {
        results.push({
          type: 'blog',
          title: post.frontmatter.title,
          description: post.frontmatter.excerpt || post.content.substring(0, 100),
          slug: post.slug,
          url: `/blog/${post.slug}`,
        });
      }
    });
  } catch (error) {
    console.error('Error searching blog posts:', error);
  }

  // Search documentation (user-guides, product, marketing)
  try {
    const docsFolders = ['user-guides', 'product', 'marketing'];

    for (const folder of docsFolders) {
      const folderPath = path.join(process.cwd(), 'content', folder);

      if (!fs.existsSync(folderPath)) continue;

      const files = fs.readdirSync(folderPath);

      for (const file of files) {
        if (!file.endsWith('.md') && !file.endsWith('.mdx')) continue;

        const filePath = path.join(folderPath, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const fileSlug = file.replace(/\.(md|mdx)$/, '');
        const fullPath = `${folder}/${fileSlug}`;

        // Extract frontmatter
        const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
        let title = fileSlug;
        let description = '';

        if (frontmatterMatch) {
          const frontmatter = frontmatterMatch[1];
          const titleMatch = frontmatter.match(/title:\s*['"]?([^'"\n]+)['"]?/);
          const descriptionMatchFm = frontmatter.match(/description:\s*['"]?([^'"\n]+)['"]?/);

          if (titleMatch) title = titleMatch[1];
          if (descriptionMatchFm) description = descriptionMatchFm[1];
        }

        // Check if content matches query
        if (title.toLowerCase().includes(query) ||
          description.toLowerCase().includes(query) ||
          content.toLowerCase().includes(query)) {
          results.push({
            type: 'doc',
            title,
            description: description || content.substring(0, 100),
            slug: fullPath,
            url: `/docs/${fullPath}`,
          });
        }
      }
    }
  } catch (error) {
    console.error('Error searching docs:', error);
  }

  // Limit results to 10
  return NextResponse.json(results.slice(0, 10), { status: 200 });
}
