import Counter from '@/components/Counter';
import { Placeholder } from '@/components/Placeholder';
import Link from 'next/link';
import { Suspense } from'react';

export default function CounterPage() {
  return (
    <div>
      <h1>Counter Page</h1>
      <Link href="/">Home</Link>
      <Counter />
      <Suspense fallback={<p>Loading Placeholder...</p>}>
        <Placeholder />
      </Suspense>
    </div>
  )
}