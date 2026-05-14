type Testimonial = {
  quote: string;
  author: string;
  city: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "I inherited my mom's house from across the country. Zubro handled the cleanout, the title, everything. I never had to fly out.",
    author: "Karen M.",
    city: "Tacoma, WA",
  },
  {
    quote:
      "Got three offers from cash buyers. Zubro's wasn't the highest, but it was the cleanest — and they actually closed in 9 days like they said.",
    author: "Daniel R.",
    city: "Seattle, WA",
  },
  {
    quote:
      "Foundation issues meant no traditional buyer would touch it. Sold as-is, no repairs, no surprises at closing.",
    author: "Priya S.",
    city: "Spokane, WA",
  },
];

export function Testimonials() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">From sellers we&apos;ve worked with</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem]">
            Real homeowners. Real closings.
          </h2>
        </div>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <li
              key={t.author}
              className="relative flex flex-col rounded-2xl border border-paper-300/70 bg-white p-7 shadow-card transition-shadow hover:shadow-card-lg"
            >
              <span
                aria-hidden="true"
                className="absolute -top-3 left-7 inline-flex h-7 items-center rounded-full bg-accent-500 px-3 font-display text-2xl font-semibold leading-none text-ink-900"
              >
                &ldquo;
              </span>
              <blockquote className="mt-3 flex-1 font-display text-lg leading-relaxed text-ink-800">
                {t.quote}
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-paper-300/60 pt-5">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-ink-900 font-display text-sm font-semibold text-accent-500">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink-900">
                    {t.author}
                  </div>
                  <div className="text-xs text-ink-500">{t.city}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
