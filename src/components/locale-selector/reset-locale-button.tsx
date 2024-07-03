import { usePlausible } from "next-plausible"
import useSelectedLocaleContext from "../../hooks/use-selected-locale-context"
import { Button } from "@/components/ui/button"

export default function ResetLocaleButton() {
  const { browserLocale, resetSelectedLocale } = useSelectedLocaleContext()
  const plausible = usePlausible()

  const handleClick = () => {
    resetSelectedLocale()
    plausible("Reset Locale", {
      props: {
        "button-id": "reset--main-page",
      },
    })
  }

  return (
    <Button
      aria-label={`Reset to your browser locale: ${browserLocale}`}
      variant="link"
      className="text-md h-auto p-0 text-black/60 underline decoration-dotted hover:text-blue dark:text-white/60 dark:hover:text-blue"
      onClick={handleClick}
    >
      Reset to your browser locale ({browserLocale})
    </Button>
  )
}
