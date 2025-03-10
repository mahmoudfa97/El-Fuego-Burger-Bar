"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { getAllBurgers } from "@/lib/burgers"
import BurgerCard from "@/components/burger-card"
import type { Burger } from "@/lib/types"

export default function MenuPage() {
  const { t } = useLanguage()
  const [burgers, setBurgers] = useState<Burger[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadBurgers() {
      const data = await getAllBurgers()
      setBurgers(data)
      setLoading(false)
    }

    loadBurgers()
  }, [])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-100">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-red-600 border-t-transparent"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-100 px-4 py-16">
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <h1 className="font-serif text-4xl font-bold text-stone-900 md:text-5xl">{t("menu")}</h1>
          <p className="mt-4 text-stone-600">{t("authenticFlavors")}</p>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 font-serif text-2xl font-bold text-stone-800">{t("signatureBurgers")}</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {burgers
              .filter((burger) => burger.category === "signature")
              .map((burger) => (
                <BurgerCard key={burger.id} burger={burger} />
              ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 font-serif text-2xl font-bold text-stone-800">{t("spicySpecials")}</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {burgers
              .filter((burger) => burger.category === "spicy")
              .map((burger) => (
                <BurgerCard key={burger.id} burger={burger} />
              ))}
          </div>
        </div>

        <div>
          <h2 className="mb-6 font-serif text-2xl font-bold text-stone-800">{t("vegetarianOptions")}</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {burgers
              .filter((burger) => burger.category === "vegetarian")
              .map((burger) => (
                <BurgerCard key={burger.id} burger={burger} />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

