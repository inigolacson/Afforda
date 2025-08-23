import { getUserId } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import { deductionsServices } from "@services/deductionsServices";

export const deductionsController = {
  async createDeductions(req: NextRequest) {
    try {
      const userId = await getUserId(req);
      const body = await req.json();
      if (!body.name) {
        return NextResponse.json(
          { error: "Missing required Fields: name" },
          { status: 400 }
        );
      }
      const newDeduction = await deductionsServices.createDeductions(
        body,
        userId
      );

      return NextResponse.json(newDeduction, { status: 201 });
    } catch (error) {
      console.error("Deduction Creation Failed:", error);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  },

  async getDeductions(req: NextRequest) {
    return;
  },

  async getDeduction(req: NextRequest, deductionId: string) {
    return;
  },

  async updateDeduction(req: NextRequest, deductionId: string) {
    return;
  },

  async deleteDeduction(req: NextRequest, deductionId: string) {
    return;
  },
};
