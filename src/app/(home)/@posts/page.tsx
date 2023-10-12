'use client'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Loader } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import type { Post } from '~/models/post'

dayjs.extend(relativeTime)

const getData = async (): Promise<Post[]> => {
  return await fetch('/api/posts').then((res) => res.json())
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>()

  useEffect(() => {
    getData().then((data) => setPosts(data))
  }, [])

  if (!posts) {
    return (
      <div className="mx-auto flex max-w-4xl items-center justify-center px-4 py-16">
        <Loader className="h-8 w-8 animate-spin text-blue-500 duration-1000" />
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-4">
      <section className="mt-20 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-gray-100">Publicações</h2>
          <span className="whitespace-nowrap text-sm text-gray-400">{posts.length} publicações</span>
        </div>
        <input
          type="search"
          className="rounded-lg border border-gray-600 bg-gray-950 px-4 py-3 transition placeholder:text-gray-500 focus:border-blue-500/70"
          placeholder="Buscar conteúdo"
        />
      </section>
      <main className="mt-12 grid grid-cols-2 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="rounded-lg bg-gray-800 shadow-lg transition hover:bg-gray-700/70">
            <Link href={`/posts/${post.id}`} className="flex flex-col gap-4 p-8">
              <header className="flex items-start justify-between gap-4">
                <h1 className="text-xl font-bold">{post.title}</h1>
                <span className="whitespace-nowrap text-sm text-gray-400">
                  {dayjs(new Date(post.createdAt)).fromNow()}
                </span>
              </header>
              <p className="line-clamp-4 text-gray-300">{post.body}</p>
            </Link>
          </article>
        ))}
      </main>
    </div>
  )
}
