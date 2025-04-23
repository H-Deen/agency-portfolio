import { NextResponse } from 'next/server';
import { getBlogById } from '@/app/services/blogs';

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const {id} = await params
  const project = await getBlogById(id);

  if (!project) {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}
