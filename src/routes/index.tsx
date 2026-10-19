import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Check,
  Headphones,
  Image as ImageIcon,
  LineChart,
  Megaphone,
  PackageCheck,
  Phone,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Store,
  Truck,
  Users,
  Wallet,
  X,
  Zap,
} from "lucide-react";
import { Section, SectionTitle } from "@/components/PageShell";
import { HomeHeroSlider } from "@/components/HomeHeroSlider";
import { PricingSlider } from "@/components/PricingSlider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  categories,
  plans,
  steps,
  testimonials,
  faqs,
  CONTACT_INFO,
} from "@/lib/site-data";

const marketplaces = [
  {
    name: "Amazon India (Amazon.in)",
    eyebrow: "Amazon Ecommerce Selling",
    badge: "Highest Buyer Intent",
    description:
      "Launch on India's premier online marketplace. Complete Seller Central setup, category ungating, Brand Registry, and SEO-optimized A+ product content.",
    points: [
      "Seller Central registration & compliance verification",
      "Winning ASIN research with 35%–55% profit margins",
      "Automated FBM / Prime order routing & 24h dispatch",
      "A+ catalog copy with high-conversion bullet points",
    ],
    tag: "High Ticket Volume",
    accent: "border-amber-500/40 hover:border-amber-500/80",
    badgeStyle: "bg-amber-500/15 text-amber-400 border border-amber-500/30",
  },
  {
    name: "Flipkart Ecommerce Selling",
    eyebrow: "Flipkart Seller Hub",
    badge: "50 Crore+ Shoppers",
    description:
      "Reach deep into Tier 2, Tier 3, and Tier 4 consumer markets across 19,000+ pin codes with turnkey Flipkart seller onboarding.",
    points: [
      "Flipkart Seller Hub setup & brand approval tier",
      "Bulk catalog listing with SEO keyword attributes",
      "Big Billion Days festive campaign scaling readiness",
      "Automated inventory synchronization & courier handoff",
    ],
    tag: "Pan-India Penetration",
    accent: "border-sky-500/40 hover:border-sky-500/80",
    badgeStyle: "bg-sky-500/15 text-sky-400 border border-sky-500/30",
  },
  {
    name: "Meesho Ecommerce Selling",
    eyebrow: "Social Commerce & Reselling",
    badge: "0% Commission Platform",
    description:
      "Sell products without paying heavy marketplace commission cuts. The highest-growth platform for budget fashion, kitchenware, and lifestyle items.",
    points: [
      "0% platform commission on orders",
      "Massive viral product sales velocity",
      "Direct domestic manufacturer fulfillment integration",
      "Optimized for high-volume, low-cost customer acquisition",
    ],
    tag: "Zero Commission",
    accent: "border-fuchsia-500/40 hover:border-fuchsia-500/80",
    badgeStyle: "bg-fuchsia-500/15 text-fuchsia-400 border border-fuchsia-500/30",
  },
  {
    name: "Shopify D2C Branded Store",
    eyebrow: "Independent Brand Ownership",
    badge: "Maximum Profit Margins",
    description:
      "Build an independent digital brand. Retain 100% of your customer data, control product pricing, and build a lasting repeat-order business.",
    points: [
      "Bespoke mobile-first fast loading storefront theme",
      "Integrated Razorpay, PhonePe & automated COD checkout",
      "Facebook/Instagram Meta Pixel & Google Ads conversion tracking",
      "Automated WhatsApp COD verification to slash RTO below 12%",
    ],
    tag: "Build Your Asset",
    accent: "border-emerald-500/40 hover:border-emerald-500/80",
    badgeStyle: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
  },
];

