import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero, Section, SectionTitle } from "@/components/PageShell";
import { steps } from "@/lib/site-data";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "Kaise Kaam Karta Hai — Dropship Boss Dropshipping Process" },
      {
        name: "description",
        content:
          "Plan se lekar pehli sale tak ka poora process: store setup, product import, order dispatch aur scaling.",
      },
      { property: "og:title", content: "Dropshipping Process — Dropship Boss" },
      {
        property: "og:description",
        content:
          "4 steps me store live: setup, catalog import, dispatch aur growth support.",
      },
    ],
  }),
  component: HowItWorks,
});

const timeline = [
  { day: "Day 1", text: "Consultation call aur plan finalisation" },
  { day: "Day 2", text: "Seller account, GST aur documents guidance" },
  { day: "Day 3", text: "Store design, branding aur policy pages" },
  { day: "Day 4-5", text: "Catalog import + listing optimisation" },
  { day: "Day 6", text: "Pricing, shipping slab aur payment setup" },
  { day: "Day 7", text: "Store live, marketing playbook handover" },
];

const included = [
  "Marketplace + D2C store setup",
  "Winning product research sheet",
  "Listing title, bullets aur SEO keywords",
  "Supplier onboarding aur rate card",
  "Order dispatch coordination",
  "Return / RTO handling SOP",
  "Ads starter playbook",
  "Lifetime mentor support",
];

export function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title={
          <>
            Idea se <span className="gradient-text">pehli sale</span> tak, 7 din
            me
          </>
        }
        subtitle="Har step par hamari team saath hoti hai — koi guesswork nahi, sirf checklist follow karni hai."
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="surface-card p-6">
              <span className="font-display text-4xl font-bold text-primary/25">
                {s.n}
              </span>
              <h2 className="mt-3 text-lg font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <SectionTitle eyebrow="Timeline" title="7 din ka launch roadmap" />
        <ol className="mx-auto max-w-3xl border-l border-border pl-6">
          {timeline.map((t) => (
            <li key={t.day} className="relative pb-8 last:pb-0">
              <span className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-primary/20" />
              <p className="text-sm font-semibold text-primary">{t.day}</p>
              <p className="mt-1 text-muted-foreground">{t.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="pt-0">
        <SectionTitle eyebrow="Included" title="Package me kya kya milta hai" />
        <div className="grid gap-3 sm:grid-cols-2">
          {included.map((i) => (
            <div
              key={i}
              className="surface-card flex items-center gap-3 px-5 py-4"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm">{i}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105"
          >
            Pricing dekhein <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
