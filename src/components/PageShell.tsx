import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
}) {
  return (
    <section className="aurora border-b border-border">
      <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-20">
        <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </span>
        <h1 className="mt-4 sm:mt-6 text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl rise-in">
          {title}
        </h1>
        <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base text-muted-foreground">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-7xl px-4 py-10 sm:py-16 sm:px-6 ${className}`}>
      {children}
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto mb-8 sm:mb-12 max-w-2xl text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-2.5 sm:mt-3 text-2xl font-bold sm:text-3xl lg:text-4xl">{title}</h2>
      {text && <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground">{text}</p>}
    </div>
  );
}
