import { issueSchema } from '~/models/issue'

export async function GET() {
  const response = await fetch('https://api.github.com/search/issues?q=is:issue%20repo:adeonirlabs/ignite-blog', {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  }).then((res) => res.json())

  const issues = issueSchema.array().safeParse(response.items)

  if (!issues.success) throw new Error('Invalid data')

  return Response.json(issues.data)
}
