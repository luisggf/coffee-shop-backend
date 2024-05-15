import { fastify } from "fastify";
import { insertCoffee } from "../routes/postCoffee";
import { PrismaClient } from "@prisma/client";
import { getCoffee } from "../routes/getCoffees";
import { insertCartItem } from "../routes/insertCartItem";
import { insertUser } from "../routes/postUser";

const server = fastify()


server.register(insertCoffee)
server.register(getCoffee)
server.register(insertCartItem)
server.register(insertUser)


server.listen({port: 3333}).then(() => {
    console.log("Server is running!")
})

console.log("Hello")