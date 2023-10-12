import Image from 'next/image'
import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="flex items-center justify-center bg-red-500 bg-header bg-cover bg-center bg-no-repeat pb-36 pt-16">
        <Image src="/assets/logo.svg" alt="GitHub Blog" width={150} height={100} priority />
      </header>
      {children}
    </>
  )
}
