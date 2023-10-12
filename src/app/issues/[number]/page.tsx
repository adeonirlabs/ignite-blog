'use client'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Calendar, ChevronLeft, ExternalLink, Github, Loader, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import type { Issue } from '~/models/issue'

SyntaxHighlighter.registerLanguage('tsx', tsx)

dayjs.extend(relativeTime)

const getData = async (number: number): Promise<Issue> => {
  return await fetch(`/api/issues/${number}`).then((res) => res.json())
}

export default function IssuePage({ params }: { params: { number: number } }) {
  const { number } = params
  const [issue, setIssue] = useState<Issue>()

  useEffect(() => {
    getData(number).then((data) => setIssue(data))
  }, [number])

  if (!issue) {
    return (
      <div className="mx-auto flex max-w-4xl items-center justify-center px-4 py-16">
        <Loader className="h-8 w-8 animate-spin text-blue-500 duration-1000" />
      </div>
    )
  }

  return (
    <div className="mx-auto -mt-24 max-w-4xl px-4 pb-16">
      <section className="flex gap-8 rounded-xl bg-gray-800 p-8 shadow-xl">
        <div className="flex flex-1 flex-col gap-2">
          <header>
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="flex items-start gap-1 text-sm uppercase text-blue-500 transition hover:text-blue-400"
              >
                <ChevronLeft aria-hidden={true} className="h-5 w-5 shrink-0" /> Voltar
              </Link>
              <Link
                target="_blank"
                href={issue.htmlUrl}
                className="flex items-start gap-2 text-sm uppercase text-blue-500 transition hover:text-blue-400"
              >
                Ver no GitHub <ExternalLink aria-hidden={true} className="h-4 w-4 shrink-0" />
              </Link>
            </div>
            <h1 className="mt-4 text-2xl font-bold">{issue.title}</h1>
          </header>
          <footer className="mt-auto flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-center gap-1 text-gray-200 transition">
              <Github aria-hidden={true} className="h-5 w-5 shrink-0 text-gray-500" /> {issue.user.login}
            </div>
            <div className="flex items-center gap-1 text-gray-200 transition">
              <Calendar aria-hidden={true} className="h-5 w-5 shrink-0 text-gray-500" />
              {dayjs(new Date(issue.createdAt)).fromNow()}
            </div>
            <div className="flex items-center gap-1 text-gray-200 transition">
              <MessageCircle aria-hidden={true} className="h-5 w-5 shrink-0 text-gray-500" /> {issue.comments}
              comentários
            </div>
          </footer>
        </div>
      </section>
      <main>
        <article className="mt-10 flex flex-col gap-4 px-8">
          <Markdown
            components={{
              code({ className, ...props }) {
                const hasLang = /language-(\w+)/.exec(className || '')
                return hasLang ? (
                  <SyntaxHighlighter
                    style={oneDark}
                    language={hasLang[1]}
                    PreTag="div"
                    showLineNumbers={true}
                    useInlineStyles={true}
                  >
                    {String(props.children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props} />
                )
              },
            }}
          >
            {issue.body}
          </Markdown>
        </article>
      </main>
    </div>
  )
}
