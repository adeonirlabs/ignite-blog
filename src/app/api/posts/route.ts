import { postSchema } from '~/models/post'

export async function GET() {
  const response = await fetch('https://api.github.com/search/issues?q=is:issue%20repo:adeonirlabs/ignite-blog', {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  }).then((res) => res.json())

  const posts = postSchema.array().safeParse(response.items)

  if (!posts.success) throw new Error('Invalid data')

  return Response.json(posts.data)
}
