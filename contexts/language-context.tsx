"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "es"

type Translations = {
  [key in Language]: {
    [key: string]: string
  }
}

// Basic translations for demonstration
const translations: Translations = {
  en: {
    home: "Home",
    menu: "Menu",
    about: "About",
    contact: "Contact",
    orderNow: "Order Now",
    viewMenu: "View Our Menu",
    orderOnline: "Order Online",
    featuredBurgers: "Our Featured Burgers",
    handcrafted: "Handcrafted with love and authentic Mexican spices",
    testimonials: "What Our Customers Say",
    findUs: "Find Us",
    hours: "Hours",
    getDirections: "Get Directions",
    addToCart: "Add to Cart",
    showMore: "Show more",
    showLess: "Show less",
    ingredients: "Ingredients",
    welcome: "Welcome to",
    tagline: "Authentic Mexican flavors meet gourmet burgers. Experience the fiesta in every bite!",
    signatureBurgers: "Signature Burgers",
    spicySpecials: "Spicy Specials",
    vegetarianOptions: "Vegetarian Options",
    authenticFlavors: "Authentic Mexican flavors in every bite",
    // Cart translations
    cart: "Cart",
    cartEmpty: "Your cart is empty",
    addItemsToCart: "Add some delicious burgers to get started",
    subtotal: "Subtotal",
    tax: "Tax (10%)",
    total: "Total",
    checkout: "Checkout",
    clearCart: "Clear Cart",
    addedToCart: "Added to cart",
  },
  es: {
    home: "Inicio",
    menu: "Menú",
    about: "Nosotros",
    contact: "Contacto",
    orderNow: "Ordenar Ahora",
    viewMenu: "Ver Nuestro Menú",
    orderOnline: "Ordenar en Línea",
    featuredBurgers: "Nuestras Hamburguesas Destacadas",
    handcrafted: "Elaboradas con amor y auténticas especias mexicanas",
    testimonials: "Lo Que Dicen Nuestros Clientes",
    findUs: "Encuéntranos",
    hours: "Horarios",
    getDirections: "Cómo Llegar",
    addToCart: "Añadir al Carrito",
    showMore: "Mostrar más",
    showLess: "Mostrar menos",
    ingredients: "Ingredientes",
    welcome: "Bienvenidos a",
    tagline: "Auténticos sabores mexicanos en cada hamburguesa. ¡Experimenta la fiesta en cada bocado!",
    signatureBurgers: "Hamburguesas Exclusivas",
    spicySpecials: "Especialidades Picantes",
    vegetarianOptions: "Opciones Vegetarianas",
    authenticFlavors: "Auténticos sabores mexicanos en cada bocado",
    // Cart translations
    cart: "Carrito",
    cartEmpty: "Tu carrito está vacío",
    addItemsToCart: "Agrega algunas hamburguesas deliciosas para comenzar",
    subtotal: "Subtotal",
    tax: "Impuesto (10%)",
    total: "Total",
    checkout: "Pagar",
    clearCart: "Vaciar Carrito",
    addedToCart: "Añadido al carrito",
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

