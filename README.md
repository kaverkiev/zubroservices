# Zubro Services — zubroservices.com

Cash home buyer landing page for Washington State. Built with Next.js 15
(App Router), TypeScript, Tailwind CSS, React Hook Form + Zod, and a Resend
integration for lead emails.

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Copy env template and fill in (see below)
cp .env.example .env.local

# 3. Run the dev server
npm run dev
# -> http://localhost:3000
```

> Note: this project lives inside an iCloud-synced folder. If `npm install`
> behaves oddly, move the folder out of `~/Library/Mobile Documents/...` to a
> plain location like `~/code/zubroservices` first.

## Configure

`.env.local` (or Vercel project env vars):

```
NEXT_PUBLIC_SITE_URL=https://zubroservices.com
NEXT_PUBLIC_PHONE="(206) 555-0100"
NEXT_PUBLIC_PHONE_TEL=+12065550100
NEXT_PUBLIC_EMAIL=offers@zubroservices.com

LEAD_RECIPIENT_EMAIL=offers@zubroservices.com
LEAD_FROM_EMAIL=leads@zubroservices.com
RESEND_API_KEY=re_...
```

If `RESEND_API_KEY` is empty, `/api/lead` validates and logs leads to the
server console (useful while you wait for DNS / Resend verification).

Service area, cities, and brand are centralized in
[`src/lib/site.ts`](src/lib/site.ts) — edit there.

## Available scripts

```bash
npm run dev       # local dev with hot reload
npm run build     # production build
npm run start     # serve the production build
npm run typecheck # tsc --noEmit
npm run lint      # next lint
```

## Deploy to Vercel

1. Push the repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo —
   defaults work (Framework: Next.js, Build: `next build`).
3. Add the env vars above in **Project → Settings → Environment Variables**.
4. Add a custom domain: **Project → Settings → Domains → Add**.
   Enter `zubroservices.com` and `www.zubroservices.com`. Vercel will show
   you the DNS records you need at your registrar:

   - `A` record on `@` → `76.76.21.21`
   - `CNAME` on `www` → `cname.vercel-dns.com`

5. SSL is provisioned automatically once DNS propagates.

## Email delivery (Resend)

1. Sign up at [resend.com](https://resend.com).
2. Add and verify the domain `zubroservices.com` (Resend gives you 3 DNS
   records to add — SPF, DKIM, DMARC).
3. Create an API key, paste it as `RESEND_API_KEY` in Vercel.
4. Set `LEAD_FROM_EMAIL` to something at the verified domain
   (e.g. `leads@zubroservices.com`) and `LEAD_RECIPIENT_EMAIL` to whatever
   inbox you check most often.
5. Submit the test form — the lead arrives in your inbox within seconds.

## Project structure

```
src/
  app/
    layout.tsx          # SEO metadata + LocalBusiness JSON-LD
    page.tsx            # Homepage composition
    globals.css         # Tailwind layers + tokens
    robots.ts
    sitemap.ts
    api/lead/route.ts   # POST /api/lead — validate + email
  components/
    Header.tsx          # Sticky header with phone CTA
    Hero.tsx            # H1 + lead form above the fold
    LeadForm.tsx        # Client form, RHF + Zod
    TrustBar.tsx        # 24h / 7 days / $0 / as-is
    HowItWorks.tsx      # 3-step process
    CompareTable.tsx    # Cash vs realtor (the highest-converting block)
    Situations.tsx      # 8 seller situations (foundation for SEO pages)
    Testimonials.tsx
    FAQ.tsx
    SecondaryCTA.tsx
    Footer.tsx
  lib/
    site.ts             # Brand + service area config
    lead-schema.ts      # Zod lead schema
```

## Where to grow next

These are queued up by the original plan but intentionally not built yet:

- **Geo SEO pages** — `src/app/we-buy-houses/[city]/page.tsx` generated from
  `site.serviceArea.cities`. Each is a full landing page with localized H1,
  comp examples, and the same form. This is the long-term organic channel.
- **Situation pages** — `/foreclosure`, `/inherited-home`, `/divorce-sale`,
  one per high-intent keyword.
- **CRM webhook** — fan out leads to HubSpot / Podio / REsimpli alongside
  the email so nothing falls through the cracks.
- **Analytics** — drop in GA4 + Meta Pixel via `next/script` once the GTM
  container is ready.
- **Real testimonials & photos** — replace the placeholders in
  `Testimonials.tsx` and add closed-deal photos to the hero.
