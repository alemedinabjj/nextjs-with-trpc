import { publicProcedure, router } from './trpc'
import { z } from 'zod'

const users = [
  { id: 1, name: 'Tim' },
  { id: 2, name: 'Joe' },
]

export const appRouter = router({
  listUsers: publicProcedure.query(() => {
    return users
  }),
  addUser: publicProcedure
    .input(
      z.object({
        name: z.string(),
      }),
    )
    .mutation(({ input }) => {
      const newUser = {
        id: users.length + 1,
        name: input.name,
      }
      users.push(newUser)
      return newUser
    }),
})
// This type will be used as a reference later...
export type AppRouter = typeof appRouter
