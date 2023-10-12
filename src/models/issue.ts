import { z } from 'zod'

export const issueSchema = z
  .object({
    number: z.number(),
    user: z.object({
      login: z.string(),
    }),
    title: z.string(),
    body: z.string(),
    html_url: z.string(),
    comments: z.number(),
    created_at: z.string(),
  })
  .transform((issue) => ({
    number: issue.number,
    user: issue.user.login,
    title: issue.title,
    body: issue.body,
    htmlUrl: issue.html_url,
    comments: issue.comments,
    createdAt: issue.created_at,
  }))

export type Issue = z.infer<typeof issueSchema>
