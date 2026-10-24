import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Truck,
  ShieldCheck,
  Clock,
  MapPin,
  RotateCcw,
  FileText,
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
  MessageCircle,
  HelpCircle,
  PackageCheck,
  Building2,
  Sparkles,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Zap,
  Globe2,
  Box,
} from "lucide-react";
import { PageHero, Section } from "@/components/PageShell";
import { BRAND, CONTACT_INFO } from "@/lib/site-data";

export const Route = createFileRoute("/shipping-delivery-policy")({
  head: () => ({
    meta: [
      {
        title:
          "Shipping & Delivery Policy | Dropship Boss — Pan-India Logistics & SLAs",
      },
      {
        name: "description",
        content:
          "Official Shipping & Delivery Policy for Dropship Boss sellers and partners. Understand our 24–48h dispatch SLAs, 19,000+ pin codes network, automated COD verification, and zero-loss transit protection.",
      },
      {
        name: "keywords",
        content:
          "product fulfillment partners India, product fulfillment partner India, indian product fulfillment partners, best product fulfillment partners india, india product fulfillment partners, online selling without inventory, trusted ecommerce seller platform, best ecommerce seller platform India, ecommerce selling India, start online selling business, online selling business kya hai, Meesho ecommerce selling, Amazon ecommerce selling, Flipkart ecommerce selling, cod verification, rto management, pan india delivery, Dropship Boss, B2B product fulfillment",
      },
      {
        property: "og:title",
        content: "Shipping & Delivery Policy — Dropship Boss India",
      },
      {
        property: "og:description",
        content:
          "Transparent order dispatch SLAs, pan-India courier networks (Delhivery, Blue Dart, DTDC), real-time tracking, and RTO minimization guidelines.",
      },
    ],
  }),
  component: ShippingDeliveryPolicy,
});

