import { CheckCircle2 } from "lucide-react"

interface ValueCardProps {
    heading: string,
    description: string
}

const ValueCard : React.FC<ValueCardProps> = ({heading, description}) => {
    return (
        <div className="bg-card p-6 rounded-lg border border-border">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle2 size={24} />
            </div>
            <h3 className="text-xl font-semibold mt-4">{heading}</h3>
            <p className="mt-2 text-muted-foreground">
                {description}
            </p>
        </div>
    )
}

export default ValueCard