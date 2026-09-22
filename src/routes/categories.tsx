import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, TrendingUp } from "lucide-react";
import { PageHero, Section } from "@/components/PageShell";
import { categories } from "@/lib/site-data";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Product Categories — Dropship Boss Dropshipping Catalog" },
      {
        name: "description",
        content:
          "Fashion, electronics, home, beauty, kids aur fitness — har category ka margin, supplier aur ready catalog detail.",
      },
      { property: "og:title", content: "Product Categories — Dropship Boss" },
      {
        property: "og:description",
        content:
          "6 trending dropshipping categories with margin range aur verified supplier network.",
      },
    ],
  }),
  component: Categories,
});

function Categories() {
  return (
    <>
      <PageHero
        eyebrow="Catalog"
        title={
          <>
            Har category ke liye{" "}
            <span className="gradient-text">ready products</span>
          </>
        }
        subtitle="40,000+ curated products, 6 high-demand categories. Ek click me apne store me import karein."
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
                  alt={c.title}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/12 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                  <TrendingUp className="h-3.5 w-3.5" /> {c.tagline}
                </span>
                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                  {c.title}
                </h2>
                <p className="mt-3 text-muted-foreground">{c.blurb}</p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-border p-4">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      Margin range
                    </p>
                    <p className="mt-1 text-xl font-bold gradient-text">
                      {c.margin}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border p-4">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      Products
                    </p>
                    <p className="mt-1 text-xl font-bold gradient-text">
                      {c.products}
                    </p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="group mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors duration-300 hover:border-primary hover:text-primary"
                >
                  Catalog request karein
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
