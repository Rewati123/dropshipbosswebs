import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Sparkles } from "lucide-react";
import { PageHero, Section, SectionTitle } from "@/components/PageShell";
import { faqs, plans } from "@/lib/site-data";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing Plans — Dropship Boss Store Setup Packages" },
      {
        name: "description",
        content:
          "Starter, Growth aur Scale Pro packages. One-time payment, lifetime catalog access aur mentor support.",
      },
      { property: "og:title", content: "Pricing — Dropship Boss" },
      {
        property: "og:description",
        content:
          "Transparent one-time pricing for complete dropshipping store setup in India.",
      },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Simple pricing, <span className="gradient-text">hidden charges</span>{" "}
            zero
          </>
        }
        subtitle="Ek baar payment, lifetime access. Har plan me store setup aur real human support included hai."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`surface-card relative flex flex-col p-8 ${
                p.highlight ? "glow-ring border-primary/60 lg:-translate-y-3" : ""
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-8 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  <Sparkles className="h-3 w-3" /> Most popular
                </span>
              )}
              <h2 className="text-xl font-bold">{p.name}</h2>
              <p className="mt-4 font-display text-4xl font-bold gradient-text">
                {p.price}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {p.note}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-[1.03] ${
                  p.highlight
                    ? "bg-primary text-primary-foreground"
                    : "border border-border hover:border-primary hover:text-primary"
                }`}
              >
                Ye plan chahiye
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Prices demo purpose ke liye dikhaye gaye hain. Actual quote
          consultation ke baad share hota hai.
        </p>
      </Section>

      <Section className="pt-0">
        <SectionTitle eyebrow="FAQ" title="Payment aur plan ke sawal" />
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="surface-card group px-5 py-4">
              <summary className="cursor-pointer list-none text-sm font-semibold transition-colors group-hover:text-primary">
                {f.q}
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
