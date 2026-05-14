import Image from "next/image";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-paper-300/60">
      <div className="container-x py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-lg bg-ink-900 ring-1 ring-accent-500/20">
                <Image
                  src="/logo.png"
                  alt=""
                  width={510}
                  height={476}
                  className="h-10 w-10 object-contain"
                />
              </span>
              <div>
                <div className="font-display text-lg font-semibold leading-tight text-ink-900">
                  {site.name}
                </div>
                <div className="text-xs uppercase tracking-[0.14em] text-accent-700">
                  Direct Cash Home Buyer
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-500">
              We buy houses across {site.serviceArea.state} for cash — fast,
              fair, and as-is. No realtors, no commissions, no surprises at
              closing.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="divider-gold" />
              <span className="text-xs uppercase tracking-[0.14em] text-ink-400">
                Built on a handshake
              </span>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-700">
              <li>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="font-display text-lg font-semibold text-ink-900 hover:text-accent-700"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-accent-700"
                >
                  {site.email}
                </a>
              </li>
              <li className="text-ink-500">
                Open 7 days · 8am–8pm Pacific
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
              Sections
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-700">
              <li>
                <a href="#how-it-works" className="hover:text-accent-700">
                  How it works
                </a>
              </li>
              <li>
                <a href="#compare" className="hover:text-accent-700">
                  Cash vs realtor
                </a>
              </li>
              <li>
                <a href="#situations" className="hover:text-accent-700">
                  Situations
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-accent-700">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
              Service areas
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-y-3 text-sm text-ink-700">
              {site.serviceArea.cities.slice(0, 8).map((c) => (
                <li key={c} className="hover:text-accent-700">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-paper-300/60 pt-8 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
          <p className="max-w-md text-right">
            We are a real estate investment company, not licensed real estate
            agents. We buy properties for our own portfolio.
          </p>
        </div>
      </div>
    </footer>
  );
}
