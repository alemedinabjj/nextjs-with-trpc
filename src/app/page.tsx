import { UsersList } from '@/components/users-list'
import { serverClient } from './_trpc/serverClient'

export default async function Home() {
  const userList = await serverClient.listUsers()

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <UsersList />
      {JSON.stringify(userList)}
    </main>
  )
}
