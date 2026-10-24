import { createFileRoute, Link } from "@tanstack/react-router";
import { HeartHandshake, Target, Users } from "lucide-react";
import { PageHero, Section, SectionTitle } from "@/components/PageShell";
import { stats, testimonials } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title:
          "About Dropship Boss: Trusted Indian Ecommerce Seller Platform",
      },
      {
        name: "description",
        content:
          "Dropship Boss is a premier ecommerce enablement and product fulfillment partner in India, empowering sellers to start and scale online businesses without inventory.",
      },
      {
        name: "keywords",
        content:
          "trusted ecommerce seller platform, best ecommerce seller platform India, product fulfillment partners India, product fulfillment partner India, indian product fulfillment partners, best product fulfillment partners india, india product fulfillment partners, ecommerce selling India, start online selling business, online selling without inventory, online selling business kya hai, Meesho ecommerce selling, Amazon ecommerce selling, Flipkart ecommerce selling, winning products catalog, trending products for ecommerce selling, best sourced products in india, top sourced products, trending sourced products, about dropship boss, Dropship Boss, B2B product fulfillment",
      },
      { property: "og:title", content: "About Dropship Boss — Trusted Indian Ecommerce Seller Platform" },
      {
        property: "og:description",
        content:
          "Over 1,200+ online stores enabled across India. Our mission is to make online selling without inventory accessible, scalable, and profitable.",
      },
    ],
  }),
  component: About,
});

const values = [
  {
    icon: Target,
    title: "Practical Execution Over Theory",
    text: "We do not sell generic recorded courses. We build real custom stores, optimize active listings, and coordinate live order dispatches hands-on.",
  },
  {
    icon: HeartHandshake,
    title: "Transparent & Objective Guidance",
    text: "If a category or ad budget will not deliver viable profit margins, we provide candid advice and guide you toward profitable alternatives.",
  },
  {
    icon: Users,
    title: "Seller Community First",
    text: "Join our active network of 1,000+ Indian online sellers & e-commerce entrepreneurs sharing real-time winning product insights, supplier trends, and scaling strategies.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Mission & Story"
        title={
          <>
            Empowering Entrepreneurs to{" "}
            <span className="gradient-text">Scale Online</span>
          </>
        }
        subtitle="Founded with a mission to eliminate traditional retail barriers in India. Today, over 1,000+ sellers manage profitable automated online businesses powered by our turnkey ecosystem."
      />

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="surface-card p-6 text-center">
              <p className="font-display text-3xl font-bold gradient-text">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <SectionTitle
              eyebrow="Our Story"
              title="Solving the Core Challenges of Indian E-Commerce"
            />
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>
                Across Tier-1, Tier-2, and Tier-3 cities in India, millions of aspiring entrepreneurs seek financial independence through e-commerce. However, traditional retail barriers — heavy upfront capital, warehouse leases, and complicated courier logistics — have historically kept them out.
              </p>
              <p>
                Dropship Boss bridged this divide by uniting verified Indian manufacturers, top courier logistics providers, and multi-channel marketplace infrastructure onto a single automated platform. Sellers operate without purchasing inventory upfront: when an order arrives, verified suppliers dispatch directly, and sellers retain their profit margins.
              </p>
              <p>
                Today, our multidisciplinary team of 40+ specialists includes catalog researchers, listing SEO specialists, supplier quality managers, and dedicated 1-on-1 growth mentors committed to your success.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {values.map((v) => (
              <div key={v.title} className="surface-card flex gap-4 p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                  <v.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-base">{v.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionTitle
          eyebrow="Seller Feedback"
          title="What Our Seller Community Says"
          text="Hear from entrepreneurs who launched and scaled their online businesses with Dropship Boss."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="surface-card p-6 flex flex-col justify-between">
              <blockquote className="text-sm text-muted-foreground italic leading-relaxed">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold pt-3 border-t border-border/50 flex items-center justify-between">
                <span>{t.name}</span>
                <span className="text-xs font-normal text-muted-foreground">
                  {t.city}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-flex rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105 shadow-md cursor-pointer"
          >
            Connect With Our Team
          </Link>
        </div>
      </Section>
    </>
  );
}
