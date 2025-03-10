"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"

export function SearchForm() {
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log("Searching for:", query)
  }

  return (
    <form onSubmit={handleSubmit} className="relative mt-2">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-stone-500" />
      <Input
        type="search"
        placeholder="Search menu..."
        className="w-full bg-stone-100 pl-9 text-sm"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  )
}

