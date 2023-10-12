'use client'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Loader } from 'lucide-react'
import { useEffect, useState } from 'react'

import type { Comment } from '~/models/comments'

dayjs.extend(relativeTime)

const getData = async (number: number): Promise<Comment[]> => {
  return await fetch(`/api/comments/${number}`).then((res) => res.json())
}

export default function CommentsPage({ params }: { params: { number: number } }) {
  const { number } = params
  const [comments, setComments] = useState<Comment[]>()

  useEffect(() => {
    getData(number).then((data) => setComments(data))
  }, [number])

  if (!comments) {
    return (
      <div className="mx-auto flex max-w-4xl items-center justify-center px-4 py-16">
        <Loader className="h-8 w-8 animate-spin text-blue-500 duration-1000" />
      </div>
    )
  }

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-4 px-4 pb-16">
      {comments.map((comment) => (
        <article key={comment.id} className="mx-8 flex flex-col gap-8 rounded-xl bg-gray-800 p-6">
          <p>{comment.body}</p>
          <div className="flex items-baseline justify-end gap-4">
            <p className="text-gray-200">{comment.author}</p>
            <p className="text-xs text-gray-400">{dayjs(new Date(comment.createdAt)).fromNow()}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
