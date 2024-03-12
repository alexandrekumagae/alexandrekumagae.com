import Link from 'next/link'

import { PostProps } from '@/types/post'

interface PostItemProps {
  post: PostProps
}

export function Post({ post }: PostItemProps) {
  return (
    <div>
      <h3>
        <Link
          href={`/blog/${post.id}`}
          className="mb-3 block text-xl font-semibold text-[#1a202c]"
        >
          {post.title}
        </Link>
      </h3>
      <div className="mb-2">
        {post.summary}
        <Link
          href={`/blog/${post.id}`}
          className="ml-1 text-[rgba(113,128,150)]"
        >
          Leia mais →
        </Link>
      </div>
      <time className="text-sm text-[rgba(113,128,150)]">{post.date}</time>
    </div>
  )
}
