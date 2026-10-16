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
import {
  categories,
  plans,
  steps,
  testimonials,
} from "@/lib/site-data";

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
          "Dropship Boss — #1 Dropshipping & E-Commerce Automation Partner in India | Zero Inventory",
      },
      {
        name: "description",
        content:
          "Launch your automated dropshipping business in India with zero inventory. Turnkey store setup for Shopify, Amazon, Flipkart & Meesho with vetted Indian suppliers, winning product catalogs, and automated order fulfillment.",
      },
      {
        name: "keywords",
        content:
          "dropshipping in india, automated dropshipping, ecommerce dropshipping, zero inventory business, shopify dropshipping india, amazon dropshipping supplier, meesho reselling, winning products catalog, b2b dropship india, order fulfillment, rto reduction",
      },
      {
        property: "og:title",
        content:
          "Dropship Boss — #1 Dropshipping & E-Commerce Automation Partner in India",
      },
      {
        property: "og:description",
        content:
          "Complete turnkey dropshipping setup for Amazon, Meesho, Flipkart & Shopify with verified product catalogs, automated fulfillment, and lifetime mentorship.",
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

      {/* High-Demand Categories */}
      <Section className="pt-0">
        <SectionTitle
          eyebrow="Curated Catalogs"
          title="High-Demand E-Commerce Dropshipping Categories"
          text="Access vetted supplier lists, verified profit margins, and 1-click importable catalogs."
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
          eyebrow="Why Dropship Boss"
          title="All-in-One E-Commerce Dropshipping Automation"
          text="Everything you need to source, launch, and scale under a single roof."
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

      {/* SeekhoBecho-Structured Pricing Cards Section */}
      <Section className="pt-0">
        <SectionTitle
          eyebrow="Transparent Packages • Seekho & Becho"
          title="Predictable Pricing, Zero Hidden Commissions"
          text="One-time setup investment, lifetime catalog access and ongoing mentorship. Launch in 72 hours."
        />
        <div className="grid gap-6 md:grid-cols-3 items-stretch">
          {plans.map((p) => {
            const isFeatured = p.highlight;
            return (
              <div
                key={p.id}
                className={`surface-card relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 sm:p-7 transition-all duration-300 ${
                  isFeatured
                    ? "glow-ring border-primary/70 bg-gradient-to-b from-card via-card to-primary/5 md:-translate-y-2"
                    : "border-border/80"
                }`}
              >
                <div>
                  {/* Top Badge & Discount Pill */}
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                        isFeatured
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "border border-primary/40 bg-primary/10 text-primary"
                      }`}
                    >
                      {p.badge || p.name}
                    </span>
                    <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-xs font-bold text-emerald-400">
                      {p.discount}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                    {p.subtitle}
                  </p>

                  {/* SeekhoBecho Price Anchoring */}
                  <div className="mt-4 rounded-xl border border-border/80 bg-background/50 p-3.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Original:</span>
                      <span className="text-xs line-through text-muted-foreground decoration-destructive decoration-2">
                        {p.originalPrice}
                      </span>
                      <span className="ml-auto text-[11px] font-bold text-primary">
                        {p.discount}
                      </span>
                    </div>
                    <div className="mt-1 flex items-baseline gap-1">
                      <span className="text-3xl font-black gradient-text">
                        {p.price}
                      </span>
                      <span className="text-[11px] text-muted-foreground">/ one-time</span>
                    </div>
                    <p className="mt-1 text-[11px] text-muted-foreground flex items-center gap-1">
                      <BadgeCheck className="h-3 w-3 text-primary shrink-0" />
                      {p.note}
                    </p>
                  </div>

                  {/* Structured Deliverables */}
                  <ul className="mt-5 space-y-2.5 text-xs text-muted-foreground">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                        <span className="leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60">
                  <Link
                    to="/pricing"
                    className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 px-4 text-xs font-bold transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                      isFeatured
                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                        : "border border-border hover:border-primary hover:text-primary"
                    }`}
                  >
                    <span>View Plan Details & Setup</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
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
