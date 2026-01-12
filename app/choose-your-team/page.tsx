'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import type { SimpleIcon } from 'simple-icons'
import { siApple, siGoogleplay, siNextdotjs, siVite } from 'simple-icons'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

const APP_STORE_LINK =
  'https://apps.apple.com/fr/app/choose-your-team/id6756816697?l=en-GB'
const PLAY_STORE_LINK =
  'https://play.google.com/apps/testing/com.doncarlos.chooseyourteam'

function StoreIcon({ icon, label }: { icon: SimpleIcon; label: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
    >
      <title>{label}</title>
      <path d={icon.path} />
    </svg>
  )
}

export default function ChooseYourTeamLanding() {
  return (
    <motion.main
      className="space-y-12 pb-12"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.header
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="space-y-4"
      >
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Choose Your Team
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400">
          Split into random teams in seconds. Everyone places a finger on the
          screen and the app picks teams instantly.
        </p>
      </motion.header>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="flex flex-col gap-4 sm:flex-row"
      >
        <a
          href={APP_STORE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          <StoreIcon icon={siApple} label="App Store" />
          Download on the App Store
        </a>
        <a
          href={PLAY_STORE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-100 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
        >
          <StoreIcon icon={siGoogleplay} label="Google Play" />
          Get it on Google Play
        </a>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="text-sm text-zinc-500 dark:text-zinc-400"
      >
        <Link
          href="/choose-your-team/privacy-policy"
          className="underline underline-offset-4 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          Privacy Policy
        </Link>
      </motion.section>
    </motion.main>
  )
}
