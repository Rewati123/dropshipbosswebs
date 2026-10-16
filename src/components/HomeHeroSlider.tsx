import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Boxes,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Flame,
  Headphones,
  LineChart,
  Megaphone,
  Package,
  Phone,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Store,
  TrendingUp,
  Truck,
  Users,
  Zap,
} from "lucide-react";
import { CONTACT_INFO, stats } from "@/lib/site-data";

interface SlideData {
  id: string;
  tag: string;
  tagIcon: typeof Sparkles;
  headlinePrefix: string;
  headlineHighlight: string;
  headlineSuffix?: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  isSecondaryWhatsApp?: boolean;
}

const slides: SlideData[] = [
  {
    id: "turnkey-automation",
    tag: "India's #1 Automated Dropshipping Ecosystem",
    tagIcon: Sparkles,
    headlinePrefix: "Launch & Scale Your",
    headlineHighlight: "Dropshipping Business",
    headlineSuffix: "With Zero Inventory",
    description:
      "Complete turnkey setup for Shopify, Amazon, Meesho & Flipkart. We provide vetted Indian wholesale suppliers, high-margin winning product catalogs, automated order fulfillment, and 1-on-1 mentor guidance.",
    primaryCtaText: "Explore Dropshipping Plans",
    primaryCtaLink: "/pricing",
    secondaryCtaText: "Book Free Consultation",
    secondaryCtaLink: "/contact",
  },
  {
    id: "winning-sourcing",
    tag: "Surat & Delhi Direct Wholesale Network",
    tagIcon: Flame,
    headlinePrefix: "Access 40,000+ Sourced",
    headlineHighlight: "Winning Products",
    headlineSuffix: "With 35%–65% Margins",
    description:
      "Pre-vetted trending products ready for instant 1-click import. Direct factory pricing with no middlemen, professional studio images, pre-written SEO titles, and guaranteed 24-hour dispatch.",
    primaryCtaText: "View Sourced Catalogs",
    primaryCtaLink: "/categories",
    secondaryCtaText: "Calculate Profit Margins",
    secondaryCtaLink: "/pricing",
  },
  {
    id: "rapid-launch",
    tag: "72-Hour Rapid Onboarding Guarantee",
    tagIcon: Zap,
    headlinePrefix: "Start Selling On",
    headlineHighlight: "Amazon, Meesho & Shopify",
    headlineSuffix: "In Under 72 Hours",
    description:
      "Zero technical experience required. We handle GST onboarding, branded storefront theme design, payment gateway setup, and upload your initial catalog so you start taking orders immediately.",
    primaryCtaText: "Get Launched in 72 Hours",
    primaryCtaLink: "/pricing",
    secondaryCtaText: "Chat on WhatsApp",
    secondaryCtaLink: CONTACT_INFO.whatsappUrl,
    isSecondaryWhatsApp: true,
  },
];

