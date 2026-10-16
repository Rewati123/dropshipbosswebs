import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero, Section, SectionTitle } from "@/components/PageShell";
import { steps } from "@/lib/site-data";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      {
        title:
          "How Dropshipping Works in India — Step-by-Step Process | Dropship Boss",
      },
      {
        name: "description",
        content:
          "Discover how our turnkey dropshipping model takes you from store setup to your first customer sale in 7 days. Automated sourcing, catalog import, and express dispatch.",
      },
      {
        name: "keywords",
        content:
          "how dropshipping works india, dropshipping process, turnkey store setup, ecommerce fulfillment, winning products sourcing",
      },
      {
        property: "og:title",
        content: "How Dropshipping Works — Dropship Boss Automation Process",
      },
      {
        property: "og:description",
        content:
          "Launch a zero-inventory dropshipping store in 4 simple steps: setup, catalog import, automated dispatch, and scaling support.",
      },
    ],
  }),
  component: HowItWorks,
});

const timeline = [
  { day: "Day 1", text: "1-on-1 Strategy Consultation & Business Roadmap Finalization" },
  { day: "Day 2", text: "Seller Account Setup, Brand Approvals & GST Compliance Support" },
  { day: "Day 3", text: "Turnkey Storefront Design, Branding & Policy Integration" },
  { day: "Day 4-5", text: "Winning Catalog Import & SEO Listing Optimization" },
  { day: "Day 6", text: "Profit Margins, Courier Shipping Slabs & Payment Gateway Setup" },
  { day: "Day 7", text: "Store Goes Live & Growth Ad Playbook Handover" },
];

const included = [
  "Multi-Marketplace (Amazon/Meesho) & D2C Store Setup",
  "Pre-Vetted Winning Product Research Sheet",
  "SEO-Optimized Product Titles, Bullets & Keyword Tags",
  "Direct Manufacturer Sourcing & B2B Wholesale Pricing",
  "Automated Order Dispatch & Real-Time Tracking Integration",
  "Return (RTO) Reduction Standard Operating Procedures",
  "Proven Meta & Google Ads Scaling Playbook",
  "Lifetime 1-on-1 E-Commerce Mentorship Access",
];

export function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="Turnkey Methodology"
        title={
          <>
            From Concept to <span className="gradient-text">First Sale</span> in 7 Days
          </>
        }
        subtitle="Our dedicated e-commerce team guides every milestone. No guesswork, no trial-and-error — just an execution roadmap designed for profitable scale."
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="surface-card p-6">
              <span className="font-display text-4xl font-bold text-primary/25">
                {s.n}
              </span>
              <h2 className="mt-3 text-lg font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <SectionTitle
          eyebrow="Execution Timeline"
          title="7-Day Turnkey Launch Roadmap"
          text="A clear milestone schedule ensuring your store is fully optimized, stocked, and operational within one week."
        />
        <ol className="mx-auto max-w-3xl border-l border-border pl-6 space-y-6">
          {timeline.map((t) => (
            <li key={t.day} className="relative pb-2">
              <span className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-primary/20" />
              <p className="text-sm font-semibold text-primary">{t.day}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="pt-0">
        <SectionTitle
          eyebrow="Deliverables"
          title="Everything Included in Your Setup Package"
          text="Comprehensive tools, vetted supplier catalogs, and ongoing mentorship to secure long-term seller profitability."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {included.map((i) => (
            <div
              key={i}
              className="surface-card flex items-center gap-3 px-5 py-4"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm font-medium">{i}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer"
          >
            Explore Pricing Plans <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
