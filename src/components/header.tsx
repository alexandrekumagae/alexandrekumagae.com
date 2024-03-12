import Link from 'next/link'

export function Header() {
  return (
    <nav className="mb-8">
      <ul className="flex justify-end">
        <li>
          <Link
            href="/"
            className="relative block px-2 transition hover:underline active:font-bold"
          >
            Sobre
          </Link>
        </li>
        {/* <li>
          <Link
            href="/projetos/"
            className="relative block px-2 transition hover:underline"
          >
            Projetos
          </Link>
        </li> */}
        <li>
          <Link
            href="/blog/"
            className="relative block px-2 transition hover:underline"
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}
