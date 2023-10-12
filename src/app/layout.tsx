import './globals.css'

import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import type { ReactNode } from 'react'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GitHub Blog',
  description: 'Um blog criado por Adeonir Kohl como desafio de react, usando issues do GitHub para as postagens',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
