// Import necessary modules from next-auth
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import NextAuth from "next-auth/next";

import { options } from "../options";


// Define the NextAuth configuration


// Create the NextAuth handler
const handler = NextAuth(options);

// Export the handler. Typically, you'd export it as a default export for a specific route,
// but if you're handling multiple routes or methods, you might need to adjust this.
export { handler as GET, handler as POST };
