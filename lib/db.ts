import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: PrismaClient | undefined
}

// Next JS has hard reloads in development mode, so we need to keep the PrismaClient instance in a global variable to prevent the PrismaClient from being re-created on every request. This is not necessary in production because the PrismaClient is created once and reused across requests.

// Why should we use globalThis instead of global or window? globalThis does not affected by hard reloads in development mode, so it is the best choice for this use case.
export const db = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db
}
