import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import rehype from 'remark-rehype'
import externalLinks from 'rehype-external-links'
import stringify from 'rehype-stringify'

import { PostProps } from '../types/post'

const postsDirectory = path.join(process.cwd(), 'src', 'posts')

export async function getSortedPostsData(): Promise<PostProps[]> {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData: PostProps[] = await Promise.all(
    fileNames.map(async (fileName) => {
      // Remova a extensão '.md' para obter o ID
      const id = fileName.replace(/\.md$/, '')

      // Leia o conteúdo do arquivo markdown
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter para analisar a seção de metadados do post
      const matterResult = matter(fileContents)

      // Use remark para converter Markdown para HTML
      const processedContent = await remark()
        .use(html)
        .use(rehype) // Adiciona conversão para rehype (HTML intermediário)
        .use(externalLinks, { target: '_blank', rel: ['nofollow'] }) // Faz com que links externos abram em nova aba
        .use(stringify) // Converte o HTML intermediário em string HTML final
        .process(matterResult.content)
      const contentHtml = processedContent.toString()

      const PostProps: PostProps = {
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
        summary: matterResult.data.summary,
        image: matterResult.data.image,
        contentHtml,
      }

      return PostProps
    }),
  )

  // Retorne os posts ordenados por data de forma decrescente
  return allPostsData.sort((a, b) => (a.date < b.date ? -1 : 1))
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter para analisar a seção de metadados do post e o conteúdo markdown
  const matterResult = matter(fileContents)

  // Use remark para converter o conteúdo markdown em HTML
  const processedContent = await remark()
    .use(html)
    .use(rehype) // Adiciona conversão para rehype (HTML intermediário)
    .use(externalLinks, { target: '_blank', rel: ['nofollow'] }) // Faz com que links externos abram em nova aba
    .use(stringify) // Converte o HTML intermediário em string HTML final
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine os dados com o id e o conteúdo HTML
  return {
    id,
    contentHtml,
    ...(matterResult.data as {
      date: string
      title: string
      summary: string
      image: string
    }),
  }
}
