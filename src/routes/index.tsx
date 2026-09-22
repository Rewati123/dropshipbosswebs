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
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { Section, SectionTitle } from "@/components/PageShell";
import {
  categories,
  faqs,
  plans,
  stats,
  steps,
  testimonials,
} from "@/lib/site-data";

const services = [
  {
    icon: Store,
    title: "Marketplace account setup",
    text: "Amazon, Flipkart, Meesho aur JioMart par seller account, GST guidance aur category approval.",
  },
  {
    icon: ImageIcon,
    title: "Listing & catalog design",
    text: "SEO title, keyword-rich bullets aur clean product images taaki conversion high rahe.",
  },
  {
    icon: Boxes,
    title: "Product sourcing",
    text: "Verified suppliers se pre-negotiated rate par ready-to-import catalog.",
  },
  {
    icon: Truck,
    title: "Order & dispatch support",
    text: "Packing, labeling, courier pickup aur RTO handling ka pura coordination.",
  },
  {
    icon: Megaphone,
    title: "Ads & marketing playbook",
    text: "Meta aur marketplace ads ke ready templates, budget planning ke saath.",
  },
  {
    icon: Headphones,
    title: "Mentorship & support",
    text: "Weekly call, WhatsApp group aur lifetime doubt solving human team se.",
  },
];

const comparison = {
  old: [
    "Lakhs ka stock pehle kharidna padta hai",
    "Godown aur packing staff ka kharcha",
    "Unsold inventory ka pura loss aapka",
    "Supplier dhundhne me mahine lag jate hain",
    "Scaling ke liye aur capital chahiye",
  ],
  now: [
    "Zero inventory — order aane par hi dispatch",
    "Na godown, na staff, ghar se operate",
    "Stock risk supplier ke paas rehta hai",
    "Verified supplier network day-1 se ready",
    "Bina extra capital ke categories add karein",
  ],
};

const guarantees = [
  {
    icon: BadgeCheck,
    title: "72 ghante me live",
    text: "Setup deadline miss hui to plan ka time free extend.",
  },
  {
    icon: RefreshCw,
    title: "Lifetime catalog updates",
    text: "Har mahine naye winning products bina extra charge.",
  },
  {
    icon: Headphones,
    title: "Human support",
    text: "Bot nahi — real team, Mon–Sat 10am se 7pm tak.",
  },
];

const tips = [
  {
    tag: "Product research",
    title: "Winning product kaise pehchane",
    text: "Demand, margin aur return-rate — teeno check karein. 30% se kam margin wale items beginners ke liye risky hain.",
  },
  {
    tag: "Listing",
    title: "Pehla image hi sale karta hai",
    text: "White background, product 85% frame me aur ek lifestyle shot — CTR turant improve hota hai.",
  },
  {
    tag: "Returns",
    title: "RTO kam karne ka simple formula",
    text: "COD par order confirmation call, sahi size chart aur clear delivery timeline — RTO 40% tak ghat sakta hai.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DROPSHIP BOSS — Lead • Sell • Grow | Dropshipping Partner in India" },
      {
        name: "description",
        content:
          "Zero inventory se online business shuru karein. Store setup, winning products, supplier network aur dispatch support — sab ek jagah.",
      },
      {
        property: "og:title",
        content: "DROPSHIP BOSS — Lead • Sell • Grow",
      },
      {
        property: "og:description",
        content:
          "Amazon, Meesho, Flipkart aur apna store — complete setup with curated product catalog aur lifetime support.",
      },
    ],
  }),
  component: Home,
});

const marquee = [
  "Amazon.in",
  "Flipkart",
  "Meesho",
  "Shopify",
  "WooCommerce",
  "JioMart",
  "Glowroad",
  "Own D2C Store",
];

const problems = [
  {
    icon: Store,
    title: "Store setup samajh nahi aata",
    text: "Seller account, GST, category approval — pehla step hi sabse bada blocker ban jata hai.",
  },
  {
    icon: Boxes,
    title: "Kaunsa product bechein?",
    text: "Galat product choose karne se time aur paisa dono waste hota hai. Data ke bina guess kaam nahi karta.",
  },
  {
    icon: Truck,
    title: "Dispatch aur returns ka jhanjhat",
    text: "Packing, courier, RTO — akele handle karna beginners ke liye impossible lagta hai.",
  },
  {
    icon: Users,
    title: "Koi sahi guide nahi milta",
    text: "YouTube pe adhoori information. Practical problem par koi jawab dene wala nahi hota.",
  },
];

