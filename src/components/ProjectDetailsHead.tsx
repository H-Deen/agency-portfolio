import { ArrowLeft, Calendar, Globe, User } from "lucide-react"
import Link from "next/link"
import Tag from "./Tag"
import { project } from "./ProjectDetailsCard"


const ProjectDetailsHead : React.FC<project> = ({project}) => {
  return (
    <section className="bg-gradient-to-b from-secondary/50 to-background dark:from-secondary/20 dark:to-background">
        <div className="container-custom py-16 md:py-24">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <div className="mt-6">
            <div className="flex flex-wrap gap-2 mb-4">
              <Tag variant="default" className="mb-4">
                {project.category}
              </Tag>
            </div>
          </div>

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
      </section>
  )
}

export default ProjectDetailsHead