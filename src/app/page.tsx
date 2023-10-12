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
      <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-16">
        <Loader className="h-8 w-8 animate-spin text-blue-500 duration-1000" />
      </div>
    )
  }

  return (
    <div className="mx-auto -mt-24 max-w-6xl px-4">
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
            <Link href="#" className="flex items-center gap-1 text-gray-200 transition hover:text-gray-100">
              <Github aria-hidden={true} className="h-5 w-5 shrink-0 text-gray-500" /> {user.login}
            </Link>
            <Link href="#" className="flex items-center gap-1 text-gray-200 transition hover:text-gray-100">
              <Building aria-hidden={true} className="h-5 w-5 shrink-0 text-gray-500" /> {user.company}
            </Link>
            <Link href="#" className="flex items-center gap-1 text-gray-200 transition hover:text-gray-100">
              <Users aria-hidden={true} className="h-5 w-5 shrink-0 text-gray-500" /> {user.followers} seguidores
            </Link>
          </footer>
        </div>
      </section>
      <section className="mt-20 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-gray-100">Publicações</h2>
          <span className="whitespace-nowrap text-sm text-gray-400">6 publicações</span>
        </div>
        <input
          type="search"
          className="rounded-lg border border-gray-600 bg-gray-950 px-4 py-3 transition placeholder:text-gray-500 focus:border-blue-500/70"
          placeholder="Buscar conteúdo"
        />
      </section>
      <main className="mt-12 grid grid-cols-2 gap-8">
        <article className="rounded-lg bg-gray-800 shadow-lg transition hover:bg-gray-700/70">
          <Link href="#" className="flex flex-col gap-4 p-8">
            <header className="flex items-start justify-between gap-4">
              <h1 className="text-xl font-bold">JavaScript data types and data structures</h1>
              <span className="whitespace-nowrap text-sm text-gray-400">Há 1 dia</span>
            </header>
            <p className="line-clamp-4 text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia deleniti unde distinctio eaque, quis
              dolorem porro suscipit minus! Culpa illo iusto totam, quibusdam aliquam quam laudantium saepe possimus
              expedita atque magnam similique laborum cum illum ex incidunt inventore itaque omnis? Nobis explicabo,
              quasi deleniti nam libero repellendus velit fuga?
            </p>
          </Link>
        </article>
        <article className="rounded-lg bg-gray-800 shadow-lg transition hover:bg-gray-700/70">
          <Link href="#" className="flex flex-col gap-4 p-8">
            <header className="flex items-start justify-between gap-4">
              <h1 className="text-xl font-bold">JavaScript data types and data structures</h1>
              <span className="whitespace-nowrap text-sm text-gray-400">Há 1 dia</span>
            </header>
            <p className="line-clamp-4 text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia deleniti unde distinctio eaque, quis
              dolorem porro suscipit minus! Culpa illo iusto totam, quibusdam aliquam quam laudantium saepe possimus
              expedita atque magnam similique laborum cum illum ex incidunt inventore itaque omnis? Nobis explicabo,
              quasi deleniti nam libero repellendus velit fuga?
            </p>
          </Link>
        </article>
        <article className="rounded-lg bg-gray-800 shadow-lg transition hover:bg-gray-700/70">
          <Link href="#" className="flex flex-col gap-4 p-8">
            <header className="flex items-start justify-between gap-4">
              <h1 className="text-xl font-bold">JavaScript data types and data structures</h1>
              <span className="whitespace-nowrap text-sm text-gray-400">Há 1 dia</span>
            </header>
            <p className="line-clamp-4 text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia deleniti unde distinctio eaque, quis
              dolorem porro suscipit minus! Culpa illo iusto totam, quibusdam aliquam quam laudantium saepe possimus
              expedita atque magnam similique laborum cum illum ex incidunt inventore itaque omnis? Nobis explicabo,
              quasi deleniti nam libero repellendus velit fuga?
            </p>
          </Link>
        </article>
        <article className="rounded-lg bg-gray-800 shadow-lg transition hover:bg-gray-700/70">
          <Link href="#" className="flex flex-col gap-4 p-8">
            <header className="flex items-start justify-between gap-4">
              <h1 className="text-xl font-bold">JavaScript data types and data structures</h1>
              <span className="whitespace-nowrap text-sm text-gray-400">Há 1 dia</span>
            </header>
            <p className="line-clamp-4 text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia deleniti unde distinctio eaque, quis
              dolorem porro suscipit minus! Culpa illo iusto totam, quibusdam aliquam quam laudantium saepe possimus
              expedita atque magnam similique laborum cum illum ex incidunt inventore itaque omnis? Nobis explicabo,
              quasi deleniti nam libero repellendus velit fuga?
            </p>
          </Link>
        </article>
      </main>
    </div>
  )
}
