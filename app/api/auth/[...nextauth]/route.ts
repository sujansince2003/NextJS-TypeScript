// Import necessary modules from next-auth
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/prisma/client";

// Define the NextAuth configuration
export const options = {
  adapter:PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};

// Create the NextAuth handler
const handler = NextAuth(options);

// Export the handler. Typically, you'd export it as a default export for a specific route,
// but if you're handling multiple routes or methods, you might need to adjust this.
export { handler as GET,handler as POST };
