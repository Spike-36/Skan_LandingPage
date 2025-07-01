import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

const blogDir = path.join(process.cwd(), 'content/blog');

type BlogMeta = {
  title: string;
  date: string;
  summary?: string;
};

export async function generateStaticParams() {
  const files = fs.readdirSync(blogDir);
  return files.map((file) => ({ slug: file.replace(/\.mdx$/, '') }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const filePath = path.join(blogDir, `${params.slug}.mdx`);

  if (!fs.existsSync(filePath)) return notFound();

  const raw = fs.readFileSync(filePath, 'utf-8');
  const parsed = matter(raw);
  const content = parsed.content;
  const data = parsed.data as BlogMeta;

  if (!data.title || !data.date) {
    console.warn(`Missing required metadata in ${params.slug}.mdx`);
  }

  return (
    <article className="prose mx-auto p-4">
      <h1>{data?.title ?? 'Untitled'}</h1>
      <p className="text-sm text-gray-500">{data?.date ?? ''}</p>
      <MDXRemote source={content} />
    </article>
  );
}
