import { Header } from '@/components/header'

import { Project } from '@/components/project/project'

interface ProjectProps {
  id: string
  title: string
  description: string
  url: string
}

export default function Projects() {
  const projects: ProjectProps[] = [
    {
      id: '1',
      title: 'Robinju Benefícios',
      description: 'Replicando o web app do caju.',
      url: 'https://robinju-beneficios.vercel.app/',
    },
  ]

  return (
    <>
      <h1 className="mb-8 text-4xl font-black">Projetos</h1>
      <Header />
      <ul>
        {projects.map((project: ProjectProps) => (
          <li key={project.id}>
            <Project project={project} />
          </li>
        ))}
      </ul>
    </>
  )
}
