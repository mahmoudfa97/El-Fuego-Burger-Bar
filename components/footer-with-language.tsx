"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function FooterWithLanguage() {
  const { t } = useLanguage()

  return (
    <footer className="border-t bg-stone-900 px-4 py-10 text-white">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white">EF</div>
              <span className="font-serif text-xl font-bold">El Fuego</span>
            </Link>
            <p className="mt-4 text-sm text-stone-400">{t("tagline")}</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">{t("home")}</h3>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <Link href="/" className="hover:text-white">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-white">
                  {t("menu")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">{t("contact")}</h3>
            <address className="not-italic">
              <p className="text-sm text-stone-400">
                123 Spicy Avenue
                <br />
                Flavor Town, Mexico City
                <br />
                Mexico
              </p>
              <p className="mt-2 text-sm text-stone-400">
                Phone: (123) 456-7890
                <br />
                Email: hola@elfuego.com
              </p>
            </address>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">{t("hours")}</h3>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>Monday - Thursday: 11am - 10pm</li>
              <li>Friday - Saturday: 11am - 12am</li>
              <li>Sunday: 12pm - 9pm</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-stone-800 pt-6 text-center text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} El Fuego Burger Bar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

