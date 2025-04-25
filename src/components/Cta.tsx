import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface CtaProps {
  heading: string,
  description: string
}

const Cta : React.FC<CtaProps> = ({heading, description}) => {
  return (
    <section className="py-24">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="heading-lg">{heading}</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {description}
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
  )
}

export default Cta