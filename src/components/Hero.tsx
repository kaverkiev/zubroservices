import { LeadForm } from "./LeadForm";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="offer"
      className="relative overflow-hidden border-b border-paper-300/60"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(15,27,45,0.06),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(201,161,74,0.18),_transparent_55%)]"
      />
      <div className="container-x relative grid gap-10 py-14 sm:py-20 lg:grid-cols-12 lg:gap-12 lg:py-24">
        <div className="lg:col-span-7">
          <p className="eyebrow">Cash home buyer · {site.serviceArea.state}</p>
          <h1 className="mt-5 font-display text-[2.5rem] font-semibold leading-[1.05] text-ink-900 sm:text-5xl lg:text-[3.5rem]">
            <span className="block">Sell your house fast for cash.</span>
            <span className="mt-2 block text-accent-600">
              No fees. No repairs. Close in 7 days.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500">
            Get a fair, no-obligation cash offer in 24 hours. We buy houses
            as-is anywhere in {site.serviceArea.state} — any condition, any
            situation, any timeline.
          </p>

          <ul className="mt-7 grid max-w-xl gap-3 sm:grid-cols-2">
            {[
              "Fair cash offer in 24 hours",
              "Zero fees, zero commissions",
              "We pay all closing costs",
              "Close in 7 days or 60 — your call",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-ink-700">
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent-100 text-[10px] font-bold text-accent-700 ring-1 ring-accent-500/30"
                >
                  ✓
                </span>
                <span className="text-base">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={`tel:${site.phoneTel}`} className="btn-primary">
              <span aria-hidden="true" className="mr-2">
                ☏
              </span>
              Call {site.phone}
            </a>
            <a href="#how-it-works" className="btn-ghost">
              See how it works
            </a>
          </div>
          <p className="mt-4 text-sm text-ink-400">
            Open 7 days · Talk to a real person · No bots, no call centers
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-white/0">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-display text-xl font-semibold text-ink-900">
                Get your cash offer
              </h2>
              <span className="rounded-full bg-accent-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent-700 ring-1 ring-accent-500/30">
                Free · 24h
              </span>
            </div>
            <LeadForm variant="hero" />
          </div>
        </div>
      </div>

      <div className="relative border-t border-paper-300/60 bg-paper-50/60">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 text-xs uppercase tracking-[0.16em] text-ink-500 sm:text-[0.7rem]">
          <span className="flex items-center gap-2">
            <span className="text-accent-600">★</span>
            Local Washington Buyer
          </span>
          <span className="hidden h-3 w-px bg-paper-300 sm:inline-block" />
          <span className="flex items-center gap-2">
            <span className="text-accent-600">●</span>
            Direct Cash · No Wholesalers in the Middle
          </span>
          <span className="hidden h-3 w-px bg-paper-300 sm:inline-block" />
          <span className="flex items-center gap-2">
            <span className="text-accent-600">◆</span>
            100% Free, No-Obligation Quote
          </span>
        </div>
      </div>
    </section>
  );
}
