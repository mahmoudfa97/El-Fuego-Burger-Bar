import type { Burger } from "./types"

// Sample burger data
const burgers: Burger[] = [
  {
    id: 1,
    name: "El Diablo",
    tagline: "For those who dare",
    description:
      "Our signature spicy burger with habanero sauce, jalapeños, pepper jack cheese, and crispy bacon on a toasted brioche bun. Served with a side of cooling lime crema.",
    descriptionEs:
      "Nuestra hamburguesa picante con salsa de habanero, jalapeños, queso pepper jack y tocino crujiente en un pan brioche tostado. Servida con crema de lima refrescante.",
    price: 14.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMbI_4M2EMr4Zt0uKhicANhJKr8r5ZJ18Gkf9_n-iEKE0WIqZgnQ1ncPP5JgsJOysnbvQ&usqp=CAU",
    category: "spicy",
    ingredients: [
      "Beef patty",
      "Habanero sauce",
      "Jalapeños",
      "Pepper jack cheese",
      "Bacon",
      "Brioche bun",
      "Lime crema",
    ],
    spiceLevel: 5,
    isNew: false,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Queso Fundido",
    tagline: "Cheese lover's dream",
    description:
      "Juicy beef patty topped with melted queso, chorizo crumbles, roasted poblano peppers, and caramelized onions on a corn dusted bun.",
    descriptionEs:
      "Jugosa hamburguesa de res cubierta con queso fundido, chorizo desmenuzado, chiles poblanos asados y cebollas caramelizadas en un pan espolvoreado con maíz.",
    price: 15.99,
    image: "https://therecipecritic.com/wp-content/uploads/2024/11/queso-fondito-1-1200x1799.jpg",
    category: "signature",
    ingredients: [
      "Beef patty",
      "Queso sauce",
      "Chorizo crumbles",
      "Poblano peppers",
      "Caramelized onions",
      "Corn dusted bun",
    ],
    spiceLevel: 2,
    isNew: false,
    isFeatured: true,
  },
  {
    id: 3,
    name: "Guacamole Grande",
    tagline: "Fresh & flavorful",
    description:
      "Fresh beef patty topped with a generous portion of homemade guacamole, pico de gallo, lettuce, and Monterey Jack cheese on a whole grain bun.",
    descriptionEs:
      "Hamburguesa de res fresca cubierta con una generosa porción de guacamole casero, pico de gallo, lechuga y queso Monterey Jack en un pan integral.",
    price: 13.99,
    image: "https://tidymom.net/blog/wp-content/uploads/2023/01/fav-guacamole-photograph.jpg",
    category: "signature",
    ingredients: [
      "Beef patty",
      "Homemade guacamole",
      "Pico de gallo",
      "Lettuce",
      "Monterey Jack cheese",
      "Whole grain bun",
    ],
    spiceLevel: 1,
    isNew: false,
    isFeatured: true,
  },
  {
    id: 4,
    name: "Mole Madness",
    tagline: "Rich & complex",
    description:
      "Beef patty smothered in our secret mole sauce, topped with queso fresco, pickled red onions, and crisp lettuce on a sesame seed bun.",
    descriptionEs:
      "Hamburguesa de res bañada en nuestra salsa de mole secreta, cubierta con queso fresco, cebollas rojas encurtidas y lechuga crujiente en un pan con semillas de sésamo.",
    price: 16.99,
    image: "https://carlsbadcravings.com/wp-content/uploads/2022/10/mole-sauce-recipe-with-chicken-3a.jpg",
    category: "signature",
    ingredients: ["Beef patty", "Mole sauce", "Queso fresco", "Pickled red onions", "Lettuce", "Sesame seed bun"],
    spiceLevel: 3,
    isNew: true,
    isFeatured: false,
  },
  {
    id: 5,
    name: "Chipotle Chicken",
    tagline: "Smoky & savory",
    description:
      "Grilled chicken breast with smoky chipotle mayo, avocado slices, tomato, and mixed greens on a toasted ciabatta roll.",
    descriptionEs:
      "Pechuga de pollo a la parrilla con mayonesa de chipotle ahumado, rodajas de aguacate, tomate y mezcla de verdes en un panecillo ciabatta tostado.",
    price: 12.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT5eSt1f2zD6-n9M7wIPg1b52xHQ7ti5GyXg&s",
    category: "signature",
    ingredients: [
      "Grilled chicken breast",
      "Chipotle mayo",
      "Avocado slices",
      "Tomato",
      "Mixed greens",
      "Ciabatta roll",
    ],
    spiceLevel: 2,
    isNew: false,
    isFeatured: false,
  },
  {
    id: 6,
    name: "Inferno",
    tagline: "The ultimate heat challenge",
    description:
      "For extreme heat seekers only! Beef patty with ghost pepper cheese, habanero relish, serrano peppers, and our signature fire sauce on a red chili-infused bun.",
    descriptionEs:
      "¡Solo para los amantes del picante extremo! Hamburguesa de res con queso de chile fantasma, relish de habanero, chiles serranos y nuestra salsa de fuego en un pan infusionado con chile rojo.",
    price: 17.99,
    image: "https://thepepperpantry.com/cdn/shop/articles/20230622185711-spicy-20beef-20burger.jpg?v=1721315333",
    category: "spicy",
    ingredients: [
      "Beef patty",
      "Ghost pepper cheese",
      "Habanero relish",
      "Serrano peppers",
      "Fire sauce",
      "Red chili-infused bun",
    ],
    spiceLevel: 5,
    isNew: true,
    isFeatured: false,
  },
  {
    id: 7,
    name: "Fajita Veggie",
    tagline: "Plant-based perfection",
    description:
      "Plant-based patty with grilled fajita vegetables, vegan chipotle aioli, lettuce, and tomato on a whole wheat bun.",
    descriptionEs:
      "Hamburguesa a base de plantas con vegetales de fajita a la parrilla, alioli de chipotle vegano, lechuga y tomate en un pan integral.",
    price: 13.99,
    image: "https://plantbasedonabudget.com/wp-content/uploads/2013/06/Grilled-Veggie-Fajitas-Plant-Based-on-a-Budget-11.jpg",
    category: "vegetarian",
    ingredients: [
      "Plant-based patty",
      "Grilled peppers & onions",
      "Vegan chipotle aioli",
      "Lettuce",
      "Tomato",
      "Whole wheat bun",
    ],
    spiceLevel: 1,
    isNew: false,
    isFeatured: false,
  },
  {
    id: 8,
    name: "Portobello Asado",
    tagline: "Grilled mushroom delight",
    description:
      "Marinated and grilled portobello mushroom cap with roasted corn salsa, black bean spread, avocado, and cilantro lime slaw on a potato bun.",
    descriptionEs:
      "Sombrero de champiñón portobello marinado y asado con salsa de maíz tostado, pasta de frijoles negros, aguacate y ensalada de cilantro y lima en un pan de papa.",
    price: 12.99,
    image: "https://www.spendwithpennies.com/wp-content/uploads/2024/06/Grilled-Portobello-Mushrooms-SpendWithPennies-5.jpg",
    category: "vegetarian",
    ingredients: [
      "Grilled portobello mushroom",
      "Roasted corn salsa",
      "Black bean spread",
      "Avocado",
      "Cilantro lime slaw",
      "Potato bun",
    ],
    spiceLevel: 0,
    isNew: false,
    isFeatured: false,
  },
  {
    id: 9,
    name: "Jalapeño Popper",
    tagline: "Creamy with a kick",
    description:
      "Beef patty topped with cream cheese, crispy jalapeño poppers, bacon jam, and lettuce on a pretzel bun.",
    descriptionEs:
      "Hamburguesa de res cubierta con queso crema, jalapeños rellenos crujientes, mermelada de tocino y lechuga en un pan pretzel.",
    price: 15.99,
    image: "https://www.babaganosh.org/wp-content/uploads/2022/12/jalapeno-popper-burgers-44.jpg",
    category: "spicy",
    ingredients: ["Beef patty", "Cream cheese", "Jalapeño poppers", "Bacon jam", "Lettuce", "Pretzel bun"],
    spiceLevel: 4,
    isNew: false,
    isFeatured: false,
  },
]

// Get all burgers
export async function getAllBurgers(): Promise<Burger[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return burgers
}

// Get featured burgers
export async function getFeaturedBurgers(): Promise<Burger[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return burgers.filter((burger) => burger.isFeatured)
}

// Get burger by ID
export async function getBurgerById(id: number): Promise<Burger | undefined> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return burgers.find((burger) => burger.id === id)
}

// API route handler for getting all burgers
export async function GET() {
  const burgers = await getAllBurgers()
  return Response.json(burgers)
}

