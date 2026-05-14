const faqs = [
  {
    q: "How do you decide what to offer?",
    a:
      "We look at recent sales of comparable homes near you, the cost of any repairs the property needs, and current market conditions in your area. Our offer is based on the as-is value — minus what we'd spend to bring the home to market — so we can pay cash and close fast.",
  },
  {
    q: "Are there any fees or commissions?",
    a:
      "None. You don't pay agent commissions, listing fees, or closing costs. The number we quote is the number you walk away with at closing.",
  },
  {
    q: "What condition does my house need to be in?",
    a:
      "Any condition. We buy houses as-is — that includes properties with foundation issues, fire or water damage, deferred maintenance, or full hoarder cleanouts. You don't fix or clean a thing.",
  },
  {
    q: "How fast can you actually close?",
    a:
      "If title is clear, we can typically close in 7–10 days. If you need more time — to find a new place, settle probate, or wrap up a tenant — we'll close on the date you choose, up to 60 days out.",
  },
  {
    q: "Is the offer really no-obligation?",
    a:
      "Yes. You'll get the offer in writing, you can think it over, and you can say no. We don't lock you into anything just for getting a quote.",
  },
  {
    q: "Where do you buy houses?",
    a:
      "Across Washington — Seattle, Tacoma, Spokane, Bellevue, Vancouver, Everett, and the surrounding metros. If your house is somewhere else in the state, ask — we still might buy it.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section bg-white">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl lg:text-[2.5rem]">
              Questions sellers usually ask
            </h2>
            <p className="mt-4 text-ink-500">
              Don&apos;t see your question? Call or text us anytime — we&apos;ll
              walk you through your specific situation.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-2xl border border-paper-300/70 bg-paper-50 shadow-card-lg">
              {faqs.map((f, i) => (
                <details
                  key={f.q}
                  className={`group p-6 sm:p-7 ${
                    i !== faqs.length - 1
                      ? "border-b border-paper-300/60"
                      : ""
                  }`}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left font-display text-lg font-semibold text-ink-900 transition-colors group-hover:text-accent-700 [&::-webkit-details-marker]:hidden sm:text-xl">
                    <span>{f.q}</span>
                    <span
                      aria-hidden="true"
                      className="mt-1 grid h-7 w-7 flex-shrink-0 place-items-center rounded-full border border-paper-300 bg-white text-base text-ink-500 transition-all group-open:rotate-45 group-open:border-accent-500 group-open:bg-accent-500 group-open:text-ink-900"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-ink-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
