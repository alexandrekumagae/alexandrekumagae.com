import type { Metadata } from 'next'

import { Footer } from '@/components/footer'

import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alexandre Kumagae - Desenvolvedor',
  description:
    'Olá, sou o Alexandre, um Desenvolvedor com mais de 11 anos de experiência, apaixonado pela interseção entre tecnologia e negócios.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <main className="mx-auto min-h-[80vh] max-w-2xl pt-20 max-sm:px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
