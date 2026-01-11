'use client';

import Link from 'next/link';

interface BlogPost {
    slug: string;
    frontmatter: {
        title: string;
        excerpt: string;
        category: string;
        date: string;
    };
}

interface BlogRowProps {
    posts: BlogPost[];
}

export default function BlogRow({ posts }: BlogRowProps) {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">Latest from the Blog</h2>
                    <Link href="/blog" className="text-brand-primary font-medium hover:underline flex items-center gap-2">
                        View all <i className="fa-solid fa-arrow-right text-sm"></i>
                    </Link>
                </div>

                {/* Horizontal scrollable row */}
                <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                    {posts.slice(0, 5).map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="flex-shrink-0 w-80 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition group"
                        >
                            <div className="h-32 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-t-xl flex items-center justify-center">
                                <i className="fa-regular fa-newspaper text-4xl text-brand-primary/40"></i>
                            </div>
                            <div className="p-5">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs font-bold text-brand-primary uppercase tracking-wider">{post.frontmatter.category}</span>
                                    <span className="text-gray-300">•</span>
                                    <span className="text-xs text-gray-500">{post.frontmatter.date}</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition line-clamp-2">
                                    {post.frontmatter.title}
                                </h3>
                                <p className="text-sm text-gray-600 line-clamp-2">{post.frontmatter.excerpt}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
