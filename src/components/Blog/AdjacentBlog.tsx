import { SerializedBlog } from "@/app/services/blogs"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface AdjacentBlogProps {
    prevPost: SerializedBlog | null
    nextPost: SerializedBlog | null
}

const AdjacentBlog : React.FC<AdjacentBlogProps> = ({prevPost, nextPost}) => {
  return (
    <div className="mt-12 border-t border-border pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prevPost && (
              <Link
                href={`/blog/${prevPost.id}`}
                className="group flex items-center bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <ChevronLeft size={20} className="mr-3 text-muted-foreground group-hover:text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Previous</div>
                  <div className="font-medium group-hover:text-primary transition-colors">{prevPost.title}</div>
                </div>
              </Link>
            )}

            {nextPost && (
              <Link
                href={`/blog/${nextPost.id}`}
                className="group flex items-center justify-end bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Next</div>
                  <div className="font-medium group-hover:text-primary transition-colors">{nextPost.title}</div>
                </div>
                <ChevronRight size={20} className="ml-3 text-muted-foreground group-hover:text-primary" />
              </Link>
            )}
          </div>
        </div>
  )
}

export default AdjacentBlog