import { error } from "console";
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

  async getDeductions(userId: string) {
    const deduction = await prisma.deductions.findMany({
      where: { userId },
    });

    return deduction;
  },

  async getDeduction(id: string, userId: string) {
    const deduction = await prisma.deductions.findFirst({
      where: { id, userId },
    });

    return deduction;
  },

  async deleteDeduction(id: string, userId: string) {
    const deduction = await prisma.deductions.findFirst({
      where: { id, userId },
    });

    if (!deduction) {
      throw new Error("Store not found or unauthorized");
    }

    const deleteStore = await prisma.deductions.delete({
      where: { id },
    });

    return deleteStore;
  },

  async updateDeduction(data: DeductionsPayload, id: string, userId: string) {
    const exisitingDeduction = await prisma.deductions.findFirst({
      where: { id, userId },
    });

    const { ...rest } = data;

    return await prisma.deductions.update({
      where: { id },
      data: {
        ...rest,
      },
    });
  },
};
