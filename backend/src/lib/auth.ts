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
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins: [
    "https://afforda-zeta.vercel.app", // Web frontend
    "afforda://",
    "exp://192.168.100.173:8081/--/auth/login", // Mobile app deep link for Expo/React Native
    "http://localhost:3000",
  ],

  plugins: [openAPI()],
});
