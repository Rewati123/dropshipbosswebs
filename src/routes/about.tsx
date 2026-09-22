import { createFileRoute, Link } from "@tanstack/react-router";
import { HeartHandshake, Target, Users } from "lucide-react";
import { PageHero, Section, SectionTitle } from "@/components/PageShell";
import { stats, testimonials } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dropship Boss — Team, Mission aur Sellers" },
      {
        name: "description",
        content:
          "Dropship Boss ki kahani: chhote shehron ke sellers ko zero-inventory online business shuru karne me madad karna.",
      },
      { property: "og:title", content: "About Dropship Boss" },
      {
        property: "og:description",
        content:
          "1,000+ stores launched. Mission: har beginner ke liye online selling simple banana.",
      },
    ],
  }),
  component: About,
});

const values = [
  {
    icon: Target,
    title: "Practical over theory",
    text: "Hum courses nahi bechte. Actual store, actual listing, actual order — sab hands-on.",
  },
  {
    icon: HeartHandshake,
    title: "Honest guidance",
    text: "Agar koi category aapke budget me kaam nahi karegi, hum saaf mana kar dete hain.",
  },
  {
    icon: Users,
    title: "Community first",
    text: "1,000+ sellers ka private group jahan roz product aur supplier insights share hote hain.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            Hum chhote sellers ko{" "}
            <span className="gradient-text">bada banate</span> hain
          </>
        }
        subtitle="2019 me ek chhote se Surat supplier network se shuruaat hui. Aaj 1,000+ sellers ke stores hamare system par chal rahe hain."
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
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Our story"
              title="Shuruaat ek simple problem se"
            />
            <div className="space-y-4 text-muted-foreground">
              <p>
                Tier-2 aur tier-3 shehron me talent ki kami nahi hai — kami hai
                sahi system ki. Log online business start karna chahte hain
                lekin inventory, warehouse aur courier ka risk unhe rok deta
                hai.
              </p>
              <p>
                Humne suppliers, logistics partners aur marketplace experts ko
                ek platform par laakar ek aisa model banaya jisme seller ko
                stock kharidna hi nahi padta. Order aata hai, supplier dispatch
                karta hai, seller profit rakhta hai.
              </p>
              <p>
                Aaj hamari team me 40+ log hain — catalog researchers, listing
                specialists, supplier managers aur dedicated mentors.
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
                  <h3 className="font-semibold">{v.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionTitle eyebrow="Sellers" title="Hamari community kya kehti hai" />
        <div className="grid gap-5 sm:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="surface-card p-6">
              <blockquote className="text-sm text-muted-foreground">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold">
                {t.name}
                <span className="ml-2 text-xs font-normal text-muted-foreground">
                  {t.city}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-flex rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105"
          >
            Team se baat karein
          </Link>
        </div>
      </Section>
    </>
  );
}
