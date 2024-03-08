import Link from 'next/link'

export function Header() {
  return (
    <div className="mt-8 flex flex-1 justify-end md:justify-center">
      <nav className="pointer-events-auto hidden md:block">
        <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
          <li>
            <Link
              href="/sobre/"
              className="hover:text-primary-x500 dark:hover:text-primary-x400 relative block px-3 py-2 transition"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              href="/blog/"
              className="hover:text-primary-x500 dark:hover:text-primary-x400 relative block px-3 py-2 transition"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/projetos/"
              className="hover:text-primary-x500 dark:hover:text-primary-x400 relative block px-3 py-2 transition"
            >
              Projetos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
