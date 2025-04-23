import { NextResponse } from 'next/server';
import { getProjectById } from '@/app/services/projects';

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const {id} =  await context.params
  const project = await getProjectById(id);

  if (!project) {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}
