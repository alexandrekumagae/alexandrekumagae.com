import { Footer } from '@/components/footer'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alexandre Kumagae - Desenvolvedor',
  description:
    'Olá, sou o Alexandre, um Desenvolvedor com mais de 11 anos de experiência, apaixonado pela interseção entre tecnologia e negócios.',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}
