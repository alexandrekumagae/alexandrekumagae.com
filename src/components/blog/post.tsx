import Link from 'next/link'

interface PostProps {
  id: string
  title: string
  slug: string
  summary: string
  published_date: string
}

interface PostItemProps {
  post: PostProps
}

export function Post({ post }: PostItemProps) {
  return (
    <div>
      <h3>
        <a
          href={`/blog/${post.slug}`}
          target="_blank"
          className="mb-3 block text-xl font-semibold text-[#1a202c]"
        >
          {post.title}
        </a>
      </h3>
      <div className="mb-2">
        {post.summary}
        <Link
          href={`/blog/${post.slug}`}
          className="ml-1 text-[rgba(113,128,150)]"
        >
          Leia mais →
        </Link>
      </div>
      <time className="text-sm text-[rgba(113,128,150)]">
        {post.published_date}
      </time>
    </div>
  )
}
