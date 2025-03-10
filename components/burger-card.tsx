"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp, ShoppingCart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Burger } from "@/lib/types"

interface BurgerCardProps {
  burger: Burger
}

export default function BurgerCard({ burger }: BurgerCardProps) {
  const [expanded, setExpanded] = useState(false)
  const { t, language } = useLanguage()

  // Get the appropriate description based on language
  const description = language === "es" && burger.descriptionEs ? burger.descriptionEs : burger.description

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={burger.image || "/placeholder.svg"}
          alt={burger.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        {burger.isNew && (
          <Badge className="absolute right-2 top-2 bg-yellow-500 text-black">
            {language === "es" ? "Nuevo" : "New"}
          </Badge>
        )}
        {burger.spiceLevel > 3 && (
          <Badge className="absolute left-2 top-2 bg-red-600">🔥 {language === "es" ? "Picante" : "Spicy"}</Badge>
        )}
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-serif text-xl font-bold">{burger.name}</h3>
            <p className="text-sm text-stone-500">{burger.tagline}</p>
          </div>
          <div className="text-lg font-bold text-red-600">${burger.price.toFixed(2)}</div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className={`text-sm text-stone-600 ${!expanded && "line-clamp-2"}`}>{description}</p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-1 flex items-center text-xs font-medium text-stone-500 hover:text-stone-800"
        >
          {expanded ? (
            <>
              {t("showLess")} <ChevronUp className="ml-1 h-3 w-3" />
            </>
          ) : (
            <>
              {t("showMore")} <ChevronDown className="ml-1 h-3 w-3" />
            </>
          )}
        </button>

        {expanded && (
          <div className="mt-3">
            <h4 className="text-xs font-semibold uppercase text-stone-500">{t("ingredients")}</h4>
            <ul className="mt-1 text-xs text-stone-600">
              {burger.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-red-600 hover:bg-red-700">
          <ShoppingCart className="mr-2 h-4 w-4" /> {t("addToOrder")}
        </Button>
      </CardFooter>
    </Card>
  )
}

