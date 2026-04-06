import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, company, propertyType, message } = body;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Placer Protection Group Website <noreply@placerprotection.net>",
      to: ["hello@placerprotection.net"],
      replyTo: email,
      subject: `New Quote Request from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <div style="background: #0d1b2a; padding: 20px 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">New Quote Request</h1>
            <p style="color: #94a3b8; margin: 4px 0 0; font-size: 14px;">Placer Protection Group Website</p>
          </div>

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-top: none; padding: 24px; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #64748b; width: 140px; vertical-align: top;">Name</td>
                <td style="padding: 8px 0; font-size: 14px; color: #0f172a; font-weight: 600;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #64748b; vertical-align: top;">Email</td>
                <td style="padding: 8px 0; font-size: 14px; color: #0f172a;"><a href="mailto:${email}" style="color: #d97706;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #64748b; vertical-align: top;">Phone</td>
                <td style="padding: 8px 0; font-size: 14px; color: #0f172a;"><a href="tel:${phone}" style="color: #d97706;">${phone}</a></td>
              </tr>` : ""}
              ${company ? `
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #64748b; vertical-align: top;">Company</td>
                <td style="padding: 8px 0; font-size: 14px; color: #0f172a;">${company}</td>
              </tr>` : ""}
              ${propertyType ? `
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #64748b; vertical-align: top;">Property Type</td>
                <td style="padding: 8px 0; font-size: 14px; color: #0f172a;">${propertyType}</td>
              </tr>` : ""}
            </table>

            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="font-size: 13px; color: #64748b; margin: 0 0 8px;">Message</p>
              <p style="font-size: 14px; color: #0f172a; line-height: 1.6; white-space: pre-wrap; margin: 0;">${message}</p>
            </div>

            <div style="margin-top: 24px; padding: 16px; background: #fffbeb; border: 1px solid #fcd34d; border-radius: 6px;">
              <p style="font-size: 13px; color: #92400e; margin: 0;">
                Reply directly to this email to respond to ${firstName} at ${email}.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
