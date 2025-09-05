import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { openAPI } from "better-auth/plugins";
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
import { error } from "console";

const prisma = new PrismaClient();
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  socialProviders: {
    facebook: {
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
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

export async function getUserId(req: NextRequest): Promise<string> {
  const sessionData = await auth.api.getSession(req);

  if (!sessionData?.session.userId) {
    throw new Error("Unauthorized");
  }
  return sessionData.session.userId;
}
