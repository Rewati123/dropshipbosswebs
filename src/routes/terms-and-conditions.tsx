import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  FileText,
  Building2,
  Scale,
  CreditCard,
  Truck,
  AlertTriangle,
  Lock,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { PageHero, Section } from "@/components/PageShell";
import { BRAND, CONTACT_INFO } from "@/lib/site-data";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      {
        title: "Terms and Conditions | Dropship Boss — B2B E-Commerce Enablement Services",
      },
      {
        name: "description",
        content:
          "Official Terms and Conditions governing B2B e-commerce seller enablement, product sourcing, catalog integration, and fulfillment services by Dropship Boss.",
      },
      {
        name: "keywords",
        content:
          "terms and conditions, dropship boss terms, ecommerce seller platform terms, product fulfillment partner India, B2B product fulfillment, Dropship Boss",
      },
      {
        property: "og:title",
        content: "Terms and Conditions — Dropship Boss India",
      },
      {
        property: "og:description",
        content:
          "Legal terms governing service subscriptions, catalog sourcing, seller enablement, and logistics fulfillment by Dropship Boss.",
      },
    ],
  }),
  component: TermsAndConditions,
});

function TermsAndConditions() {
  const lastUpdated = "October 24, 2026";

  const keyPoints = [
    {
      icon: Building2,
      title: "B2B Enablement Platform",
      text: "We provide software tools, catalog sourcing, and fulfillment services to independent e-commerce merchants.",
    },
    {
      icon: CreditCard,
      title: "Transparent Commercials",
      text: "7 transparent setup tiers with zero hidden commission cuts on your sales revenue.",
    },
    {
      icon: Truck,
      title: "Verified Fulfillment",
      text: "Direct warehouse routing through certified Indian suppliers and pan-India courier networks.",
    },
    {
      icon: Scale,
      title: "Indian Legal Compliance",
      text: "Operates strictly under Consumer Protection (E-Commerce) Rules 2020 & IT Act 2000.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Legal & Regulatory Framework"
        title={
          <>
            Terms and <span className="gradient-text">Conditions</span>
          </>
        }
        subtitle={`Official service agreement and operational standards governing the Dropship Boss platform. Effective Date: ${lastUpdated}.`}
      />

      <Section>
        {/* Quick Highlights Bar */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {keyPoints.map((item, idx) => (
            <div key={idx} className="surface-card p-5 rounded-2xl border border-border/80">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Content Container */}
        <div className="surface-card p-6 sm:p-10 rounded-3xl border border-border/80 space-y-8 text-sm sm:text-base leading-relaxed text-muted-foreground">
          {/* Section 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <FileText className="h-4 w-4" />
              <span>Section 1 • Service Identification &amp; Acceptance</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              1. Acceptance of Terms &amp; Business Entity Information
            </h2>
            <p>
              Welcome to <strong className="text-foreground">{BRAND}</strong> (accessible at{" "}
              <a href="https://dropshipboss.in" className="text-primary hover:underline">
                https://dropshipboss.in
              </a>
              ). These Terms and Conditions (&quot;Agreement&quot;) constitute a legally binding agreement between you
              (&quot;Merchant&quot;, &quot;Seller&quot;, or &quot;User&quot;) and {BRAND}, having its registered operating office at{" "}
              <strong className="text-foreground">
                Ekta Enclave Block A, Baba Surdas Colony, Near Balaji Hospital, Tilpat, Faridabad, Haryana 121003, India
              </strong>
              .
            </p>
            <p>
              By accessing our website, creating a merchant account, subscribing to any service package, or utilizing our
              fulfillment routing tools, you acknowledge that you have read, understood, and agree to be bound by all
              provisions of this Agreement, along with our Privacy Policy, Refund Policy, and Shipping &amp; Delivery Policy.
            </p>
          </div>

          <hr className="border-border/60" />

          {/* Section 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <Building2 className="h-4 w-4" />
              <span>Section 2 • Scope of Services</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              2. Nature of Services Provided
            </h2>
            <p>
              {BRAND} operates as a <strong className="text-foreground">B2B E-Commerce Enablement &amp; Product Fulfillment Service Provider</strong>.
              Our core services encompass:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground">Turnkey Storefront Setup:</strong> Design, configuration, and provisioning of branded e-commerce storefronts on platforms such as Shopify, WooCommerce, or custom domains.
              </li>
              <li>
                <strong className="text-foreground">Marketplace Onboarding:</strong> Seller account registration guidance, category ungating support, and catalog attribute mapping for Amazon.in, Flipkart, and Meesho.
              </li>
              <li>
                <strong className="text-foreground">Wholesale Catalog Integration:</strong> Provisioning pre-negotiated B2B wholesale pricing across verified consumer product categories (Bags, Electronics, Home &amp; Kitchen, Beauty, Toys).
              </li>
              <li>
                <strong className="text-foreground">Order Routing &amp; Logistics Management:</strong> Automated transmission of customer orders to verified domestic manufacturers, quality-checking, packaging, and handoff to certified courier logistics partners (Delhivery, Blue Dart, DTDC).
              </li>
              <li>
                <strong className="text-foreground">Seller Mentorship:</strong> 1-on-1 operational coaching, catalog optimization, and standard operating procedures for e-commerce growth.
              </li>
            </ul>
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-xs text-foreground/90">
              <strong>Clarification of Service Identity:</strong> {BRAND} is a technology and logistics enablement platform. We do not sell get-rich-quick schemes, speculative investment schemes, or passive income guarantees. All sales results are subject to merchant effort, pricing strategy, and consumer demand.
            </div>
          </div>

          <hr className="border-border/60" />

          {/* Section 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <CreditCard className="h-4 w-4" />
              <span>Section 3 • Subscription Packages &amp; Commercials</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              3. Service Packages, Billing &amp; Zero Sales Commission
            </h2>
            <p>
              {BRAND} offers transparent service tiers to accommodate different seller requirements:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li><strong className="text-foreground">Silver Plan (₹590/year):</strong> Starter social selling, 20 products monthly, WhatsApp sharing tools.</li>
              <li><strong className="text-foreground">Gold Plan (₹1,590/year):</strong> Multi-channel social selling (Instagram, Facebook, WhatsApp), 40 products monthly.</li>
              <li><strong className="text-foreground">Titanium Plan (₹899/month):</strong> Flexible monthly subscription with cloud seller panel access.</li>
              <li><strong className="text-foreground">Platinum Plan (₹5,000/year):</strong> Indian marketplace seller enablement (Amazon.in, Flipkart, Meesho) with 40 monthly listings.</li>
              <li><strong className="text-foreground">Platinum Plus Plan (₹8,000/year):</strong> Cross-border global export selling on Amazon.com with international fulfillment routing.</li>
              <li><strong className="text-foreground">Elite Plan (₹10,000/year):</strong> Omnichannel power seller enablement with priority sourcing and VIP mentorship.</li>
              <li><strong className="text-foreground">Diamond Plan (₹15,000/year):</strong> Turnkey branded custom domain store setup with payment gateway integration and automated order fulfillment.</li>
            </ul>
            <p className="mt-2">
              <strong className="text-foreground">Zero Sales Commission Policy:</strong> {BRAND} does not charge any percentage commission or royalty on the merchant&apos;s product sales. Merchants retain 100% of their net retail profit margins after deducting the wholesale product cost and courier shipping charges.
            </p>
          </div>

          <hr className="border-border/60" />

          {/* Section 4 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <Scale className="h-4 w-4" />
              <span>Section 4 • Merchant Obligations &amp; Compliance</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              4. Merchant Responsibilities &amp; Legal Compliance
            </h2>
            <p>As an authorized merchant on our platform, you agree to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground">Accurate Account Information:</strong> Provide truthful, accurate, and current business details, including valid GSTIN where applicable, active contact number, and authorized bank account details for profit settlements.
              </li>
              <li>
                <strong className="text-foreground">Fair Customer Practices:</strong> Comply with the Consumer Protection Act, 2019, and the Consumer Protection (E-Commerce) Rules, 2020. Merchants must not engage in deceptive advertising, misleading pricing, or sell restricted/counterfeit goods.
              </li>
              <li>
                <strong className="text-foreground">Retail Customer Service:</strong> Respond promptly to customer inquiries, delivery status questions, and replacement requests in coordination with our fulfillment support team.
              </li>
              <li>
                <strong className="text-foreground">Taxation Compliance:</strong> Ensure compliance with all Indian GST, income tax, and local commercial regulations applicable to your business revenue.
              </li>
            </ul>
          </div>

          <hr className="border-border/60" />

          {/* Section 5 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <Lock className="h-4 w-4" />
              <span>Section 5 • Intellectual Property &amp; Brand Usage</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              5. Intellectual Property Rights
            </h2>
            <p>
              All software, source code, UI elements, proprietary catalog curation methods, graphic themes, and brand assets
              associated with {BRAND} are the exclusive intellectual property of {BRAND}.
            </p>
            <p>
              Merchants retain full ownership of their own business trade name, custom logos, and independent domain branding.
              Third-party marketplace names (Amazon, Flipkart, Meesho, Shopify) are used strictly in a descriptive nominative
              capacity to identify integration compatibility.
            </p>
          </div>

          <hr className="border-border/60" />

          {/* Section 6 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <AlertTriangle className="h-4 w-4" />
              <span>Section 6 • Limitation of Liability</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              6. Limitation of Liability &amp; Disclaimers
            </h2>
            <p>
              To the maximum extent permitted by Indian law, {BRAND} provides its platform, catalog feeds, and software
              tools on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We do not warrant that platform operations will be
              uninterrupted or error-free during scheduled maintenance or third-party telecom outages.
            </p>
            <p>
              Under no circumstances shall {BRAND}, its founders, directors, or employees be liable for any indirect, incidental,
              special, or consequential damages (including loss of business profits or advertising expenditures) arising from
              third-party marketplace suspension, courier delays due to force majeure events, or changes in external marketplace
              algorithms.
            </p>
          </div>

          <hr className="border-border/60" />

          {/* Section 7 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <Scale className="h-4 w-4" />
              <span>Section 7 • Governing Law &amp; Jurisdiction</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              7. Governing Law, Dispute Resolution &amp; Jurisdiction
            </h2>
            <p>
              This Agreement shall be governed by, construed, and enforced in accordance with the substantive laws of the
              <strong className="text-foreground"> Republic of India</strong>, without regard to conflict of law principles.
            </p>
            <p>
              Any dispute, controversy, or claim arising out of or relating to this contract, including its formation or breach,
              shall first be resolved through good-faith mediation within thirty (30) days. In the event mediation fails, the
              matter shall be subject to the exclusive jurisdiction of the competent civil courts located in{" "}
              <strong className="text-foreground">Faridabad, Haryana, India</strong>.
            </p>
          </div>

          <hr className="border-border/60" />

          {/* Section 8 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <Mail className="h-4 w-4" />
              <span>Section 8 • Contact &amp; Grievance Redressal</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              8. Grievance Officer &amp; Communication Channels
            </h2>
            <p>
              In accordance with the Information Technology Act, 2000 and the Consumer Protection Rules, for any questions,
              legal inquiries, or grievance redressal, please contact our designated Grievance Officer:
            </p>
            <div className="surface-card p-5 rounded-2xl border border-primary/30 space-y-2 text-xs sm:text-sm">
              <p><strong className="text-foreground">Designated Officer:</strong> Legal &amp; Compliance Team, {BRAND}</p>
              <p><strong className="text-foreground">Email:</strong> <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary hover:underline">{CONTACT_INFO.email}</a></p>
              <p><strong className="text-foreground">Phone / WhatsApp:</strong> <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="text-primary hover:underline">{CONTACT_INFO.phone}</a></p>
              <p><strong className="text-foreground">Registered Office:</strong> {CONTACT_INFO.address}</p>
              <p><strong className="text-foreground">Working Hours:</strong> Mon–Sat, 10:00 AM – 7:00 PM IST</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 surface-card p-6 rounded-2xl border border-border/80 text-xs sm:text-sm">
          <span>Need assistance with your merchant subscription or service setup?</span>
          <div className="flex items-center gap-3">
            <Link to="/contact" className="text-primary font-semibold hover:underline">
              Contact Support
            </Link>
            <span>•</span>
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/refund-and-cancellation-policy" className="text-muted-foreground hover:text-foreground">
              Refund Policy
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
