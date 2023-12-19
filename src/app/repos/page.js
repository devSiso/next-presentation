import Link from "next/link";

export default async function Repos() {
  const data = await fetch('http://localhost:3000/' + 'api/repos');
  const repos = await data.json();

  return (
    <div>
      <Link href="/">Home</Link>
      <pre>{JSON.stringify(repos, null, 2)}</pre>
    </div>
  )
}