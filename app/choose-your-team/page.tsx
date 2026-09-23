import Link from 'next/link'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import type { SimpleIcon } from 'simple-icons'
import { siApple, siGoogleplay } from 'simple-icons'

const APP_STORE_LINK = 'https://apps.apple.com/app/id6756816697'
const PLAY_STORE_LINK =
  'https://play.google.com/store/apps/details?id=com.doncarlos.chooseyourteam'

function getStoreLink(userAgent: string | null) {
  if (!userAgent) {
    return null
  }

  if (/android/i.test(userAgent)) {
    return PLAY_STORE_LINK
  }

  if (/(iphone|ipad|ipod)/i.test(userAgent)) {
    return APP_STORE_LINK
  }

  if (/macintosh.*mobile/i.test(userAgent)) {
    return APP_STORE_LINK
  }

  return null
}

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

const sectionLabelClassName =
  'text-muted-foreground font-[family-name:var(--font-geist-mono)] text-xs'

const steps = [
  {
    title: 'One finger = one player',
    body: 'Everyone puts a finger on the screen. No names, no accounts, no setup — just fingers on glass.',
  },
  {
    title: 'Pick 2 to 5 groups',
    body: 'Choose how many teams you need, then hold to reveal each player’s color and group number.',
  },
  {
    title: 'Lift to lock the result',
    body: 'When everyone lifts, teams are locked. Fair, instant, and impossible to argue with.',
  },
]

const features = [
  {
    title: 'Built for real game nights',
    body: 'Pool, darts, foosball, table tennis, padel doubles — anywhere teams need to form in seconds.',
  },
  {
    title: 'Multi-round for bigger groups',
    body: '6 to 10 players? Run it in steps. Same fairness, same simple finger flow.',
  },
  {
    title: 'Offline, private, free',
    body: 'No ads, no tracking, no signup. Works without internet when the bar Wi‑Fi is useless.',
  },
  {
    title: 'Light & dark + haptics',
    body: 'Themes for any room lighting, with haptic feedback when fingers appear and teams reveal.',
  },
]

const useCases = [
  'Pool & snooker nights',
  'Darts & foosball',
  'Padel / tennis doubles',
  'Party icebreakers',
  'Sports warm-ups',
  'Classroom quick groups',
]

const faqs = [
  {
    q: 'How does Choose Your Team work?',
    a: 'Everyone places one finger on the phone. Each finger is a player. Choose 2–5 groups, hold to reveal colors and team numbers, lift to lock. No names to type.',
  },
  {
    q: 'Is it free?',
    a: 'Yes — free on iPhone and Android, with no ads, no account, and no tracking.',
  },
  {
    q: 'Does it work offline?',
    a: 'Yes. The whole experience works offline, so you can use it in bars, gyms, and parks.',
  },
  {
    q: 'How many players can we use?',
    a: 'Single round supports forming 2–5 teams. Multi-round mode covers 6–10 players.',
  },
  {
    q: 'How is this different from a finger chooser?',
    a: 'Choose Your Team is team-first: it splits the group into fair random teams instead of only picking who goes first or who pays.',
  },
  {
    q: 'Comment former des équipes au hasard rapidement ?',
    a: 'Chacun pose un doigt sur l’écran, choisissez 2 à 5 groupes, maintenez pour révéler, relâchez pour valider. Gratuit, hors ligne, sans publicité.',
  },
]

export default async function ChooseYourTeamLanding() {
  const requestHeaders = await headers()
  const storeLink = getStoreLink(requestHeaders.get('user-agent'))

  if (storeLink) {
    redirect(storeLink)
  }

  return (
    <main className="pb-16 sm:pb-24">
      <header className="border-border border-b pt-20 pb-12 sm:pt-28 sm:pb-16">
        <p className={sectionLabelClassName}>Mobile app · iOS and Android</p>
        <h1 className="mt-5 max-w-[44rem] text-4xl leading-[1.02] font-medium tracking-[-0.05em] text-balance sm:text-6xl">
          Choose Your Team
        </h1>
        <p className="text-muted-foreground mt-6 max-w-[38rem] text-lg leading-8 text-pretty">
          Split into random teams in seconds. Everyone places a finger on the
          screen and the app picks fair teams instantly — free, offline, no ads.
        </p>
        <p className="text-muted-foreground mt-4 max-w-[38rem] text-base leading-7 text-pretty">
          Formez des équipes équitables en quelques secondes. Un doigt par
          joueur, résultat immédiat. Gratuit sur iPhone et Android.
        </p>
      </header>

      <section
        aria-labelledby="download-heading"
        className="border-border border-b py-10 sm:py-12"
      >
        <h2 id="download-heading" className={sectionLabelClassName}>
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

      <section
        aria-labelledby="how-heading"
        className="border-border border-b py-10 sm:py-12"
      >
        <h2 id="how-heading" className={sectionLabelClassName}>
          How it works
        </h2>
        <ol className="mt-8 grid gap-8 sm:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="max-w-[22rem]">
              <p className="font-[family-name:var(--font-geist-mono)] text-xs">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 text-lg font-medium tracking-[-0.02em]">
                {step.title}
              </h3>
              <p className="text-muted-foreground mt-3 text-sm leading-6">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section
        aria-labelledby="features-heading"
        className="border-border border-b py-10 sm:py-12"
      >
        <h2 id="features-heading" className={sectionLabelClassName}>
          Features
        </h2>
        <ul className="mt-8 grid gap-8 sm:grid-cols-2">
          {features.map((feature) => (
            <li key={feature.title} className="max-w-[28rem]">
              <h3 className="text-lg font-medium tracking-[-0.02em]">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mt-3 text-sm leading-6">
                {feature.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="usecases-heading"
        className="border-border border-b py-10 sm:py-12"
      >
        <h2 id="usecases-heading" className={sectionLabelClassName}>
          Perfect for
        </h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {useCases.map((item) => (
            <li
              key={item}
              className="border-border text-foreground rounded-full border px-3 py-1.5 text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="faq-heading"
        className="border-border border-b py-10 sm:py-12"
      >
        <h2 id="faq-heading" className={sectionLabelClassName}>
          FAQ
        </h2>
        <div className="mt-8 max-w-[42rem] space-y-8">
          {faqs.map((item) => (
            <div key={item.q}>
              <h3 className="text-base font-medium tracking-[-0.01em]">
                {item.q}
              </h3>
              <p className="text-muted-foreground mt-2 text-sm leading-6">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="cta-heading"
        className="border-border border-b py-10 sm:py-12"
      >
        <h2
          id="cta-heading"
          className="max-w-[28rem] text-2xl font-medium tracking-[-0.03em] text-balance"
        >
          Stop arguing. Put your fingers down.
        </h2>
        <p className="text-muted-foreground mt-4 max-w-[34rem] text-sm leading-6">
          Download Choose Your Team and form fair random teams in seconds —
          wherever the game is.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={APP_STORE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`${storeLinkClassName} bg-foreground text-background hover:bg-foreground/85`}
          >
            <StoreIcon icon={siApple} />
            App Store
          </a>
          <a
            href={PLAY_STORE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`${storeLinkClassName} border-border text-foreground hover:bg-muted border`}
          >
            <StoreIcon icon={siGoogleplay} />
            Google Play
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
