'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Projects } from "@/app/services/projects";
import ProjectDetailsHead from "@/components/ProjectDetailsHead";
import ProjectDetailsBody from "@/components/ProjectDetailsBody";
import Cta from "@/components/Cta";

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
      <ProjectDetailsHead project={project}/>
      <ProjectDetailsBody project={project}/>
      <Cta 
        heading={`Interested in working together?`} 
        description={`Let's discuss how we can help bring your next project to life with our expertise in design and development.`}
      />
    </>
  );
};

export default ProjectDetail;
