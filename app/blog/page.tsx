import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

const blogDir = path.join(process.cwd(), 'content/blog');

type BlogMeta = {
  title: string;
  date: string;
  summary?: string;
};

export default function BlogIndexPage() {
  const files = fs.readdirSync(blogDir);

  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(blogDir, file), 'utf-8');
    const parsed = matter(raw);
    const content = parsed.content;
    const data = parsed.data as BlogMeta;
    return {
      slug: file.replace(/\.mdx$/, ''),
      title: data.title ?? 'Untitled',
      date: data.date ?? '',
      summary: data.summary ?? '',
    };
  });

  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-red-500 text-4xl">Blog</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold hover:underline">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.date}</p>
              {post.summary && <p>{post.summary}</p>}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}