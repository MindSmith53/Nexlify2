import { PrismaClient } from "./generated/prisma";

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
    globalThis.prisma = db;
}

//* globalThis.prisma: This is a global object that is available in all modules. It is used to store the PrismaClient instance. This is done to ensure that the PrismaClient instance is only created once and is shared across all modules. This is important because creating multiple instances of PrismaClient can lead to memory leaks and other issues.