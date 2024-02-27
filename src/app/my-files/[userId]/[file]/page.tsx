const fakeUserConnected = {
  id: '1',
  name: 'John Doe',
}

export default function FilePage({
  params: { userId, file },
}: {
  params: { userId: string; file: string }
}) {
  if (!userId) {
    return <div>Invalid user ID</div>
  }

  if (userId !== fakeUserConnected.id) {
    return <div>Unauthorized</div>
  }

  return (
    <div>
      <h1 className="my-10">Meus arquivos</h1>
      <p>userId: {userId}</p>
      <p>file: {file}</p>
    </div>
  )
}
