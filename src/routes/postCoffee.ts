import { FastifyInstance } from "fastify";
import {z} from "zod"
import { prisma } from "../lib/prisma"

export async function insertCoffee (app: FastifyInstance) {

    // reply parameter can be used to inform more precise requests codes, in this case 201 os more suited than 200
    app.post('/ins-coffee', async (request, reply) => {
        const createCoffeeBody = z.object({
            name: z.string(),
            description: z.string(),
            price: z.number()
        })
        const { name, description, price } = createCoffeeBody.parse(request.body)

        const coffee = await prisma.coffee.create({
            data: {
                name,
                price,
                description
            }
        }) 

        return reply.status(201).send({coffee_id: coffee.id})
    })
}