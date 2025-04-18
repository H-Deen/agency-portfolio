import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import TeamMemberCard from "@/components/TeamMemberCard";
import { mockTeamMembers } from "@/data/TeamMembers";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary/50 to-background dark:from-secondary/20 dark:to-background">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="heading-lg">About Us</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We&#39;re a team of passionate developers, designers, and strategists building
              exceptional digital products that solve real-world problems.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-md">Our Story</h2>
              <p className="mt-4 text-muted-foreground">
                Founded in 2018, DevStudio began with a simple mission: to create digital 
                products that people love to use. What started as a small team of three has 
                grown into a full-service software agency working with clients across various 
                industries.
              </p>
              <p className="mt-4 text-muted-foreground">
                We believe in a collaborative approach, working closely with our clients to 
                understand their unique challenges and deliver tailored solutions that exceed 
                expectations.
              </p>
            </div>
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <Image 
                src="whttps://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
                alt="Our team collaborating"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="heading-md">Our Values</h2>
            <p className="mt-4 text-muted-foreground">
              The core principles that guide our work and relationships
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-semibold mt-4">Excellence</h3>
              <p className="mt-2 text-muted-foreground">
                We strive for excellence in everything we do, from code quality to client 
                communication.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-semibold mt-4">Collaboration</h3>
              <p className="mt-2 text-muted-foreground">
                We believe the best results come from close collaboration with our clients and 
                within our team.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-semibold mt-4">Innovation</h3>
              <p className="mt-2 text-muted-foreground">
                We embrace new technologies and approaches to solve complex problems in 
                creative ways.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="heading-md">Meet Our Team</h2>
            <p className="mt-4 text-muted-foreground">
              The talented people behind our successful projects
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockTeamMembers.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="heading-md">Want to work with us?</h2>
              <p className="mt-4 text-muted-foreground">
                We&#39;re always looking for new challenges and exciting projects.
                Let&#39;s create something amazing together!
              </p>
              <div className="mt-8">
                <Link href="/contact" className="button-primary">
                  Get in Touch
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
