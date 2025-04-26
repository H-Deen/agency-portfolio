import { Hero } from "@/components/Ui/Hero";
import Services from "@/components/Ui/Services";
import FeaturedProjects from "@/components/Project/FeaturedProjects";
import Cta from "@/components/Ui/Cta";
import FeaturedBlogs from "@/components/Blog/FeaturedBlogs";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const url = process.env.NEXT_PUBLIC_SITE_URL;

  return {
    title: "DevStudio | Crafting Exceptional Digital Experiences",
    description: "We design and develop cutting-edge websites, apps, and digital solutions that delight users and drive success.",
    openGraph: {
      title: "DevStudio | Crafting Exceptional Digital Experiences",
      description: "We design and develop cutting-edge websites, apps, and digital solutions that delight users and drive success.",
      url: url,
      siteName: "DevStudio",
      images: [
        {
          url: `${url}/OpengraphDevStudio.png`,
          width: 1920,
          height: 1080,
          alt: "DevStudio Homepage",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

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

      {/* Featured Blogs Section */}
      <FeaturedBlogs />

      {/* CTA Section */}
      <Cta 
        heading={`Ready to start your project?`} 
        description={`Let's collaborate to bring your vision to life with cutting-edge technology and exceptional design.`}
      />
    </div>
  );
}