export function HomeHeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalSlides = slides.length;

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0]?.clientX ?? 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0]?.clientX ?? 0;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const current = slides[activeSlide] ?? slides[0];
  const TagIcon = current.tagIcon;

  return (
    <div
      className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background via-card/30 to-background"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Ambient Glow (DropshipGuru-inspired aesthetic) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-primary-glow/10 blur-[130px]" />
        <div className="absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-[100px]" />
      </div>

      {/* Main Slide Stage */}
      <div className="relative mx-auto max-w-7xl px-4 pt-10 pb-8 sm:px-6 sm:pt-14 sm:pb-12 lg:px-8 lg:pt-18 lg:pb-14">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12 min-h-[540px]">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tag Badge */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-primary shadow-sm">
                <TagIcon className="h-3.5 w-3.5" />
                {current.tag}
              </span>
              <span className="text-xs font-semibold text-muted-foreground/70 hidden sm:inline-block">
                • Slide {activeSlide + 1} of {totalSlides}
              </span>
            </div>

            {/* Headline with smooth key transition */}
            <h1
              key={`title-${current.id}`}
              className="mt-4 text-3xl font-extrabold leading-[1.12] sm:text-5xl lg:text-6xl tracking-tight animate-in fade-in slide-in-from-bottom-3 duration-500"
            >
              {current.headlinePrefix}{" "}
              <span className="gradient-text">{current.headlineHighlight}</span>{" "}
              {current.headlineSuffix}
            </h1>

            {/* Description */}
            <p
              key={`desc-${current.id}`}
              className="mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-500 delay-100"
            >
              {current.description}
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to={current.primaryCtaLink}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-sm text-primary-foreground shadow-xl shadow-primary/20 transition-all duration-300 hover:scale-105 hover:bg-primary/95 cursor-pointer"
              >
                <span>{current.primaryCtaText}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {current.isSecondaryWhatsApp ? (
                <a
                  href={current.secondaryCtaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3.5 font-semibold text-sm backdrop-blur-sm transition-all duration-300 hover:border-primary hover:text-primary cursor-pointer"
                >
                  <Phone className="h-4 w-4 text-emerald-400" />
                  <span>{current.secondaryCtaText}</span>
                </a>
              ) : (
                <Link
                  to={current.secondaryCtaLink}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3.5 font-semibold text-sm backdrop-blur-sm transition-all duration-300 hover:border-primary hover:text-primary cursor-pointer"
                >
                  <Phone className="h-4 w-4" />
                  <span>{current.secondaryCtaText}</span>
                </Link>
              )}
            </div>

            {/* Live Stats Row */}
            <dl className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4 pt-6 border-t border-border/60">
              {stats.map((s) => (
                <div key={s.label} className="p-1 sm:p-0">
                  <dt className="text-xl sm:text-2xl font-bold gradient-text">
                    {s.value}
                  </dt>
                  <dd className="text-xs text-muted-foreground mt-0.5">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right Visual Stage (DropshipGuru-Inspired Interactive Holo Dashboard & Visuals) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {activeSlide === 0 && (
              /* Slide 1 Visual: DropshipGuru-style Holographic Live Dashboard Widget */
              <div className="w-full max-w-lg surface-card relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-card via-card/90 to-primary/5 p-6 shadow-2xl shadow-primary/10 animate-in fade-in zoom-in-95 duration-500">
                {/* Header of widget */}
                <div className="flex items-center justify-between border-b border-border/70 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                      Dropship Boss OS • Live Dashboard
                    </span>
                  </div>
                  <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-[11px] font-bold text-primary">
                    Real-Time
                  </span>
                </div>

                {/* Metric Cards Row */}
                <div className="mt-5 grid grid-cols-2 gap-3.5">
                  <div className="rounded-2xl border border-border/80 bg-background/60 p-3.5">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                      Total Revenue
                    </span>
                    <div className="mt-1 flex items-baseline gap-1.5">
                      <span className="font-display text-2xl font-black text-foreground">
                        ₹3,42,850
                      </span>
                    </div>
                    <span className="mt-1 inline-flex items-center gap-1 rounded bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-bold text-emerald-400">
                      <TrendingUp className="h-3 w-3" /> +34.2% this month
                    </span>
                  </div>

                  <div className="rounded-2xl border border-border/80 bg-background/60 p-3.5">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                      Orders Dispatched
                    </span>
                    <div className="mt-1 flex items-baseline gap-1.5">
                      <span className="font-display text-2xl font-black text-foreground">
                        186
                      </span>
                      <span className="text-xs text-muted-foreground">orders</span>
                    </div>
                    <span className="mt-1 inline-flex items-center gap-1 rounded bg-primary/15 px-1.5 py-0.5 text-[10px] font-bold text-primary">
                      <Zap className="h-3 w-3" /> 100% Zero-Inventory
                    </span>
                  </div>
                </div>

                {/* Simulated Real-Time Sales Curve Graphic */}
                <div className="mt-4 rounded-2xl border border-border/70 bg-background/40 p-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                    <span className="font-semibold text-foreground">Daily Sales Velocity</span>
                    <span className="text-[11px] text-emerald-400 font-semibold">
                      Peak: 38 orders/day
                    </span>
                  </div>
                  <div className="h-20 w-full relative">
                    <svg
                      viewBox="0 0 300 80"
                      className="w-full h-full overflow-visible"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient id="sliderChartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0,65 Q 40,55 75,40 T 150,45 T 225,20 T 300,10 L 300,80 L 0,80 Z"
                        fill="url(#sliderChartGrad)"
                      />
                      <path
                        d="M 0,65 Q 40,55 75,40 T 150,45 T 225,20 T 300,10"
                        fill="none"
                        stroke="var(--color-primary)"
                        strokeWidth="2.5"
                      />
                      {/* Pulse point at the peak */}
                      <circle cx="300" cy="10" r="4" fill="var(--color-primary)" />
                    </svg>
                  </div>
                </div>

                {/* Logistics & RTO Pill */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-xl bg-card/80 p-3 text-xs border border-border/60">
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-primary shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Integrated Logistics:</span>
                      <span className="text-muted-foreground ml-1">Delhivery • BlueDart • Xpressbees</span>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-bold text-emerald-400">
                    RTO &lt; 4.8%
                  </span>
                </div>
              </div>
            )}

            {activeSlide === 1 && (
              /* Slide 2 Visual: Sourced Winning Product Calculator & Live Sourcing Card */
              <div className="w-full max-w-lg surface-card relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-card via-card/90 to-primary/5 p-6 shadow-2xl shadow-primary/10 animate-in fade-in zoom-in-95 duration-500">
                <div className="flex items-center justify-between border-b border-border/70 pb-3">
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-primary" />
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                      Curated Margin Sourcing Card
                    </span>
                  </div>
                  <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 text-[11px] font-bold text-emerald-400">
                    Verified B2B Suppliers
                  </span>
                </div>

                {/* Trending Sample 1 */}
                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl border border-border/80 bg-background/70 p-3.5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                        Ladies Bags & Purses (Delhi)
                      </span>
                      <h4 className="text-sm font-bold text-foreground">
                        Designer Vegan Leather Handbag Set
                      </h4>
                      <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                        <span>Factory: ₹280</span>
                        <span>•</span>
                        <span>Selling: ₹849</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-emerald-400 block">
                        Net Profit: ₹569
                      </span>
                      <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-extrabold text-emerald-300">
                        67% Margin
                      </span>
                    </div>
                  </div>

                  {/* Trending Sample 2 */}
                  <div className="rounded-2xl border border-border/80 bg-background/70 p-3.5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                        Gadgets (Delhi Electronics)
                      </span>
                      <h4 className="text-sm font-bold text-foreground">
                        Pro ANC Wireless Earbuds
                      </h4>
                      <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                        <span>Factory: ₹380</span>
                        <span>•</span>
                        <span>Selling: ₹1,199</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-emerald-400 block">
                        Net Profit: ₹819
                      </span>
                      <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-extrabold text-emerald-300">
                        68% Margin
                      </span>
                    </div>
                  </div>

                  {/* Trending Sample 3 */}
                  <div className="rounded-2xl border border-border/80 bg-background/70 p-3.5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                        Home & Kitchen (Mumbai)
                      </span>
                      <h4 className="text-sm font-bold text-foreground">
                        Multi-Tier Rotating Storage Rack
                      </h4>
                      <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                        <span>Factory: ₹190</span>
                        <span>•</span>
                        <span>Selling: ₹549</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-emerald-400 block">
                        Net Profit: ₹359
                      </span>
                      <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-extrabold text-emerald-300">
                        65% Margin
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span>⚡ 1-Click Store Import Ready</span>
                  <span className="text-primary font-bold">40,000+ Sourced Products</span>
                </div>
              </div>
            )}

            {activeSlide === 2 && (
              /* Slide 3 Visual: 72-Hour Rapid Store Launch SLA Roadmap */
              <div className="w-full max-w-lg surface-card relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-card via-card/90 to-primary/5 p-6 shadow-2xl shadow-primary/10 animate-in fade-in zoom-in-95 duration-500">
                <div className="flex items-center justify-between border-b border-border/70 pb-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                      72-Hour Turnkey Launch SLA
                    </span>
                  </div>
                  <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[11px] font-bold text-primary">
                    100% Guaranteed SLA
                  </span>
                </div>

                {/* Milestone Steps */}
                <div className="mt-4 space-y-3.5">
                  <div className="flex items-start gap-3 rounded-2xl border border-border/80 bg-background/60 p-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs">
                      ✓
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-foreground">
                          Hour 0–24: Seller Registration
                        </span>
                        <span className="text-[10px] font-semibold text-emerald-400">Completed</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground mt-0.5">
                        Amazon, Meesho, and Shopify account registration with GST guidance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl border border-border/80 bg-background/60 p-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs">
                      ✓
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-foreground">
                          Hour 24–48: Storefront Design
                        </span>
                        <span className="text-[10px] font-semibold text-emerald-400">Completed</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground mt-0.5">
                        High-converting custom store theme, branding, and payment gateway integration.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl border border-border/80 bg-background/60 p-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs">
                      ✓
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-foreground">
                          Hour 48–72: 500+ Product Injection
                        </span>
                        <span className="text-[10px] font-semibold text-emerald-400">Completed</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground mt-0.5">
                        High-margin trending winning products imported with SEO titles and studio images.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl border border-primary/40 bg-primary/10 p-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xs animate-pulse">
                      🚀
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-primary">
                          Hour 72+: Automated Order Engine Live
                        </span>
                        <span className="text-[10px] font-bold text-primary uppercase">Ready to Sell</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground mt-0.5">
                        Suppliers dispatch automatically on customer purchase. You collect direct profits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Carousel Navigation Bar (Arrows + Indicators) */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/60 pt-4">
          {/* Slide Indicator Pills */}
          <div className="flex items-center gap-2.5">
            {slides.map((s, idx) => {
              const isActive = idx === activeSlide;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`group flex items-center gap-2 rounded-full py-1.5 px-3 text-xs font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                      : "bg-card border border-border/80 text-muted-foreground hover:border-primary hover:text-foreground"
                  }`}
                  aria-label={`Go to slide ${idx + 1}: ${s.headlineHighlight}`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  <span>0{idx + 1}</span>
                  <span className="hidden md:inline text-[11px] opacity-80">
                    {s.headlineHighlight}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Next / Previous Arrow Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-foreground transition-all duration-200 hover:border-primary hover:bg-primary hover:text-primary-foreground cursor-pointer shadow-sm"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={nextSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-foreground transition-all duration-200 hover:border-primary hover:bg-primary hover:text-primary-foreground cursor-pointer shadow-sm"
              aria-label="Next Slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* DropshipGuru-Inspired Trust Row Bar */}
      <div className="border-t border-border/70 bg-card/60 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-6 px-4 text-xs font-semibold sm:text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4 text-primary shrink-0" />
            <span>2,500+ Indian Entrepreneurs</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <BadgeCheck className="h-4 w-4 text-primary shrink-0" />
            <span>98.4% Seller Satisfaction</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Headphones className="h-4 w-4 text-primary shrink-0" />
            <span>Lifetime 1-on-1 Mentorship</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Zap className="h-4 w-4 text-primary shrink-0" />
            <span>AI Automated Order Processing</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Truck className="h-4 w-4 text-primary shrink-0" />
            <span>Pan-India COD & Express Dispatch</span>
          </div>
        </div>
      </div>
    </div>
  );
}
