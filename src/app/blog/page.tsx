'use client';

import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import BlogCard from '@/components/Blog/BlogCard';
import Input from '@/components/Ui/Input';
import Tag from '@/components/Ui/Tag';
import type { Blog } from '@/app/services/blogs';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [posts, setPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('/api/blogs');
        const data: Blog[] = await res.json();
        setPosts(data);
      } catch (err) {
        console.error('Failed to fetch blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags))).sort();

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;

    return matchesSearch && matchesTag;
  });

  return (
    <>
      <section className="bg-gradient-to-b from-secondary/50 to-background dark:from-secondary/20 dark:to-background">
        <div className="container-custom py-16 md:py-24">
          <h1 className="heading-lg">Our Blog</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Insights, tutorials, and updates from our team
          </p>

          <div className="mt-8 relative max-w-md">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search size={18} className="text-muted-foreground" />
            </div>
            <Input
              type="text"
              placeholder="Search articles..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <Tag
              variant={selectedTag === null ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => setSelectedTag(null)}
            >
              All
            </Tag>
            {allTags.map((tag) => (
              <Tag
                key={tag}
                variant={selectedTag === tag ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </Tag>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-custom">
          {loading ? (
            <p>Loading blogs...</p>
          ) : filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="heading-md">No articles found</h3>
              <p className="mt-2 text-muted-foreground">
                No articles match your search criteria. Try adjusting your search or tag filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTag(null);
                }}
                className="mt-6 button-outline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
