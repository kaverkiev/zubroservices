import { site } from "@/lib/site";

type Row = {
  label: string;
  cash: string;
  realtor: string;
};

const rows: Row[] = [
  { label: "Commissions / fees", cash: "None", realtor: "6% on average" },
  { label: "Who pays closing costs", cash: "We do", realtor: "You — typically 1–2%" },
  { label: "Repairs & cleanup", cash: "None — sold as-is", realtor: "Often required" },
  { label: "Inspection / financing", cash: "None — cash buyer", realtor: "Yes — and deals fall through" },
  { label: "Showings & open houses", cash: "Zero", realtor: "Usually weeks of them" },
  { label: "Time to close", cash: "7 days", realtor: "60–90+ days" },
  { label: "Days on market", cash: "0", realtor: "30–45 average" },
];

export function CompareTable() {
  return (
    <section id="compare" className="section">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Cash vs realtor</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            See exactly what you save with a cash sale
          </h2>
          <p className="mt-4 text-ink-500">
            For homes that need work — or sellers who need certainty and
            speed — a traditional listing rarely wins on the bottom line.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-paper-300/60 bg-white shadow-card-lg">
          <div className="hidden grid-cols-[2fr_2fr_2fr] sm:grid">
            <div className="border-b border-paper-300/60 px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-400" />
            <div className="relative border-b border-accent-500/30 bg-accent-50 px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent-500 text-[10px] font-bold text-ink-900">
                  ★
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-700">
                  Cash sale to {site.name}
                </span>
              </div>
            </div>
            <div className="border-b border-paper-300/60 px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
              Listing with a realtor
            </div>
          </div>

          <ul>
            {rows.map((r, i) => (
              <li
                key={r.label}
                className="grid gap-2 sm:grid-cols-[2fr_2fr_2fr] sm:gap-0"
              >
                <div
                  className={`px-6 py-4 text-sm font-semibold text-ink-800 sm:text-base ${
                    i !== rows.length - 1 ? "border-b border-paper-300/60" : ""
                  }`}
                >
                  {r.label}
                </div>
                <div
                  className={`flex items-start gap-2.5 bg-accent-50/60 px-6 py-4 ${
                    i !== rows.length - 1
                      ? "border-b border-accent-500/15"
                      : ""
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent-500 text-[10px] font-bold text-ink-900"
                  >
                    ✓
                  </span>
                  <span className="font-medium text-ink-900">{r.cash}</span>
                </div>
                <div
                  className={`flex items-start gap-2.5 px-6 py-4 text-ink-500 ${
                    i !== rows.length - 1 ? "border-b border-paper-300/60" : ""
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-ink-100 text-xs text-ink-400"
                  >
                    ×
                  </span>
                  <span>{r.realtor}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
