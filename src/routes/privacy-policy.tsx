import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  UserCheck,
  FileText,
  Mail,
  Phone,
  Server,
  Globe2,
  CheckCircle2,
} from "lucide-react";
import { PageHero, Section } from "@/components/PageShell";
import { BRAND, CONTACT_INFO } from "@/lib/site-data";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      {
        title: "Privacy Policy | Dropship Boss — Information Security & SPDI Compliance",
      },
      {
        name: "description",
        content:
          "Official Privacy Policy of Dropship Boss in compliance with the Information Technology Act 2000 and SPDI Rules 2011. Learn how your data is protected.",
      },
      {
        name: "keywords",
        content:
          "privacy policy, dropship boss privacy, data protection India, IT Act compliance, SPDI rules 2011, ecommerce privacy policy, Dropship Boss",
      },
      {
        property: "og:title",
        content: "Privacy Policy — Dropship Boss India",
      },
      {
        property: "og:description",
        content:
          "Comprehensive information on data collection, storage, courier integration, and merchant security standards at Dropship Boss.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  const lastUpdated = "October 24, 2026";

  const trustPillars = [
    {
      icon: Lock,
      title: "256-Bit SSL Encryption",
      text: "All merchant credentials and connected API data are encrypted in transit and at rest.",
    },
    {
      icon: Eye,
      title: "Zero Third-Party Ad Selling",
      text: "We never monetize, rent, or sell your customer order data to third-party ad brokers.",
    },
    {
      icon: Database,
      title: "Strict Courier Routing Only",
      text: "Customer delivery addresses are transmitted solely to certified couriers for package dispatch.",
    },
    {
      icon: ShieldCheck,
      title: "Indian SPDI Compliance",
      text: "Operates in full compliance with the Information Technology (SPDI) Rules, 2011.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Data Protection & Privacy"
        title={
          <>
            Privacy <span className="gradient-text">Policy</span>
          </>
        }
        subtitle={`How Dropship Boss safeguards your merchant information and customer order data. Effective Date: ${lastUpdated}.`}
      />

      <Section>
        {/* Trust Badges */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {trustPillars.map((pillar, idx) => (
            <div key={idx} className="surface-card p-5 rounded-2xl border border-border/80">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                <pillar.icon className="h-5 w-5" />
              </span>
              <h3 className="text-sm font-bold text-foreground">{pillar.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{pillar.text}</p>
            </div>
          ))}
        </div>

        {/* Policy Body */}
        <div className="surface-card p-6 sm:p-10 rounded-3xl border border-border/80 space-y-8 text-sm sm:text-base leading-relaxed text-muted-foreground">
          {/* Section 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <FileText className="h-4 w-4" />
              <span>Section 1 • Introduction &amp; Applicability</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              1. Overview &amp; Privacy Commitment
            </h2>
            <p>
              <strong className="text-foreground">{BRAND}</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to
              protecting the personal privacy and confidential business information of our merchants, sellers, website
              visitors, and their retail end-customers.
            </p>
            <p>
              This Privacy Policy explains how we collect, store, process, transfer, and safeguard information when you
              use our e-commerce enablement platform, catalog feeds, and fulfillment services at{" "}
              <a href="https://dropshipboss.in" className="text-primary hover:underline">
                https://dropshipboss.in
              </a>
              . This policy adheres to the Information Technology Act, 2000, the Information Technology (Reasonable Security
              Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (&quot;SPDI Rules&quot;), and the
              Digital Personal Data Protection Act, 2023.
            </p>
          </div>

          <hr className="border-border/60" />

          {/* Section 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <Database className="h-4 w-4" />
              <span>Section 2 • Information We Collect</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              2. Categories of Information Collected
            </h2>
            <p>We collect information strictly necessary to provide B2B seller enablement and order fulfillment services:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground">Merchant Account Information:</strong> Full name, company/trading name, email address, phone number, registered billing address, and government tax identifiers (GSTIN, PAN) when required for invoicing and marketplace account setup.
              </li>
              <li>
                <strong className="text-foreground">Fulfillment &amp; Order Data:</strong> When orders are placed on your connected storefront (Shopify, Amazon, Flipkart, Meesho), our system receives buyer delivery information — recipient name, complete delivery address, postal pin code, contact phone number, and SKU details — purely to generate courier shipping labels and manage dispatch.
              </li>
              <li>
                <strong className="text-foreground">Financial &amp; Payout Data:</strong> Bank account number, IFSC code, and UPI ID provided by the merchant for net profit margin payouts and subscription billing. We do NOT store complete debit/credit card numbers or CVVs; all payment processing is handled securely by RBI-licensed payment aggregators.
              </li>
              <li>
                <strong className="text-foreground">Technical &amp; Log Information:</strong> IP address, browser type, operating system, and session timestamps used to detect fraudulent activity, unauthorized logins, and ensure network stability.
              </li>
            </ul>
          </div>

          <hr className="border-border/60" />

          {/* Section 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <Server className="h-4 w-4" />
              <span>Section 3 • Purpose of Data Processing</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              3. How We Use Collected Information
            </h2>
            <p>We utilize the collected information strictly for legitimate commercial and operational purposes, including:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Configuring and provisioning your turnkey e-commerce store and seller panel access.</li>
              <li>Routing customer orders to verified domestic manufacturing partners for quality check and packing.</li>
              <li>Generating Waybills (AWBs) with certified courier partners (Delhivery, Blue Dart, DTDC) for doorstep delivery.</li>
              <li>Sending automated SMS and WhatsApp tracking notifications to buyers to reduce Cash on Delivery (COD) RTO rates.</li>
              <li>Settling weekly net profit payouts directly to the merchant&apos;s verified bank account.</li>
              <li>Providing responsive customer support, technical troubleshooting, and mentorship guidance.</li>
              <li>Complying with statutory accounting, GST reporting, and tax audit obligations under Indian law.</li>
            </ul>
          </div>

          <hr className="border-border/60" />

          {/* Section 4 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <Globe2 className="h-4 w-4" />
              <span>Section 4 • Data Sharing &amp; Third-Party Disclosures</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              4. Sharing With Authorized Third-Party Partners
            </h2>
            <p>
              We do not sell, rent, or trade personal data. Information is shared only with vetted third-party service
              providers who are bound by strict contractual non-disclosure agreements:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground">Logistics &amp; Courier Aggregators:</strong> Recipient delivery name, shipping address, and phone number are shared with logistics partners (e.g. Delhivery, Blue Dart, DTDC, Shiprocket) solely for the physical transit of goods.
              </li>
              <li>
                <strong className="text-foreground">Verified Domestic Manufacturers:</strong> Product SKU, quantity, and packaging specifications are routed to our partner production hubs in Delhi NCR, Surat, and Mumbai.
              </li>
              <li>
                <strong className="text-foreground">Payment Gateways:</strong> Subscription payments and merchant payouts are securely processed via PCI-DSS compliant payment gateways (Razorpay, Cashfree).
              </li>
              <li>
                <strong className="text-foreground">Legal &amp; Law Enforcement:</strong> We may disclose data if required to do so by applicable Indian law, court summons, or official regulatory mandate.
              </li>
            </ul>
          </div>

          <hr className="border-border/60" />

          {/* Section 5 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <Lock className="h-4 w-4" />
              <span>Section 5 • Information Security Standards</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              5. Data Security &amp; Retention Protocols
            </h2>
            <p>
              {BRAND} implements reasonable security practices and procedures conforming to international standards (ISO/IEC
              27001 equivalents) to protect against unauthorized access, loss, alteration, or misuse:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>End-to-end SSL/TLS 256-bit cryptographic encryption on all web and API endpoints.</li>
              <li>Strict role-based access control (RBAC) limiting employee access strictly to operational requirements.</li>
              <li>Automated database backups hosted in high-security domestic Indian cloud data centers.</li>
              <li>Order data is retained only for the duration required to complete warranty, replacement, and statutory tax audits (typically 5 to 7 years in compliance with the Companies Act and GST rules).</li>
            </ul>
          </div>

          <hr className="border-border/60" />

          {/* Section 6 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <UserCheck className="h-4 w-4" />
              <span>Section 6 • Merchant Data Rights</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              6. Your Privacy Rights &amp; Choices
            </h2>
            <p>Under Indian data protection laws, merchants maintain the following rights:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li><strong className="text-foreground">Right of Access:</strong> Request a summary of your personal account data stored in our system.</li>
              <li><strong className="text-foreground">Right of Correction:</strong> Update or rectify incomplete or inaccurate contact, billing, or banking details.</li>
              <li><strong className="text-foreground">Right of Erasure:</strong> Request account closure and deletion of personal data, subject to statutory tax retention guidelines.</li>
              <li><strong className="text-foreground">Opt-Out of Promotional Alerts:</strong> Unsubscribe from marketing newsletters at any time via the opt-out link in our emails.</li>
            </ul>
          </div>

          <hr className="border-border/60" />

          {/* Section 7 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <Mail className="h-4 w-4" />
              <span>Section 7 • Grievance Officer &amp; Inquiries</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              7. Grievance Redressal Officer
            </h2>
            <p>
              In accordance with Rule 5(9) of the Information Technology (SPDI) Rules, 2011, the details of our designated
              Grievance Officer are as follows:
            </p>
            <div className="surface-card p-5 rounded-2xl border border-primary/30 space-y-2 text-xs sm:text-sm">
              <p><strong className="text-foreground">Grievance Officer:</strong> Compliance &amp; Data Privacy Officer, {BRAND}</p>
              <p><strong className="text-foreground">Email:</strong> <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary hover:underline">{CONTACT_INFO.email}</a></p>
              <p><strong className="text-foreground">Telephone:</strong> <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="text-primary hover:underline">{CONTACT_INFO.phone}</a></p>
              <p><strong className="text-foreground">Address:</strong> {CONTACT_INFO.address}</p>
              <p><strong className="text-foreground">Resolution SLA:</strong> All privacy grievances are acknowledged within 48 hours and resolved within 30 days.</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 surface-card p-6 rounded-2xl border border-border/80 text-xs sm:text-sm">
          <span>Have questions regarding our security protocols or your account data?</span>
          <div className="flex items-center gap-3">
            <Link to="/contact" className="text-primary font-semibold hover:underline">
              Contact Privacy Team
            </Link>
            <span>•</span>
            <Link to="/terms-and-conditions" className="text-muted-foreground hover:text-foreground">
              Terms &amp; Conditions
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
