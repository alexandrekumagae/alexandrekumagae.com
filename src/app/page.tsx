import { Header } from '@/components/header'

export default function Home() {
  return (
    <main>
      <Header />
      <div className="mx-auto max-w-3xl py-32 text-center">
        <h1 className="mb-8 text-4xl font-bold">Olá, sou o Alexandre 👋</h1>
        <h2 className="text-xl">
          Desenvolvedor Full Stack com mais de 10 anos de experiência, vivendo
          na intersecção entre negócios e tecnologia.
        </h2>
      </div>
    </main>
  )
}
