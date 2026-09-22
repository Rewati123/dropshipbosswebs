import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Palette } from "lucide-react";

const THEMES = [
  { id: "amber", label: "Golden Amber (Yellow)", dot: "oklch(0.82 0.16 78)" },
  { id: "emerald", label: "Emerald Mint", dot: "oklch(0.75 0.17 162)" },
  { id: "rose", label: "Rose Blush", dot: "oklch(0.72 0.19 12)" },
  { id: "cyan", label: "Ocean Cyan", dot: "oklch(0.78 0.14 210)" },
  { id: "violet", label: "Royal Violet", dot: "oklch(0.7 0.18 300)" },
  { id: "lime", label: "Electric Lime", dot: "oklch(0.85 0.19 128)" },
];

const SURFACES = [
  { id: "dark", label: "Dark" },
  { id: "light", label: "Light" },
];

export function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("amber");
  const [surface, setSurface] = useState("dark");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = localStorage.getItem("ss-theme") ?? "amber";
    const s = localStorage.getItem("ss-surface") ?? "dark";
    setTheme(t);
    setSurface(s);
  }, []);

  useEffect(() => {
    document.documentElement.dataset["theme"] = theme;
    document.documentElement.dataset["surface"] = surface;
    localStorage.setItem("ss-theme", theme);
    localStorage.setItem("ss-surface", surface);
  }, [theme, surface]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const active = THEMES.find((t) => t.id === theme) ?? THEMES[0]!;

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Theme colour change karein"
        className="flex items-center gap-1.5 sm:gap-2 rounded-full border border-border bg-secondary/60 px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm font-medium text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
      >
        <Palette className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
        <span className="hidden sm:inline">Theme</span>
        <span
          className="h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full ring-2 ring-primary/40"
          style={{ background: active.dot }}
        />
        <ChevronDown
          className={`h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 z-50 mt-3 w-60 rounded-2xl border border-border bg-popover p-2 text-popover-foreground shadow-2xl rise-in"
        >
          <p className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Colour theme
          </p>
          {THEMES.map((t) => (
            <button
              key={t.id}
              role="menuitem"
              onClick={() => setTheme(t.id)}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors duration-200 hover:bg-secondary"
            >
              <span
                className="h-4 w-4 rounded-full"
                style={{ background: t.dot }}
              />
              <span className="flex-1 text-left">{t.label}</span>
              {theme === t.id && <Check className="h-4 w-4 text-primary" />}
            </button>
          ))}
          <div className="my-2 h-px bg-border" />
          <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Background
          </p>
          <div className="flex gap-2 px-2 pb-1">
            {SURFACES.map((s) => (
              <button
                key={s.id}
                onClick={() => setSurface(s.id)}
                className={`flex-1 rounded-xl border px-3 py-2 text-sm transition-colors duration-200 ${
                  surface === s.id
                    ? "border-primary bg-primary/15 text-primary"
                    : "border-border hover:bg-secondary"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
