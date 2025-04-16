import React from "react";
import  Link  from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Tag } from "./Tag";
import Image from "next/image";

interface ProjectCardProps {
  id: string;
  title: string;
  client: string;
  year: number;
  description: string;
  image: string;
  technologies: string[];
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  client,
  year,
  description,
  image,
  technologies,
  category
}) => {
  return (
    <div className="project-card group animate-scale-in border border-border shadow-sm">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Tag>
            {category}
          </Tag>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="heading-sm">{title}</h3>
            <p className="text-sm text-muted-foreground">{client} • {year}</p>
          </div>
          <Link 
            href={`/projects/${id}`} 
            className="p-2 rounded-full bg-secondary/80 text-foreground hover:bg-primary hover:text-white transition-colors"
            aria-label={`View ${title} project details`}
          >
            <ArrowUpRight size={18} />
          </Link>
        </div>
        
        <p className="mt-3 text-muted-foreground line-clamp-2">
          {description}
        </p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.slice(0, 3).map((tech) => (
            <Tag key={tech}>
              {tech}
            </Tag>
          ))}
          {technologies.length > 3 && (
            <Tag>
              +{technologies.length - 3}
            </Tag>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
