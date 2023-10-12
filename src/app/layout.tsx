'use client'
import './globals.css'

import { Nunito } from 'next/font/google'
import Image from 'next/image'
import type { ReactNode } from 'react'
import GithubCorner from 'react-github-corner'

const nunito = Nunito({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <header className="flex items-center justify-center bg-red-500 bg-header bg-cover bg-center bg-no-repeat pb-36 pt-16">
          <Image src="/assets/logo.svg" alt="GitHub Blog" width={150} height={100} priority />
        </header>
        {children}
        <GithubCorner href="https://github.com/adeonirlabs/ignite-blog" />
      </body>
    </html>
  )
}
