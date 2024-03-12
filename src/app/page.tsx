import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  return (
    <>
      <section>
        <h1 className="mb-8 text-2xl font-medium tracking-tighter">
          olá, sou o Alexandre 👋
        </h1>
        <p className="prose prose-neutral mb-8">
          Sou um Desenvolvedor e Empreendedor com mais de{' '}
          <strong>10 anos de carreira</strong>. Atualmente eu atuo como{' '}
          <strong>Líder de Tecnologia e Sócio</strong> na{' '}
          <Link href="https://movedigital.com.br" target="_blank">
            Move Digital
          </Link>
          , onde sou o responsável pelas decisões tecnológicas e estratégicas da
          empresa assim como a gestão da equipe.
        </p>

        <div className="my-8 columns-2 gap-4 sm:columns-3">
          <div className="relative mb-4 h-40">
            <Image
              src="/img/events/evento-quero.jpg"
              alt="Evento na Quero Educação"
              height={500}
              width={500}
              className="h-full rounded-lg object-cover"
            />
          </div>
          <div className="relative mb-4 h-40">
            <Image
              src="/img/events/evento-gdg.jpg"
              alt="Evento no GDG SJC"
              height={500}
              width={500}
              className="h-full rounded-lg object-cover"
            />
          </div>
          <div className="relative mb-4 h-40">
            <Image
              src="/img/events/evento-softwillians.jpg"
              alt="Evento na Softwillians"
              height={500}
              width={500}
              className="h-full rounded-lg object-cover"
            />
          </div>
        </div>

        <p className="prose prose-neutral mb-8">
          Além do desenvolvimento, minha paixão pelo empreendedorismo me levou a
          mergulhar fundo em diversos projetos inovadores, incluindo:
          <ul>
            <li>
              <strong>B4U:</strong> Uma startup que funcionava como um
              marketplace de lançamentos imobiliários;
            </li>
            <li>
              <strong>MoveMenu:</strong> um SaaS no ramo de alimentação;
            </li>
            <li>
              <strong>
                <Link href="https://destravamarketing.com.br" target="_blank">
                  DestravaMKT:
                </Link>
              </strong>{' '}
              um curso de marketing digital voltado a pequenos empresários;
            </li>
            <li>
              <strong>
                <Link href="https://hospedeagora.com.br" target="_blank">
                  Hospede Agora:
                </Link>
              </strong>{' '}
              um marketplace de turismo.
            </li>
          </ul>
        </p>

        <p className="prose prose-neutral mb-8">
          Essas experiências não só aprofundaram meu conhecimento técnico, mas
          também me deram uma sólida compreensão dos aspectos empresariais,
          proporcionando uma visão de negócios abrangente que se estende muito
          além da programação. Compreendendo os dois lados da moeda, tanto a
          perspectiva do cliente quanto a operacional da empresa, acredito ter
          um valor único a agregar aos projetos, equilibrando habilidades
          técnicas com insights estratégicos de negócios.
        </p>

        <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 dark:text-neutral-300 md:flex-row md:space-x-4 md:space-y-0">
          <li>
            <Link
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/alexandrekumagae/"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p className="ml-2 h-7">linkedin</p>
            </Link>
          </li>
          <li>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/alexandrekumagae"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p className="ml-2 h-7">github</p>
            </a>
          </li>
        </ul>
      </section>
    </>
  )
}
