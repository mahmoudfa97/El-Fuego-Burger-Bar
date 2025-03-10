"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

import { getFeaturedBurgers } from "@/lib/burgers"
import { Button } from "@/components/ui/button"
import BurgerCard from "@/components/burger-card"
import type { Burger } from "@/lib/types"

export default function Home() {
  const { t } = useLanguage()

  // Since we're now in a client component, we need to handle data fetching differently
  const [featuredBurgers, setFeaturedBurgers] = useState<Burger[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadBurgers() {
      const burgers = await getFeaturedBurgers()
      setFeaturedBurgers(burgers)
      setLoading(false)
    }

    loadBurgers()
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-amber-600 to-red-700 px-4 py-24 text-center md:py-32">
        <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=1664&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat"></div>
        <div className="relative z-10 max-w-4xl space-y-5">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">{t("welcome")}</span>
            <span className="block text-yellow-300">El Fuego Burger Bar!</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">{t("tagline")}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="bg-yellow-500 text-black hover:bg-yellow-400">
              <Link href="/menu">
                {t("viewMenu")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              {t("orderOnline")}
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
      </section>

      {/* Featured Burgers */}
      <section className="bg-stone-100 px-4 py-16">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-3xl font-bold text-stone-900 md:text-4xl">{t("featuredBurgers")}</h2>
            <p className="mt-4 text-stone-600">{t("handcrafted")}</p>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-red-600 border-t-transparent"></div>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredBurgers.map((burger) => (
                <BurgerCard key={burger.id} burger={burger} />
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <Link href="/menu">
                {t("menu")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white px-4 py-16">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-3xl font-bold text-stone-900 md:text-4xl">{t("testimonials")}</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4 text-stone-600">
                  "The El Diablo burger was amazing! Perfectly spiced with authentic Mexican flavors. Will definitely be
                  back for more!"
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-stone-300"></div>
                  <div className="ml-3">
                    <p className="font-medium text-stone-900">Customer {i}</p>
                    <p className="text-sm text-stone-500">Local Guide</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-stone-900 px-4 py-16 text-white">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-bold md:text-4xl">{t("findUs")}</h2>
              <p className="mt-4 text-stone-300">
                123 Spicy Avenue, Flavor Town
                <br />
                Mexico City, Mexico
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-bold">{t("hours")}</h3>
                <p className="mt-2 text-stone-300">
                  Monday - Thursday: 11am - 10pm
                  <br />
                  Friday - Saturday: 11am - 12am
                  <br />
                  Sunday: 12pm - 9pm
                </p>
              </div>
              <Button className="mt-6 bg-yellow-500 text-black hover:bg-yellow-400">{t("getDirections")}</Button>
            </div>
            <div className="h-64 overflow-hidden rounded-lg bg-stone-800 md:h-auto">
              <div className="h-full w-full bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

