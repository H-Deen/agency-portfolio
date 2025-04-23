import React from "react";
import  Link  from "next/link";
import { Calendar, Clock } from "lucide-react";
import  Tag  from "@/components/Tag";
import Image from "next/image";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  date,
  readTime,
  image,
  tags
}) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <article className="project-card group animate-scale-in border border-border shadow-sm">
      <Link href={`/blog/${id}`} className="block hover:opacity-90 transition-opacity">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.slice(0, 2).map((tag) => (
            <Tag key={tag} variant="default" className="font-normal">
              {tag}
            </Tag>
          ))}
        </div>
        
        <Link href={`/blog/${id}`} className="block group">
          <h3 className="heading-sm group-hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        
        <p className="mt-2 text-muted-foreground line-clamp-2">
          {excerpt}
        </p>
        
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={14} />
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
