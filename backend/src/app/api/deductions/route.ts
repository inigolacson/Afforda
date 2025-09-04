import { deductionsController } from "@controllers/deductionsController";
import { NextRequest } from "next/server";

//create deductions
export async function POST(req: NextRequest) {
  return deductionsController.createDeductions(req);
}
//get deductions
export async function GET(req: NextRequest) {
  return deductionsController.getDeductions(req);
}
