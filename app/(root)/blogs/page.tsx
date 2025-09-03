import BlogCard from '@/components/cards/blog'
import { blogs } from '@/constants'
import { Dot, Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Blogs() {
  return (
    <div className='max-w-6xl mx-auto'>
      <div className='relative min-h-[40vh] flex items-center justify-center flex-col'>
        <h2 className='text-center text-4xl section-title font-creteRound mt-2'>
					<span>Blogs</span>
				</h2>

				<div className='flex gap-1 items-center mt-4'>
					<Home className='w-4 h-4' />
					<Link
						href={'/'}
						className='opacity-90 hover:underline hover:opacity-100'
					>
						Home
					</Link>
					<Dot />
					<p className='text-muted-foreground'>Blogs</p>
				</div>
			</div>
      <div className="flex flex-col space-y-24 mt-10">
              {blogs.map(blog => (
                <BlogCard key={blog.title} {...blog}/>
              ))}
            </div>
    </div>
  )
}

export default Blogs
