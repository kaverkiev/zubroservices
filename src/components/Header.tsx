import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-paper-300/60 bg-paper-100/85 backdrop-blur-md supports-[backdrop-filter]:bg-paper-100/70">
      <div className="container-x flex h-[72px] items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={site.name}
        >
          <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-lg bg-ink-900 ring-1 ring-accent-500/30 transition-shadow group-hover:ring-accent-500/60">
            <Image
              src="/logo.png"
              alt=""
              width={510}
              height={476}
              priority
              className="h-10 w-10 object-contain"
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold tracking-tight text-ink-900">
              {site.name}
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.18em] text-accent-700 sm:inline">
              Direct Cash Buyer · {site.serviceArea.stateAbbr}
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {[
            { href: "#how-it-works", label: "How it works" },
            { href: "#compare", label: "Cash vs realtor" },
            { href: "#situations", label: "Situations" },
            { href: "#faq", label: "FAQ" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-ink-700 transition-colors hover:text-ink-900"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent-500 transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.phoneTel}`}
            className="hidden items-center gap-2 text-sm font-semibold text-ink-900 hover:text-accent-700 sm:inline-flex"
          >
            <span aria-hidden="true" className="text-accent-600">
              ☏
            </span>
            {site.phone}
          </a>
          <a href="#offer" className="btn-primary !py-2 !px-4 !text-sm">
            Get Cash Offer
          </a>
        </div>
      </div>
    </header>
  );
}
