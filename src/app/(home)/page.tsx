'use client'
import { Building, ExternalLink, Github, Loader, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import type { User } from '~/models/user'

const getData = async (): Promise<User> => {
  return await fetch('/api/user').then((res) => res.json())
}

export default function Home() {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    getData().then((data) => setUser(data))
  }, [])

  if (!user) {
    return (
      <div className="mx-auto flex max-w-4xl items-center justify-center px-4 py-16">
        <Loader className="h-8 w-8 animate-spin text-blue-500 duration-1000" />
      </div>
    )
  }

  return (
    <div className="mx-auto -mt-24 max-w-4xl px-4">
      <section className="flex gap-8 rounded-xl bg-gray-800 p-8 shadow-xl">
        <Image
          className="h-36 w-36 rounded-lg"
          src={user.avatarUrl}
          alt={`${user.name} avatar`}
          width={200}
          height={200}
          priority
        />
        <div className="flex flex-1 flex-col gap-2">
          <header className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">
              <span className="sr-only">Este é o blog de </span>
              {user.name}
            </h1>
            <Link
              target="_blank"
              href={`${user.htmlUrl}`}
              className="flex items-start gap-2 text-sm uppercase text-blue-500 transition hover:text-blue-400"
            >
              GitHub <ExternalLink aria-hidden={true} className="h-4 w-4 shrink-0" />
            </Link>
          </header>
          <p>{user.bio}</p>
          <footer className="mt-auto flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-center gap-1 text-gray-200 transition hover:text-gray-100">
              <Github aria-hidden={true} className="h-5 w-5 shrink-0 text-gray-500" /> {user.login}
            </div>
            <div className="flex items-center gap-1 text-gray-200 transition hover:text-gray-100">
              <Building aria-hidden={true} className="h-5 w-5 shrink-0 text-gray-500" /> {user.company}
            </div>
            <div className="flex items-center gap-1 text-gray-200 transition hover:text-gray-100">
              <Users aria-hidden={true} className="h-5 w-5 shrink-0 text-gray-500" /> {user.followers} seguidores
            </div>
          </footer>
        </div>
      </section>
    </div>
  )
}
