export function Footer() {
  return (
    <footer className="border-border text-muted-foreground mt-28 border-t py-6 text-xs sm:mt-36">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Julien Thomas</p>
        <p>Designed and built in Barcelona.</p>
      </div>
    </footer>
  )
}
