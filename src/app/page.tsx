import { Hero } from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import Cta from "@/components/Cta";
import FeaturedBlogs from "@/components/FeaturedBlogs";

export default async function Home() {

  return (
    <div>
      <div className="bg-[url('/coolbackgrounds-unsplash-zeller.jpg')] bg-cover bg-no-repeat bg-center min-h-screen w-full z-50">

        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />
      </div>

      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* Featured Projects Section */}
      <FeaturedBlogs />

      {/* CTA Section */}
      <Cta 
        heading={`Ready to start your project?`} 
        description={`Let's collaborate to bring your vision to life with cutting-edge technology and exceptional design.`}
      />
    </div>
  );
}
