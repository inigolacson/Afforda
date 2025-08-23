import { DeductionsPayload } from "../types/deductions";
import prisma from "@/lib/db";

export const deductionsServices = {
  async createDeductions(data: DeductionsPayload, userId: string) {
    const { name, amount } = data;

    return await prisma.deductions.create({
      data: {
        name,
        userId,
        amount,
      },
    });
  },

  async getDeductions(userId: string) {},

  async getDeduction(userId: string) {},

  async deleteDeduction(userId: string) {},

  async updateDeduction(userId: string) {},
};
