import z from 'zod'

export const userSchema = z
  .object({
    avatar_url: z.string(),
    bio: z.string(),
    company: z.string(),
    followers: z.number(),
    html_url: z.string(),
    login: z.string(),
    name: z.string(),
  })
  .transform((data) => ({
    avatarUrl: data.avatar_url,
    bio: data.bio,
    company: data.company,
    followers: data.followers,
    htmlUrl: data.html_url,
    login: data.login,
    name: data.name,
  }))

export type User = z.infer<typeof userSchema>
