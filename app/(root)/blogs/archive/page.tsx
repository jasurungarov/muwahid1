import Link from 'next/link'
import { blogs } from '@/constants'

export default function ArchivePage() {
  const archiveBlogs = blogs.slice(0, 3) // misol uchun 3 ta eng oxirgi blog

  return (
    <div className="pt-[15vh] max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-creteRound mb-8">
        Archive
      </h1>

      <div className="flex flex-col gap-6">
        {archiveBlogs.map(blog => (
          <Link key={blog.slug} href={`/blogs/${blog.slug}`}>
            <div className="p-4 border rounded-md hover:shadow-lg transition-shadow cursor-pointer">
              <h2 className="text-2xl font-bold">{blog.title}</h2>
              <p className="text-muted-foreground mt-2">{blog.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
