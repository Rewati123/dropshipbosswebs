import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, TrendingUp } from "lucide-react";
import { PageHero, Section } from "@/components/PageShell";
import { categories } from "@/lib/site-data";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      {
        title:
          "High-Margin Dropshipping Product Categories in India | Dropship Boss",
      },
      {
        name: "description",
        content:
          "Explore trending, high-margin dropshipping categories in India: Ladies Bags & Handbags, Backpacks & Travel Bags, Gadgets & Electronics, Home & Kitchen, Beauty, and Kids with pre-vetted wholesale suppliers.",
      },
      {
        name: "keywords",
        content:
          "dropshipping categories, winning products catalog india, dropship ladies bags, dropship backpacks, dropship gadgets electronics, high margin dropshipping products",
      },
      { property: "og:title", content: "Dropshipping Product Categories — Dropship Boss" },
      {
        property: "og:description",
        content:
          "Curated winning product catalog across 6 high-volume consumer categories with pre-negotiated wholesale margins and verified Indian suppliers.",
      },
    ],
  }),
  component: Categories,
});

function Categories() {
  return (
    <>
      <PageHero
        eyebrow="Curated B2B Catalogs"
        title={
          <>
            High-Margin Products for{" "}
            <span className="gradient-text">Every E-Commerce Niche</span>
          </>
        }
        subtitle="Over 40,000+ curated products across 6 high-volume categories. Pre-negotiated B2B pricing, strict quality inspections, and 1-click import into your Shopify or marketplace store."
      />

      <Section>
        <div className="space-y-8">
          {categories.map((c, i) => (
            <article
              key={c.slug}
              id={c.slug}
              className="surface-card grid scroll-mt-24 overflow-hidden lg:grid-cols-2"
            >
              <div
                className={`relative aspect-[16/10] overflow-hidden lg:aspect-auto ${
                  i % 2 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={c.image}
                  alt={`${c.title} Dropshipping Catalog & Suppliers in India`}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/12 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                    <TrendingUp className="h-3.5 w-3.5" /> {c.tagline}
                  </span>
                  <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                    {c.title}
                  </h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{c.blurb}</p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-border p-4 bg-background/50">
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">
                        Profit Margin Range
                      </p>
                      <p className="mt-1 text-xl font-bold gradient-text">
                        {c.margin}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-border p-4 bg-background/50">
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">
                        Available Products
                      </p>
                      <p className="mt-1 text-xl font-bold gradient-text">
                        {c.products}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-border/50">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors duration-300 hover:border-primary hover:text-primary cursor-pointer"
                  >
                    Request Full {c.title} Catalog
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