const features = [
  {
    icon: PackageCheck,
    title: "Zero inventory model",
    text: "Order aane ke baad hi supplier dispatch karta hai — upfront stock investment zero.",
  },
  {
    icon: LineChart,
    title: "Data-backed products",
    text: "Har product par demand, margin aur return-rate data taaki decision guess na ho.",
  },
  {
    icon: ShieldCheck,
    title: "Verified supplier network",
    text: "Surat, Delhi, Ludhiana aur Mumbai ke QC-checked suppliers, pre-negotiated rates par.",
  },
  {
    icon: Wallet,
    title: "Transparent pricing",
    text: "Koi hidden commission nahi. Ek baar plan, lifetime catalog aur support access.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="aurora overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:py-24">
          <div className="rise-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <Sparkles className="h-3.5 w-3.5" /> India ka reselling partner
            </span>
            <h1 className="mt-4 sm:mt-6 text-3xl font-bold leading-[1.12] sm:text-5xl lg:text-6xl">
              Apna online business{" "}
              <span className="gradient-text">bina inventory</span> ke shuru
              karein
            </h1>
            <p className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg text-muted-foreground">
              Amazon, Meesho, Flipkart ya apna D2C store — hum setup, winning
              products aur dispatch sab handle karte hain. Aap sirf bechna
              seekhiye.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/pricing"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto"
              >
                Plans dekhein
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 font-semibold transition-colors duration-300 hover:border-primary hover:text-primary w-full sm:w-auto"
              >
                <Phone className="h-4 w-4" /> Free consultation
              </Link>
            </div>
            <dl className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="p-1 sm:p-0">
                  <dt className="text-xl sm:text-2xl font-bold gradient-text">
                    {s.value}
                  </dt>
                  <dd className="text-xs text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="glow-ring float-soft overflow-hidden rounded-4xl">
              <img
                src={heroImg}
                alt="Dropshipping seller apna online store manage karte hue"
                width={1200}
                height={1000}
                className="w-full object-cover"
              />
            </div>
            <div className="surface-card absolute -bottom-6 left-2 hidden gap-3 p-4 sm:flex">
              <BadgeCheck className="h-9 w-9 text-primary" />
              <div>
                <p className="text-sm font-semibold">72 ghante me store live</p>
                <p className="text-xs text-muted-foreground">
                  Setup + listing + branding
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* marquee */}
        <div className="overflow-hidden border-t border-border py-4">
          <div className="marquee-track gap-10 pr-10">
            {[...marquee, ...marquee].map((m, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problems */}
      <Section>
        <SectionTitle
          eyebrow="Kya aap bhi ye sochte hain?"
          title="Ye galtiyan beginners ko rok deti hain"
          text="Zyadatar log inhi 4 reasons se pehla order tak nahi pahunch paate — hum har ek ko solve karte hain."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p) => (
            <div key={p.title} className="surface-card group p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary transition-transform duration-300 group-hover:-rotate-6">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Categories */}
      <Section className="pt-0">
        <SectionTitle
          eyebrow="Categories"
          title="Trending categories jinme abhi demand hai"
          text="Har category ka margin range, supplier list aur ready-to-import catalog milta hai."
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
                  alt={c.title}
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

      {/* Features */}
      <Section className="pt-0">
        <SectionTitle
          eyebrow="Why Dropship Boss"
          title="Sab kuch ek hi jagah, bina jhanjhat"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="surface-card flex gap-4 p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                <f.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Steps */}
      <Section className="pt-0">
        <SectionTitle eyebrow="Process" title="4 simple steps me shuruaat" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="surface-card relative p-6">
              <span className="font-display text-4xl font-bold text-primary/25">
                {s.n}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="pt-0">
        <SectionTitle
          eyebrow="Sellers ki baat"
          title="Real logon ke real results"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <figure key={t.name} className="surface-card p-6">
              <blockquote className="text-sm text-muted-foreground">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
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

      {/* Services */}
      <Section className="pt-0">
        <SectionTitle
          eyebrow="Services"
          title="Ek hi chhat ke neeche puri seller journey"
          text="Setup se lekar scaling tak — har stage par done-for-you support."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="surface-card group p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary transition-transform duration-300 group-hover:scale-110">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Comparison */}
      <Section className="pt-0">
        <SectionTitle
          eyebrow="Comparison"
          title="Purana tarika vs Dropship Boss tarika"
        />
        <div className="grid gap-5 md:grid-cols-2">
          <div className="surface-card p-7">
            <h3 className="text-lg font-semibold text-muted-foreground">
              Traditional business
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {comparison.old.map((t) => (
                <li key={t} className="flex gap-3">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-card border-primary/40 p-7">
            <h3 className="text-lg font-semibold gradient-text">
              Dropship Boss ke saath
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {comparison.now.map((t) => (
                <li key={t} className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Guarantee band */}
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

      {/* Pricing teaser */}
      <Section className="pt-0">
        <SectionTitle
          eyebrow="Pricing"
          title="Simple plans, koi hidden charge nahi"
          text="Ek baar ka payment, lifetime catalog aur support access."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`surface-card p-7 ${p.highlight ? "border-primary/50" : ""}`}
            >
              {p.highlight && (
                <span className="mb-3 inline-flex rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-3xl font-bold gradient-text">{p.price}</p>
              <p className="mt-1 text-xs text-muted-foreground">{p.note}</p>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {p.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/pricing"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Details dekhein <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Tips / blog */}
      <Section className="pt-0">
        <SectionTitle
          eyebrow="Learning"
          title="Seller tips jo pehle din se kaam aate hain"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {tips.map((t) => (
            <article key={t.title} className="surface-card p-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                {t.tag}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="pt-0">
        <SectionTitle eyebrow="FAQ" title="Aksar puche jane wale sawal" />
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="surface-card group px-5 py-4 [&[open]]:border-primary/50"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold transition-colors group-hover:text-primary">
                {f.q}
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="pt-0">
        <div className="aurora surface-card overflow-hidden p-6 sm:p-10 text-center">
          <h2 className="text-2xl font-bold sm:text-4xl">
            Aaj hi apna store <span className="gradient-text">launch</span>{" "}
            karein
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-xl text-sm sm:text-base text-muted-foreground">
            Free 1-on-1 consultation book karein aur apne budget ke hisaab se
            roadmap paayein.
          </p>
          <Link
            to="/contact"
            className="mt-6 sm:mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 sm:px-7 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            Consultation book karein <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
