import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Play, Youtube } from "lucide-react";
import { BRAND, categories, CONTACT_INFO } from "@/lib/site-data";
import { replayIntro } from "@/lib/intro";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border theme-logo-box bg-black">
              <img
                src="/dropship-boss-logo.png"
                alt="Dropship Boss Logo"
                className="h-full w-full object-cover theme-logo"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-black tracking-tight gradient-text">
                {BRAND}
              </span>
              <span className="text-[10px] font-bold tracking-widest text-primary/80 uppercase transition-colors">
                LEAD • SELL • GROW
              </span>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            India&apos;s leading zero-inventory dropshipping and e-commerce automation partner.
            Turnkey store setup, winning product sourcing, and automated order fulfillment.
          </p>
          <div className="mt-4">
            <button
              onClick={() => replayIntro()}
              className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 text-xs font-semibold text-amber-300 transition-all hover:border-amber-400 hover:bg-amber-500/20 cursor-pointer shadow-[0_0_12px_rgba(245,158,11,0.15)]"
            >
              <Play className="h-3 w-3 fill-amber-400 text-amber-400" />
              <span>Replay Intro</span>
            </button>
          </div>
          <div className="mt-6">
            <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
              Official Social Channels
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2.5">
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Dropship Boss on Instagram (@dropshipboss.in)"
                title="Instagram (@dropshipboss.in)"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-border/80 bg-secondary/40 text-muted-foreground transition-all duration-300 hover:scale-110 hover:border-pink-500/60 hover:text-pink-500 hover:bg-pink-500/10 hover:shadow-[0_0_16px_rgba(236,72,153,0.35)] active:scale-95"
              >
                <Instagram className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>

              <a
                href={CONTACT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Dropship Boss on Facebook"
                title="Facebook"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-border/80 bg-secondary/40 text-muted-foreground transition-all duration-300 hover:scale-110 hover:border-blue-500/60 hover:text-blue-500 hover:bg-blue-500/10 hover:shadow-[0_0_16px_rgba(59,130,246,0.35)] active:scale-95"
              >
                <Facebook className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>

              <a
                href={CONTACT_INFO.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe to Dropship Boss on YouTube"
                title="YouTube"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-border/80 bg-secondary/40 text-muted-foreground transition-all duration-300 hover:scale-110 hover:border-red-500/60 hover:text-red-500 hover:bg-red-500/10 hover:shadow-[0_0_16px_rgba(239,68,68,0.35)] active:scale-95"
              >
                <Youtube className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>

              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Dropship Boss on WhatsApp (+91 95826 17055)"
                title="WhatsApp (+91 95826 17055)"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-border/80 bg-secondary/40 text-muted-foreground transition-all duration-300 hover:scale-110 hover:border-emerald-500/60 hover:text-emerald-400 hover:bg-emerald-500/10 hover:shadow-[0_0_16px_rgba(16,185,129,0.35)] active:scale-95"
              >
                <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                aria-label="Email Dropship Boss Support"
                title={`Email (${CONTACT_INFO.email})`}
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-border/80 bg-secondary/40 text-muted-foreground transition-all duration-300 hover:scale-110 hover:border-primary/60 hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_16px_rgba(245,158,11,0.35)] active:scale-95"
              >
                <Mail className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Pages
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {([
              ["/", "Home"],
              ["/categories", "Categories"],
              ["/how-it-works", "How It Works"],
              ["/pricing", "Pricing"],
              ["/about", "About Us"],
              ["/contact", "Contact & Support"],
              ["/shipping-delivery-policy", "Shipping & Delivery Policy"],
            ] as const).map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Categories
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/categories"
                  hash={c.slug}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="break-words leading-relaxed text-xs sm:text-sm">
                Ekta Enclave Block A, Baba Surdas Colony, Near Balaji Hospital,
                Tilpat, Faridabad, Haryana 121003
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary shrink-0" />
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`}
                className="hover:text-primary transition-colors"
              >
                {CONTACT_INFO.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-emerald-400 shrink-0" />
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 text-emerald-400/90 font-medium transition-colors"
              >
                WhatsApp: {CONTACT_INFO.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary shrink-0" />
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="hover:text-primary transition-colors"
              >
                {CONTACT_INFO.email}
              </a>
            </li>
            <li>Mon–Sat, 10am – 7pm IST</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-4 py-5">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} {BRAND}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/shipping-delivery-policy"
              className="hover:text-primary transition-colors underline decoration-border/80 underline-offset-4"
            >
              Shipping &amp; Delivery Policy
            </Link>
            <span className="text-border">•</span>
            <Link
              to="/contact"
              className="hover:text-primary transition-colors underline decoration-border/80 underline-offset-4"
            >
              Contact &amp; Grievance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
