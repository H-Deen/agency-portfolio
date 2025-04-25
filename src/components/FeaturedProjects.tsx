import Link from "next/link"
import ProjectCard from "./ProjectCard"
import { ArrowRight } from "lucide-react"
import { getAllProjects } from "@/app/services/projects"


const FeaturedProjects = async () => {
    const projects = await getAllProjects()
  
    return (
    <section className="py-24 bg-secondary/30">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="heading-lg">Featured Projects</h2>
              <p className="mt-2 text-muted-foreground">
                Explore our recent work and success stories
              </p>
            </div>
            <Link href="/projects" className="button-outline border-slate-900">
              View All Projects
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>
  )
}

export default FeaturedProjects