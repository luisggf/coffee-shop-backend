import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getCoffees(app: FastifyInstance) {
  app.get('/coffees', async (request, reply) => {
    try {
      const coffees = await prisma.coffee.findMany();
      return reply.send(coffees);
    } catch (error) {
      console.error("Error fetching coffees:", error);
      return reply.status(500).send({ error: "Failed to fetch coffees" });
    }
  });
}
