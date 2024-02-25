'use client'

import { trpc } from '@/app/_trpc/client'

export function UsersList() {
  const { isLoading, isError, data } = trpc.listUsers.useQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>{data?.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  )
}
