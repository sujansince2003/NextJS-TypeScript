import WelcomeTemplates from "@/emails/WelcomeTemplates";
import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST() {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "sujansince2059@gmail.com",
    subject: "Hello World",
    react: <WelcomeTemplates name="sujan" />,
  });
  return NextResponse.json({ success: "email send" });
}
