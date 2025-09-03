// import { notFound } from "next/navigation"
// import { blogs, content } from "@/constants"
// import Image from "next/image"
// import Link from "next/link"
// import parse from "html-react-parser"
// import {
//   ArrowUpRight,
//   CalendarDays,
//   Clock,
//   Facebook,
//   Link2,
//   Linkedin,
//   Minus,
//   Send,
//   Twitter,
// } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export default function SlugPage({ params }: { params: { slug: string } }) {
//   const blog = blogs.find((b) => b.slug === params.slug)

//   if (!blog) return notFound()

//   return (
//     <div className="pt-[15vh] max-w-5xl mx-auto">
//       <h1 className="lg:text-6xl md:text-5xl text-4xl font-creteRound">
//         {blog.title}
//       </h1>

//       <div className="flex items-center flex-wrap max-md:justify-center gap-4 mt-4">
//         <div className="flex items-center gap-2">
//           <Image
//             src={blog.images}
//             alt={blog.author}
//             width={30}
//             height={30}
//             className="object-cover rounded-sm"
//           />
//           <p>by {blog.author}</p>
//         </div>
//         <Minus />
//         <div className="flex items-center gap-2">
//           <Clock className="w-5 h-5" />
//           <p>01 min read</p>
//         </div>
//         <div className="flex items-center gap-2">
//           <CalendarDays className="w-5 h-5" />
//           <p>{blog.date}</p>
//         </div>
//       </div>

//       <Image
//         src={blog.image}
//         alt={blog.title}
//         width={1120}
//         height={595}
//         className="mt-4 rounded-md"
//       />

//       <div className="flex md:gap-12 max-md:flex-col-reverse mt-12 relative">
//         <div className="flex flex-col space-y-3">
//           <div className="sticky top-36">
//             <p className="text-lg uppercase text-muted-foreground">Share</p>
//             <div className="flex flex-col max-md:flex-row md:space-y-3 max-md:space-x-3 mt-4">
//               <Button size="icon" variant="outline"><Twitter /></Button>
//               <Button size="icon" variant="outline"><Facebook /></Button>
//               <Button size="icon" variant="outline"><Linkedin /></Button>
//               <Button size="icon" variant="outline"><Send /></Button>
//               <Button size="icon" variant="outline"><Link2 /></Button>
//             </div>
//           </div>
//         </div>
//         <div className="flex-1 prose dark:prose-invert">{parse(content)}</div>
//       </div>

//       <div className="flex mt-6 gap-6 items-center max-md:flex-col">
//         <Image
//           src={blog.images}
//           alt={blog.author}
//           width={155}
//           height={155}
//           className="rounded-md max-md:self-start"
//         />
//         <div className="flex-1 flex flex-col space-y-4">
//           <h2 className="text-3xl font-creteRound">{blog.author}</h2>
//           <p className="line-clamp-2 text-muted-foreground">
//             {blog.author} is a writer based in New York City. Interested in tech,
//             science, and more.
//           </p>
//           <Link
//             href="/blogs"
//             className="flex items-center gap-2 hover:text-blue-500 underline transition-colors"
//           >
//             <span>See all posts by this author</span>
//             <ArrowUpRight />
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }
import { blogs } from '@/constants'
import { notFound } from 'next/navigation'
import { format } from 'date-fns'

interface Params {
  slug: string
}

interface SlugPageProps {
  params: Params
}

// Static params yaratish, har bir blog slug uchun
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}

// Blog sahifasi
export default async function SlugPage({ params }: SlugPageProps) {
  const blog = blogs.find((b) => b.slug === params.slug)
  if (!blog) return notFound()

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
      <p className="text-sm text-muted-foreground mb-4">
        {format(new Date(blog.date), 'MMMM dd, yyyy')} — {blog.author}
      </p>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-auto rounded-lg mb-4"
      />
      <p className="text-lg">{blog.description}</p>
    </div>
  )
}
