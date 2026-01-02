'use client'
import { motion } from 'motion/react'

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

export default function ChooseYourTeamSupport() {
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
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Choose Your Team – Support
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Help and support information for the Choose Your Team mobile app.
        </p>
      </motion.header>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="space-y-4"
      >
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          Choose Your Team helps players quickly and fairly split into random
          teams. Everyone places a finger on the screen, and the app assigns
          teams at random.
        </p>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="space-y-3"
      >
        <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
          Support & Feedback
        </h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          If you need help using the app, want to report a bug, or share
          feedback, you can contact the developer by email. When possible,
          please include your device model, operating system version, and a
          short description of the issue.
        </p>
        <div className="pt-2">
          <p className="font-medium text-zinc-900 dark:text-zinc-100">
            Support email
          </p>
          <a
            href="mailto:contact@hero-app.org"
            className="text-zinc-600 underline underline-offset-2 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            contact@hero-app.org
          </a>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="space-y-3"
      >
        <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
          Compatibility
        </h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          Choose Your Team supports both light and dark mode, following your
          device&apos;s system appearance. The app works fully offline during
          normal use. An internet connection is only required when downloading
          app updates or basic functionality improvements from the app store, if
          applicable.
        </p>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="space-y-3"
      >
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          If you have any questions, encounter problems, or have suggestions to
          improve Choose Your Team, please feel free to reach out at any time.
        </p>
      </motion.section>
    </motion.main>
  )
}
