import Link from 'next/link'

const fakeUserConnected = {
  id: '1',
  name: 'John Doe',
}

const fakeFiles = [
  {
    id: '1',
    name: 'My File 1',
    src: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    name: 'My File 2',
    src: 'https://via.placeholder.com/150',
  },
]

export default function MyFilesPage({
  params: { userId },
}: {
  params: { userId: string }
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
      <ul className="flex gap-3">
        {fakeFiles.map((file) => (
          <Link key={file.id} href={`/my-files/${userId}/${file.id}`}>
            <img src={file.src} alt={file.name} />
            <p>{file.name}</p>
          </Link>
        ))}
      </ul>
    </div>
  )
}
