import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Sparkles,
  Zap,
} from "lucide-react";
import { plans, PlanItem, CONTACT_INFO } from "@/lib/site-data";

interface PricingSliderProps {
  showTitle?: boolean;
  className?: string;
}

export function PricingSlider({
  showTitle = false,
  className = "",
}: PricingSliderProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredPlans = plans.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "social") return p.categoryTag === "social";
    if (activeFilter === "marketplace") return p.categoryTag === "marketplace";
    if (activeFilter === "website") return p.categoryTag === "website";
    if (activeFilter === "monthly") return p.categoryTag === "monthly";
    return true;
  });

  const checkScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

    // Calculate approximate active index
    const cardWidth = 360;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, filteredPlans.length - 1));
  };

  useEffect(() => {
    checkScroll();
  }, [filteredPlans]);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const scrollAmount = direction === "left" ? -360 : 360;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const scrollToCard = (index: number) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollTo({
      left: index * 360,
      behavior: "smooth",
    });
  };

  return (
    <div className={`w-full ${className}`}>
      {showTitle && (
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5" /> All 7 Setup Packages
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl font-black tracking-tight">
            Transparent Pricing, Zero Hidden Fees
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Choose your automated online selling tier. Slide to explore all
            starter, marketplace, and branded website options with zero-inventory
            fulfillment.
          </p>
        </div>
      )}

      {/* Filter Tabs & Navigation Controls */}
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 rounded-2xl bg-card/60 p-1.5 border border-border/80">
          {[
            { id: "all", label: `All Plans (${plans.length})` },
            { id: "social", label: "Social Reselling (₹590–₹1,590)" },
            { id: "marketplace", label: "Marketplace Selling (₹5,000–₹10,000)" },
            { id: "website", label: "Branded D2C Store (₹15,000)" },
            { id: "monthly", label: "Monthly Flex (₹899)" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveFilter(tab.id);
                if (sliderRef.current) {
                  sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
                }
              }}
              className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Arrow Slider Controls */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous plans"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-card hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Next plans"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-card hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={sliderRef}
        onScroll={checkScroll}
        className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {filteredPlans.map((p) => {
          const isFeatured = p.highlight;
          const whatsappSubscribeUrl = `https://wa.me/919582617055?text=${encodeURIComponent(
            `Namaste Dropship Boss! Mujhe ${p.name} (${p.price} ${p.period}) subscribe karna hai. Please process my setup.`
          )}`;

          return (
            <div
              key={p.id}
              className={`surface-card group relative flex w-[300px] sm:w-[350px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-3xl p-6 sm:p-7 transition-all duration-300 ${
                isFeatured
                  ? "glow-ring border-primary/70 bg-gradient-to-b from-card via-card to-primary/5 sm:-translate-y-1 shadow-xl shadow-primary/10"
                  : "border-border/80 hover:border-primary/50"
              }`}
            >
              <div>
                {/* Header Badge & Discount Pill */}
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
                      isFeatured
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "border border-primary/40 bg-primary/10 text-primary"
                    }`}
                  >
                    {p.badge || "Limited Offer"}
                  </span>
                  <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-xs font-bold text-emerald-400">
                    {p.discount}
                  </span>
                </div>

                {/* Plan Name & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-black text-foreground">
                  {p.name}
                </h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed min-h-[2.5rem]">
                  {p.subtitle}
                </p>

                {/* Pricing Box with Strikethrough & Anchor */}
                <div className="mt-4 rounded-2xl border border-border/80 bg-background/60 p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Original:</span>
                    <span className="text-xs line-through text-muted-foreground/80 decoration-destructive decoration-2">
                      {p.originalPrice}
                    </span>
                    <span className="ml-auto text-[11px] font-bold text-primary">
                      {p.discount}
                    </span>
                  </div>

                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="font-display text-3xl sm:text-4xl font-black gradient-text">
                      {p.price}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">
                      {p.period}
                    </span>
                  </div>

                  <p className="mt-1.5 text-[11px] text-muted-foreground font-medium flex items-center gap-1.5">
                    <BadgeCheck className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>{p.note}</span>
                  </p>
                </div>

                {/* Deliverables Bullet List */}
                <div className="mt-5 space-y-2.5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/90">
                    What's Included:
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    {p.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-border/60 space-y-2">
                <a
                  href={whatsappSubscribeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 px-4 text-xs font-bold transition-all duration-300 hover:scale-[1.02] cursor-pointer shadow-md ${
                    isFeatured
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/25"
                      : "border border-border bg-card hover:border-primary hover:text-primary"
                  }`}
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>{p.ctaText}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>

                <Link
                  to="/pricing"
                  className="flex w-full items-center justify-center gap-1.5 text-[11px] text-muted-foreground hover:text-primary transition-colors py-1 cursor-pointer"
                >
                  <span>Compare Full Feature Matrix</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Swipe Hint & Dot Indicators */}
      <div className="mt-4 flex items-center justify-center gap-1.5">
        {filteredPlans.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToCard(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              activeIndex === idx
                ? "w-6 bg-primary"
                : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
          />
        ))}
      </div>

      <div className="mt-2 text-center sm:hidden">
        <p className="text-[11px] text-muted-foreground/70 flex items-center justify-center gap-1">
          <span>👈 Swipe horizontally to view all plans 👉</span>
        </p>
      </div>
    </div>
  );
}
