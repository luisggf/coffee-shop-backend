import { fastify } from "fastify";
import { insertCoffee } from "../routes/postCoffee";
import { PrismaClient } from "@prisma/client";
import { getCoffee } from "../routes/getCoffee";
import { insertCartItem } from "../routes/insertCartItem";
import { insertUser } from "../routes/postUser";
import cors from '@fastify/cors'
import { getCoffees } from "../routes/getManyCoffes";
import { getCartItems } from "../routes/getCartItems";
import { insertCart } from "../routes/createCart";
import { updateCartItemQuantity } from "../routes/updateCartItem";
import { deleteCartItem } from "../routes/deleteCartItem";

const server = fastify()


server.register(cors, {
  origin: "http://localhost:5173"
});

server.register(insertCoffee)
server.register(getCoffee)
server.register(insertCartItem)
server.register(insertUser)
server.register(getCoffees)
server.register(getCartItems)
server.register(insertCart)
server.register(updateCartItemQuantity)
server.register(deleteCartItem)


server.listen({ port: 3333 }).then(() => {
  console.log("Server is running!")
})
