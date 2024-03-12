import type { Metadata } from 'next'

import { Header } from '@/components/header'

import { GeistSans } from 'geist/font/sans'

import './globals.css'

export const metadata: Metadata = {
  title: 'Alexandre Kumagae - Desenvolvedor e Empreendedor',
  description:
    'Olá, sou o Alexandre, um Desenvolvedor com mais de 10 anos de experiência, apaixonado pela interseção entre tecnologia e negócios.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body
        className={
          GeistSans.className +
          ' mx-auto mb-40 mt-8 flex max-w-2xl flex-col antialiased'
        }
      >
        <main className="mt-6 flex min-w-0 flex-auto flex-col max-sm:px-6">
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
