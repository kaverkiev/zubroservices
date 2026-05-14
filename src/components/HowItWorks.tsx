const steps = [
  {
    n: "01",
    title: "Tell us about your house",
    body:
      "Submit the address and a few details. Takes about 60 seconds — no walkthrough required to start.",
  },
  {
    n: "02",
    title: "Get a fair cash offer",
    body:
      "We do quick research on your property and the local market, then send you a no-obligation cash offer within 24 hours.",
  },
  {
    n: "03",
    title: "Close on your timeline",
    body:
      "Pick the closing date that works for you — as fast as 7 days, or up to 60. We cover all closing costs.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section bg-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem]">
            Three simple steps to a cash sale
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            No listings, no showings, no waiting on a buyer&apos;s financing.
            Just a straight cash offer and a clean close on your terms.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, idx) => (
            <li
              key={step.n}
              className="group relative rounded-2xl border border-paper-300/70 bg-paper-50 p-7 shadow-card transition-all hover:-translate-y-0.5 hover:border-accent-500/30 hover:shadow-card-lg"
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-3xl font-semibold leading-none text-accent-600">
                  {step.n}
                </span>
                <span className="h-px flex-1 bg-paper-300" />
                <span className="text-[10px] uppercase tracking-[0.18em] text-ink-400">
                  Step {idx + 1} of {steps.length}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">
                {step.title}
              </h3>
              <p className="mt-2.5 text-ink-500">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
