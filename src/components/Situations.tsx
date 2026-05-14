const items = [
  { title: "Inherited property", body: "Out-of-state heirs, probate, or a house no one wants to manage." },
  { title: "Behind on payments", body: "Pre-foreclosure, missed payments, or tax liens — we can move fast." },
  { title: "Divorce or separation", body: "Clean cash sale, fixed timeline, no drawn-out listing." },
  { title: "Job relocation", body: "Move on a deadline without juggling a sale 1,000 miles away." },
  { title: "Tired landlord", body: "Bad tenants, old systems, repair lists — sell it and walk away." },
  { title: "Major repairs needed", body: "Fire, water, foundation, mold — we buy as-is, no fixing required." },
  { title: "Vacant or hoarder home", body: "We'll handle the cleanout. You take the cash." },
  { title: "Just want it done", body: "Privacy, simplicity, and certainty — without a sign in the yard." },
];

export function Situations() {
  return (
    <section id="situations" className="section bg-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">We can help with</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem]">
            Any situation. Any condition.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            We&apos;ve worked with sellers in just about every situation you
            can think of. If your house fits any of these, we can almost
            certainly make you a fair cash offer.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li
              key={item.title}
              className="group relative overflow-hidden rounded-xl border border-paper-300/70 bg-paper-50 p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-accent-500/40 hover:shadow-card-lg"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-6 h-7 w-1 rounded-r-full bg-accent-500/0 transition-colors group-hover:bg-accent-500"
              />
              <h3 className="font-display text-base font-semibold text-ink-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