const services = [
  {
    icon: Store,
    title: "Marketplace & Store Setup",
    text: "Turnkey seller account setup on Amazon, Flipkart, Meesho, and Shopify with GST guidance and category approvals.",
  },
  {
    icon: ImageIcon,
    title: "Listing SEO & Catalog Design",
    text: "Keyword-rich product titles, conversion-focused bullet points, and enhanced imagery engineered for high organic CTR.",
  },
  {
    icon: Boxes,
    title: "Winning Product Sourcing",
    text: "Access pre-vetted wholesale suppliers with pre-negotiated B2B profit margins and ready-to-import product catalogs.",
  },
  {
    icon: Truck,
    title: "Automated Dispatch & Fulfillment",
    text: "End-to-end packaging, automated courier pickup, tracking integration, and proactive RTO return management.",
  },
  {
    icon: Megaphone,
    title: "Paid Ads & Marketing Playbooks",
    text: "High-ROAS Meta, Google, and marketplace ad creatives, audience targeting frameworks, and scaling playbooks.",
  },
  {
    icon: Headphones,
    title: "1-on-1 Mentorship & Support",
    text: "Weekly live strategy calls, private seller community access, and ongoing real-time troubleshooting from e-commerce mentors.",
  },
];

const comparison = {
  old: [
    "Requires lakhs of upfront capital locked in unsold inventory",
    "Heavy warehouse rent and monthly packing labor overheads",
    "100% financial loss and dead stock risk absorbed by you",
    "Months wasted struggling to locate verified local suppliers",
    "Scaling catalog requires continuous reinvestment of heavy capital",
  ],
  now: [
    "Zero inventory investment — suppliers dispatch directly upon order",
    "No warehouse or packing staff needed — operate 100% from home",
    "Zero dead stock risk — suppliers hold inventory and absorb risk",
    "Pre-negotiated, QC-verified Indian supplier network ready on Day 1",
    "Scale across categories and marketplaces without additional capital",
  ],
};

const guarantees = [
  {
    icon: BadgeCheck,
    title: "72-Hour Store Launch SLA",
    text: "Complete storefront design, category approvals, and initial catalog live in 72 hours.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Catalog Updates",
    text: "Fresh trending winning products added to your catalog every single month at zero extra cost.",
  },
  {
    icon: Headphones,
    title: "Dedicated Human Support",
    text: "Real e-commerce growth specialists available Monday through Saturday, 10am to 7pm IST.",
  },
];

const tips = [
  {
    tag: "Product Research",
    title: "How to Identify High-Margin Winning Products",
    text: "Analyze sales velocity, profit margins, and historical return rates. Target products with 35%+ margins for profitable cold traffic scaling.",
  },
  {
    tag: "Listing SEO",
    title: "Optimizing Primary Imagery & CTR",
    text: "Clean studio white backgrounds, 85% frame filling, and lifestyle contextual photography deliver up to a 2.4x higher conversion rate.",
  },
  {
    tag: "RTO Reduction",
    title: "Proven Formula to Cut E-Commerce RTO by 40%",
    text: "Automated COD verification, accurate size specifications, and proactive SMS tracking updates drastically reduce return-to-origin rates.",
  },
];

const marquee = [
  "Amazon.in",
  "Flipkart",
  "Meesho",
  "Shopify",
  "WooCommerce",
  "JioMart",
  "Glowroad",
  "Custom D2C Store",
];

const problems = [
  {
    icon: Store,
    title: "Complex Store & Marketplace Setup",
    text: "Navigating seller registrations, brand registry, GST categories, and compliance halts most beginners before they even begin.",
  },
  {
    icon: Boxes,
    title: "Uncertain Winning Product Selection",
    text: "Picking the wrong products drains ad budgets and time. Guesswork fails without real-time marketplace demand analytics.",
  },
  {
    icon: Truck,
    title: "Dispatch, Packaging & High RTO Returns",
    text: "Manual packing, negotiating courier rates, and managing RTO returns feel overwhelming for individual sellers.",
  },
  {
    icon: Users,
    title: "Lack of Practical 1-on-1 Guidance",
    text: "Generic YouTube tutorials leave you stranded when unexpected account, listing, or ad issues arise in real business.",
  },
];

