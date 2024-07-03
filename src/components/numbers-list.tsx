"use client"

import NumberDecorator from "./number-decorator"

type NumbersListProps = {
  randomNumbers: number[]
}

export default function NumbersList({ randomNumbers }: NumbersListProps) {
  return (
    <ul className="margin-auto mt-6 grid grid-cols-1 rounded-lg bg-page pb-5 pt-4 text-center text-base sm:grid-cols-2">
      {randomNumbers.map((number) => (
        <li
          key={number}
          className="mt-0.5 [&:nth-child(n+6)]:hidden sm:[&:nth-child(n+6)]:block"
        >
          <NumberDecorator className="border-0 px-0">{number}</NumberDecorator>
        </li>
      ))}
    </ul>
  )
}
