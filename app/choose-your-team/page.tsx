import Link from 'next/link'
import type { SimpleIcon } from 'simple-icons'
import { siApple, siGoogleplay } from 'simple-icons'

const APP_STORE_LINK =
  'https://apps.apple.com/fr/app/choose-your-team/id6756816697?l=en-GB'
const PLAY_STORE_LINK =
  'https://play.google.com/apps/testing/com.doncarlos.chooseyourteam'

function StoreIcon({ icon }: { icon: SimpleIcon }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="currentColor"
    >
      <path d={icon.path} />
    </svg>
  )
}

const storeLinkClassName =
  'inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:w-auto'

export default function ChooseYourTeamLanding() {
  return (
    <main className="pb-16 sm:pb-24">
      <header className="border-border border-b pt-20 pb-12 sm:pt-28 sm:pb-16">
        <p className="text-muted-foreground font-[family-name:var(--font-geist-mono)] text-xs">
          Mobile app · iOS and Android
        </p>
        <h1 className="mt-5 max-w-[44rem] text-4xl leading-[1.02] font-medium tracking-[-0.05em] text-balance sm:text-6xl">
          Choose Your Team
        </h1>
        <p className="text-muted-foreground mt-6 max-w-[38rem] text-lg leading-8 text-pretty">
          Split into random teams in seconds. Everyone places a finger on the
          screen and the app picks teams instantly.
        </p>
      </header>

      <section
        aria-labelledby="download-heading"
        className="border-border border-b py-10 sm:py-12"
      >
        <h2
          id="download-heading"
          className="text-muted-foreground font-[family-name:var(--font-geist-mono)] text-xs"
        >
          Download
        </h2>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={APP_STORE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`${storeLinkClassName} bg-foreground text-background hover:bg-foreground/85`}
          >
            <StoreIcon icon={siApple} />
            Download on the App Store
          </a>
          <a
            href={PLAY_STORE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`${storeLinkClassName} border-border text-foreground hover:bg-muted border`}
          >
            <StoreIcon icon={siGoogleplay} />
            Get it on Google Play
          </a>
        </div>
      </section>

      <nav
        aria-label="Choose Your Team resources"
        className="flex flex-wrap gap-x-7 gap-y-3 pt-8 text-sm"
      >
        <Link href="/choose-your-team/support" className="editorial-underline">
          Support <span aria-hidden="true">→</span>
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
