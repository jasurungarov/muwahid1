"use client"

import BgArrow from '@/components/shared/bg-arrow'
import BgArrow2 from '@/components/shared/bg-arrow2'
import { blogs } from '@/constants'
import { Archive, Dot, Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function ArchivePage() {
  return (
    <div className="max-w-6xl mx-auto">
			<div className="relative min-h-[40vh] flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-creteRound text-center max-w-2xl">
					Showing posts from
				</h1>
				<BgArrow2/>
        </div>

        
          <h2 className='text-center text-4xl section-title font-creteRound mt-2'>
          <span>Archive</span>
        </h2>


        <div className='flex gap-1 items-center mt-4 justify-center'>
					<Home className='w-4 h-4' />
					<Link
						href={'/'}
						className='opacity-90 hover:underline hover:opacity-100'
					>
						Home
					</Link>
					<Dot />
          <Link
						href={'/blogs'}
						className='opacity-90 hover:underline hover:opacity-100'
					>
						Blogs
					</Link>
					<Dot />
					<p className='text-muted-foreground'>Archive</p>
        </div>

      {blogs.map(blog => {
        const dateObj = new Date(blog.date)
        const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dateObj)
        const dayMonth = new Intl.DateTimeFormat('en', { day: '2-digit', month: 'short' }).format(dateObj)

        return (
          <div key={blog.slug}>
            <div className='flex flex-col space-y-3 mt-8'>
              <div className='relative'>
                <span className='text-5xl font-creteRound relative z-20'>{year}</span>
                <Archive className='absolute w-16 h-16 -translate-x-4 -translate-y-12 opacity-10' />
              </div>
            </div>
            <div className='flex flex-col space-y-2 mt-8'>
              <div className='flex gap-2 text-lg text-muted-foreground'>
                <p>{dayMonth}</p>
                <Dot className='text-white w-8 h-8' />
                <Link
                  href={`/blogs/${blog.slug}`}
                  className='hover:text-white hover:underline cursor-pointer'
                >
                  {blog.title}
                </Link>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ArchivePage
