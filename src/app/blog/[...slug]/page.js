export default function BlogSubPage({ params }) {
  return (
    <div>
      <pre>{params.slug.join('--')}</pre>
    </div>
  )
}