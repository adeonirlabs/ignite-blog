import { commentSchema } from '~/models/comments'

export async function GET(_: Request, { params }: { params: { number: number } }) {
  const number = Number(params.number)
  const response = await fetch('https://api.github.com/repos/adeonirlabs/ignite-blog/issues/comments', {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  }).then((res) => res.json())

  const data = commentSchema.array().safeParse(response)

  if (!data.success) throw new Error('Invalid data')

  const comments = data.data.filter((comment) => comment.issueId === number)

  return Response.json(comments)
}
