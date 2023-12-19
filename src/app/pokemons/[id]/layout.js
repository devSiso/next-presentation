export function generateMetadata({ params }) {
  return {
    title: `Pokemon #${params.id}`,
  }
}
export default function RootLayout({ children }) {
  return (
    <div>
      <header>
        This is a pokemon sub-page!
      </header>
      {children}
    </div>
  )
}