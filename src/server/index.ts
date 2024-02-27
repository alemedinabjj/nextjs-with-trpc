import { publicProcedure, router } from './trpc'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { hash } from 'argon2'
import * as trpc from '@trpc/server'

const users = [
  { id: 1, name: 'Tim' },
  { id: 2, name: 'Joe' },
]

export const appRouter = router({
  listUsers: publicProcedure.query(() => {
    return users
  }),

  createUser: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
        avatarUrl: z.string().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      const exists = await prisma.user.findFirst({
        where: {
          email: input.email,
        },
      })

      if (exists) {
        throw new trpc.TRPCError({
          code: 'CONFLICT',
          message: 'User already exists',
        })
      }
      const hashedPassword = await hash(input.password)

      const user = await prisma.user.create({
        data: {
          name: input.name,
          email: input.email,
          password: hashedPassword,
          avatarUrl: input.avatarUrl,
        },
      })
      return {
        status: 201,
        data: user,
        message: 'User created',
      }
    }),

  // example use registerUser procedure
  // const { data, error } = trpc.useMutation('registerUser', {
  //   onSuccess: (data) => {
})
// This type will be used as a reference later...
export type AppRouter = typeof appRouter
