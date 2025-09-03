import { getUserId } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import { deductionsServices } from "@services/deductionsServices";
import { json } from "better-auth";
import { error } from "console";

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
    try {
      const userId = await getUserId(req);
      const deductions = await deductionsServices.getDeductions(userId);

      return NextResponse.json(deductions, { status: 200 });
    } catch (error) {
      console.error("Retrieving of Deductions failed:", error);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 400 }
      );
    }
  },

  async getDeduction(req: NextRequest, deductionId: string) {
    try {
      const userId = await getUserId(req);
      const deduction = await deductionsServices.getDeduction(
        deductionId,
        userId
      );

      return NextResponse.json(deduction, { status: 200 });
    } catch (error) {
      console.error("Retrieving of Deduction failed:", error);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  },

  async updateDeduction(req: NextRequest, deductionId: string) {
    try {
      const userId = await getUserId(req);
      const body = await req.json();
      if (!body.name) {
        return NextResponse.json(
          { error: "Missing required fields: name" },
          { status: 400 }
        );
      }
      const editDeduction = await deductionsServices.updateDeduction(
        body,
        deductionId,
        userId
      );

      return NextResponse.json(editDeduction, { status: 200 });
    } catch (error) {
      console.error("Updating of Deduction failed:", error);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  },

  async deleteDeduction(req: NextRequest, deductionId: string) {
    try {
      const userId = await getUserId(req);

      const trashDeduction = await deductionsServices.deleteDeduction(
        deductionId,
        userId
      );

      return NextResponse.json(trashDeduction, { status: 200 });
    } catch (error) {
      console.error("Deleting of Deduction failed:", error);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  },
};
