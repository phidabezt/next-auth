import NextAuth, { type DefaultSession } from "next-auth"
import type { UserRole } from "@prisma/client"

export type ExtendedUser = DefaultSession["user"] & {
  // id: string -- This is already defined in DefaultSession["user"]
  role: UserRole
}

declare module "next-auth" {
  interface Session {
    user: ExtendedUser
  }
}
