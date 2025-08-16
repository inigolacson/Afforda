import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { openAPI } from "better-auth/plugins";
import { PrismaClient } from "@prisma/client";
 
const prisma = new PrismaClient();
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "sqlite", // or "mysql", "postgresql", ...etc
    }),
    socialProviders: {
      facebook: {
        clientId: process.env.FACEBOOK_CLIENT_ID as string,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
      }
    },
    emailAndPassword: {
    enabled: true,
  },
  trustedOrigins: [
    "http://localhost:3000",      // Web dev
    "exp://172.20.10.2:8081",     // Expo dev client (LAN IP)
    "afforda://"                  // Your app scheme for deep links
  ],
  plugins:  [openAPI()]
});