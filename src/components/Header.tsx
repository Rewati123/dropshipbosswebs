import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { BRAND } from "@/lib/site-data";

const nav = [
  { to: "/", label: "Home" },
  { to: "/categories", label: "Categories" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-2 sm:gap-4 px-3 py-2.5 sm:px-6 sm:py-3">
        <Link to="/" className="group flex items-center gap-2 sm:gap-2.5 shrink-0">
          <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center overflow-hidden rounded-xl border theme-logo-box bg-black group-hover:scale-105 transition-transform">
            <img
              src="/dropship-boss-logo.png"
              alt="Dropship Boss Logo"
              className="h-full w-full object-cover theme-logo"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-base sm:text-lg font-extrabold tracking-tight gradient-text">
              {BRAND}
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-primary/80 uppercase transition-colors">
              LEAD • SELL • GROW
            </span>
          </div>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="relative rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-300 after:absolute after:bottom-1 after:left-3 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-foreground hover:after:w-[calc(100%-1.5rem)]"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1.5 sm:gap-2 lg:ml-0">
          <ThemeSwitcher />
          <Link
            to="/contact"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg sm:inline-flex"
          >
            Free Consultation
          </Link>
          <button
            className="rounded-full border border-border p-2 text-foreground transition-colors hover:border-primary lg:hidden"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 py-3 space-y-1 lg:hidden rise-in">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground shadow-md transition-all active:scale-95"
            >
              Free Consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
