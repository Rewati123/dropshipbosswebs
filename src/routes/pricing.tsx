import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Headphones,
  HelpCircle,
  MessageSquare,
  Package,
  PhoneCall,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Store,
  Truck,
  Zap,
} from "lucide-react";
import { PageHero, Section, SectionTitle } from "@/components/PageShell";
import { CONTACT_INFO, faqs, plans } from "@/lib/site-data";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      {
        title:
          "Dropshipping Setup Pricing & Packages in India | Dropship Boss",
      },
      {
        name: "description",
        content:
          "Explore SeekhoBecho-structured transparent pricing for turnkey dropshipping setup in India. Starter, Growth Automation, and Scale Pro VIP packages with zero inventory, verified suppliers, and lifetime mentorship.",
      },
      {
        name: "keywords",
        content:
          "dropshipping pricing india, dropship setup cost, turnkey store packages, ecommerce automation cost, shopify setup price india, seekhobecho pricing, dropshipguru plans",
      },
      { property: "og:title", content: "Dropshipping Pricing & Packages — Dropship Boss" },
      {
        property: "og:description",
        content:
          "Predictable, one-time pricing for complete dropshipping store setup in India with verified product catalogs and automated dispatch.",
      },
    ],
  }),
  component: Pricing,
});

const categoryIcons: Record<string, typeof Store> = {
  "Marketplace & Store Setup": Store,
  "Product Sourcing & Catalog": Package,
  "Fulfillment & Logistics": Truck,
  "Training & Mentorship": Headphones,
};

