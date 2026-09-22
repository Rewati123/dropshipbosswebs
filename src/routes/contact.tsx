import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero, Section } from "@/components/PageShell";
import { categories } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Dropship Boss — Free Business Consultation" },
      {
        name: "description",
        content:
          "Apni details bhejein aur free 1-on-1 consultation book karein. Phone, email aur office details yahan.",
      },
      { property: "og:title", content: "Contact Dropship Boss" },
      {
        property: "og:description",
        content:
          "Free consultation book karein — store setup, catalog aur dispatch par expert guidance.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Free <span className="gradient-text">consultation</span> book karein
          </>
        }
        subtitle="Form bharein — 24 ghante ke andar hamari team aapko call karegi aur roadmap discuss karegi."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="surface-card p-5 sm:p-8">
            {sent ? (
              <div className="flex flex-col items-center py-12 sm:py-16 text-center rise-in">
                <CheckCircle2 className="h-12 w-12 sm:h-14 sm:w-14 text-primary" />
                <h2 className="mt-4 sm:mt-5 text-xl sm:text-2xl font-bold">Dhanyavaad!</h2>
                <p className="mt-2 max-w-sm text-xs sm:text-sm text-muted-foreground">
                  Aapki request note kar li gayi hai. Ye ek demo form hai,
                  isliye data kahin store nahi hota.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  Dobara bharein
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-4 sm:space-y-5"
              >
                <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                  <Field label="Aapka naam" id="name">
                    <input
                      id="name"
                      required
                      placeholder="Rahul Sharma"
                      className="input-base"
                    />
                  </Field>
                  <Field label="Mobile number" id="phone">
                    <input
                      id="phone"
                      required
                      type="tel"
                      placeholder="+91 70551 46473"
                      className="input-base"
                    />
                  </Field>
                </div>
                <Field label="Email" id="email">
                  <input
                    id="email"
                    required
                    type="email"
                    placeholder="aap@email.com"
                    className="input-base"
                  />
                </Field>
                <Field label="Interested category" id="cat">
                  <select id="cat" className="input-base">
                    {categories.map((c) => (
                      <option key={c.slug}>{c.title}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Aapka sawal" id="msg">
                  <textarea
                    id="msg"
                    rows={4}
                    placeholder="Main bilkul beginner hoon, kahan se shuru karun?"
                    className="input-base resize-none"
                  />
                </Field>
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.02]"
                >
                  Request bhejein
                </button>
              </form>
            )}
          </div>

          <div className="space-y-4">
            {[
              { icon: Phone, title: "Call / WhatsApp", value: "+91 70551 46473" },
              { icon: Mail, title: "Email", value: "hello@dropshipboss.in" },
              {
                icon: MapPin,
                title: "Office Address",
                value:
                  "Ekta Enclave Block A, Baba Surdas Colony, Near Balaji Hospital, Tilpat, Faridabad, Haryana 121003",
              },
              { icon: Clock, title: "Timings", value: "Mon–Sat, 10am – 7pm IST" },
            ].map((c) => (
              <div key={c.title} className="surface-card flex gap-3 sm:gap-4 p-4 sm:p-6 min-w-0">
                <span className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                  <c.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold">{c.title}</p>
                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground break-words leading-relaxed">
                    {c.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
