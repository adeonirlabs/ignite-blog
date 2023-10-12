import { z } from 'zod'

export const commentSchema = z
  .object({
    id: z.number(),
    body: z.string(),
    user: z.object({
      login: z.string(),
    }),
    created_at: z.string(),
    issue_url: z.string(),
    issue_id: z.number().optional(),
  })
  .transform((comment) => ({
    id: comment.id,
    body: comment.body,
    author: comment.user.login,
    createdAt: comment.created_at,
    issueId: Number(comment.issue_url.replace('https://api.github.com/repos/adeonirlabs/ignite-blog/issues/', '')),
  }))

export type Comment = z.infer<typeof commentSchema>
