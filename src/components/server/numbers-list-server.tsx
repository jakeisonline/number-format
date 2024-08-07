"server only"

import { getRandomNumbersSeed } from "@/lib/utils"
import NumbersList from "@/components/cards/numbers/numbers-list"

export default async function NumbersListServer() {
  const randomNumbers = await getRandomNumbersSeed("numbers")
  return <NumbersList randomNumbers={randomNumbers} />
}
