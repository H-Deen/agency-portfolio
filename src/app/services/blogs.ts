import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type Blog = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  body: string;
};

export type SerializedBlog = Omit<Blog, 'body'> & {
  mdxSource: MDXRemoteSerializeResult;
};

const BLOGS_PATH = path.join(process.cwd(), 'content/blogs');

export async function getAllBlogs(): Promise<Blog[]> {
  const files = await fs.readdir(BLOGS_PATH);

  const blogs = await Promise.all(
    files
      .filter((file) => file.endsWith('.mdx'))
      .map(async (file) => {
        const filePath = path.join(BLOGS_PATH, file);
        const fileContent = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(fileContent);

        return {
          ...data,
          body: content,
        } as Blog;
      })
  );

  return blogs;
}

export async function getBlogById(id: string): Promise<SerializedBlog | null> {
  const blogs = await getAllBlogs();
  const blog = blogs.find((post) => post.id === id);

  if (!blog) return null;

  const mdxSource = await serialize(blog.body);

  return {
    ...blog,
    mdxSource,
  };
}
