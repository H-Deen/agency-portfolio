import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  bio,
  image,
  social
}) => {
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-lg animate-scale-in">
      <div className="aspect-square overflow-hidden">
        <Image
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-primary font-medium mt-1">{role}</p>
        
        <p className="mt-3 text-muted-foreground">
          {bio}
        </p>
        
        <div className="mt-4 flex gap-3">
          {social.github && (
            <a 
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary/80 text-foreground hover:bg-primary hover:text-white transition-colors"
              aria-label={`${name}'s GitHub`}
            >
              <Github size={18} />
            </a>
          )}
          
          {social.twitter && (
            <a 
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary/80 text-foreground hover:bg-primary hover:text-white transition-colors"
              aria-label={`${name}'s Twitter`}
            >
              <Twitter size={18} />
            </a>
          )}
          
          {social.linkedin && (
            <a 
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary/80 text-foreground hover:bg-primary hover:text-white transition-colors"
              aria-label={`${name}'s LinkedIn`}
            >
              <Linkedin size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
