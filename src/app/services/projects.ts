import { promises as fs } from 'fs'
import path from 'path'

export interface Projects {
    id: string,
    title: string,
    client: string,
    year: number,
    description:string,
    image:string,
    technologies: string[],
    category: string,
    website: string
}

// Function to read a project file
const readProjectFile = async (filePath: string): Promise<Projects> => {
  const fileData = await fs.readFile(filePath, 'utf8')
  return JSON.parse(fileData) as Projects
}

// Function to get all project
export const getAllProjects = async (): Promise<Projects[]> => {
  try {
    const projectPath = path.join(process.cwd(), 'content/projects')
    const projectFiles = await fs.readdir(projectPath)

    const courses = await Promise.all(
        projectFiles.map(async (fileName) => {
        const filePath = path.join(projectPath, fileName)
        return await readProjectFile(filePath)
      }),
    )

    return courses
  } catch (error: unknown) {
    // Handle errors
    console.error('Error:', error)
    return []
  }
}

export const getProjectById = async (id: string) => {
  const projects = await getAllProjects()
  return projects.find((project) => project.id === id);
};
