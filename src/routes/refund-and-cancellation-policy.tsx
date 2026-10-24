import { createFileRoute, Link } from "@tanstack/react-router";
import {
  RotateCcw,
  CheckCircle2,
  Clock,
  ShieldCheck,
  CreditCard,
  PackageCheck,
  AlertCircle,
  HelpCircle,
  Mail,
  Phone,
  ArrowRight,
  FileText,
} from "lucide-react";
import { PageHero, Section } from "@/components/PageShell";
import { BRAND, CONTACT_INFO } from "@/lib/site-data";

export const Route = createFileRoute("/refund-and-cancellation-policy")({
  head: () => ({
    meta: [
      {
        title: "Refund and Cancellation Policy | Dropship Boss — Transparent Service SLAs",
      },
      {
        name: "description",
        content:
          "Official Refund and Cancellation Policy for Dropship Boss platform setup, subscription packages, and physical product fulfillment orders.",
      },
      {
        name: "keywords",
        content:
          "refund policy, cancellation policy, dropship boss refund, subscription cancellation, product replacement policy, payment gateway compliance",
      },
      {
        property: "og:title",
        content: "Refund and Cancellation Policy — Dropship Boss India",
      },
      {
        property: "og:description",
        content:
          "Clear, transparent guidelines on subscription cancellations, physical order replacements, transit damages, and 5-7 business day refund timelines.",
      },
    ],
  }),
  component: RefundCancellationPolicy,
});

