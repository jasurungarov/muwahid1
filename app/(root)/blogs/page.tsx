import React from 'react'
import { blogs } from '@/constants'
import BlogCard from '@/components/cards/BlogCard'

export default function BlogsPage() {
  return (
    <div className="max-w-6xl mx-auto pt-20">
      <h1 className="text-4xl font-creteRound mb-12">Blogs</h1>
      <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
        {blogs.map(blog => (
          <BlogCard key={blog.title} {...blog} />
        ))}
      </div>
    </div>
  )
}
