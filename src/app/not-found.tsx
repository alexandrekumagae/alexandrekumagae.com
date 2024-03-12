import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <h1 className="mb-8 text-4xl font-black">
        404 <br />
        Página Não Encontrada
      </h1>
      <Link href="/" className="underline">
        ← Ir para home
      </Link>
    </>
  )
}
