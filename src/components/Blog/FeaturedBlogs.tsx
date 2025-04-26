import { getAllBlogs } from "@/app/services/blogs"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import BlogCard from "./BlogCard"

const FeaturedBlogs = async () => {
    const blogs = await getAllBlogs()
  return (
    <section className="py-24 bg-secondary/30">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="heading-lg">Featured Blogs</h2>
              <p className="mt-2 text-muted-foreground">
                Hear from our experienced professionals about tech trends
              </p>
            </div>
            <Link href="/blog" className="button-outline border-slate-900">
              View All Blogs
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(0, 3).map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
        </div>
      </section>
  )
}

export default FeaturedBlogs