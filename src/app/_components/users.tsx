'use client'

import { trpc } from '@/app/_trpc/client'
import { serverClient } from '../_trpc/serverClient'
import { useState } from 'react'

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

  const [newUserName, setNewUserName] = useState('')

  const addUser = trpc.addUser.useMutation({
    onSettled: () => {
      getUsers.refetch()
    },
  })

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <ul>
        {getUsers?.data?.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>

      <input
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
        className="p-2 rounded-md text-black"
      />
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={() => {
          addUser.mutate({ name: newUserName })
          setNewUserName('')
        }}
      >
        Add user
      </button>
    </main>
  )
}
