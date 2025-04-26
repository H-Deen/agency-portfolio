import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const Hero = () => {
    return (
        <section className="bg-gradient-to-b from-secondary/50 to-background dark:from-secondary/20 dark:to-background min-h-screen flex items-center justify-center">
            <div className="container-custom text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="heading-xl">
                        We design & build <span className="gradient-text">digital products</span> that solve problems
                    </h1>
                    <p className="text-xl mt-6 text-muted-foreground max-w-2xl mx-auto">
                        A software development agency focused on creating exceptional digital
                        experiences using cutting-edge technology
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="button-primary">
                            Get in Touch
                            <ArrowRight size={16} />
                        </Link>
                        <Link href="/projects" className="button-outline border-slate-900">
                            View Our Work
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
