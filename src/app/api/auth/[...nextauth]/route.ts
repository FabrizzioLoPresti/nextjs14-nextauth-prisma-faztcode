import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/libs/prisma"
import bcrypt from "bcrypt"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith@gmail.com" },
        password: { label: "Password", type: "password", placeholder: "********" },
      },
      async authorize(credentials, req) {
        const user = await prisma.users.findUnique({
          where: {
            email: credentials?.email,
          },
        })
        if (!user) throw new Error("No user found")

        const isValid = credentials?.password && await bcrypt.compare(credentials.password, user.password)
        if (!isValid) throw new Error("Invalid password")

        return {
          id: user.id,
          name: user.username,
          email: user.email,
        }
      }
    })
  ],
  pages: {
    signIn: "/auth/login",
    error: "/auth/login",
  }
})

export { handler as GET, handler as POST }