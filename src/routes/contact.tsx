import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
  MessageSquare,
  MessageCircle,
  ExternalLink,
  Copy,
  Check,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { PageHero, Section } from "@/components/PageShell";
import { categories, CONTACT_INFO } from "@/lib/site-data";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title:
          "Contact Dropship Boss — Direct WhatsApp & Email Consultation | support@dropshipboss.in",
      },
      {
        name: "description",
        content:
          "Book a free 1-on-1 dropshipping consultation. Reach us instantly via WhatsApp at +91 95826 17055 or direct email at support@dropshipboss.in for turnkey store setup and catalog support.",
      },
      {
        name: "keywords",
        content:
          "contact dropship boss, dropshipping consultation india, whatsapp dropshipping support, support@dropshipboss.in, dropship support india",
      },
      { property: "og:title", content: "Contact Dropship Boss — Free E-Commerce Consultation" },
      {
        property: "og:description",
        content:
          "Connect directly via WhatsApp or official email for turnkey store setup, catalog import, and automated dispatch guidance.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    category: categories[0]?.title ?? "Ladies Bags & Handbags",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sentVia, setSentVia] = useState<"whatsapp" | "email" | null>(null);
  const [copied, setCopied] = useState(false);

  const buildWhatsAppText = () => {
    return [
      `*Dropship Boss — Consultation Inquiry*`,
      `--------------------------------`,
      `*Name:* ${form.name.trim() || "Prospective Seller"}`,
      `*Phone / WhatsApp:* ${form.phone.trim() || "Not provided"}`,
      `*Email:* ${form.email.trim() || "Not provided"}`,
      `*Target Category:* ${form.category}`,
      `*Inquiry:* ${form.message.trim() || "Interested in launching a dropshipping business with Dropship Boss. Please share store setup & catalog details."}`,
      `--------------------------------`,
      `Sent via dropshipboss.in/contact`,
    ].join("\n");
  };

  const getWhatsAppUrl = () => {
    const text = buildWhatsAppText();
    return `https://wa.me/919582617055?text=${encodeURIComponent(text)}`;
  };

  const buildEmailBody = () => {
    return `Hello Dropship Boss Support Team,

I would like to request a 1-on-1 dropshipping consultation with your specialist team.

Seller Details:
• Name: ${form.name.trim() || "Prospective Seller"}
• Phone / WhatsApp: ${form.phone.trim() || "Not provided"}
• Email: ${form.email.trim() || "Not provided"}
• Target Category: ${form.category}

My Query & Requirements:
${form.message.trim() || "I would like to understand the onboarding process, turnkey store launch, and catalog sourcing."}

Looking forward to your guidance!

Best regards,
${form.name.trim() || "Prospective Seller"}`;
  };

  const getMailtoUrl = () => {
    const subject = `Dropship Boss Consultation Inquiry - ${form.name.trim() || "Seller"} (${form.category})`;
    return `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildEmailBody())}`;
  };

  const validateFields = () => {
    if (!form.name.trim()) {
      toast.error("Please enter your Full Name.");
      return false;
    }
    if (!form.phone.trim() && !form.email.trim()) {
      toast.error("Please provide at least a Phone number or Email address.");
      return false;
    }
    return true;
  };

  const handleSendWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!validateFields()) return;

    const url = getWhatsAppUrl();
    window.open(url, "_blank", "noopener,noreferrer");
    setSentVia("whatsapp");
    setSent(true);
    toast.success("Opening WhatsApp chat with your consultation details!");
  };

  const handleSendEmail = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!validateFields()) return;

    const url = getMailtoUrl();
    window.location.href = url;
    setSentVia("email");
    setSent(true);
    toast.success(`Opening your email client to ${CONTACT_INFO.email}!`);
  };

  const handleCopyDetails = () => {
    const text = buildEmailBody();
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Inquiry summary copied to clipboard!");
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <>
      <PageHero
        eyebrow="Consultation & Support"
        title={
          <>
            Book Your Free <span className="gradient-text">1-on-1 Consultation</span>
          </>
        }
        subtitle="Connect directly with our seller specialists. Reach out via WhatsApp or official email for instant onboarding guidance, catalog access, and store setup assistance."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="surface-card p-5 sm:p-8">
            {sent ? (
              <div className="flex flex-col items-center py-6 sm:py-10 text-center rise-in">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shadow-[0_0_24px_rgba(16,185,129,0.25)]">
                  <CheckCircle2 className="h-9 w-9 text-emerald-500" />
                </div>
                <h2 className="mt-5 text-xl sm:text-2xl font-bold">
                  Inquiry Dispatched Successfully!
                </h2>
                <p className="mt-2.5 max-w-md text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Your inquiry has been prepared and routed via{" "}
                  <strong className="text-foreground font-semibold">
                    {sentVia === "whatsapp" ? "WhatsApp" : "Direct Email"}
                  </strong>
                  . Our team at <span className="text-foreground font-semibold">{CONTACT_INFO.email}</span> &amp;{" "}
                  <span className="text-foreground font-semibold">{CONTACT_INFO.phone}</span> will review and assist you.
                </p>

                <div className="mt-6 w-full max-w-md rounded-xl border border-border bg-secondary/30 p-4 text-left text-xs sm:text-sm space-y-2">
                  <div className="flex items-center justify-between border-b border-border/60 pb-2">
                    <span className="font-semibold text-foreground">Inquiry Summary</span>
                    <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                      {sentVia === "whatsapp" ? "WhatsApp Chat" : "Direct Email"}
                    </span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Name:</span> <span className="font-medium text-foreground">{form.name}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Phone:</span> <span className="font-medium text-foreground">{form.phone || "—"}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Email:</span> <span className="font-medium text-foreground">{form.email || "—"}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Category:</span> <span className="font-medium text-foreground">{form.category}</span>
                  </div>
                  {form.message && (
                    <div className="pt-2 border-t border-border/40 text-muted-foreground">
                      <span className="block font-medium text-foreground mb-1">Message:</span>
                      <p className="italic bg-background/60 p-2 rounded text-xs">{form.message}</p>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Open in WhatsApp
                  </a>
                  <a
                    href={getMailtoUrl()}
                    className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 hover:bg-primary/20 text-primary px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all active:scale-95 cursor-pointer"
                  >
                    <Mail className="h-4 w-4" />
                    Open in Email App
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyDetails}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold hover:border-primary transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copied ? "Copied!" : "Copy Details"}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setSentVia(null);
                      setForm({
                        name: "",
                        phone: "",
                        email: "",
                        category: categories[0]?.title ?? "Fashion & Apparel",
                        message: "",
                      });
                    }}
                    className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSendWhatsApp} className="space-y-4 sm:space-y-5">
                {/* Instant Connect Banner */}
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-3.5 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-semibold text-foreground">Direct Support Guarantee</span>
                      <span className="hidden sm:inline text-muted-foreground">— Zero server downtime</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={CONTACT_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full bg-emerald-600 hover:bg-emerald-500 px-2.5 py-1 text-[11px] font-semibold text-white transition-all shadow-sm"
                      >
                        <MessageCircle className="h-3 w-3" /> Quick WhatsApp
                      </a>
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-1 text-[11px] font-medium text-foreground hover:border-primary hover:text-primary transition-all"
                      >
                        <Mail className="h-3 w-3" /> Quick Email
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                  <Field label="Full Name *" id="name">
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="input-base"
                    />
                  </Field>
                  <Field label="Phone / WhatsApp Number *" id="phone">
                    <input
                      id="phone"
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 95826 17055"
                      className="input-base"
                    />
                  </Field>
                </div>

                <Field label="Email Address *" id="email">
                  <input
                    id="email"
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="e.g. rahul@example.com"
                    className="input-base"
                  />
                </Field>

                <Field label="Target Category" id="cat">
                  <select
                    id="cat"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="input-base"
                  >
                    {categories.map((c) => (
                      <option key={c.slug} value={c.title}>
                        {c.title}
                      </option>
                    ))}
                    <option value="General Consultation">General Consultation / Multi-Category</option>
                  </select>
                </Field>

                <Field label="Your Questions / Requirements" id="msg">
                  <textarea
                    id="msg"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="e.g. I am looking to start a zero-inventory dropshipping store on Shopify and Amazon. How quickly can we launch?"
                    className="input-base resize-none"
                  />
                </Field>

                {/* Direct Action Submission Grid */}
                <div className="pt-2 space-y-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => handleSendWhatsApp()}
                      className="group flex flex-col items-center justify-center gap-1 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 p-3.5 text-white shadow-[0_4px_20px_rgba(16,185,129,0.3)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                      <div className="flex items-center gap-2 font-bold text-sm sm:text-base">
                        <MessageSquare className="h-4 w-4" />
                        <span>Submit via WhatsApp</span>
                      </div>
                      <span className="text-[11px] text-emerald-100 font-medium">
                        Instant chat • +91 95826 17055
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSendEmail()}
                      className="group flex flex-col items-center justify-center gap-1 rounded-2xl bg-primary hover:bg-primary/90 p-3.5 text-primary-foreground shadow-[0_4px_20px_rgba(245,158,11,0.25)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                      <div className="flex items-center gap-2 font-bold text-sm sm:text-base">
                        <Mail className="h-4 w-4" />
                        <span>Submit via Direct Email</span>
                      </div>
                      <span className="text-[11px] text-primary-foreground/80 font-medium">
                        Official desk • support@dropshipboss.in
                      </span>
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-1 text-[11px] text-muted-foreground px-1">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                      100% Direct Delivery Guarantee
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyDetails}
                      className="inline-flex items-center gap-1 text-primary hover:underline cursor-pointer"
                    >
                      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                      <span>{copied ? "Copied!" : "Copy Inquiry Text"}</span>
                    </button>
                  </div>
                </div>

                <p className="text-center text-[11px] text-muted-foreground pt-1">
                  Your details are sent directly to{" "}
                  <strong className="text-foreground font-medium">{CONTACT_INFO.email}</strong> &amp;{" "}
                  <strong className="text-foreground font-medium">{CONTACT_INFO.phone}</strong>. No intermediate data storage.
                </p>
              </form>
            )}
          </div>

          <div className="space-y-4">
            <div className="surface-card flex gap-3 sm:gap-4 p-4 sm:p-6 min-w-0">
              <span className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold">Support & Query Email</p>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="mt-1 block text-xs sm:text-sm text-primary font-medium hover:underline break-words"
                >
                  {CONTACT_INFO.email}
                </a>
                <p className="mt-0.5 text-[11px] text-muted-foreground">
                  Official contact for seller onboarding, queries, and catalog requests
                </p>
              </div>
            </div>

            <div className="surface-card flex gap-3 sm:gap-4 p-4 sm:p-6 min-w-0">
              <span className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                <Phone className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold">Phone & WhatsApp Support</p>
                <div className="mt-1 flex flex-wrap items-center gap-3">
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary font-medium"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                  <a
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 hover:underline"
                  >
                    <MessageSquare className="h-3 w-3" /> WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>

            <div className="surface-card flex gap-3 sm:gap-4 p-4 sm:p-6 min-w-0">
              <span className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold">Corporate Office Address</p>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground break-words leading-relaxed">
                  {CONTACT_INFO.address}
                </p>
              </div>
            </div>

            <div className="surface-card flex gap-3 sm:gap-4 p-4 sm:p-6 min-w-0">
              <span className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                <Clock className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold">Support Hours</p>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground break-words leading-relaxed">
                  {CONTACT_INFO.timings}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-secondary p-5">
              <h3 className="text-sm font-bold text-foreground">Need Immediate Onboarding?</h3>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                Connect directly with our e-commerce consulting specialists on WhatsApp or send an email to{" "}
                <span className="text-primary font-medium">{CONTACT_INFO.email}</span>.
              </p>
              <div className="mt-3.5 flex gap-2">
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 px-3.5 py-1.5 text-xs font-semibold text-white transition-all shadow"
                >
                  <MessageSquare className="h-3 w-3" /> WhatsApp
                </a>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-all"
                >
                  <Mail className="h-3 w-3" /> Direct Email
                </a>
              </div>
            </div>
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
