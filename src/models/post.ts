import { z } from 'zod'

export const postSchema = z
  .object({
    id: z.number(),
    user: z.object({
      login: z.string(),
    }),
    title: z.string(),
    body: z.string(),
    html_url: z.string(),
    comments: z.number(),
    created_at: z.string(),
  })
  .transform((post) => ({
    id: post.id,
    user: post.user.login,
    title: post.title,
    body: post.body,
    htmlUrl: post.html_url,
    comments: post.comments,
    createdAt: post.created_at,
  }))

export type Post = z.infer<typeof postSchema>
