import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { email, company, website } = body;

  console.log("NEW LEAD 🔥", {
    email,
    company,
    website,
    time: new Date().toISOString(),
  });

  // ici plus tard: Notion / DB / email

  return NextResponse.json({ success: true });
}