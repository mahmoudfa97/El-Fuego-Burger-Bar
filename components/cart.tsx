"use client"
import { Minus, Plus, ShoppingCart, X } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function Cart() {
  const { t } = useLanguage()
  const { items, totalItems, totalPrice, removeFromCart, updateQuantity, clearCart, isCartOpen, setIsCartOpen } =
    useCart()

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
              {totalItems}
            </span>
          )}
          <span className="sr-only">Open cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader className="px-1">
          <SheetTitle className="flex items-center">
            <ShoppingCart className="mr-2 h-5 w-5" />
            {t("cart")} ({totalItems})
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingCart className="mb-4 h-12 w-12 text-muted-foreground" />
              <h3 className="mb-2 text-lg font-semibold">{t("cartEmpty")}</h3>
              <p className="text-sm text-muted-foreground">{t("addItemsToCart")}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.burger.id} className="flex items-start gap-4 rounded-lg border p-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-md">
                    <Image
                      src={item.burger.image || "/placeholder.svg"}
                      alt={item.burger.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium">{item.burger.name}</h4>
                        <p className="text-sm text-muted-foreground">${item.burger.price.toFixed(2)}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => removeFromCart(item.burger.id)}
                      >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </div>
                    <div className="mt-2 flex items-center">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 rounded-full"
                        onClick={() => updateQuantity(item.burger.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                        <span className="sr-only">Decrease quantity</span>
                      </Button>
                      <span className="mx-2 w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 rounded-full"
                        onClick={() => updateQuantity(item.burger.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                        <span className="sr-only">Increase quantity</span>
                      </Button>
                      <div className="ml-auto font-medium">${(item.burger.price * item.quantity).toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t pt-4">
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-muted-foreground">{t("subtotal")}</span>
              <span className="font-medium">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-muted-foreground">{t("tax")}</span>
              <span className="font-medium">${(totalPrice * 0.1).toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between py-2 font-bold">
              <span>{t("total")}</span>
              <span>${(totalPrice * 1.1).toFixed(2)}</span>
            </div>
            <div className="mt-4 space-y-2">
              <Button className="w-full bg-red-600 hover:bg-red-700">{t("checkout")}</Button>
              <Button variant="outline" className="w-full" onClick={clearCart}>
                {t("clearCart")}
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

