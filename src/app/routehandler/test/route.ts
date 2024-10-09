import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json([
    {
      id: 1,
      name: "山田 太郎",
    },
    {
      id: 2,
      name: "佐藤 次郎",
    },
  ]);
}
