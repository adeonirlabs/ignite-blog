import type { ReactNode } from 'react'

export default function Layout({ children, comments }: { children: ReactNode; comments: ReactNode }) {
  return (
    <>
      {children}
      {comments}
    </>
  )
}
