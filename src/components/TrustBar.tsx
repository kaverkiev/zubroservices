export function TrustBar() {
  const items = [
    { value: "24h", label: "Cash offer turnaround" },
    { value: "7 days", label: "Fastest closing" },
    { value: "$0", label: "Fees & commissions" },
    { value: "As-is", label: "No repairs required" },
  ];

  return (
    <section className="border-b border-paper-300/60">
      <div className="container-x grid grid-cols-2 gap-y-8 py-10 sm:grid-cols-4 sm:divide-x sm:divide-paper-300/70 sm:py-12">
        {items.map((item, idx) => (
          <div
            key={item.label}
            className={`px-2 text-center sm:px-8 sm:text-left ${
              idx === 0 ? "sm:pl-0" : ""
            }`}
          >
            <div className="font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              {item.value}
            </div>
            <div className="mt-1.5 text-xs uppercase tracking-[0.14em] text-ink-500 sm:text-sm sm:normal-case sm:tracking-normal">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
