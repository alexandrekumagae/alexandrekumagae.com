import { Metadata } from 'next'
// import Image from 'next/image'

import { getPostData } from '@/lib/markdown'

import { PostProps } from '@/types/post'

async function getPost(id: string) {
  const postData = await getPostData(id)

  return postData
}

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const id = params.id

  const post = await getPost(id)

  return {
    title: `${post.title} - Alexandre Kumagae`,
  }
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post: PostProps = await getPost(params.id)

  return (
    <article>
      <h1 className="title max-w-[650px] text-2xl font-medium tracking-tighter">
        {post.title}
      </h1>
      <div className="mb-8 mt-2 flex max-w-[650px] items-center justify-between text-sm">
        <time className="text-sm text-neutral-600">{post.date}</time>
        <a href="/blog" className="text-neutral-600">
          ← Voltar para o blog
        </a>
      </div>
      {/* <Image
        src={`/img/posts/${post.image}`}
        alt={post.title}
        width={1000}
        height={1000}
        className="mx-auto max-h-[400px] w-auto"
      /> */}
      {/* // eslint-disable-next-line prettier/prettier */}
      <div
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        className="prose-quoteless prose prose-neutral"
      />
    </article>
  )
}
