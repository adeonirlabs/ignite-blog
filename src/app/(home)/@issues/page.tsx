'use client'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Loader } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import type { Issue } from '~/models/issue'

dayjs.extend(relativeTime)

const getData = async (): Promise<Issue[]> => {
  return await fetch('/api/issues').then((res) => res.json())
}

export default function Issues() {
  const [data, setData] = useState<Issue[]>()
  const [issues, setIssues] = useState<Issue[]>()
  const [search, setSearch] = useState('')

  useEffect(() => {
    getData().then((data) => setData(data))
  }, [])

  useEffect(() => {
    setIssues(data?.filter((issue) => issue.title.toLowerCase().includes(search.toLowerCase())))
  }, [data, search])

  if (!issues) {
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
          <span className="whitespace-nowrap text-sm text-gray-400">{issues.length} publicações</span>
        </div>
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="rounded-lg border border-gray-600 bg-gray-950 px-4 py-3 transition placeholder:text-gray-500 focus:border-blue-500/70"
          placeholder="Buscar conteúdo"
        />
      </section>
      <main className="mt-12 grid grid-cols-2 gap-8">
        {issues.map((issue) => (
          <article key={issue.number} className="rounded-lg bg-gray-800 shadow-lg transition hover:bg-gray-700/70">
            <Link href={`/issues/${issue.number}`} className="flex flex-col gap-4 p-8">
              <header className="flex items-start justify-between gap-4">
                <h1 className="text-xl font-bold">{issue.title}</h1>
                <span className="whitespace-nowrap text-sm text-gray-400">
                  {dayjs(new Date(issue.createdAt)).fromNow()}
                </span>
              </header>
              <p className="line-clamp-4 text-gray-300">{issue.body}</p>
            </Link>
          </article>
        ))}
      </main>
    </div>
  )
}
