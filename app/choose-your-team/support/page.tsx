import Link from 'next/link'

export default function ChooseYourTeamSupport() {
  return (
    <main className="max-w-[46rem] pb-16 sm:pb-24">
      <header className="border-border border-b pt-20 pb-10 sm:pt-28 sm:pb-14">
        <p className="text-muted-foreground font-[family-name:var(--font-geist-mono)] text-xs">
          Mobile app · Support
        </p>
        <h1 className="mt-5 text-4xl leading-[1.05] font-medium tracking-[-0.045em] text-balance sm:text-5xl">
          Choose Your Team – Support
        </h1>
        <p className="text-muted-foreground mt-5 max-w-[38rem] text-base leading-7 text-pretty">
          Help and support information for the Choose Your Team mobile app.
        </p>
      </header>

      <section
        aria-labelledby="about-heading"
        className="border-border border-b py-8 sm:py-10"
      >
        <h2
          id="about-heading"
          className="text-muted-foreground font-[family-name:var(--font-geist-mono)] text-xs"
        >
          About the app
        </h2>
        <p className="mt-4 max-w-[42rem] leading-7 text-pretty">
          Choose Your Team helps players quickly and fairly split into random
          teams. Everyone places a finger on the screen, and the app assigns
          teams at random.
        </p>
      </section>

      <section
        aria-labelledby="feedback-heading"
        className="border-border border-b py-8 sm:py-10"
      >
        <h2
          id="feedback-heading"
          className="text-xl font-medium tracking-[-0.025em]"
        >
          Support &amp; Feedback
        </h2>
        <p className="text-muted-foreground mt-4 max-w-[42rem] leading-7 text-pretty">
          If you need help using the app, want to report a bug, or share
          feedback, you can contact the developer by email. When possible,
          please include your device model, operating system version, and a
          short description of the issue.
        </p>
        <address className="mt-6 not-italic">
          <p className="text-muted-foreground text-xs">Support email</p>
          <a
            href="mailto:contact@hero-app.org"
            className="editorial-underline mt-2 inline-block font-medium"
          >
            contact@hero-app.org
          </a>
        </address>
      </section>

      <section
        aria-labelledby="compatibility-heading"
        className="border-border border-b py-8 sm:py-10"
      >
        <h2
          id="compatibility-heading"
          className="text-xl font-medium tracking-[-0.025em]"
        >
          Compatibility
        </h2>
        <p className="text-muted-foreground mt-4 max-w-[42rem] leading-7 text-pretty">
          Choose Your Team supports both light and dark mode, following your
          device&apos;s system appearance. The app works fully offline during
          normal use. An internet connection is only required when downloading
          app updates or basic functionality improvements from the app store, if
          applicable.
        </p>
      </section>

      <section aria-labelledby="contact-heading" className="py-8 sm:py-10">
        <h2 id="contact-heading" className="sr-only">
          Contact support
        </h2>
        <p className="text-muted-foreground max-w-[42rem] leading-7 text-pretty">
          If you have any questions, encounter problems, or have suggestions to
          improve Choose Your Team, please feel free to reach out at any time.
        </p>
      </section>

      <nav
        aria-label="Choose Your Team resources"
        className="border-border flex flex-wrap gap-x-7 gap-y-3 border-t pt-8 text-sm"
      >
        <Link href="/choose-your-team" className="editorial-underline">
          App overview <span aria-hidden="true">←</span>
        </Link>
        <Link
          href="/choose-your-team/privacy-policy"
          className="editorial-underline text-muted-foreground hover:text-foreground"
        >
          Privacy Policy <span aria-hidden="true">→</span>
        </Link>
      </nav>
    </main>
  )
}
