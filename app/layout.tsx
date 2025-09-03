
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ChildProps } from '@/types'
import type { Metadata } from 'next'
import { Crete_Round, Work_Sans } from 'next/font/google'
import Link from 'next/link'
import { navLinks } from '@/constants'
import './globals.css'

const creteRound = Crete_Round({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-creteRound',
})
const workSans = Work_Sans({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-workSans',
})

export const metadata: Metadata = {
  title: 'Muwahhid dasturlashga oid maqolalar',
  description:
    'Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.',
}

export default function RootLayout({ children }: ChildProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${creteRound.variable} ${workSans.variable} overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="w-full bg-white dark:bg-gray-900 shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
              <Link href="/" className="text-2xl font-bold">
                Muwahhid Blog
              </Link>
              <nav className="flex gap-6">
                {navLinks.map(link => (
                  <Link
                    key={link.route}
                    href={link.route}
                    className="flex items-center gap-1 hover:text-blue-500 transition-colors"
                  >
                    <link.icon className="w-5 h-5" />
                    <span>{link.name}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