function ShippingDeliveryPolicy() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const deliveryZones = [
    {
      region: "Tier 1 & Metro Cities",
      cities: "Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad",
      timeline: "2 – 4 Business Days",
      mode: "Air Express & Priority Surface",
      icon: Zap,
    },
    {
      region: "Tier 2 & Tier 3 Cities",
      cities: "State capitals, industrial hubs, district headquarters & major commercial towns",
      timeline: "4 – 6 Business Days",
      mode: "Surface Express Fleet",
      icon: Truck,
    },
    {
      region: "Special & Remote Areas",
      cities: "North-Eastern states, Jammu & Kashmir, Himachal, Andaman & Nicobar, Lakshadweep",
      timeline: "6 – 8 Business Days",
      mode: "Air Cargo & Speed Post Priority",
      icon: Globe2,
    },
  ];

  const courierPartners = [
    { name: "Delhivery", type: "Air & Surface", coverage: "18,500+ Pin Codes", highlight: "Fast COD Remittance" },
    { name: "Blue Dart", type: "Premium Air Express", coverage: "14,000+ Pin Codes", highlight: "Guaranteed Next-Day for Metros" },
    { name: "DTDC Express", type: "Nationwide Cargo", coverage: "17,500+ Pin Codes", highlight: "High Heavy-Weight Reliability" },
    { name: "Xpressbees", type: "E-Commerce Priority", coverage: "16,000+ Pin Codes", highlight: "Automated IVR Verification" },
    { name: "Ekart Logistics", type: "Hyperlocal & Pan-India", coverage: "15,000+ Pin Codes", highlight: "Rapid Metro Hub Dispatches" },
    { name: "India Post (Speed Post)", type: "Universal Network", coverage: "19,100+ Pin Codes", highlight: "100% Reach in Rural India" },
  ];

  const faqs = [
    {
      q: "How does Dropship Boss verify Cash on Delivery (COD) orders before dispatch?",
      a: "To protect our sellers from high RTO (Return to Origin) rates and wasted ad spend, all incoming COD orders undergo an automated WhatsApp & IVR voice confirmation check. Orders confirmed by the buyer are immediately transferred to the packing and dispatch queue, while unconfirmed orders are flagged for seller review.",
    },
    {
      q: "Can the end customer see 'Dropship Boss' branding on the shipped package?",
      a: "No. All customer orders are shipped using strict white-label standards in neutral, tamper-evident packaging. The shipping label and packing slip feature your store's brand name, ensuring that your customer relationships and brand loyalty remain 100% yours.",
    },
    {
      q: "What happens if a package is damaged or lost during transit by the courier?",
      a: "Dropship Boss provides a 100% Zero-Loss Transit Guarantee. If a shipment is confirmed lost or damaged by our courier partner, we dispatch a free replacement immediately upon receiving photographic or unboxing video proof within 48 hours of delivery.",
    },
    {
      q: "Can a seller or buyer modify the shipping address after placing an order?",
      a: "Address corrections can be made free of charge before the order is manifested and handed over to the courier (typically within 12 hours of order placement). Once the AWB is generated and the parcel departs the hub, re-routing is subject to courier feasibility and may incur re-consignment fees.",
    },
    {
      q: "What is the Non-Delivery Report (NDR) process when a delivery attempt fails?",
      a: "Our integrated courier partners make up to three (3) delivery attempts. When an attempt fails (e.g. customer unavailable or address incomplete), an automated NDR alert is triggered via WhatsApp/SMS to the buyer to schedule a reattempt or clarify landmark details, helping prevent unnecessary returns.",
    },
    {
      q: "Do you ship internationally outside India?",
      a: "Currently, our automated zero-inventory fulfillment portal is optimized for pan-India domestic fulfillment across all 28 states and 8 union territories. Bulk international wholesale export orders are supported via custom freight agreements on a case-by-case basis through our support desk.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Official Logistics & Compliance"
        title={
          <>
            Shipping &amp; <span className="gradient-text">Delivery Policy</span>
          </>
        }
        subtitle="Complete operational transparency on order fulfillment workflows, dispatch SLAs, pan-India courier networks, tracking systems, and delivery dispute resolution for Dropship Boss sellers."
      />

      {/* Policy Meta Strip */}
      <div className="border-b border-border bg-secondary/30">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 text-xs sm:px-6 text-muted-foreground">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <span>
              <strong>Policy Code:</strong> DB-SDP-2026
            </span>
            <span className="hidden sm:inline">•</span>
            <span>
              <strong>Version:</strong> 2.4 (Active for 2026)
            </span>
            <span className="hidden sm:inline">•</span>
            <span>
              <strong>Governed Under:</strong> Consumer Protection (E-Commerce) Rules 2020
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-primary font-medium">
            <ShieldCheck className="h-4 w-4" />
            <span>Official Verified Policy</span>
          </div>
        </div>
      </div>

      <Section>
        {/* Core Metric Highlights */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          <div className="surface-card p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3.5">
              <Clock className="h-5 w-5" />
            </div>
            <p className="text-xl font-black text-foreground">24 – 48 Hours</p>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              Automated dispatch SLA from our centralized manufacturing and warehouse clusters.
            </p>
          </div>

          <div className="surface-card p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3.5">
              <MapPin className="h-5 w-5" />
            </div>
            <p className="text-xl font-black text-foreground">19,000+ Pin Codes</p>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              Comprehensive pan-India delivery reach across Metros, Tier 1, Tier 2, and rural pin codes.
            </p>
          </div>

          <div className="surface-card p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3.5">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <p className="text-xl font-black text-foreground">Zero-Loss Guarantee</p>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              100% replacement protection for packages damaged or lost in transit by couriers.
            </p>
          </div>

          <div className="surface-card p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3.5">
              <PackageCheck className="h-5 w-5" />
            </div>
            <p className="text-xl font-black text-foreground">White-Label Pack</p>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              Neutral packaging carrying your store branding, keeping your customer relationship exclusive.
            </p>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          {/* Detailed Policy Text */}
          <div className="space-y-10 min-w-0">
            {/* Section 1 */}
            <div id="scope" className="surface-card p-6 sm:p-8">
              <div className="flex items-center gap-2.5 text-primary text-xs font-bold uppercase tracking-wider">
                <FileText className="h-4 w-4" />
                <span>Section 1</span>
              </div>
              <h2 className="mt-2 text-xl sm:text-2xl font-bold">Scope &amp; Fulfillment Architecture</h2>
              <div className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed space-y-3">
                <p>
                  This Shipping and Delivery Policy (DB-SDP-2026) governs all physical goods, bulk wholesale
                  supplies, product samples, and direct customer fulfillment orders dispatched by or on behalf of{" "}
                  <strong className="text-foreground">{BRAND}</strong> (operating through our registered office in
                  Faridabad, Haryana, India).
                </p>
                <p>
                  This policy applies to all active product categories on our platform — including Ladies Bags &amp;
                  Handbags, Backpacks &amp; Travel Gear, Gadgets &amp; Electronics, Home &amp; Kitchen Essentials, Beauty
                  &amp; Personal Care, and Kids &amp; Baby products.
                </p>
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-xs text-foreground/90">
                  <strong>Digital vs. Physical Services Note:</strong> This policy specifically covers physical goods
                  and their transportation. Digital services (such as turnkey Shopify store setups, software
                  integrations, ad playbooks, and subscription plans) are delivered electronically immediately upon
                  confirmation as outlined in the Service Terms.
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div id="slas" className="surface-card p-6 sm:p-8">
              <div className="flex items-center gap-2.5 text-primary text-xs font-bold uppercase tracking-wider">
                <Clock className="h-4 w-4" />
                <span>Section 2</span>
              </div>
              <h2 className="mt-2 text-xl sm:text-2xl font-bold">Order Verification &amp; Dispatch SLAs</h2>
              <div className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Our fulfillment engine operates on automated real-time dispatch schedules designed to maximize customer
                  delight and minimize cancellation rates:
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-secondary/30 p-4">
                    <p className="font-semibold text-foreground text-sm flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      Prepaid Orders
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Orders paid via UPI, NetBanking, or Credit/Debit Card skip manual verification and enter the pick,
                      pack, and QC line immediately.
                    </p>
                    <p className="mt-2 text-[11px] font-semibold text-primary">
                      Dispatch SLA: 12 – 24 business hours
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-secondary/30 p-4">
                    <p className="font-semibold text-foreground text-sm flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-amber-400" />
                      Cash on Delivery (COD)
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Subject to automated WhatsApp and IVR telephone verification to validate the recipient’s address,
                      pincode, and intent.
                    </p>
                    <p className="mt-2 text-[11px] font-semibold text-primary">
                      Dispatch SLA: 24 – 48 business hours
                    </p>
                  </div>
                </div>

                <p>
                  Orders placed on Sundays or gazetted public holidays are handed over to courier partners on the
                  immediate following business day.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div id="timelines" className="surface-card p-6 sm:p-8">
              <div className="flex items-center gap-2.5 text-primary text-xs font-bold uppercase tracking-wider">
                <Truck className="h-4 w-4" />
                <span>Section 3</span>
              </div>
              <h2 className="mt-2 text-xl sm:text-2xl font-bold">Estimated Delivery Timelines by Zone</h2>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                Actual transit time is calculated from the moment the courier scans the package at our primary dispatch
                hub in Delhi NCR / Mumbai:
              </p>

              <div className="mt-5 space-y-3.5">
                {deliveryZones.map((z, i) => {
                  const Icon = z.icon;
                  return (
                    <div
                      key={i}
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl border border-border/70 bg-secondary/20 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="font-semibold text-foreground text-sm">{z.region}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{z.cities}</p>
                          <p className="text-[11px] text-primary/90 mt-1 font-medium">{z.mode}</p>
                        </div>
                      </div>
                      <div className="sm:text-right shrink-0">
                        <span className="inline-block rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-400">
                          {z.timeline}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Section 4 */}
            <div id="couriers" className="surface-card p-6 sm:p-8">
              <div className="flex items-center gap-2.5 text-primary text-xs font-bold uppercase tracking-wider">
                <Globe2 className="h-4 w-4" />
                <span>Section 4</span>
              </div>
              <h2 className="mt-2 text-xl sm:text-2xl font-bold">Courier Logistics Network &amp; Real-Time Tracking</h2>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                We partner exclusively with India’s highest-rated logistics aggregators and national couriers to ensure
                low transit variance and high first-attempt delivery rates:
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {courierPartners.map((c, i) => (
                  <div key={i} className="rounded-xl border border-border bg-card/60 p-3.5 space-y-1.5">
                    <p className="font-bold text-foreground text-sm flex items-center justify-between">
                      <span>{c.name}</span>
                      <span className="text-[10px] font-semibold text-primary">{c.type}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">{c.coverage}</p>
                    <div className="text-[11px] text-emerald-400 font-medium pt-1 border-t border-border/40">
                      ★ {c.highlight}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-border bg-secondary/30 p-4 space-y-2 text-xs sm:text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">Live Tracking Notifications:</p>
                <p>
                  As soon as a package is dispatched, an automated tracking Airway Bill (AWB) number and live tracking
                  URL are instantly dispatched via WhatsApp and SMS to both the seller and the end recipient.
                </p>
                <p>
                  Sellers can also monitor bulk tracking and order statuses live directly inside their connected Dropship
                  Boss dashboard.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div id="ndr" className="surface-card p-6 sm:p-8">
              <div className="flex items-center gap-2.5 text-primary text-xs font-bold uppercase tracking-wider">
                <RotateCcw className="h-4 w-4" />
                <span>Section 5</span>
              </div>
              <h2 className="mt-2 text-xl sm:text-2xl font-bold">
                Non-Delivery Reports (NDR) &amp; RTO Reduction Protocol
              </h2>
              <div className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed space-y-3.5">
                <p>
                  Return to Origin (RTO) represents the largest friction point in Indian e-commerce. Dropship Boss uses a
                  proactive, multi-tier intervention engine:
                </p>

                <div className="space-y-2.5">
                  <div className="flex items-start gap-3 rounded-lg border border-border/60 p-3 bg-secondary/15">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary text-xs font-bold">
                      1
                    </span>
                    <div>
                      <strong className="text-foreground">Up to 3 Delivery Attempts:</strong> The assigned courier
                      partner must make at least three independent delivery attempts before initiating any return.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border/60 p-3 bg-secondary/15">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary text-xs font-bold">
                      2
                    </span>
                    <div>
                      <strong className="text-foreground">Real-Time Automated NDR Escalation:</strong> If a delivery
                      fails due to "Customer Unavailable", "Incorrect Phone", or "Incomplete Address", our automated AI
                      dispatcher pings the customer via WhatsApp to re-confirm preferred time or landmark instructions.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border/60 p-3 bg-secondary/15">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary text-xs font-bold">
                      3
                    </span>
                    <div>
                      <strong className="text-foreground">RTO Return &amp; Inventory Restocking:</strong> In the event
                      a parcel cannot be delivered after full NDR escalation, it is safely returned to our nearest hub.
                      Intact merchandise is restocked with zero penalty to the seller.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div id="damages" className="surface-card p-6 sm:p-8">
              <div className="flex items-center gap-2.5 text-primary text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                <span>Section 6</span>
              </div>
              <h2 className="mt-2 text-xl sm:text-2xl font-bold">Damaged, Defective or Lost in Transit Protection</h2>
              <div className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed space-y-3">
                <p>
                  Dropship Boss assumes full accountability for transit risks once goods depart our warehouse until
                  verified delivery:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-foreground">48-Hour Reporting Window:</strong> If a customer receives a
                    damaged outer box or damaged product, the seller or buyer must notify our support team within 48 hours
                    of receipt.
                  </li>
                  <li>
                    <strong className="text-foreground">Proof Requirement:</strong> Please submit photographs and,
                    ideally, a short unboxing video clearly displaying the shipping label and the defect.
                  </li>
                  <li>
                    <strong className="text-foreground">Immediate Free Replacement:</strong> Upon verification, Dropship
                    Boss dispatches a brand-new replacement unit at no extra product or shipping cost.
                  </li>
                  <li>
                    <strong className="text-foreground">Lost Shipments:</strong> If a tracking status remains stalled for
                    over 7 business days without movement, the courier confirms transit loss, and we immediately re-ship a
                    fresh unit to the buyer.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 7 */}
            <div id="packaging" className="surface-card p-6 sm:p-8">
              <div className="flex items-center gap-2.5 text-primary text-xs font-bold uppercase tracking-wider">
                <Box className="h-4 w-4" />
                <span>Section 7</span>
              </div>
              <h2 className="mt-2 text-xl sm:text-2xl font-bold">Packaging &amp; White-Label Standards</h2>
              <div className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed space-y-3">
                <p>
                  To protect our sellers&apos; brand equity, Dropship Boss adheres to strict white-label standards:
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-secondary/30 p-4">
                    <p className="font-semibold text-foreground text-xs uppercase tracking-wider">Packaging Details</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Shipped in clean, neutral, tamper-evident security polybags or high-gauge corrugated craft boxes
                      with zero Dropship Boss logos.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-secondary/30 p-4">
                    <p className="font-semibold text-foreground text-xs uppercase tracking-wider">Shipping Label</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      The return address and sender label displays your store or company name as registered in your
                      merchant profile.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 8: FAQ Scenarios */}
            <div id="faqs" className="surface-card p-6 sm:p-8">
              <div className="flex items-center gap-2.5 text-primary text-xs font-bold uppercase tracking-wider">
                <HelpCircle className="h-4 w-4" />
                <span>Section 8</span>
              </div>
              <h2 className="mt-2 text-xl sm:text-2xl font-bold">Common Scenarios &amp; Seller Guidance</h2>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                Quick answers to practical fulfillment questions asked by new and scaling e-commerce merchants:
              </p>

              <div className="mt-6 space-y-3">
                {faqs.map((f, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div
                      key={i}
                      className="rounded-xl border border-border/80 bg-secondary/20 overflow-hidden transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(i)}
                        className="w-full flex items-center justify-between p-4 text-left font-semibold text-sm sm:text-base text-foreground cursor-pointer hover:text-primary transition-colors gap-3"
                      >
                        <span>{f.q}</span>
                        {isOpen ? (
                          <ChevronUp className="h-4 w-4 shrink-0 text-primary" />
                        ) : (
                          <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-3">
                          {f.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Section 9: Grievance & Nodal Officer */}
            <div id="grievance" className="surface-card p-6 sm:p-8">
              <div className="flex items-center gap-2.5 text-primary text-xs font-bold uppercase tracking-wider">
                <Building2 className="h-4 w-4" />
                <span>Section 9</span>
              </div>
              <h2 className="mt-2 text-xl sm:text-2xl font-bold">Grievance Redressal &amp; Nodal Desk</h2>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                In compliance with the Information Technology Act, 2000 and the Consumer Protection (E-Commerce) Rules,
                2020, our dedicated Grievance Officer handles all escalated shipment disputes, unresolved courier
                delays, and claims:
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-secondary/30 p-4 space-y-1">
                  <p className="text-xs uppercase font-semibold text-muted-foreground">Logistics Grievance Officer</p>
                  <p className="text-sm font-bold text-foreground">Nodal Desk — Operations</p>
                  <p className="text-xs text-muted-foreground pt-1">
                    <strong>Email:</strong>{" "}
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary hover:underline">
                      {CONTACT_INFO.email}
                    </a>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>WhatsApp Helpline:</strong>{" "}
                    <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">
                      {CONTACT_INFO.phone}
                    </a>
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-secondary/30 p-4 space-y-1">
                  <p className="text-xs uppercase font-semibold text-muted-foreground">Corporate Fulfillment Center</p>
                  <p className="text-sm font-bold text-foreground">Dropship Boss India</p>
                  <p className="text-xs text-muted-foreground pt-1 leading-relaxed">
                    {CONTACT_INFO.address}
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Operating Hours: {CONTACT_INFO.timings}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Quick-Nav & Support Sidebar */}
          <div className="space-y-5">
            {/* Quick Links Card */}
            <div className="surface-card p-5 sticky top-24">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">On This Page</p>
              <nav className="mt-3 space-y-1.5 text-xs">
                {[
                  { id: "scope", label: "1. Scope & Architecture" },
                  { id: "slas", label: "2. Dispatch SLAs" },
                  { id: "timelines", label: "3. Delivery Timelines by Zone" },
                  { id: "couriers", label: "4. Courier Logistics Network" },
                  { id: "ndr", label: "5. NDR & RTO Reduction" },
                  { id: "damages", label: "6. Transit Protection Guarantee" },
                  { id: "packaging", label: "7. Packaging Standards" },
                  { id: "faqs", label: "8. Common Scenarios & FAQs" },
                  { id: "grievance", label: "9. Grievance Redressal Desk" },
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block rounded-lg px-2.5 py-1.5 text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-primary"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-5 border-t border-border/60 space-y-3">
                <p className="text-xs font-semibold text-foreground">Need Shipment Assistance?</p>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 p-2.5 text-xs font-bold text-white shadow-sm transition-all"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
                <a
                  href={`mailto:${CONTACT_INFO.email}?subject=Shipping%20Query%20-%20Dropship%20Boss`}
                  className="w-full flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/10 hover:bg-primary/20 p-2.5 text-xs font-bold text-primary transition-all"
                >
                  <Mail className="h-4 w-4" />
                  Email Support
                </a>
                <Link
                  to="/contact"
                  className="block text-center text-xs text-muted-foreground hover:text-primary transition-colors pt-1"
                >
                  Book 1-on-1 Consultation &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
