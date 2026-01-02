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

export default function PrivacyPolicy() {
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
          Privacy Policy — Choose Your Team
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Last updated: March 2025
        </p>
      </motion.header>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="space-y-4"
      >
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          Choose Your Team respects your privacy.
        </p>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          This app does not collect, store, or share any personal data. It works
          entirely offline and does not require user accounts, analytics,
          advertising, or third-party services.
        </p>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="space-y-3"
      >
        <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
          Data Collection
        </h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          Choose Your Team does not collect any personal or usage data. All
          interactions (finger touches, team selection) are processed locally on
          your device and are never transmitted or stored.
        </p>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="space-y-3"
      >
        <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
          Third-Party Services
        </h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          The app does not use third-party SDKs, analytics tools, advertising
          services, or tracking technologies.
        </p>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="space-y-3"
      >
        <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
          Children's Privacy
        </h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          Choose Your Team is suitable for all ages and does not knowingly
          collect any personal information from children.
        </p>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="space-y-3"
      >
        <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
          Changes to This Policy
        </h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          If the app changes in a way that affects privacy, this policy will be
          updated accordingly.
        </p>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="space-y-3"
      >
        <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
          Contact
        </h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          If you have any questions about this Privacy Policy, you can contact:
        </p>
        <div className="pt-2">
          <p className="font-medium text-zinc-900 dark:text-zinc-100">
            Julien Thomas
          </p>
          <a
            href="mailto:contact@hero-app.org"
            className="text-zinc-600 underline underline-offset-2 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            contact@hero-app.org
          </a>
        </div>
      </motion.section>
    </motion.main>
  )
}
