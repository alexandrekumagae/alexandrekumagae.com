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
          Sou Líder de Tecnologia, Sócio e Desenvolvedor Full Stack na{' '}
          <strong>
            <a href="https://movedigital.com.br" target="_blank">
              Move Digital
            </a>
          </strong>{' '}
          🚀, uma empresa especializada no desenvolvimento de produtos digitais
          com foco na usabilidade e experiência do usuário 👨‍🔧. Com mais de{' '}
          <strong>10 anos</strong> de experiência em desenvolvimento web, domino
          diversas tecnologias, como{' '}
          <strong>
            HTML, CSS, JavaScript, React.js, Node.js, MySQL, PHP e WordPress
          </strong>
          . Na Move Digital, lidero a equipe de desenvolvimento, gerencio
          projetos e me relaciono com os stakeholders, contribuindo para o
          crescimento e sucesso da empresa 📈.
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
          Minha paixão é empreender e inovar 💡, buscando criar soluções que
          gerem valor para os nossos clientes e para a comunidade 🌐. Participei
          da concepção e desenvolvimento de iniciativas como o{' '}
          <strong>MoveMenu</strong>, uma plataforma SaaS para o setor
          alimentício 🍲; <strong>a B4U</strong>, um marketplace de lançamentos
          imobiliários 🏠; e <strong>o Hospede Agora</strong>, uma plataforma de
          turismo que conecta viajantes e acomodações 🌍. Esses projetos me
          desafiaram a aprimorar minhas habilidades em gestão, liderança,
          comunicação e estratégia, além de expandir meu conhecimento do mundo
          dos negócios 📊. Meu objetivo é continuar aprendendo, compartilhando e
          criando soluções digitais que façam a diferença ✨.
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
