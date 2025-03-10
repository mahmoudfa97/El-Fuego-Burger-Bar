"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Burger } from "@/lib/types"

export interface CartItem {
  burger: Burger
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (burger: Burger) => void
  removeFromCart: (burgerId: number) => void
  updateQuantity: (burgerId: number, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
  isCartOpen: boolean
  setIsCartOpen: (isOpen: boolean) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Initialize client-side
  useEffect(() => {
    setIsClient(true)
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (e) {
        console.error("Failed to parse cart from localStorage", e)
      }
    }
  }, [])

  // Save cart to localStorage when it changes
  useEffect(() => {
    if (isClient && items.length > 0) {
      localStorage.setItem("cart", JSON.stringify(items))
    }
  }, [items, isClient])

  const addToCart = (burger: Burger) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.burger.id === burger.id)

      if (existingItem) {
        // Increment quantity if item already exists
        return prevItems.map((item) => (item.burger.id === burger.id ? { ...item, quantity: item.quantity + 1 } : item))
      } else {
        // Add new item with quantity 1
        return [...prevItems, { burger, quantity: 1 }]
      }
    })

    // Open cart when adding items
    setIsCartOpen(true)

    // Close cart after 3 seconds
    setTimeout(() => {
      setIsCartOpen(false)
    }, 3000)
  }

  const removeFromCart = (burgerId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.burger.id !== burgerId))

    // If cart becomes empty after removal, clear localStorage
    if (items.length === 1) {
      localStorage.removeItem("cart")
    }
  }

  const updateQuantity = (burgerId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(burgerId)
      return
    }

    setItems((prevItems) => prevItems.map((item) => (item.burger.id === burgerId ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setItems([])
    localStorage.removeItem("cart")
  }

  // Calculate total items and price
  const totalItems = items.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = items.reduce((total, item) => total + item.burger.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

