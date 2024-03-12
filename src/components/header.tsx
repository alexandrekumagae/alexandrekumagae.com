import Link from 'next/link'

export function Header() {
  return (
    <div className="-ml-2 mb-16 tracking-tight">
      <nav className="fade relative flex scroll-pr-6 flex-row items-start px-0 pb-0 md:relative md:overflow-auto">
        <ul className="flex flex-row space-x-0 pr-10">
          <li>
            <Link
              href="/"
              className="relative flex px-2 py-1 align-middle transition-all hover:text-neutral-800 "
            >
              home
            </Link>
          </li>
          {/* <li>
            <Link
              href="/projetos/"
              className="transition-all hover:text-neutral-800 flex align-middle relative py-1 px-2"
            >
              Projetos
            </Link>
          </li> */}
          <li>
            <Link
              href="/carreira/"
              className="relative flex px-2 py-1 align-middle transition-all hover:text-neutral-800 "
            >
              carreira
            </Link>
          </li>
          <li>
            <Link
              href="/blog/"
              className="relative flex px-2 py-1 align-middle transition-all hover:text-neutral-800 "
            >
              blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
