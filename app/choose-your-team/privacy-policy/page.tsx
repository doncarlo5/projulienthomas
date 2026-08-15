import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <main className="max-w-[46rem] pb-16 sm:pb-24">
      <header className="border-border border-b pt-20 pb-10 sm:pt-28 sm:pb-14">
        <p className="text-muted-foreground font-[family-name:var(--font-geist-mono)] text-xs">
          Mobile app · Legal
        </p>
        <h1 className="mt-5 text-4xl leading-[1.05] font-medium tracking-[-0.045em] text-balance sm:text-5xl">
          Privacy Policy · Choose Your Team
        </h1>
        <p className="text-muted-foreground mt-5 text-sm">
          Last updated: <time dateTime="2025-03">March 2025</time>
        </p>
      </header>

      <section
        aria-labelledby="privacy-summary-heading"
        className="border-border border-b py-8 sm:py-10"
      >
        <h2
          id="privacy-summary-heading"
          className="text-xl font-medium tracking-[-0.025em]"
        >
          Your privacy
        </h2>
        <div className="text-muted-foreground mt-4 space-y-4 leading-7 text-pretty">
          <p>Choose Your Team respects your privacy.</p>
          <p>
            This app does not collect, store, or share any personal data. It
            works entirely offline and does not require user accounts,
            analytics, advertising, or third-party services.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="data-collection-heading"
        className="border-border border-b py-8 sm:py-10"
      >
        <h2
          id="data-collection-heading"
          className="text-xl font-medium tracking-[-0.025em]"
        >
          Data Collection
        </h2>
        <p className="text-muted-foreground mt-4 leading-7 text-pretty">
          Choose Your Team does not collect any personal or usage data. All
          interactions (finger touches, team selection) are processed locally on
          your device and are never transmitted or stored.
        </p>
      </section>

      <section
        aria-labelledby="third-party-heading"
        className="border-border border-b py-8 sm:py-10"
      >
        <h2
          id="third-party-heading"
          className="text-xl font-medium tracking-[-0.025em]"
        >
          Third-Party Services
        </h2>
        <p className="text-muted-foreground mt-4 leading-7 text-pretty">
          The app does not use third-party SDKs, analytics tools, advertising
          services, or tracking technologies.
        </p>
      </section>

      <section
        aria-labelledby="children-heading"
        className="border-border border-b py-8 sm:py-10"
      >
        <h2
          id="children-heading"
          className="text-xl font-medium tracking-[-0.025em]"
        >
          Children&apos;s Privacy
        </h2>
        <p className="text-muted-foreground mt-4 leading-7 text-pretty">
          Choose Your Team is suitable for all ages and does not knowingly
          collect any personal information from children.
        </p>
      </section>

      <section
        aria-labelledby="policy-changes-heading"
        className="border-border border-b py-8 sm:py-10"
      >
        <h2
          id="policy-changes-heading"
          className="text-xl font-medium tracking-[-0.025em]"
        >
          Changes to This Policy
        </h2>
        <p className="text-muted-foreground mt-4 leading-7 text-pretty">
          If the app changes in a way that affects privacy, this policy will be
          updated accordingly.
        </p>
      </section>

      <section
        aria-labelledby="privacy-contact-heading"
        className="py-8 sm:py-10"
      >
        <h2
          id="privacy-contact-heading"
          className="text-xl font-medium tracking-[-0.025em]"
        >
          Contact
        </h2>
        <p className="text-muted-foreground mt-4 leading-7 text-pretty">
          If you have any questions about this Privacy Policy, you can contact:
        </p>
        <address className="mt-6 not-italic">
          <p className="font-medium">Julien Thomas</p>
          <a
            href="mailto:contact@hero-app.org"
            className="editorial-underline text-muted-foreground hover:text-foreground mt-1 inline-block"
          >
            contact@hero-app.org
          </a>
        </address>
      </section>

      <nav
        aria-label="Choose Your Team resources"
        className="border-border flex flex-wrap gap-x-7 gap-y-3 border-t pt-8 text-sm"
      >
        <Link href="/choose-your-team" className="editorial-underline">
          App overview <span aria-hidden="true">←</span>
        </Link>
        <Link
          href="/choose-your-team/support"
          className="editorial-underline text-muted-foreground hover:text-foreground"
        >
          Support <span aria-hidden="true">→</span>
        </Link>
      </nav>
    </main>
  )
}
