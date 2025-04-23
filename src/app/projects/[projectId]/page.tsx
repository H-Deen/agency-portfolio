'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Globe, Calendar, User } from "lucide-react";
import Image from "next/image";
import Tag from "@/components/Tag";
import { Projects } from "@/app/services/projects";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState<Projects | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/projects/${projectId}`);
        if (!res.ok) throw new Error("Not found");
        const data = await res.json();
        setProject(data);
      } catch (error) {
        console.error("Error fetching project:", error);
        setProject(null);
      } finally {
        setLoading(false);
      }
    };

    if (projectId) {
      fetchProject();
    }
  }, [projectId]);

  if (loading) {
    return <div className="container-custom py-24 text-center">Loading...</div>;
  }

  if (!project) {
    return (
      <div className="container-custom py-24 text-center">
        <h1 className="heading-lg">Project Not Found</h1>
        <p className="mt-4 text-muted-foreground">
          The project you&#39;re looking for doesn&#39;t exist or has been removed.
        </p>
        <Link href="/projects" className="button-primary mt-8">
          <ArrowLeft size={16} />
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-b from-secondary/50 to-background dark:from-secondary/20 dark:to-background">
        <div className="container-custom py-16 md:py-24">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <Tag variant="default" className="mb-4">
            {project.category}
          </Tag>

          <h1 className="heading-lg">{project.title}</h1>

          <div className="mt-6 flex flex-wrap gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>Client: {project.client}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>Year: {project.year}</span>
            </div>
            {project.website && (
              <div className="flex items-center gap-2">
                <Globe size={18} />
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Visit Website
                </a>
              </div>
            )}
          </div>
        </div>
      </section><section className="py-12">
        <div className="container-custom">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
            <div className="lg:col-span-2">
              <h2 className="heading-md">Overview</h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  {project.description}
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis
                  aliquam ultricies, nunc nisl ultricies nunc, quis aliquam nisl nisl quis nisl.
                  Sed euismod, diam quis aliquam ultricies, nunc nisl ultricies nunc, quis
                  aliquam nisl nisl quis nisl.
                </p>

                <h3 className="text-lg font-semibold text-foreground pt-4">The Challenge</h3>
                <p>
                  Sed euismod, diam quis aliquam ultricies, nunc nisl ultricies nunc, quis
                  aliquam nisl nisl quis nisl. Sed euismod, diam quis aliquam ultricies, nunc
                  nisl ultricies nunc, quis aliquam nisl nisl quis nisl.
                </p>

                <h3 className="text-lg font-semibold text-foreground pt-4">The Solution</h3>
                <p>
                  Sed euismod, diam quis aliquam ultricies, nunc nisl ultricies nunc, quis
                  aliquam nisl nisl quis nisl. Sed euismod, diam quis aliquam ultricies, nunc
                  nisl ultricies nunc, quis aliquam nisl nisl quis nisl.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative aspect-video rounded-lg border border-border overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
                    alt="Project screenshot"
                    fill
                    className="object-cover" />
                </div>
                <div className="relative aspect-video rounded-lg border border-border overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
                    alt="Project screenshot"
                    fill
                    className="object-cover" />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mt-8">Results</h3>
              <p className="mt-4 text-muted-foreground">
                Sed euismod, diam quis aliquam ultricies, nunc nisl ultricies nunc, quis
                aliquam nisl nisl quis nisl. Sed euismod, diam quis aliquam ultricies, nunc
                nisl ultricies nunc, quis aliquam nisl nisl quis nisl.
              </p>

              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>50% increase in conversion rate</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>30% reduction in bounce rate</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>25% increase in user engagement</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="bg-card rounded-lg border border-border p-6 sticky top-24">
                <h3 className="font-semibold text-lg">Project Details</h3>

                <div className="mt-6 space-y-6">
                  <div>
                    <h4 className="text-sm text-muted-foreground uppercase">Client</h4>
                    <p className="mt-1 font-medium">{project.client}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-muted-foreground uppercase">Timeline</h4>
                    <p className="mt-1 font-medium">3 months</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-muted-foreground uppercase">Services</h4>
                    <div className="mt-1 space-y-1">
                      <p>UI/UX Design</p>
                      <p>Web Development</p>
                      <p>QA Testing</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm text-muted-foreground uppercase">Technologies</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Tag key={tech} variant="outline" className="bg-secondary/50">
                          {tech}
                        </Tag>
                      ))}
                    </div>
                  </div>
                </div>

                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-primary w-full mt-6 justify-center"
                  >
                    Visit Live Site
                    <Globe size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section><section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="heading-md">Interested in working together?</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Let&#39;s discuss how we can help bring your next project to life with our
              expertise in design and development.
            </p>
            <Link href="/contact" className="button-primary mt-8">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;
