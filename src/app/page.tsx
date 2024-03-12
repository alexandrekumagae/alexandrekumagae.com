import { Header } from '@/components/header'

import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

export default async function Home() {
  return (
    <>
      <h1 className="mb-8 text-4xl font-black">Alexandre Kumagae</h1>
      <Header />
      <div>
        <p className="mb-5">Olá, sou o Alexandre 👋</p>
        <p className="mb-4">
          Desenvolvedor e Empreendedor com mais de 10 anos de experiência. Ao
          longo de minha carreira, desenvolvi e liderei uma ampla gama de
          projetos, incluindo Sites Institucionais, Portais de Conteúdo,
          E-commerce, Aplicações Web, Sistemas Web e SaaS (Software como
          Serviço).{' '}
        </p>

        <p className="mb-2">
          Adicionalmente, trabalhei em MVPs (Produtos Mínimos Viáveis) e também
          participei na criação e no crescimento de diversas iniciativas
          empreendedoras:
        </p>
        <ul className="mb-4 list-disc pl-4">
          <li>
            <strong>B4U: </strong>Uma startup que funcionava como um marketplace
            de lançamentos imobiliários;
          </li>
          <li>
            <strong>MoveMenu:</strong> um SaaS no ramo de alimentação;
          </li>
          <li>
            <strong>DestravaMKT (https://destravamarketing.com.br):</strong> um
            curso de marketing digital voltado a pequenos empresários;
          </li>
          <li>
            <strong>Hospede Agora (https://hospedeagora.com.br):</strong> um
            marketplace de turismo.
          </li>
        </ul>

        <p>
          Essas experiências não só aprofundaram meu conhecimento técnico, mas
          também me deram uma sólida compreensão dos aspectos empresariais,
          proporcionando uma visão de negócios abrangente que se estende muito
          além da programação. Compreendendo os dois lados da moeda, tanto a
          perspectiva do cliente quanto a operacional da empresa, acredito ter
          um valor único a agregar aos projetos, equilibrando habilidades
          técnicas com insights estratégicos de negócios.
        </p>
        <div className="mt-5 flex justify-start gap-4">
          <a
            href="https://www.linkedin.com/in/alexandrekumagae/"
            target="_blank"
            className="transition-all duration-300 ease-out hover:opacity-50"
          >
            <LinkedInLogoIcon height={24} width={24} />
          </a>
          <a
            href="https://github.com/alexandrekumagae"
            target="_blank"
            className="transition-all duration-300 ease-out hover:opacity-50"
          >
            <GitHubLogoIcon height={24} width={24} />
          </a>
        </div>
      </div>
    </>
  )
}
