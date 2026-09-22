import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone, Play, Youtube } from "lucide-react";
import { BRAND, categories } from "@/lib/site-data";
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
            India ka beginner-friendly dropshipping aur reselling setup partner.
            Store banao, products import karo, dispatch hum sambhalte hain.
          </p>
          <div className="mt-4">
            <button
              onClick={() => replayIntro()}
              className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 text-xs font-semibold text-amber-300 transition-all hover:border-amber-400 hover:bg-amber-500/20 cursor-pointer shadow-[0_0_12px_rgba(245,158,11,0.15)]"
            >
              <Play className="h-3 w-3 fill-amber-400 text-amber-400" />
              <span>Replay Lion Intro</span>
            </button>
          </div>
          <div className="mt-5 flex gap-3">
            {[Instagram, Youtube, Mail].map((Icon, i) => (
              <span
                key={i}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
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
              ["/how-it-works", "Kaise kaam karta hai"],
              ["/pricing", "Pricing"],
              ["/about", "About us"],
              ["/contact", "Contact"],
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
              <Phone className="h-4 w-4 text-primary" /> +91 70551 46473
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" /> hello@dropshipboss.in
            </li>
            <li>Mon–Sat, 10am – 7pm IST</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-4 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {BRAND}. All rights reserved. Ye ek
        independent demo website hai.
      </div>
    </footer>
  );
}
