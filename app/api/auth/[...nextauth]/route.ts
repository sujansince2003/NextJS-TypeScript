// Import necessary modules from next-auth
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/prisma/client";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from  "bcrypt"

// Define the NextAuth configuration
export const options: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Enter email" },
        password: {
          label: "Password",
          type: "password ",
          placeholder: "Enter password",
        },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) return null;
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });
        if(!user) return null
      const ispasswordCorrect=  await bcrypt.compare(credentials?.password ,user.hashedPassword!)
     return  ispasswordCorrect ? user :null
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
};

// Create the NextAuth handler
const handler = NextAuth(options);

// Export the handler. Typically, you'd export it as a default export for a specific route,
// but if you're handling multiple routes or methods, you might need to adjust this.
export { handler as GET, handler as POST };