const features = [
  {
    icon: PackageCheck,
    title: "Zero Inventory Risk Model",
    text: "Order fulfillment happens directly from manufacturer to customer — eliminating upfront capital and inventory risk.",
  },
  {
    icon: LineChart,
    title: "Data-Validated Product Catalog",
    text: "Every product is pre-vetted with demand volume, profit margin calculations, and return rate metrics.",
  },
  {
    icon: ShieldCheck,
    title: "QC-Checked Supplier Network",
    text: "Surat, Delhi, Ludhiana, and Mumbai manufacturers with strict quality checks and wholesale pricing.",
  },
  {
    icon: Wallet,
    title: "Transparent, One-Time Investment",
    text: "Zero hidden commission fees on your sales. One-time setup fee for lifetime catalog and mentorship access.",
  },
];

// DropshipGuru-Inspired Turnkey Engine Steps
const engineWorkflow = [
  {
    step: "01",
    title: "Customer Places Order",
    desc: "Customer buys from your Shopify store, Amazon, or Meesho with online payment or COD.",
    badge: "Instant Sync",
  },
  {
    step: "02",
    title: "Automated Supplier Routing",
    desc: "Order is automatically routed to our verified Indian manufacturer without you lifting a finger.",
    badge: "Cloud Automated",
  },
  {
    step: "03",
    title: "QC Inspection & Custom Packaging",
    desc: "Warehouse performs strict quality check and prepares express packaging within 24 hours.",
    badge: "100% Quality Checked",
  },
  {
    step: "04",
    title: "Express Dispatch & Profit Settlement",
    desc: "Pan-India couriers deliver to customer with automated SMS tracking. Net profit goes to your account.",
    badge: "RTO Protected",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Dropship Boss: Trusted Indian Ecommerce Seller Platform",
      },
      {
        name: "description",
        content:
          "Dropship Boss is an ecommerce enablement and product fulfillment platform helping you sell products and grow your online business without inventory.",
      },
      {
        name: "keywords",
        content:
          "ecommerce selling India, product fulfillment partner India, product fulfillment partners India, trusted Indian ecommerce seller platforms, best ecommerce seller platform India, start online selling business, online selling without inventory, online selling business kya hai, Meesho ecommerce selling, Amazon ecommerce selling, Flipkart ecommerce selling, Shopify dropshipping India, Dropship Boss, best sourced products, sourced products, trending products for ecommerce selling, trending sourced products, best sourced products in india, top sourced products, winning products for ecommerce selling, winning products catalog, indian product fulfillment partners, ecommerce business, best product fulfillment partners india, india product fulfillment partners, dropshipping in India, dropshipping suppliers India, automated dropshipping India, B2B dropshipping India, best products for dropshipping in India, Indian ecommerce seller platform",
      },
      {
        property: "og:title",
        content:
          "Dropship Boss: Trusted Indian Ecommerce Seller Platform",
      },
      {
        property: "og:description",
        content:
          "Sell products and scale your online business without inventory. Turnkey store setup for Shopify, Amazon, Flipkart & Meesho with verified product catalogs and automated fulfillment.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Dynamic Multi-Slide Hero Banner Slider (Home Banner Page Slider) */}
      <HomeHeroSlider />

      {/* Marquee Partner Platforms Band */}
      <div className="overflow-hidden border-b border-border bg-card/30 py-3.5">
        <div className="marquee-track gap-10 pr-10">
          {[...marquee, ...marquee].map((m, i) => (
            <span
              key={i}
              className="whitespace-nowrap text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground/80 hover:text-primary transition-colors"
            >
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* DropshipGuru-Inspired Turnkey Automation Ecosystem Section */}
      <Section>
        <SectionTitle
          eyebrow="Turnkey Fulfillment Engine"
          title="How Our Automated Dropshipping Engine Works"
          text="Zero inventory stocking, zero manual packing. Our cloud-integrated supplier ecosystem takes care of everything from manufacturing to doorstep delivery."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {engineWorkflow.map((item) => (
            <div
              key={item.step}
              className="surface-card relative flex flex-col justify-between overflow-hidden p-6 rounded-3xl border border-border/80 group hover:border-primary/50"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl font-black text-primary/25 group-hover:text-primary/40 transition-colors">
                    {item.step}
                  </span>
                  <span className="rounded-full bg-primary/10 border border-primary/30 px-2.5 py-0.5 text-[10px] font-bold text-primary uppercase">
                    {item.badge}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-primary pt-3 border-t border-border/40">
                <BadgeCheck className="h-4 w-4" />
                <span>Fully Managed By Dropship Boss</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Multi-Channel Marketplace Enablement Hub */}
      <Section className="pt-0">
        <SectionTitle
          eyebrow="Omnichannel Seller Enablement"
          title="Sell Across India's Largest E-Commerce Marketplaces"
          text="Tap into 350+ Million active shoppers. Dropship Boss provides turnkey seller onboarding, automated catalog synchronization, and hands-free fulfillment across Amazon India, Flipkart, Meesho, and Shopify."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {marketplaces.map((m) => (
            <div
              key={m.name}
              className={`surface-card group relative flex flex-col justify-between overflow-hidden p-7 rounded-3xl border transition-all duration-300 ${m.accent}`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {m.eyebrow}
                  </span>
                  <span
                    className={`rounded-full px-3 py-0.5 text-xs font-bold uppercase ${m.badgeStyle}`}
                  >
                    {m.badge}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-bold text-foreground">
                  {m.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {m.description}
                </p>

                <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                  {m.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex items-center justify-between pt-4 border-t border-border/50">
                <span className="text-xs font-semibold text-primary">
                  {m.tag}
                </span>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Common Problems / Roadblocks */}
      <Section className="pt-0">
        <SectionTitle
          eyebrow="Common Roadblocks"
          title="Challenges That Hold Beginner Sellers Back"
          text="We solve the four biggest bottlenecks standing between you and your first 100 sales."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p) => (
            <div key={p.title} className="surface-card group p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary transition-transform duration-300 group-hover:-rotate-6">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* High-Demand Categories & Sourced Products */}
      <Section className="pt-0">
        <SectionTitle
          eyebrow="Winning Products Catalog • Sourced Products in India"
          title="Best Sourced Products for Dropshipping & E-Commerce Selling"
          text="Browse trending sourced products across 6 high-demand consumer categories with pre-negotiated wholesale profit margins. Direct factory sourcing from Surat, Delhi NCR, and Mumbai."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/categories"
              hash={c.slug}
              className="surface-card group overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={c.image}
                  alt={`${c.title} Dropshipping Catalog in India`}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute right-3 top-3 rounded-full bg-background/85 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                  Margin {c.margin}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
                  {c.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {c.tagline}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  {c.products} products
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Why Dropship Boss Features */}
      <Section className="pt-0">
        <SectionTitle
          eyebrow="Trusted Indian Ecommerce Seller Platform"
          title="India's Most Reliable Product Fulfillment & Enablement Partner"
          text="Everything you need to source winning products, launch turnkey stores, and automate fulfillment without holding inventory."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="surface-card flex gap-4 p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                <f.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Steps to Start */}
      <Section className="pt-0">
        <SectionTitle
          eyebrow="Proven Process"
          title="Launch Your Store in 4 Simple Steps"
          text="Follow our battle-tested milestone checklist from zero to your first customer sale."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="surface-card relative p-6">
              <span className="font-display text-4xl font-bold text-primary/25">
                {s.n}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Seller Success Stories */}
      <Section className="pt-0">
        <SectionTitle
          eyebrow="Seller Success Stories"
          title="Real Results From Real Indian E-Commerce Sellers"
          text="Hear how everyday entrepreneurs launched profitable dropshipping businesses with Dropship Boss."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <figure key={t.name} className="surface-card p-6 flex flex-col justify-between">
              <blockquote className="text-sm text-muted-foreground italic leading-relaxed">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 pt-3 border-t border-border/50">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 font-semibold text-primary">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">
                    {t.city}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Services Breakdown */}
      <Section className="pt-0">
        <SectionTitle
          eyebrow="Comprehensive Solutions"
          title="Complete End-to-End Dropshipping & Scaling Ecosystem"
          text="From initial storefront setup to multi-channel advertising and automated fulfillment."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="surface-card group p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary transition-transform duration-300 group-hover:scale-110">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Model Comparison */}
      <Section className="pt-0">
        <SectionTitle
          eyebrow="Model Comparison"
          title="Traditional Retail vs. Automated Dropshipping"
          text="See why modern entrepreneurs are choosing the zero-inventory dropshipping model."
        />
        <div className="grid gap-5 md:grid-cols-2">
          <div className="surface-card p-7">
            <h3 className="text-lg font-semibold text-muted-foreground">
              Traditional E-Commerce
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {comparison.old.map((t) => (
                <li key={t} className="flex gap-3">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-card border-primary/40 p-7">
            <h3 className="text-lg font-semibold gradient-text">
              Dropship Boss Automated Model
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {comparison.now.map((t) => (
                <li key={t} className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Guarantees */}
      <Section className="pt-0">
        <div className="surface-card grid gap-6 p-8 sm:grid-cols-3">
          {guarantees.map((g) => (
            <div key={g.title} className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                <g.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold">{g.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{g.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* All 7 Subscription & Enablement Plans in Interactive Slider */}
      <Section className="pt-0">
        <SectionTitle
          eyebrow="Flexible Membership & Seller Packages"
          title="Predictable Pricing, Zero Hidden Commissions"
          text="Explore all 7 setup and subscription tiers. From WhatsApp social reselling to full marketplace and custom D2C stores with automated fulfillment."
        />
        <PricingSlider />
      </Section>

      {/* Seller Tips & Knowledge */}
      <Section className="pt-0">
        <SectionTitle
          eyebrow="Seller Knowledge Base"
          title="Proven Strategies to Scale Your Dropshipping Business"
          text="Actionable insights from our team of e-commerce and sourcing specialists."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {tips.map((t) => (
            <article key={t.title} className="surface-card p-6">
              <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {t.tag}
              </span>
              <h3 className="mt-4 text-base font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.text}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Comprehensive E-Commerce FAQ Section for Google Ranking & Seller Clarity */}
      <Section className="pt-0">
        <SectionTitle
          eyebrow="Frequently Asked Questions • PAA Search Snippets"
          title="Everything You Need to Know About Online Selling in India"
          text="Get clear, transparent answers about zero-inventory dropshipping, supplier sourcing, profit calculations, COD verification, and marketplace setup."
        />
        <div className="mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="w-full space-y-3.5">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="surface-card rounded-2xl border border-border/80 px-6 data-[state=open]:border-primary/50 data-[state=open]:glow-ring transition-colors"
              >
                <AccordionTrigger className="text-base sm:text-lg font-bold text-foreground hover:no-underline hover:text-primary transition-colors py-4 sm:py-5">
                  <span className="text-left leading-snug">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-5 border-t border-border/40 pt-3">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 surface-card p-6 rounded-2xl border border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="font-bold text-foreground text-base">Still have questions about starting your online store?</h4>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Our Indian e-commerce growth specialists are available to guide you on call or WhatsApp.
              </p>
            </div>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 px-6 py-2.5 text-xs font-bold text-white transition-all duration-300 shadow-md shrink-0 cursor-pointer"
            >
              <Phone className="h-3.5 w-3.5" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </Section>

      {/* Ready to Launch Banner */}
      <Section className="pt-0">
        <div className="surface-card overflow-hidden p-8 sm:p-12 text-center border-primary/40 bg-gradient-to-b from-card via-card to-primary/10">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Ready To Start Earning?
          </span>
          <h2 className="mt-4 text-2xl sm:text-4xl font-bold">
            Launch Your Dropshipping Business In The Next 72 Hours
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
            Zero inventory risk, verified Indian wholesale suppliers, automated order dispatch,
            and continuous 1-on-1 human mentorship.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/pricing"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto cursor-pointer"
            >
              Get Started Now
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-3.5 font-semibold transition-colors duration-300 hover:border-primary hover:text-primary w-full sm:w-auto cursor-pointer"
            >
              <Phone className="h-4 w-4" /> Book Free Consultation
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
