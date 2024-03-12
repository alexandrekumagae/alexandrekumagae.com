import { Metadata, ResolvingMetadata } from 'next'

import { getPostData } from '@/lib/markdown'

import { PostProps } from '@/types/post'
import Image from 'next/image'

export async function getPost(id: string) {
  const postData = await getPostData(id)

  return postData
}

export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const id = params.id

  const post = await getPostData(id)

  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: `${post.title} - Alexandre Kumagae`,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  }
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post: PostProps = await getPost(params.id)

  return (
    <article>
      <h1 className="mb-8 text-4xl font-black">{post.title}</h1>
      <div className="mb-6 flex justify-between">
        <time className="text-[rgba(113,128,150)]">{post.date}</time>
        <a href="/blog" className="text-[rgba(113,128,150)] underline">
          ← Voltar para blog
        </a>
      </div>
      <Image
        src={`/img/posts/${post.image}`}
        alt={post.title}
        width={1000}
        height={1000}
        className="mx-auto max-h-[400px] w-auto"
      />
      <div
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        className="markdown"
      />
    </article>
  )
}
