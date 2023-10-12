import type { ReactNode } from 'react'

export default function Layout({ children, issues }: { children: ReactNode; issues: ReactNode }) {
  return (
    <>
      {children}
      {issues}
    </>
  )
}
