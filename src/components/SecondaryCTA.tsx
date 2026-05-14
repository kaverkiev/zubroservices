import Image from "next/image";
import { LeadForm } from "./LeadForm";
import { site } from "@/lib/site";

export function SecondaryCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-900 py-20 text-white sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(201,161,74,0.10),_transparent_60%)]"
      />
      <Image
        src="/logo.png"
        alt=""
        aria-hidden="true"
        width={510}
        height={476}
        className="pointer-events-none absolute -left-16 top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 select-none object-contain opacity-[0.06] lg:block"
      />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-500">
            <span className="h-px w-6 bg-accent-500" />
            Ready when you are
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-[2.75rem] lg:text-5xl">
            Get your no-obligation cash offer
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-200 sm:text-lg">
            Free, fast, and private. No listing, no showings, no waiting on a
            buyer&apos;s loan. Just a fair offer in 24 hours and a clean close
            on your timeline.
          </p>

          <div className="mt-8 space-y-4 text-ink-200">
            <div className="flex items-baseline gap-3">
              <span className="text-xs uppercase tracking-[0.16em] text-ink-400">
                Call
              </span>
              <a
                href={`tel:${site.phoneTel}`}
                className="font-display text-2xl font-semibold text-accent-500 hover:text-accent-100"
              >
                {site.phone}
              </a>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-xs uppercase tracking-[0.16em] text-ink-400">
                Email
              </span>
              <a
                href={`mailto:${site.email}`}
                className="text-base font-medium text-accent-500 hover:text-accent-100"
              >
                {site.email}
              </a>
            </div>
            <div className="flex items-baseline gap-3 pt-1">
              <span className="text-xs uppercase tracking-[0.16em] text-ink-400">
                Hours
              </span>
              <span className="text-sm text-ink-200">
                Mon–Sun · 8am–8pm Pacific
              </span>
            </div>
          </div>
        </div>

        <div>
          <LeadForm variant="stacked" />
        </div>
      </div>
    </section>
  );
}
