export interface Burger {
  id: number
  name: string
  tagline: string
  description: string
  descriptionEs?: string // Spanish description
  price: number
  image: string
  category: "signature" | "spicy" | "vegetarian"
  ingredients: string[]
  spiceLevel: number // 0-5 scale
  isNew: boolean
  isFeatured: boolean
}

