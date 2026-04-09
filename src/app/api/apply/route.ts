import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      firstName, lastName, email, phone,
      position, availability, hasGuardCard, hasFirearm,
      yearsExperience, background, whyUs,
    } = body;

    if (!firstName || !lastName || !email || !phone || !position || !availability || !hasGuardCard || !whyUs) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Placer Protection Group Careers <noreply@placerprotection.net>",
      to: ["hello@placerprotection.net"],
      replyTo: email,
      subject: `New Job Application — ${firstName} ${lastName} (${position})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <div style="background: #0d1b2a; padding: 20px 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">New Job Application</h1>
            <p style="color: #94a3b8; margin: 4px 0 0; font-size: 14px;">Placer Protection Group — Careers</p>
          </div>

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-top: none; padding: 24px; border-radius: 0 0 8px 8px;">

            <h2 style="font-size: 16px; color: #0f172a; margin: 0 0 16px;">Applicant Information</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 7px 0; font-size: 13px; color: #64748b; width: 160px; vertical-align: top;">Name</td>
                <td style="padding: 7px 0; font-size: 14px; color: #0f172a; font-weight: 600;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 7px 0; font-size: 13px; color: #64748b; vertical-align: top;">Email</td>
                <td style="padding: 7px 0; font-size: 14px; color: #0f172a;"><a href="mailto:${email}" style="color: #d97706;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 7px 0; font-size: 13px; color: #64748b; vertical-align: top;">Phone</td>
                <td style="padding: 7px 0; font-size: 14px; color: #0f172a;"><a href="tel:${phone}" style="color: #d97706;">${phone}</a></td>
              </tr>
            </table>

            <h2 style="font-size: 16px; color: #0f172a; margin: 0 0 16px; padding-top: 16px; border-top: 1px solid #e2e8f0;">Position Details</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 7px 0; font-size: 13px; color: #64748b; width: 160px; vertical-align: top;">Position</td>
                <td style="padding: 7px 0; font-size: 14px; color: #0f172a; font-weight: 600;">${position}</td>
              </tr>
              <tr>
                <td style="padding: 7px 0; font-size: 13px; color: #64748b; vertical-align: top;">Availability</td>
                <td style="padding: 7px 0; font-size: 14px; color: #0f172a;">${availability}</td>
              </tr>
              <tr>
                <td style="padding: 7px 0; font-size: 13px; color: #64748b; vertical-align: top;">Years of Experience</td>
                <td style="padding: 7px 0; font-size: 14px; color: #0f172a;">${yearsExperience || "Not specified"}</td>
              </tr>
            </table>

            <h2 style="font-size: 16px; color: #0f172a; margin: 0 0 16px; padding-top: 16px; border-top: 1px solid #e2e8f0;">Credentials</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 7px 0; font-size: 13px; color: #64748b; width: 160px; vertical-align: top;">CA Guard Card</td>
                <td style="padding: 7px 0; font-size: 14px; color: #0f172a;">
                  <span style="display: inline-block; padding: 2px 10px; border-radius: 999px; font-size: 12px; font-weight: 600;
                    background: ${hasGuardCard === 'Yes' ? '#dcfce7' : hasGuardCard === 'In Progress' ? '#fef9c3' : '#fee2e2'};
                    color: ${hasGuardCard === 'Yes' ? '#166534' : hasGuardCard === 'In Progress' ? '#854d0e' : '#991b1b'};">
                    ${hasGuardCard}
                  </span>
                </td>
              </tr>
              <tr>
                <td style="padding: 7px 0; font-size: 13px; color: #64748b; vertical-align: top;">Firearm Permit</td>
                <td style="padding: 7px 0; font-size: 14px; color: #0f172a;">
                  <span style="display: inline-block; padding: 2px 10px; border-radius: 999px; font-size: 12px; font-weight: 600;
                    background: ${hasFirearm === 'Yes' ? '#dcfce7' : hasFirearm === 'In Progress' ? '#fef9c3' : '#f1f5f9'};
                    color: ${hasFirearm === 'Yes' ? '#166534' : hasFirearm === 'In Progress' ? '#854d0e' : '#475569'};">
                    ${hasFirearm || "Not specified"}
                  </span>
                </td>
              </tr>
            </table>

            ${background ? `
            <div style="margin-bottom: 20px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
              <p style="font-size: 13px; color: #64748b; margin: 0 0 8px; font-weight: 600;">EXPERIENCE & BACKGROUND</p>
              <p style="font-size: 14px; color: #0f172a; line-height: 1.6; white-space: pre-wrap; margin: 0;">${background}</p>
            </div>` : ""}

            <div style="margin-bottom: 20px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
              <p style="font-size: 13px; color: #64748b; margin: 0 0 8px; font-weight: 600;">WHY PLACER PROTECTION GROUP</p>
              <p style="font-size: 14px; color: #0f172a; line-height: 1.6; white-space: pre-wrap; margin: 0;">${whyUs}</p>
            </div>

            <div style="margin-top: 24px; padding: 16px; background: #fffbeb; border: 1px solid #fcd34d; border-radius: 6px;">
              <p style="font-size: 13px; color: #92400e; margin: 0;">
                Reply directly to this email to contact ${firstName} at ${email}.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Application form error:", error);
    return NextResponse.json({ error: "Failed to send application." }, { status: 500 });
  }
}
