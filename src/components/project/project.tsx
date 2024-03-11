interface ProjectProps {
  id: string
  title: string
  description: string
  url: string
}

interface ProjectItemProps {
  project: ProjectProps
}

export function Project({ project }: ProjectItemProps) {
  return (
    <div>
      <h3>
        <a
          href={project.url}
          target="_blank"
          className="mb-3 block text-xl font-semibold text-[#1a202c]"
        >
          {project.title}
        </a>
      </h3>
      <p className="mb-3">{project.description}</p>
      <a
        href={project.url}
        target="_blank"
        className="block text-[rgba(113,128,150)]"
      >
        Acessar Projeto →
      </a>
    </div>
  )
}
