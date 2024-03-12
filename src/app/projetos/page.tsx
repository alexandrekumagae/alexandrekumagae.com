import { Header } from '@/components/header'

import { Project } from '@/components/project/project'
import { Metadata } from 'next'

interface ProjectProps {
  id: string
  title: string
  description: string
  url: string
}

export const metadata: Metadata = {
  title: 'Projetos | Alexandre Kumagae',
  description: 'Meus projetos.',
}

export default function Projects() {
  const projects: ProjectProps[] = [
    {
      id: '1',
      title: 'alexandrekumagae.com',
      description: 'Meu primeiro site pessoal.',
      url: 'https://alexandrekumagae.vercel.app/',
    },
    {
      id: '2',
      title: 'Robinju Benefícios',
      description: 'Uma réplica em formato web do app caju.',
      url: 'https://robinju-beneficios.vercel.app/',
    },
  ]

  return (
    <>
      <h1 className="mb-8 text-4xl font-black">Projetos</h1>
      <Header />
      <ul className="flex flex-col gap-6">
        {projects.map((project: ProjectProps) => (
          <li key={project.id}>
            <Project project={project} />
          </li>
        ))}
      </ul>
    </>
  )
}
