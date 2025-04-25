import ProjectDetailsCard from "./ProjectDetailsCard"
import { project } from "./ProjectDetailsCard"
import Image from "next/image"

const ProjectDetailsBody : React.FC<project> = ({project}) => {
  return (
    <section className="py-12">
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

            <ProjectDetailsCard project={project}/>
          </div>
        </div>
      </section>
  )
}

export default ProjectDetailsBody