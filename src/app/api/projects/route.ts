import { NextResponse } from 'next/server';
import { getAllProjects } from '@/app/services/projects';

export async function GET() {
  const projects = await getAllProjects();
  return NextResponse.json(projects);
}
