export async function Placeholder() {
  const response = await fetch('https://jsonplaceholder.org/posts', {
    cache: 'no-cache',
  });
  const data = await response.json();

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}