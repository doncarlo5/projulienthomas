'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-800">
          <img
            src="/profile.jpg"
            alt="logo"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Julien Thomas
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Full Stack Developer
          </TextEffect>
        </div>
      </div>
    </header>
  )
}
