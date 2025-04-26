import { Globe } from "lucide-react"
import Tag from "@/components/Ui/Tag"
import { Projects } from "@/app/services/projects"

export interface project{
    project: Projects
}

const ProjectDetailsCard : React.FC<project> = ({project}) => {
    return (
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
    )
}

export default ProjectDetailsCard