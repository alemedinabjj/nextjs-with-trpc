'use client'

import { trpc } from '@/app/_trpc/client'
import { serverClient } from '../_trpc/serverClient'

export function Users({
  initialUsers,
}: {
  initialUsers: Awaited<ReturnType<(typeof serverClient)['listUsers']>>
}) {
  const getUsers = trpc.listUsers.useQuery(undefined, {
    initialData: initialUsers,
    refetchOnMount: false,
    refetchOnReconnect: false,
  })

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <ul>
        {getUsers?.data?.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </main>
  )
}
