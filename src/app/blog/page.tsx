import { Header } from '@/components/header'

import { Post } from '@/components/blog/post'

interface PostProps {
  id: string
  title: string
  slug: string
  summary: string
  published_date: string
}

export default function Blog() {
  const posts: PostProps[] = [
    {
      id: '1',
      title: 'Dicas de carreira',
      slug: 'dicas-de-carreira',
      summary: 'Replicando o web app do caju.',
      published_date: '19 de março de 2024',
    },
  ]

  return (
    <>
      <h1 className="mb-8 text-4xl font-black">Blog</h1>
      <Header />
      <ul>
        {posts.map((post: PostProps) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </>
  )
}
