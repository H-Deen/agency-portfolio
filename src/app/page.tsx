import { ArrowRight, Code, Figma, Server } from "lucide-react";
import Link from "next/link";
import { ProjectsData } from "@/data/Projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div>
      <div className="bg-[url('/coolbackgrounds-unsplash-zeller.jpg')] bg-cover bg-no-repeat bg-center min-h-screen w-full z-50">

        {/* Hero Section */}
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
                <Link href="/projects" className="button-outline">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>


        {/* Services Section */}
        <section className="py-24">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto text-white">
              <h2 className="heading-lg">Our Services</h2>
              <p className="mt-4 text-lg">
                End-to-end digital solutions for businesses of all sizes
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all">
                <div className="p-3 rounded-lg bg-primary/10 w-fit">
                  <Code className="text-primary" size={24} />
                </div>
                <h3 className="heading-sm mt-4">Web Development</h3>
                <p className="mt-2 text-muted-foreground">
                  Custom web applications built with modern frameworks and technologies.
                  From simple websites to complex web platforms.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>React & Next.js</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Progressive Web Apps</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>E-commerce Solutions</span>
                  </li>
                </ul>
              </div>

              {/* Service Card 2 */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all">
                <div className="p-3 rounded-lg bg-primary/10 w-fit">
                  <Figma className="text-primary" size={24} />
                </div>
                <h3 className="heading-sm mt-4">UI/UX Design</h3>
                <p className="mt-2 text-muted-foreground">
                  User-centered design solutions that enhance user experience and drive engagement.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>User Research</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Interactive Prototypes</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Design Systems</span>
                  </li>
                </ul>
              </div>

              {/* Service Card 3 */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all">
                <div className="p-3 rounded-lg bg-primary/10 w-fit">
                  <Server className="text-primary" size={24} />
                </div>
                <h3 className="heading-sm mt-4">Mobile Development</h3>
                <p className="mt-2 text-muted-foreground">
                  Native and cross-platform mobile applications for iOS and Android.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>React Native</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Native iOS & Android</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>App Store Optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Featured Projects Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="heading-lg">Featured Projects</h2>
              <p className="mt-2 text-muted-foreground">
                Explore our recent work and success stories
              </p>
            </div>
            <Link href="/projects" className="button-outline">
              View All Projects
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ProjectsData.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="heading-lg">Ready to start your project?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Let's collaborate to bring your vision to life with cutting-edge technology and exceptional design.
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
    </div>
  );
}