function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Transparent Investment • Seekho & Becho Confidently"
        title={
          <>
            Predictable Pricing, <span className="gradient-text">Zero Monthly Commissions</span>
          </>
        }
        subtitle="One-time turnkey setup investment with lifetime catalog access and 1-on-1 mentorship. Compare our structured packages below and launch your automated e-commerce store in 72 hours."
      />

      {/* Trust Highlights Strip (DropshipGuru-inspired) */}
      <div className="border-y border-border/70 bg-card/40 py-3.5 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-4 px-4 text-xs font-semibold sm:text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span>2,500+ Stores Setup Across India</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Zap className="h-4 w-4 text-primary" />
            <span>72-Hour Guaranteed SLA Launch</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>100% Zero-Inventory Model</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Headphones className="h-4 w-4 text-primary" />
            <span>Lifetime Dedicated Support</span>
          </div>
        </div>
      </div>

      {/* Main Pricing Cards (SeekhoBecho-Structured Hierarchy) */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-3 items-stretch">
          {plans.map((p) => {
            const isFeatured = p.highlight;
            return (
              <div
                key={p.id}
                className={`surface-card relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                  isFeatured
                    ? "glow-ring border-primary/70 bg-gradient-to-b from-card via-card to-primary/5 lg:-translate-y-3 z-10"
                    : "border-border/80 bg-card/60"
                }`}
              >
                {/* Ribbon Badge */}
                {p.badge && (
                  <div className="mb-4 flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider ${
                        isFeatured
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                          : "border border-primary/40 bg-primary/10 text-primary"
                      }`}
                    >
                      {p.badge}
                    </span>
                    <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-xs font-bold text-emerald-400">
                      {p.discount}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Purpose */}
                  <h2 className="text-2xl font-bold tracking-tight">{p.name}</h2>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed min-h-[3rem]">
                    {p.subtitle}
                  </p>

                  {/* Price Box with Strikethrough & Highlight */}
                  <div className="mt-5 rounded-2xl border border-border/80 bg-background/60 p-4 sm:p-5">
                    <div className="flex items-baseline gap-2.5">
                      <span className="text-xs font-medium uppercase text-muted-foreground">
                        Regular Price:
                      </span>
                      <span className="text-sm font-semibold line-through text-muted-foreground/80 decoration-destructive decoration-2">
                        {p.originalPrice}
                      </span>
                      <span className="ml-auto rounded-full bg-primary/15 px-2 py-0.5 text-[11px] font-bold text-primary">
                        {p.discount}
                      </span>
                    </div>

                    <div className="mt-2 flex items-baseline gap-1">
                      <span className="font-display text-4xl sm:text-5xl font-black gradient-text tracking-tight">
                        {p.price}
                      </span>
                      <span className="text-xs text-muted-foreground font-medium ml-1">
                        / one-time
                      </span>
                    </div>

                    <p className="mt-2 text-[11px] sm:text-xs text-muted-foreground font-medium flex items-center gap-1.5">
                      <BadgeCheck className="h-3.5 w-3.5 text-primary shrink-0" />
                      {p.note}
                    </p>
                  </div>

                  {/* Primary CTA Button */}
                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className={`group flex w-full items-center justify-center gap-2 rounded-xl py-3.5 px-4 text-sm font-bold transition-all duration-300 hover:scale-[1.02] cursor-pointer shadow-lg ${
                        isFeatured
                          ? "bg-primary text-primary-foreground hover:bg-primary/95 shadow-primary/25"
                          : "border border-border bg-card hover:border-primary hover:text-primary"
                      }`}
                    >
                      <span>{p.ctaText}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <p className="mt-2 text-center text-[11px] text-muted-foreground">
                      ⚡ 72-Hour SLA Guaranteed Store Launch
                    </p>
                  </div>

                  {/* SeekhoBecho-Style Categorized Feature Breakdown */}
                  <div className="mt-8 space-y-5 border-t border-border/60 pt-6">
                    {p.groupedFeatures.map((group) => {
                      const IconComponent =
                        categoryIcons[group.category] || Sparkles;
                      return (
                        <div key={group.category} className="space-y-2">
                          <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground">
                            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-primary/15 text-primary">
                              <IconComponent className="h-3 w-3" />
                            </span>
                            {group.category}
                          </h3>
                          <ul className="space-y-2 pl-1">
                            {group.items.map((feat, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground"
                              >
                                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                                <span className="leading-snug">{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer of Card */}
                <div className="mt-8 pt-4 border-t border-border/40 text-center">
                  <a
                    href={`https://wa.me/919582617055?text=Hello%20Dropship%20Boss%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                      p.name
                    )}%20plan`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary/90 hover:text-primary transition-colors cursor-pointer"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    Chat on WhatsApp about this plan
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Enterprise or Consultation Callout */}
        <div className="mt-12 surface-card flex flex-col md:flex-row items-center justify-between gap-6 p-6 sm:p-8 border border-primary/30 bg-gradient-to-r from-card via-card to-primary/5">
          <div className="space-y-1 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Need Custom Channel Integration?
            </span>
            <h3 className="text-xl font-bold">Unsure Which Package Fits Your Budget?</h3>
            <p className="text-sm text-muted-foreground max-w-xl">
              Schedule a free 15-minute consultation with our senior e-commerce mentor.
              We analyze your marketplace goals, capital, and suggest the fastest path to profitability.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all cursor-pointer"
            >
              <PhoneCall className="h-4 w-4" /> Book Free Strategy Call
            </Link>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-primary hover:text-primary transition-colors cursor-pointer"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </Section>

      {/* Feature Comparison Matrix */}
      <Section className="pt-0">
        <SectionTitle
          eyebrow="Detailed Comparison"
          title="Compare Package Inclusions At A Glance"
          text="Clear side-by-side breakdown so you can choose the right automation level for your business."
        />
        <div className="overflow-x-auto rounded-3xl border border-border surface-card">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-background/50 text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="py-4 px-6 font-semibold">Features & Deliverables</th>
                <th className="py-4 px-4 text-center font-semibold">Starter (₹2,999)</th>
                <th className="py-4 px-4 text-center font-semibold text-primary bg-primary/5">
                  Growth (₹7,499) ★
                </th>
                <th className="py-4 px-4 text-center font-semibold">Scale Pro (₹14,999)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              <tr>
                <td className="py-3.5 px-6 font-medium text-foreground">Channels Included</td>
                <td className="py-3.5 px-4 text-center text-muted-foreground">1 (Amazon or Meesho)</td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold bg-primary/5">
                  3 (Shopify + Amazon + Meesho)
                </td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold">
                  All 5 + Custom D2C Store
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-6 font-medium text-foreground">Turnkey Store Design</td>
                <td className="py-3.5 px-4 text-center text-muted-foreground">Standard Layout</td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold bg-primary/5">
                  Done-For-You Custom Theme
                </td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold">
                  Bespoke High-Converting Brand
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-6 font-medium text-foreground">Winning Catalog Sourced</td>
                <td className="py-3.5 px-4 text-center text-muted-foreground">50 Products</td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold bg-primary/5">
                  500+ Curated Products
                </td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold">
                  Full 40,000+ Wholesale Catalog
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-6 font-medium text-foreground">Order Sync & Automation</td>
                <td className="py-3.5 px-4 text-center text-muted-foreground">Semi-Automated Guide</td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold bg-primary/5">
                  100% Automated Cloud Sync
                </td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold">
                  VIP Priority Pipeline + QC
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-6 font-medium text-foreground">RTO Reduction Toolkit</td>
                <td className="py-3.5 px-4 text-center text-muted-foreground">Checklist & Guide</td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold bg-primary/5">
                  Automated WhatsApp/SMS IVR
                </td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold">
                  AI Risk Engine (&lt; 4.8% Returns)
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-6 font-medium text-foreground">Ad Strategy & Scaling</td>
                <td className="py-3.5 px-4 text-center text-muted-foreground">—</td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold bg-primary/5">
                  High-ROAS Meta & Google Playbook
                </td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold">
                  1-on-1 Managed Ad Optimization
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-6 font-medium text-foreground">Support & Mentorship</td>
                <td className="py-3.5 px-4 text-center text-muted-foreground">Email Support (90 Days)</td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold bg-primary/5">
                  Weekly 1-on-1 Video + WhatsApp
                </td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold">
                  Dedicated Personal Account Manager
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-6 font-medium text-foreground">Launch SLA</td>
                <td className="py-3.5 px-4 text-center text-muted-foreground">5 Days</td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold bg-primary/5">
                  72 Hours Guaranteed
                </td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold">
                  48-72 Hours Priority SLA
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* Package FAQ */}
      <Section className="pt-0">
        <SectionTitle
          eyebrow="Package FAQ"
          title="Frequently Asked Questions About Billing & Setup"
          text="Clear answers regarding our one-time fee, payment structures, and included seller guarantees."
        />
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="surface-card group px-5 py-4 transition-all [&[open]]:border-primary/50"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold transition-colors group-hover:text-primary flex items-center justify-between">
                <span>{f.q}</span>
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-3">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
