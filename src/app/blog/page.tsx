import { Metadata } from 'next'

import { getSortedPostsData } from '@/lib/markdown'

import { PostProps } from '@/types/post'

import { Header } from '@/components/header'
import { Post } from '@/components/blog/post'

export const metadata: Metadata = {
  title: 'Blog | Alexandre Kumagae',
  description: 'Meus últimos posts.',
}

export default async function Blog() {
  const posts = await getSortedPostsData()

  return (
    <>
      <h1 className="mb-8 text-4xl font-black">Blog</h1>
      <Header />
      <ul className="flex flex-col gap-6">
        {posts.map((post: PostProps) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </>
  )
}
