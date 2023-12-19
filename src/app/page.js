import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello World!</h1>
      <ul className="flex flex-col">
        <li>
          <Link href="login">Sign In</Link>
        </li>
        <li>
          <Link href="pokemons">Pokemon List</Link>
        </li>
        <li>
          <Link href="repos">Repos</Link>
        </li>
        <li>
          <Link href="counter">Counter</Link>
        </li>
      </ul>
    </div>
  )
}
