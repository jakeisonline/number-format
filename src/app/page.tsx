import LocaleLookupInput from "@/components/locale-lookup-input"
import LocaleSelection from "@/components/locale-selection"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <header className="flex justify-end py-6 px-6">
        <ThemeToggle />
      </header>
      <div className="relative mx-auto flex w-full max-w-8xl flex-auto justify-center mt-8">
        <section className="flex flex-col space-y-8 w-10/12">
          <p className="inline bg-gradient-to-r text-white bg-clip-text font-display text-7xl font-bold tracking-tight text-transparent text-center break-words">
            Every number format,
            <br /> for every locale
          </p>
          <LocaleLookupInput />
          <LocaleSelection />
        </section>
      </div>
    </main>
  )
}
