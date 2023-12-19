import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h1>Not Found</h1>
      <Link href="/">
        {/* TODO: Wrap text node below into an <a> tag to make an error */}
        Home
      </Link>
    </div>
  )
}