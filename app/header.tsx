import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="border-border flex items-center justify-between border-b py-5">
      <Link
        href="/"
        className="group flex items-center gap-3"
        aria-label="Julien Thomas, home"
      >
        <Image
          src="/profile.jpg"
          alt="Portrait of Julien Thomas"
          width={36}
          height={36}
          sizes="36px"
          className="h-9 w-9 rounded-lg object-cover"
        />
        <span className="leading-tight">
          <span className="text-foreground block text-sm font-medium">
            Julien Thomas
          </span>
          <span className="text-muted-foreground block text-xs">
            Full-stack developer
          </span>
        </span>
      </Link>

      <nav aria-label="Primary navigation">
        <ul className="text-muted-foreground flex items-center gap-4 text-sm sm:gap-6">
          <li>
            <Link
              href="/#work"
              className="hover:text-foreground transition-colors duration-200"
            >
              Work
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link
              href="/#notes"
              className="hover:text-foreground transition-colors duration-200"
            >
              Notes
            </Link>
          </li>
          <li>
            <Link
              href="/jt-company"
              className="hover:text-foreground transition-colors duration-200"
            >
              JT Company
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link
              href="/#contact"
              className="hover:text-foreground transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
