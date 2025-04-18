'use client'

import Link  from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import Badge from "@/components/Tag";
import { mockBlogPosts } from "@/data/Blogs";
import { useParams } from "next/navigation";
import Image from "next/image";

const BlogPost = () => {
  const blogId = useParams().blogId as string
  const post = mockBlogPosts.find(p => p.id === blogId);
  
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
  const currentIndex = mockBlogPosts.findIndex(p => p.id === blogId);
  const prevPost = currentIndex > 0 ? mockBlogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < mockBlogPosts.length - 1 ? mockBlogPosts[currentIndex + 1] : null;
  
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  
  return (

      <article>
        <div className="bg-gradient-to-b from-secondary/50 to-background dark:from-secondary/20 dark:to-background">
          <div className="container-custom py-16 md:py-20">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
            
            <div className="mt-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
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
          <div className="rounded-xl overflow-hidden border border-border mb-10">
            <Image 
              src={post.image} 
              alt={post.title}
              className="w-full h-auto"
            />
          </div>
          
          <div className="prose dark:prose-invert prose-lg max-w-none">
            <p className="lead">{post.excerpt}</p>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis 
              aliquam ultricies, nunc nisl ultricies nunc, quis aliquam nisl nisl quis nisl.
              Sed euismod, diam quis aliquam ultricies, nunc nisl ultricies nunc, quis 
              aliquam nisl nisl quis nisl.
            </p>
            
            <h2>Understanding the Concept</h2>
            
            <p>
              Sed euismod, diam quis aliquam ultricies, nunc nisl ultricies nunc, quis 
              aliquam nisl nisl quis nisl. Sed euismod, diam quis aliquam ultricies, nunc 
              nisl ultricies nunc, quis aliquam nisl nisl quis nisl.
            </p>
            
            <ul>
              <li>First important point about the topic</li>
              <li>Second consideration for developers</li>
              <li>Key insight from our experience</li>
            </ul>
            
            <blockquote>
              <p>
              &#34;The best way to predict the future is to implement it.&#34;
              </p>
            </blockquote>
            
            <h2>Implementation Details</h2>
            
            <p>
              Sed euismod, diam quis aliquam ultricies, nunc nisl ultricies nunc, quis 
              aliquam nisl nisl quis nisl. Sed euismod, diam quis aliquam ultricies, nunc 
              nisl ultricies nunc, quis aliquam nisl nisl quis nisl.
            </p>
            
            <pre>
              <code>
{`function example() {
  const data = fetchData();
  return processResult(data);
}`}
              </code>
            </pre>
            
            <p>
              Sed euismod, diam quis aliquam ultricies, nunc nisl ultricies nunc, quis 
              aliquam nisl nisl quis nisl. Sed euismod, diam quis aliquam ultricies, nunc 
              nisl ultricies nunc, quis aliquam nisl nisl quis nisl.
            </p>
            
            <h2>Conclusion</h2>
            
            <p>
              Sed euismod, diam quis aliquam ultricies, nunc nisl ultricies nunc, quis 
              aliquam nisl nisl quis nisl. Sed euismod, diam quis aliquam ultricies, nunc 
              nisl ultricies nunc, quis aliquam nisl nisl quis nisl.
            </p>
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
          
          <div className="mt-12 border-t border-border pt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prevPost && (
                <Link 
                href={`/blog/${prevPost.id}`}
                  className="group flex items-center bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <ChevronLeft size={20} className="mr-3 text-muted-foreground group-hover:text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Previous</div>
                    <div className="font-medium group-hover:text-primary transition-colors">
                      {prevPost.title}
                    </div>
                  </div>
                </Link>
              )}
              
              {nextPost && (
                <Link 
                href={`/blog/${nextPost.id}`}
                  className="group flex items-center justify-end bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Next</div>
                    <div className="font-medium group-hover:text-primary transition-colors">
                      {nextPost.title}
                    </div>
                  </div>
                  <ChevronRight size={20} className="ml-3 text-muted-foreground group-hover:text-primary" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </article>
  );
};

export default BlogPost;
