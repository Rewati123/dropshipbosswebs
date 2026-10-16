import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, MessageCircle, Phone, Play, Youtube } from "lucide-react";
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
          <div className="mt-5 flex gap-3">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </span>
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              <Youtube className="h-4 w-4" />
            </span>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp (+91 95826 17055)"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-emerald-500 hover:text-emerald-400 hover:bg-emerald-500/10"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              aria-label="Email Dropship Boss Support"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              <Mail className="h-4 w-4" />
            </a>
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

      <div className="border-t border-border px-4 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {BRAND}. All rights reserved.
      </div>
    </footer>
  );
}
