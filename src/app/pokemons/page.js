import Link from "next/link";

/*
 Since the function is async we can fetch anything here, e.g. a third party api
 or a database.

 By default, a fetch request is made at build time (SSG)
 */

// export const revalidate = 30;
// This exported const above means that the WHOLE page will be revalidated every 30sec

export default async function PokemonList() {
  /* const response = await fetch('https://pokeapi.co/api/v2/pokemon', {
    next: {
      revalidate: 30,
    }
  });

  This fetch api is extended by next, and is capable of revalidate a single request instead of the whole page.
  */

  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = await response.json();

  /*
   We can also set-up the cache config for each request that uses fetch api

   const response = await fetch('https://pokeapi.co/v2/pokemon', {
    cache: 'no-store'
   }); // the default value for cache is "force-cache" that means next intends to cache many requests as possible

   It means that we're not caching the response globally, so every user will have to request the api once
  */

  return (
    <div>
      <h1>Pokemon list</h1>
      <Link href="/">Home</Link>
      <pre>Available apis: {JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}