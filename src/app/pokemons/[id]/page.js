import Link from "next/link";

export default async function Pokemon({ params }) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
  const data = await response.json();

  return (
    <div>
      <h1>{`Pokemon #${params.id}`}</h1>
      <Link href="/">Home</Link>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}