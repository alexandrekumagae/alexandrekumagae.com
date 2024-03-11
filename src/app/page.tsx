import { Header } from '@/components/header'

import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

export default async function Home() {
  return (
    <>
      <h1 className="mb-8 text-4xl font-black">Alexandre Kumagae</h1>
      <Header />
      <div>
        <p className="mb-5">Olá, sou o Alexandre 👋</p>
        <p>
          Desenvolvedor com mais de 10 anos de experiência. Ao longo deste
          período, desenvolvi e liderei a criação de diversos tipos de projetos,
          incluindo Sites, SaaS (Software como Serviço), E-commerce, Campanhas
          de E-mail Marketing, Aplicações Web, Sistemas Web, APIs REST, MVPs
          (Produtos Mínimos Viáveis), entre outros.
        </p>
        <div className="mt-5 flex justify-start gap-4">
          <a
            href="https://github.com/alexandrekumagae"
            target="_blank"
            className="transition-all duration-300 ease-out hover:opacity-50"
          >
            <GitHubLogoIcon height={24} width={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/alexandrekumagae/"
            target="_blank"
            className="transition-all duration-300 ease-out hover:opacity-50"
          >
            <LinkedInLogoIcon height={24} width={24} />
          </a>
        </div>
      </div>
    </>
  )
}
