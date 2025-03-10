import { getAllBurgers, getBurgerById } from "@/lib/burgers"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")

  if (id) {
    const burger = await getBurgerById(Number(id))

    if (!burger) {
      return Response.json({ error: "Burger not found" }, { status: 404 })
    }

    return Response.json(burger)
  }

  const burgers = await getAllBurgers()
  return Response.json(burgers)
}

