import { Users } from '@/app/_components/users'
import { serverClient } from './_trpc/serverClient'

export default async function Home() {
  const users = await serverClient.listUsers()

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Users initialUsers={users} />
    </main>
  )
}
