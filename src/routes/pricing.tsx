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
import { PricingSlider } from "@/components/PricingSlider";
import { CONTACT_INFO, faqs, plans } from "@/lib/site-data";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      {
        title:
          "Start Online Selling Business — Plans & Pricing | Dropship Boss",
      },
      {
        name: "description",
        content:
          "Transparent subscription packages for turnkey ecommerce selling and dropshipping in India. Silver, Gold, Titanium, Platinum, Platinum Plus, Elite, and Diamond plans with zero inventory.",
      },
      {
        name: "keywords",
        content:
          "start online selling business, best ecommerce seller platform India, product fulfillment partners india, B2B dropshipping India, dropshipping pricing india, turnkey store packages, online selling without inventory, Dropship Boss",
      },
      { property: "og:title", content: "Start Online Selling Business — Dropship Boss Pricing & Plans" },
      {
        property: "og:description",
        content:
          "Predictable, transparent pricing for complete ecommerce seller platform setup in India with verified product catalogs and automated fulfillment.",
      },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Transparent Investment • All 7 Plans"
        title={
          <>
            Predictable Pricing, <span className="gradient-text">Zero Hidden Commissions</span>
          </>
        }
        subtitle="One-time & monthly setup options with verified catalog access and 1-on-1 mentorship. Slide through our complete tiers below and launch your automated e-commerce store in 72 hours."
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
            <span>Dedicated Human Support</span>
          </div>
        </div>
      </div>

      {/* Main Pricing Slider */}
      <Section>
        <SectionTitle
          eyebrow="All 7 Seller Tiers • Transparent Subscriptions"
          title="Choose Your Automated Selling Package"
          text="Slide horizontally to browse our social reselling plans, multi-marketplace seller packages, and complete turnkey D2C web stores."
        />
        <PricingSlider />

        {/* Custom Enterprise or Consultation Callout */}
        <div className="mt-14 surface-card flex flex-col md:flex-row items-center justify-between gap-6 p-6 sm:p-8 border border-primary/30 bg-gradient-to-r from-card via-card to-primary/5">
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
                <th className="py-4 px-4 text-center font-semibold">Silver (₹590/yr)</th>
                <th className="py-4 px-4 text-center font-semibold">Gold (₹1,590/yr)</th>
                <th className="py-4 px-4 text-center font-semibold text-primary bg-primary/5">
                  Platinum (₹5,000/yr) ★
                </th>
                <th className="py-4 px-4 text-center font-semibold">Diamond (₹15,000/yr)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              <tr>
                <td className="py-3.5 px-6 font-medium text-foreground">Selling Channels</td>
                <td className="py-3.5 px-4 text-center text-muted-foreground">WhatsApp Reselling</td>
                <td className="py-3.5 px-4 text-center text-muted-foreground">WhatsApp + Instagram + FB</td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold bg-primary/5">
                  Amazon.in + Flipkart + Meesho
                </td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold">
                  Custom Branded D2C Website
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-6 font-medium text-foreground">Products Added Monthly</td>
                <td className="py-3.5 px-4 text-center text-muted-foreground">20 Winning Products</td>
                <td className="py-3.5 px-4 text-center text-muted-foreground">40 Winning Products</td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold bg-primary/5">
                  40 Products on Panel
                </td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold">
                  40 Pre-Loaded Products / Mo
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-6 font-medium text-foreground">Zero-Inventory Model</td>
                <td className="py-3.5 px-4 text-center text-muted-foreground">100% Zero Stock</td>
                <td className="py-3.5 px-4 text-center text-muted-foreground">100% Zero Stock</td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold bg-primary/5">
                  100% Zero Stock
                </td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold">
                  100% Zero Stock
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-6 font-medium text-foreground">Fulfillment & Shipping</td>
                <td className="py-3.5 px-4 text-center text-muted-foreground">Managed by our team</td>
                <td className="py-3.5 px-4 text-center text-muted-foreground">Pan-India express dispatch</td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold bg-primary/5">
                  QC check & express courier
                </td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold">
                  Automated packing + RTO control
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-6 font-medium text-foreground">Store / Account Setup</td>
                <td className="py-3.5 px-4 text-center text-muted-foreground">Direct Social Catalog</td>
                <td className="py-3.5 px-4 text-center text-muted-foreground">Social Commerce Hub</td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold bg-primary/5">
                  Seller Central + Ungating
                </td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold">
                  Custom Domain Storefront
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-6 font-medium text-foreground">Payment Gateway / COD</td>
                <td className="py-3.5 px-4 text-center text-muted-foreground">Direct UPI / Cash</td>
                <td className="py-3.5 px-4 text-center text-muted-foreground">Direct UPI / Cash</td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold bg-primary/5">
                  Marketplace Payouts
                </td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold">
                  Razorpay, PhonePe & COD
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-6 font-medium text-foreground">Support & Mentorship</td>
                <td className="py-3.5 px-4 text-center text-muted-foreground">WhatsApp Community</td>
                <td className="py-3.5 px-4 text-center text-muted-foreground">Community & Fast-Track Chat</td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold bg-primary/5">
                  Listing & SEO Guidance
                </td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold">
                  1-on-1 Mentor + Ads Playbook
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-6 font-medium text-foreground">Launch SLA</td>
                <td className="py-3.5 px-4 text-center text-muted-foreground">Instant Access</td>
                <td className="py-3.5 px-4 text-center text-muted-foreground">Instant Access</td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold bg-primary/5">
                  72 Hours Guaranteed
                </td>
                <td className="py-3.5 px-4 text-center text-foreground font-semibold">
                  72 Hours Full Turnkey
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
