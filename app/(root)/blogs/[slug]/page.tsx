'use client'

import { Button } from "@/components/ui/button"
import { ArrowUpRight, CalendarDays, Clock, Facebook, Link2, Linkedin, Minus, Send, Twitter } from "lucide-react"
import Image from "next/image"
import parse from 'html-react-parser'
import { content } from "@/constants"
import Link from "next/link"
// Removed invalid import of PageProps

interface SlugPageProps {
  params: {
    slug: string
  }
}

export default function SlugPage({ params }: SlugPageProps) {
  return (
    <div className="pt-[15vh] max-w-5xl mx-auto">
      <h1 className="lg:text-6xl md:text-5xl text-4xl font-creteRound">
        The AGI hype train is running out of steam
      </h1>

      <div className="flex items-center flex-wrap max-md:justify-center gap-4 mt-4">
        <div className="flex items-center gap-2">
          <Image
            src={'/author/j.jpg'}
            alt="author"
            width={30}
            height={30}
            className="object-cover rounded-sm"
          />
          <p>by Jasur</p>
        </div>
        <Minus/>
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5"/>
          <p>01 min read</p>
        </div>
        <div className="flex items-center gap-2">
          <CalendarDays className="w-5 h-5"/>
          <p>Dec 5, 2022</p>
        </div>
      </div>

      <Image
        src={'/blogs/04.jpg'}
        alt="alt"
        width={1120}
        height={595}
        className="mt-4 rounded-md"
      />

      <div className="flex md:gap-12 max-md:flex-col-reverse mt-12 relative">
        <div className="flex flex-col space-y-3">
          <div className="sticky top-36">
            <p className="text-lg uppercase to-muted-foreground">Share</p>
            <div className="flex flex-col max-md:flex-row md:space-y-3 max-md:space-x-3 mt-4">
              <Button size={'icon'} variant={'outline'}><Twitter/></Button>
              <Button size={'icon'} variant={'outline'}><Facebook/></Button>
              <Button size={'icon'} variant={'outline'}><Linkedin/></Button>
              <Button size={'icon'} variant={'outline'}><Send/></Button>
              <Button size={'icon'} variant={'outline'}><Link2/></Button>
            </div>
          </div>
        </div>
        <div className="flex-1 prose dark:prose-invert">{parse(content)}</div>
      </div>

      <div className="flex mt-6 gap-6 items-center max-md:flex-col">
        <Image
          src={'/author/j.jpg'}
          alt="author"
          width={155}
          height={155}
          className="rounded-md max-md:self-start"
        />
        <div className="flex-1 flex flex-col space-y-4">
          <h2 className="text-3xl font-creteRound">Jasur Ungarov</h2>
          <p className="line-clamp-2 text-muted-foreground">
            Jasur Ungarov is a writer based in New York City. Hi is interested in all things tech, science, and likes to yo-yo in
          </p>
          <Link
            href={'/'}
            className="flex items-center gap-2 hover:text-blue-500 underline transition-colors"
          >
            <span>See all posts by this author</span>
            <ArrowUpRight/>
          </Link>
        </div>
      </div>
    </div>
  )
}
