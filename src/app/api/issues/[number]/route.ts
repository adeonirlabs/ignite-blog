import { issueSchema } from '~/models/issue'

export async function GET(_: Request, { params }: { params: { number: number } }) {
  const number = params.number
  const response = await fetch(`https://api.github.com/repos/adeonirlabs/ignite-blog/issues/${number}`, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  }).then((res) => res.json())

  const issue = issueSchema.safeParse(response)

  if (!issue.success) throw new Error('Invalid data')

  return Response.json(issue.data)
}
