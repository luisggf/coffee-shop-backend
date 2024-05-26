import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function clearCart(app: FastifyInstance) {
  app.delete("/clear-cart", async (request, reply) => {
    try {
      console.log("Chegou");
      await prisma.cart.deleteMany({});
      return reply.status(200).send({ message: "Cart cleared successfully" });
    } catch (error) {
      console.error("Error clearing cart:", error);
      return reply.status(500).send({ error: "Internal Server Error" });
    }
  });
}
