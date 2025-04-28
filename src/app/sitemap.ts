import type { MetadataRoute } from 'next'
import type { Blog } from './services/blogs'
import { Projects } from './services/projects'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!

  // --- Fetch your blogs ---
  const blogRes = await fetch(`${baseUrl}/api/blogs`, { cache: 'no-store' })
  const blogs = await blogRes.json()

  // --- Fetch your projects ---
  const projectRes = await fetch(`${baseUrl}/api/projects`, { cache: 'no-store' })
  const projects = await projectRes.json()

  // --- Blog routes ---
  const blogRoutes = blogs.map((blog: Blog) => ({
    url: `${baseUrl}/blog/${blog.id}`,
    lastModified: blog.date ?? new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // --- Project routes ---
  const projectRoutes = projects.map((project: Projects) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // --- Static pages ---
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // --- Return combined sitemap ---
  return [...staticRoutes, ...blogRoutes, ...projectRoutes]
}
