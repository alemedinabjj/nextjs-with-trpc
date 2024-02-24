import { serverClient } from "./_trpc/serverClient";

export default async function Home() {
  const data = await serverClient.getData();
  const dataSet = await serverClient.setData("setData");

  const users = await serverClient.listUsers();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {data && <h1 className="text-4xl font-bold">{data}</h1>}
      {dataSet && <h1 className="text-4xl font-bold">{dataSet}</h1>}

      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </main>
  );
}
