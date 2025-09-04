import { deductionsController } from "@controllers/deductionsController";
import { NextRequest } from "next/server";

//get specific deduction by id
export async function GET(
  req: NextRequest,
  context: { params: Promise<{ deductionId: string }> }
) {
  const { deductionId } = await context.params;
  return deductionsController.getDeduction(req, deductionId);
}

//edit specific deduction by id
export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ deductionId: string }> }
) {
  const { deductionId } = await context.params;
  return deductionsController.updateDeduction(req, deductionId);
}

//delete specific deducton by id
export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ deductionId: string }> }
) {
  const { deductionId } = await context.params;
  return deductionsController.deleteDeduction(req, deductionId);
}
