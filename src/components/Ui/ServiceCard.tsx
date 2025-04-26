import { LucideIcon } from "lucide-react"


interface ServiceCardProps {
    icon: LucideIcon,
    heading: string,
    description: string,
    workList: string[],
}

const ServiceCard : React.FC<ServiceCardProps> = ({icon: Icon, heading, description, workList}) => {
  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all">
          <div className="p-3 rounded-lg bg-primary/10 w-fit">
            <Icon className="text-primary" size={24}/>
          </div>
          <h3 className="heading-sm mt-4">{heading}</h3>
          <p className="mt-2 text-muted-foreground">
            {description}
          </p>
          <ul className="mt-4 space-y-2">
            {workList.map((work, i)=> (
                <li key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>{work}</span>
                </li>
            ))
            }
          </ul>
        </div>
  )
}

export default ServiceCard