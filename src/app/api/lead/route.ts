import { NextResponse } from "next/server";
import { Resend } from "resend";
import { leadSchema } from "@/lib/lead-schema";
import { site } from "@/lib/site";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Validation failed",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  const lead = parsed.data;

  // Honeypot — silently accept and drop bots.
  if (lead.website) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_RECIPIENT_EMAIL ?? site.email;
  const from = process.env.LEAD_FROM_EMAIL ?? `leads@${site.domain}`;

  const subject = `New cash-offer lead: ${lead.address}`;
  const text = [
    `New lead from ${site.domain}`,
    "",
    `Address: ${lead.address}`,
    `Name:    ${lead.name}`,
    `Phone:   ${lead.phone}`,
    lead.email ? `Email:   ${lead.email}` : "Email:   (not provided)",
    lead.condition ? `Condition: ${lead.condition}` : null,
    lead.timeline ? `Timeline:  ${lead.timeline}` : null,
    lead.notes ? `Notes:\n${lead.notes}` : null,
    "",
    `Submitted: ${new Date().toISOString()}`,
  ]
    .filter(Boolean)
    .join("\n");

  if (!apiKey) {
    // Fallback for local dev / pre-Resend setup — log to server console.
    // eslint-disable-next-line no-console
    console.warn(
      "[lead] RESEND_API_KEY not set — logging lead instead of sending email.",
    );
    // eslint-disable-next-line no-console
    console.info("[lead]\n" + text);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from,
      to,
      subject,
      text,
      replyTo: lead.email || undefined,
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[lead] Resend send failed", err);
    return NextResponse.json(
      { error: "Could not send email. Please call us instead." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, delivered: true });
}
