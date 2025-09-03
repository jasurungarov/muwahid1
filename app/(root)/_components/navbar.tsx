
'use client'

import ModeToggle from '@/components/shared/mode-toggle'
import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import GlobalSearch from './global-search'
import { useState } from 'react'

function MobileNavbar() {
	const pathname = usePathname()
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<div className='h-[10vh] backdrop-blur-sm border-b fixed z-40 inset-0 bg-background'>
			<div className='container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between px-4'>
				{/* Logo */}
				<Link href={'/'}>
					<h1 className='text-4xl font-creteRound'>Muwahhid</h1>
				</Link>

				{/* Desktop Nav links */}
				<div className='gap-2 hidden md:flex'>
					{navLinks.map(nav => (
						<Link
							key={nav.route}
							href={nav.route}
							className={cn(
								'hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors',
								pathname === nav.route && 'text-blue-400'
							)}
						>
							{nav.name}
						</Link>
					))}
				</div>
				{/* Search */}
				
				<div className='hidden md:flex items-center gap-1'>
					<GlobalSearch />
					<ModeToggle />
 				</div>

				

				{/* Mobile Hamburger */}
				<div className='md:hidden flex items-center gap-2'>
					<GlobalSearch />
					<ModeToggle />
					<button
						onClick={() => setMenuOpen(!menuOpen)}
						className='flex flex-col justify-center items-center gap-1 w-8 h-8'
					>
						<span className={cn('block w-6 h-0.5 bg-current transition-all', menuOpen && 'rotate-45 translate-y-2')}></span>
						<span className={cn('block w-6 h-0.5 bg-current transition-all', menuOpen && 'opacity-0')}></span>
						<span className={cn('block w-6 h-0.5 bg-current transition-all', menuOpen && '-rotate-45 -translate-y-2')}></span>
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className='md:hidden bg-background w-full px-4 py-2 flex flex-col gap-2'>
					{navLinks.map(nav => (
						<Link
							key={nav.route}
							href={nav.route}
							className={cn(
								'hover:bg-blue-400/20 py-2 px-3 cursor-pointer rounded-sm transition-colors',
								pathname === nav.route && 'text-blue-400'
							)}
							onClick={() => setMenuOpen(false)}
						>
							{nav.name}
						</Link>
					))}
				</div>
			)}
		</div>
	)
}

export default MobileNavbar
