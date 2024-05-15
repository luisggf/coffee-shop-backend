import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function insertCartItem(app: FastifyInstance) {

    app.post('/add-to-cart', async (request, reply) => {
        const addToCartBody = z.object({
            userId: z.string(),
            cartId: z.string(), // Assuming you provide userId in the request body
            coffeeId: z.string(), // Assuming you provide coffeeId in the request body
            quantity: z.number().int().positive() // Assuming quantity should be a positive integer
        })
        
        try {
            const { userId, cartId, coffeeId, quantity } = addToCartBody.parse(request.body)

            // Check if the user exists
            const user = await prisma.user.findUnique({
                where: { id: userId }
            })
            if (!user) {
                return reply.status(404).send({ message: "User not found" })
            }

            // Check if the coffee exists
            const coffee = await prisma.coffee.findUnique({
                where: { id: coffeeId }
            })
            if (!coffee) {
                return reply.status(404).send({ message: "Coffee not found" })
            }

            // Create the cart item
            const cartItem = await prisma.cartItem.create({
                data: {
                    cartId,
                    coffeeId,
                    quantity
                }
            })

            return reply.status(201).send({ cartItemId: cartItem.id })
        } catch (error) {
            // Handle validation errors
            if (error instanceof z.ZodError) {
                return reply.status(400).send({ message: "Invalid request body" })
            }
            // Handle other errors
            console.error("Error:", error)
            return reply.status(500).send({ message: "Internal server error" })
        }
    })
}
