"use client"

import Link from "next/link"
import { Menu, ShoppingBag } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function HeaderWithLanguage() {
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-40 border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2 md:gap-10">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-lg font-bold">
                  {t("home")}
                </Link>
                <Link href="/menu" className="text-lg font-bold">
                  {t("menu")}
                </Link>
                <Link href="#" className="text-lg font-bold">
                  {t("about")}
                </Link>
                <Link href="#" className="text-lg font-bold">
                  {t("contact")}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white">EF</div>
            <span className="font-serif text-xl font-bold">El Fuego</span>
          </Link>
          <nav className="hidden md:flex md:gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-red-600">
              {t("home")}
            </Link>
            <Link href="/menu" className="text-sm font-medium transition-colors hover:text-red-600">
              {t("menu")}
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-red-600">
              {t("about")}
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-red-600">
              {t("contact")}
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Shopping cart</span>
          </Button>
          <Button className="hidden bg-red-600 hover:bg-red-700 md:inline-flex">{t("orderNow")}</Button>
        </div>
      </div>
    </header>
  )
}

