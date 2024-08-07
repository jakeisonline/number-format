"server only"

import { getRandomNumbersSeed } from "@/lib/utils"
import CurrenciesList from "@/components/cards/currencies/currencies-list"

export default async function CurrenciesListServer() {
  const randomNumbers = await getRandomNumbersSeed("currencies")
  return <CurrenciesList randomNumbers={randomNumbers} />
}
