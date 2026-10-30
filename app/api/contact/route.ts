import { NextRequest, NextResponse } from "next/server";
import { saveContactSubmission } from "@/lib/db";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, organization, message, honeypot } = body as Record<string, string>;

  // Silently discard bot submissions
  if (honeypot) {
    return NextResponse.json({ success: true });
  }

  if (!name?.trim() || !email?.trim()) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  try {
    await saveContactSubmission({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      organization: organization?.trim() || undefined,
      message: message?.trim() || undefined,
    });
  } catch (err) {
    console.error("[contact] storage error:", err);
    return NextResponse.json(
      { error: "We could not save your message. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
