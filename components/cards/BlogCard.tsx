import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps {
  title: string
  description: string
  author: string
  date: string
  image: string
  images: string
}

export default function BlogCard({
  title,
  description,
  author,
  date,
  image,
  images,
}: BlogCardProps) {
  // slug yaratish (title asosida)
  const slug = title.toLowerCase().replace(/\s+/g, '-')

  return (
    <Link
      href={`/blogs/${slug}`}
      className="block border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-56 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 dark:text-gray-300 line-clamp-3">{description}</p>
        <div className="flex items-center gap-3 mt-4">
          <Image
            src={images}
            alt={author}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
