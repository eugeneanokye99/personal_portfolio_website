import fs from "fs";
import path from "path";
import type { ReactNode } from "react";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostMetadata = {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
};

export type Post = PostMetadata & { slug: string; content: ReactNode };

function getPostSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const mod = (await import(`../../content/blog/${slug}.mdx`)) as {
        default: React.ComponentType;
        metadata: PostMetadata;
      };
      const Content = mod.default;
      return { slug, ...mod.metadata, content: <Content /> };
    })
  );
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
