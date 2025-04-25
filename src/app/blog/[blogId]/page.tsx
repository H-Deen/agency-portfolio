'use client';

import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import Badge from '@/components/Tag';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import type { SerializedBlog } from '@/app/services/blogs';
import AdjacentBlog from '@/components/AdjacentBlog';

const BlogPost = () => {
  const { blogId } = useParams();
  const [post, setPost] = useState<SerializedBlog | null>(null);
  const [loading, setLoading] = useState(true);
  const [allPosts, setAllPosts] = useState<SerializedBlog[]>([]);


  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/blogs');
      if (res.ok) {
        const data = await res.json();
        setAllPosts(data);
      }
    };

    const fetchPost = async () => {
      const res = await fetch(`/api/blogs/${blogId}`);
      if (res.ok) {
        const data = await res.json();
        setPost(data);
      }
      setLoading(false);
    };

    fetchPosts();
    fetchPost();
  }, [blogId]);

  if (loading) {
    return <div className="container-custom py-24 text-center">Loading...</div>;
  }

  if (!post) {
    return (
      <div className="container-custom py-24 text-center">
        <h1 className="heading-lg">Blog Post Not Found</h1>
        <p className="mt-4 text-muted-foreground">
          The article you&#39;re looking for doesn&#39;t exist or has been removed.
        </p>
        <Link href="/blog" className="button-primary mt-8">
          <ArrowLeft size={16} />
          Back to Blog
        </Link>
      </div>
    );
  }

  // Find previous and next posts
  const currentIndex = allPosts.findIndex((p) => p.id === blogId);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article>
      <div className="bg-gradient-to-b from-secondary/50 to-background dark:from-secondary/20 dark:to-background">
        <div className="container-custom py-16 md:py-20">
          <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <div className="mt-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="default">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="heading-lg">{post.title}</h1>

            <div className="mt-6 flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12 max-w-4xl">
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden border border-border mb-10">
          <Image src={post.image} alt={post.title} fill className="w-full h-auto" />
        </div>

        {/* Render the MDX content using MDXRemote */}
        <div className="prose dark:prose-invert prose-lg max-w-none">
          <p className="lead">{post.excerpt}</p>
          {/* MDXRemote for rendering serialized MDX content */}
          <MDXRemote {...post.mdxSource as MDXRemoteSerializeResult} />
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          <span className="font-medium">Tags:</span>
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-secondary/50">
              <Tag size={14} className="mr-1" />
              {tag}
            </Badge>
          ))}
        </div>

        <AdjacentBlog prevPost={prevPost} nextPost={nextPost}/>
      </div>
    </article>
  );
};

export default BlogPost;
