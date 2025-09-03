import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { blogs } from "@/constants"
import { ArrowUpRight, CalendarDays, Clock, Minus } from "lucide-react"

interface SlugPageProps {
  params: {
    slug: string
  }
}

export default function SlugPage({ params }: SlugPageProps) {
  const blog = blogs.find((b) => b.slug === params.slug)

  if (!blog) {
    return notFound() // slug topilmasa 404 sahifa chiqaradi
  }

  return (
    <div className="pt-[15vh] max-w-5xl mx-auto">
      <h1 className="lg:text-6xl md:text-5xl text-4xl font-creteRound">
        {blog.title}
      </h1>

      <div className="flex items-center flex-wrap max-md:justify-center gap-4 mt-4">
        <div className="flex items-center gap-2">
          <Image
            src={blog.images}
            alt={blog.author}
            width={30}
            height={30}
            className="object-cover rounded-sm"
          />
          <p>by {blog.author}</p>
        </div>
        <Minus />
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          <p>01 min read</p>
        </div>
        <div className="flex items-center gap-2">
          <CalendarDays className="w-5 h-5" />
          <p>{blog.date}</p>
        </div>
      </div>

      <Image
        src={blog.image}
        alt={blog.title}
        width={1120}
        height={595}
        className="mt-4 rounded-md"
      />

      <div className="prose dark:prose-invert mt-12">
        <p>{blog.description}</p>
      </div>

      <div className="flex mt-6 gap-6 items-center max-md:flex-col">
        <Image
          src={blog.images}
          alt={blog.author}
          width={155}
          height={155}
          className="rounded-md max-md:self-start"
        />
        <div className="flex-1 flex flex-col space-y-4">
          <h2 className="text-3xl font-creteRound">{blog.author}</h2>
          <p className="line-clamp-2 text-muted-foreground">
            {blog.author} is one of our active writers. He shares knowledge and insights about programming and technology.
          </p>
          <Link
            href={'/blogs'}
            className="flex items-center gap-2 hover:text-blue-500 underline transition-colors"
          >
            <span>See all posts</span>
            <ArrowUpRight />
          </Link>
        </div>
      </div>
    </div>
  )
}
