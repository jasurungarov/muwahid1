import React from 'react'
import parse from 'html-react-parser'
import { content, blogs } from '@/constants'

interface SlugPageProps {
  params: { slug: string }
}

export default function SlugPage({ params }: SlugPageProps) {
  const blog = blogs.find(b => b.title.toLowerCase().replace(/\s+/g, '-') === params.slug)

  if (!blog) return <div>Blog not found</div>

  return (
    <div className="max-w-5xl mx-auto pt-20">
      <h1 className="text-5xl font-creteRound">{blog.title}</h1>
      <p className="mt-4">{blog.description}</p>
      <div className="mt-6 prose dark:prose-invert">{parse(content)}</div>
    </div>
  )
}