function RefundCancellationPolicy() {
  const lastUpdated = "October 24, 2026";

  const guarantees = [
    {
      icon: Clock,
      title: "24-Hour Plan Cancellation",
      text: "Full 100% refund on setup packages if requested within 24 hours prior to technical provisioning.",
    },
    {
      icon: ShieldCheck,
      title: "100% Free Replacements",
      text: "Defective, broken, or transit-damaged products are replaced immediately free of charge.",
    },
    {
      icon: CreditCard,
      title: "5–7 Days Refund SLA",
      text: "Approved refunds are credited directly to original payment method (Bank/UPI/Card) in 5–7 days.",
    },
    {
      icon: RotateCcw,
      title: "Monthly Freedom (Titanium)",
      text: "Cancel monthly plan at any time with zero cancellation fee before the next billing cycle.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Consumer Confidence & Protection"
        title={
          <>
            Refund &amp; <span className="gradient-text">Cancellation Policy</span>
          </>
        }
        subtitle={`Clear, fair, and transparent guidelines governing platform subscriptions and product replacements. Effective Date: ${lastUpdated}.`}
      />

      <Section>
        {/* Guarantees Bar */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {guarantees.map((g, idx) => (
            <div key={idx} className="surface-card p-5 rounded-2xl border border-border/80">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                <g.icon className="h-5 w-5" />
              </span>
              <h3 className="text-sm font-bold text-foreground">{g.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{g.text}</p>
            </div>
          ))}
        </div>

        {/* Content Container */}
        <div className="surface-card p-6 sm:p-10 rounded-3xl border border-border/80 space-y-8 text-sm sm:text-base leading-relaxed text-muted-foreground">
          {/* Section 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <FileText className="h-4 w-4" />
              <span>Section 1 • Service Subscriptions &amp; Setup Packages</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              1. Platform Subscription &amp; Store Setup Cancellation
            </h2>
            <p>
              At <strong className="text-foreground">{BRAND}</strong>, we strive to deliver exceptional B2B e-commerce
              enablement, catalog sourcing, and fulfillment services. Because our packages involve real engineering,
              custom storefront provisioning, domain registration, and marketplace onboarding, the following cancellation
              rules apply:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground">24-Hour Full Refund Window:</strong> If you subscribe to any annual or one-time setup package (Silver, Gold, Platinum, Platinum Plus, Elite, Diamond) and wish to cancel, you may request a 100% full refund within <strong className="text-foreground">24 hours of payment</strong>, provided custom storefront design or marketplace registration has not commenced.
              </li>
              <li>
                <strong className="text-foreground">Post-Provisioning Policy:</strong> Once our engineering team has commenced store design, purchased custom domain assets, or mapped initial product catalogs (typically starting 24 to 48 hours after onboarding), the one-time technical setup fee becomes non-refundable to cover irreversible third-party software licensing and engineering costs.
              </li>
              <li>
                <strong className="text-foreground">Titanium Monthly Plan Cancellation:</strong> For merchants on the Titanium Monthly Plan (₹899/month), you may cancel your recurring subscription at any time prior to the renewal billing date. Upon cancellation, your access remains active until the end of your prepaid billing period, with zero cancellation penalties.
              </li>
            </ul>
          </div>

          <hr className="border-border/60" />

          {/* Section 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <PackageCheck className="h-4 w-4" />
              <span>Section 2 • Physical Product Orders &amp; Replacement SLAs</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              2. Physical Goods Replacement &amp; Transit Damage Policy
            </h2>
            <p>
              For customer orders fulfilled through our verified Indian supplier and warehouse network, we guarantee that
              goods are strictly quality-checked prior to dispatch. However, if transit damage or manufacturing defects occur,
              we provide robust replacement protection:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground">100% Free Replacements:</strong> If your buyer receives a damaged, physically broken, defective, or incorrect product, {BRAND} will dispatch an immediate replacement at zero extra cost to you or your buyer.
              </li>
              <li>
                <strong className="text-foreground">Reporting Window:</strong> Replacement claims must be submitted to our support desk within <strong className="text-foreground">48 hours of parcel delivery</strong>, accompanied by photo or brief unboxing video proof showing the defect or shipping label damage.
              </li>
              <li>
                <strong className="text-foreground">Dispatch SLA:</strong> Once verified, replacement shipments are manifested and dispatched within <strong className="text-foreground">24 to 48 hours</strong> with priority courier tracking.
              </li>
              <li>
                <strong className="text-foreground">Out of Stock Replacement:</strong> In the rare event that the specific SKU is permanently discontinued or out of stock, the full wholesale product amount will be credited back to your merchant wallet or settled to your bank account immediately.
              </li>
            </ul>
          </div>

          <hr className="border-border/60" />

          {/* Section 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <CreditCard className="h-4 w-4" />
              <span>Section 3 • Refund Method &amp; Settlement Timelines</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              3. Refund Processing Timelines &amp; Modes of Payout
            </h2>
            <p>
              All refund requests are processed with complete transparency in compliance with Reserve Bank of India (RBI)
              and Payment Aggregator settlement guidelines:
            </p>
            <div className="grid gap-4 sm:grid-cols-2 my-4">
              <div className="surface-card p-4 rounded-xl border border-primary/20 space-y-1">
                <span className="text-xs font-bold text-primary uppercase">Payment Gateway / Cards / NetBanking</span>
                <p className="text-foreground font-semibold text-sm">5 to 7 Business Days</p>
                <p className="text-xs text-muted-foreground">Credited directly to the originating bank account or card issuer.</p>
              </div>
              <div className="surface-card p-4 rounded-xl border border-primary/20 space-y-1">
                <span className="text-xs font-bold text-primary uppercase">UPI Payments (GPay, PhonePe, Paytm)</span>
                <p className="text-foreground font-semibold text-sm">24 to 48 Hours</p>
                <p className="text-xs text-muted-foreground">Direct instant reversal to the connected VPA/UPI bank account.</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm">
              <strong className="text-foreground">Note:</strong> Refund confirmation reference IDs (ARN / RRN numbers) are emailed to the merchant immediately upon initiation so you can track the status with your bank.
            </p>
          </div>

          <hr className="border-border/60" />

          {/* Section 4 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <RotateCcw className="h-4 w-4" />
              <span>Section 4 • Return to Origin (RTO) Management</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              4. Return to Origin (RTO) Handling for COD Orders
            </h2>
            <p>
              When a buyer rejects a Cash on Delivery (COD) package or is unreachable after three courier delivery attempts,
              the parcel returns safely to our fulfillment warehouse.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Returned inventory undergoes secondary QC inspection and is restocked without penalty.</li>
              <li>Our automated WhatsApp OTP verification system helps merchants minimize RTO rates to under 12% across India.</li>
              <li>Only actual round-trip courier shipping charges incurred with the logistics partner are adjusted against merchant accounts, with zero restocking penalties.</li>
            </ul>
          </div>

          <hr className="border-border/60" />

          {/* Section 5 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <Mail className="h-4 w-4" />
              <span>Section 5 • How to Request a Cancellation or Refund</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              5. Step-by-Step Cancellation &amp; Refund Request Process
            </h2>
            <p>To request a subscription cancellation or replacement/refund on an order, follow these simple steps:</p>
            <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                <strong className="text-foreground">Email Official Support:</strong> Send an email from your registered email address to{" "}
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary hover:underline font-semibold">
                  {CONTACT_INFO.email}
                </a>{" "}
                with the subject line: <code className="rounded bg-secondary px-1.5 py-0.5 text-foreground font-mono text-xs">Refund Request - [Your Order/Plan ID]</code>.
              </li>
              <li>
                <strong className="text-foreground">State Your Reason:</strong> Provide a brief description of the reason for cancellation, along with proof of defect or order receipt if applicable.
              </li>
              <li>
                <strong className="text-foreground">Review &amp; Acknowledgment:</strong> Our merchant billing team will acknowledge your ticket within <strong className="text-foreground">2 to 4 business hours</strong>.
              </li>
              <li>
                <strong className="text-foreground">Settlement:</strong> Once approved, the refund is initiated immediately, and your ARN tracking number is shared via email.
              </li>
            </ol>
            <div className="surface-card p-5 rounded-2xl border border-primary/30 space-y-2 text-xs sm:text-sm mt-4">
              <p><strong className="text-foreground">Direct Merchant Helpdesk:</strong></p>
              <p><strong className="text-foreground">Email:</strong> <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary hover:underline">{CONTACT_INFO.email}</a></p>
              <p><strong className="text-foreground">Phone / WhatsApp:</strong> <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="text-primary hover:underline">{CONTACT_INFO.phone}</a></p>
              <p><strong className="text-foreground">Operating Address:</strong> {CONTACT_INFO.address}</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 surface-card p-6 rounded-2xl border border-border/80 text-xs sm:text-sm">
          <span>Need further clarification regarding our refund or replacement policies?</span>
          <div className="flex items-center gap-3">
            <Link to="/contact" className="text-primary font-semibold hover:underline">
              Contact Billing Team
            </Link>
            <span>•</span>
            <Link to="/terms-and-conditions" className="text-muted-foreground hover:text-foreground">
              Terms &amp; Conditions
            </Link>
            <span>•</span>
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
