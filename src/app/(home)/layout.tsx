import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'GitHub Blog',
  description:
    'Um blog usando as issues do GitHub para as postagens, desenvolvido com Next.js <App Router> e TailwindCSS',
}

export default function Layout({ children, issues }: { children: ReactNode; issues: ReactNode }) {
  return (
    <>
      {children}
      {issues}
    </>
  )
}
