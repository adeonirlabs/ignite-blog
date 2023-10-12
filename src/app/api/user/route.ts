import { userSchema } from '~/models/user'

export async function GET() {
  const response = await fetch('https://api.github.com/users/adeonir', {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  }).then((res) => res.json())

  const user = userSchema.safeParse(response)

  if (!user.success) throw new Error('Invalid data')

  return Response.json(user.data)
}
