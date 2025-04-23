import { NextResponse } from 'next/server';
import { getAllBlogs } from '@/app/services/blogs';

export async function GET() {
  const blogs = await getAllBlogs();
  return NextResponse.json(blogs);
}
