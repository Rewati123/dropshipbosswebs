import ladiesBags from "@/assets/cat-ladies-bags.jpg";
import backpacks from "@/assets/cat-backpacks.jpg";
import electronics from "@/assets/cat-electronics.jpg";
import home from "@/assets/cat-home.jpg";
import beauty from "@/assets/cat-beauty.jpg";
import kids from "@/assets/cat-kids.jpg";

export const BRAND = "Dropship Boss";

export const CONTACT_INFO = {
  email: "support@dropshipboss.in",
  phone: "+91 95826 17055",
  phoneRaw: "919582617055",
  whatsappUrl:
    "https://wa.me/919582617055?text=Namaste%2C%20mujhe%20Dropship%20Boss%20ke%20bare%20me%20jaankari%20chahiye",
  instagram: "https://www.instagram.com/dropshipboss.in/",
  facebook: "https://www.facebook.com/dropshipboss.in",
  youtube: "https://www.youtube.com/@dropshipboss",
  timings: "Mon–Sat, 10am – 7pm IST",
  address:
    "Ekta Enclave Block A, Baba Surdas Colony, Near Balaji Hospital, Tilpat, Faridabad, Haryana 121003",
};

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/dropshipboss.in/",
  facebook: "https://www.facebook.com/dropshipboss.in",
  youtube: "https://www.youtube.com/@dropshipboss",
  whatsapp:
    "https://wa.me/919582617055?text=Namaste%2C%20mujhe%20Dropship%20Boss%20ke%20bare%20me%20jaankari%20chahiye",
  email: "mailto:support@dropshipboss.in",
};

export const ADDRESS = {
  line1: "Ekta Enclave Block A, Baba Surdas Colony",
  line2: "Near Balaji Hospital, Tilpat",
  city: "Faridabad",
  state: "Haryana",
  pincode: "121003",
  full: "Ekta Enclave Block A, Baba Surdas Colony, Near Balaji Hospital, Tilpat, Faridabad, Haryana 121003",
};

export const categories = [
  {
    slug: "ladies-bags",
    title: "Ladies Bags & Handbags",
    image: ladiesBags,
    tagline: "Tote bags, shoulder bags, sling purses & clutches",
    margin: "45-65%",
    products: "8,900+",
    blurb:
      "One of the highest-margin e-commerce categories in India. Direct manufacturer sourcing from Delhi & Mumbai bag clusters with trendy designs, premium PU leather, and rapid shipping.",
  },
  {
    slug: "backpacks",
    title: "Backpacks & Travel Bags",
    image: backpacks,
    tagline: "Laptop backpacks, college bags, travel rucksacks",
    margin: "35-55%",
    products: "6,400+",
    blurb:
      "High-demand year-round category with massive spikes during back-to-college and holiday seasons. Water-resistant fabrics, anti-theft designs, and durable wholesale pricing.",
  },
  {
    slug: "electronics",
    title: "Gadgets & Electronics",
    image: electronics,
    tagline: "Smartwatches, earbuds, accessories",
    margin: "20-40%",
    products: "6,800+",
    blurb:
      "High average order value with repeat buyers. Sourced from certified electronic suppliers with quality checks and replacement warranty.",
  },
  {
    slug: "home-kitchen",
    title: "Home & Kitchen",
    image: home,
    tagline: "Decor, storage, cookware essentials",
    margin: "30-50%",
    products: "9,100+",
    blurb:
      "Evergreen consumer demand with 3x festive sales spikes. Optimized packaging and localized warehouse dispatch for fragile items.",
  },
  {
    slug: "beauty",
    title: "Beauty & Personal Care",
    image: beauty,
    tagline: "Skincare, serums, personal grooming",
    margin: "40-65%",
    products: "4,300+",
    blurb:
      "Highest profit margin category with over 45% customer repeat rates. Certified brands and authentic beauty catalog.",
  },
  {
    slug: "kids",
    title: "Kids, Toys & Stationery",
    image: kids,
    tagline: "Educational toys, kits, stationery",
    margin: "35-60%",
    products: "5,600+",
    blurb:
      "Massive gifting season volume. Safety-tested materials, age-graded toy catalog, and low return thresholds.",
  },
];

export interface PlanCategoryGroup {
  category: string;
  items: string[];
}

export interface PlanItem {
  id: string;
  name: string;
  subtitle: string;
  originalPrice: string;
  price: string;
  discount: string;
  note: string;
  badge?: string;
  highlight: boolean;
  ctaText: string;
  features: string[];
  groupedFeatures: PlanCategoryGroup[];
}

export const plans: PlanItem[] = [
  {
    id: "starter",
    name: "Starter Setup",
    subtitle: "Ideal for beginners starting on Amazon or Meesho with zero upfront stock risk",
    originalPrice: "₹7,999",
    price: "₹2,999",
    discount: "Save 62% OFF",
    note: "One-time setup • Lifetime access • Zero monthly fees",
    badge: "Starter Choice",
    highlight: false,
    ctaText: "Get Started With Starter",
    features: [
      "1 marketplace seller setup (Amazon.in or Meesho)",
      "Curated 50 winning products catalog",
      "SEO listing title & bullet optimization",
      "Verified wholesale supplier directory",
      "Dedicated email seller support",
    ],
    groupedFeatures: [
      {
        category: "Marketplace & Store Setup",
        items: [
          "1 Marketplace seller onboarding (Amazon.in or Meesho)",
          "GST registration guidance & seller compliance setup",
          "Seller Central verification & category ungating assistance",
          "Standard brand storefront & catalog layout",
        ],
      },
      {
        category: "Product Sourcing & Catalog",
        items: [
          "Curated 50 high-margin winning products",
          "Surat & Delhi verified wholesale supplier contacts",
          "SEO-optimized listing titles, bullets & descriptions",
          "Pre-rendered high-res white background product images",
        ],
      },
      {
        category: "Fulfillment & Logistics",
        items: [
          "Zero-inventory dropship dispatch protocol",
          "Direct manufacturer shipping instructions",
          "Standard courier partner onboarding guide",
          "RTO return mitigation checklist",
        ],
      },
      {
        category: "Training & Mentorship",
        items: [
          "Step-by-step video seller masterclass access",
          "Dedicated email seller support (90 days)",
          "Monthly trending product release alerts",
          "Seller community forum access",
        ],
      },
    ],
  },
  {
    id: "growth",
    name: "Growth Automation",
    subtitle: "Complete multi-channel done-for-you e-commerce business on Shopify, Amazon & Meesho",
    originalPrice: "₹18,999",
    price: "₹7,499",
    discount: "Save 60% OFF",
    note: "One-time investment • Lifetime catalog & mentorship • Zero commissions",
    badge: "🔥 Most Popular • Best Value",
    highlight: true,
    ctaText: "Get Started With Growth",
    features: [
      "3 marketplace setups (Amazon, Meesho, Shopify/Flipkart)",
      "Done-for-you custom storefront design",
      "500+ winning products ready-to-import",
      "Automated order & dispatch coordination",
      "Weekly 1-on-1 e-commerce mentorship",
      "Meta & Google Ads starter playbook",
    ],
    groupedFeatures: [
      {
        category: "Marketplace & Store Setup",
        items: [
          "3 Channels: Shopify D2C Store + Amazon.in + Meesho onboarding",
          "Done-for-you premium custom responsive storefront theme",
          "Payment gateway integration (UPI, Cards, NetBanking, COD)",
          "Brand registry & category approvals handled by specialists",
        ],
      },
      {
        category: "Product Sourcing & Catalog",
        items: [
          "500+ Trending winning products with 35%–55% margins",
          "Direct factory tier wholesale pricing (Surat, Delhi, Ludhiana)",
          "1-Click automated bulk catalog import",
          "A+ Content and conversion-engineered product copy",
        ],
      },
      {
        category: "Fulfillment & Logistics",
        items: [
          "Automated cloud order sync to Indian supplier network",
          "Automated warehouse packing & QC check verification",
          "Pan-India courier tracking integration (Delhivery, BlueDart, Xpressbees)",
          "RTO reduction engine: Automated WhatsApp/IVR COD verification",
        ],
      },
      {
        category: "Training & Mentorship",
        items: [
          "Weekly 1-on-1 private video strategy calls with mentors",
          "High-ROAS Meta & Google Ads scaling playbook with creatives",
          "Priority WhatsApp seller support (Mon–Sat 10am–7pm IST)",
          "Lifetime continuous winning catalog updates",
        ],
      },
    ],
  },
  {
    id: "scale-pro",
    name: "Scale Pro VIP",
    subtitle: "For ambitious entrepreneurs scaling to ₹5L+ monthly revenue with dedicated account management",
    originalPrice: "₹34,999",
    price: "₹14,999",
    discount: "Save 57% OFF",
    note: "Full turnkey automation • Personal Account Manager • VIP Sourcing",
    badge: "👑 VIP Scale Master",
    highlight: false,
    ctaText: "Get Started With Scale Pro",
    features: [
      "Multi-marketplace + custom branded D2C store",
      "Dedicated personal account manager",
      "Full catalog access with live inventory sync",
      "Advanced ROAS & paid ad management guidance",
      "Priority wholesale supplier pricing",
      "24/7 VIP call & WhatsApp support",
    ],
    groupedFeatures: [
      {
        category: "Marketplace & Store Setup",
        items: [
          "Omnichannel launch: Shopify + Amazon + Meesho + Flipkart + Custom D2C",
          "Bespoke high-converting store architecture with custom domain & CDN",
          "Multi-currency & international marketplace export setup ready",
          "Full trademark guidance & Brand Registry acceleration",
        ],
      },
      {
        category: "Product Sourcing & Catalog",
        items: [
          "Uncapped access to 40,000+ verified factory catalog",
          "VIP wholesale tier pricing (maximum profit margin guarantee)",
          "Live inventory stock sync & automated price rules",
          "Private label branding & custom packaging options available",
        ],
      },
      {
        category: "Fulfillment & Logistics",
        items: [
          "100% Fully automated order fulfillment pipeline",
          "Priority warehouse dispatch queue with same-day order processing",
          "Advanced AI RTO suppression system (maintains returns under 5%)",
          "Automated replacement & NDR (Non-Delivery Report) management",
        ],
      },
      {
        category: "Training & Mentorship",
        items: [
          "Dedicated Personal Account Manager assigned to your store",
          "Advanced ad spend scaling & ROAS audits (Meta, Google, Amazon PPC)",
          "24/7 VIP call & WhatsApp seller hotline",
          "Exclusive Mastermind community & supplier factory visits",
        ],
      },
    ],
  },
];

export const steps = [
  {
    n: "01",
    title: "Choose Your Setup Plan",
    text: "Select the optimal package for your budget and target channels (Shopify, Amazon, Meesho). Free 1-on-1 consultation available.",
  },
  {
    n: "02",
    title: "Turnkey Store Launch",
    text: "Account registration, GST guidance, branded storefront design, and category approvals completed within 72 hours.",
  },
  {
    n: "03",
    title: "Import Winning Products",
    text: "Add high-margin, trending products to your store in one click with pre-optimized SEO titles, descriptions, and images.",
  },
  {
    n: "04",
    title: "Automated Order Fulfillment",
    text: "You focus on driving sales. Supplier networks handle packing, quality checks, courier dispatch, and RTO tracking.",
  },
];

export const faqs = [
  {
    q: "What is Dropship Boss and how does it work as a product fulfillment partner in India?",
    a: "Dropship Boss is India's premier e-commerce enablement and product fulfillment platform. We empower individuals, entrepreneurs, and existing retailers to start and scale an online selling business without holding inventory or renting warehouses. When a customer places an order on your Shopify store, Amazon, Flipkart, or Meesho, our verified Indian manufacturer and warehouse network automatically quality-checks, packs, and dispatches the parcel directly to your customer's doorstep with live tracking, while your net profit is credited directly to your account.",
  },
  {
    q: "Is prior e-commerce or technical experience required to start?",
    a: "Not at all. Over 80% of our successful sellers started with zero e-commerce background. Dropship Boss provides turnkey store setup, complete product catalog integration, automated inventory synchronization, and hands-on 1-on-1 mentorship. We handle the complex technical, sourcing, and operational workflows so you can focus on driving traffic and growing your profits.",
  },
  {
    q: "Do I need to buy inventory or maintain stock upfront?",
    a: "No. With our zero-inventory business model, you never purchase unsold stock or lock your capital into dead inventory. Our verified Indian suppliers hold tens of thousands of units across trending categories. You only pay the wholesale product cost after your customer places an order and pays for it.",
  },
  {
    q: "How much can an online seller earn with Dropship Boss in India?",
    a: "Seller earnings depend on product selection, marketing consistency, and order volume. On average, active sellers on our platform achieve net profit margins between 30% and 55% per order, with typical monthly take-home profits ranging from ₹35,000 to ₹2,50,000+. Top-performing sellers scaling winning seasonal products on Meta ads and Amazon frequently exceed ₹5,00,000+ in monthly revenue.",
  },
  {
    q: "Is e-commerce selling and dropshipping profitable in India in 2026?",
    a: "Yes, e-commerce selling in India is booming with rapid digital adoption, UPI penetration, and massive consumer demand across Tier 2, Tier 3, and Tier 4 cities. Because Dropship Boss eliminates warehouse leases, dead stock risk, and high employee payroll, your operational overhead remains near zero, allowing you to run a highly profitable business from home.",
  },
  {
    q: "How to start an online selling business in India in 6 simple steps?",
    a: "You can launch your automated e-commerce business in 6 simple steps: (1) Choose your high-demand niche from our vetted winning catalog; (2) Complete your business registration and GST setup with our compliance assistance; (3) Build your turnkey branded storefront on Shopify or onboard your seller accounts on Amazon, Flipkart, and Meesho; (4) Sync verified supplier listings, optimized product images, and high-converting descriptions; (5) Launch targeted ad campaigns and organic social channels using our marketing playbooks; (6) Automate courier dispatch across 19,000+ pin codes and collect your profit payouts.",
  },
  {
    q: "Are e-commerce selling and dropshipping companies legal in India?",
    a: "Yes, e-commerce selling is 100% legal and recognized by the Government of India. The business model operates under the Consumer Protection (E-Commerce) Rules, 2020, and the Information Technology Act. Dropship Boss assists sellers with proper GST compliance, transparent B2B tax invoicing, and authentic domestic manufacturer sourcing.",
  },
  {
    q: "Online selling business kya hai aur bina inventory ke kaise shuru karein?",
    a: "Online selling business bina inventory ek modern digital retail model hai, jise dropshipping ya automated fulfillment kaha jata hai. Isme aapko koi dukan ya godown (warehouse) lene ki zaroorat nahi hoti. Dropship Boss aapke liye Amazon, Flipkart, Meesho ya Shopify par turnkey store banata hai, trending aur verified products list karta hai, aur order aane par supplier direct customer ke ghar parcel deliver kar deta hai. Net profit seedha aapke bank account me transfer hota hai.",
  },
  {
    q: "Can I earn 1 lakh per month from e-commerce selling in India?",
    a: "Yes, earning ₹1,00,000 or more per month from e-commerce selling is very achievable with a consistent strategy. It typically requires selling 8 to 15 orders per day with an average net profit of ₹300 to ₹500 per item. By focusing on validated winning products, optimizing ad spend, and controlling return-to-origin (RTO) rates with our automated systems, our active sellers regularly cross this milestone within 60 to 90 days.",
  },
  {
    q: "Why do 90% of beginner online sellers fail, and how does Dropship Boss protect you?",
    a: "Most independent sellers fail due to 4 critical traps: picking low-demand products without data, unverified suppliers delivering defective goods, massive Cash on Delivery (COD) return-to-origin (RTO) losses, and wasting budgets on unfocused ads. Dropship Boss solves all four: we provide pre-vetted winning products with 35%+ margins, 100% QC-checked Indian manufacturers, automated OTP-based COD verification to slash RTO below 12%, and 1-on-1 ad optimization mentorship.",
  },
  {
    q: "What is the best platform and app to start selling online in India?",
    a: "The best e-commerce enablement platform is one that provides end-to-end integration: verified domestic product sourcing, automated order routing, multi-marketplace sync (Amazon, Flipkart, Meesho, Shopify), low courier rates, and live human mentorship. Dropship Boss offers an all-in-one ecosystem designed specifically for the Indian market, backed by domestic warehouses in Delhi NCR, Surat, and Mumbai.",
  },
  {
    q: "What are some trending sourced products and winning catalogs in India?",
    a: "Top-performing categories with rapid sales velocity and healthy 40% to 65% profit margins include: Ladies Bags & Clutches, Laptop Backpacks & Travel Gear, Viral Consumer Electronics & Smart Gadgets, Home Decor & Kitchen Organizers, Beauty & Ayurvedic Wellness Essentials, and Kids Educational Toys. All items in our catalog are sourced directly from verified Indian factories.",
  },
  {
    q: "Can I sell on Amazon India, Flipkart, and Meesho simultaneously?",
    a: "Yes! Dropship Boss is built for omnichannel e-commerce selling. You can list your curated catalog across Amazon.in, Flipkart, Meesho, and your dedicated Shopify D2C store at the same time. Our cloud fulfillment engine centralizes order routing and stock levels so you avoid overselling and stockouts.",
  },
  {
    q: "How many e-commerce enablement platforms operate in India and how is Dropship Boss different?",
    a: "While there are several platforms and directories in India, most either charge high recurring software fees, take heavy commission cuts on your sales, or rely on slow international suppliers. Dropship Boss is different: we provide 100% verified domestic Indian manufacturers, zero sales commission, turnkey 72-hour store launch, and dedicated 1-on-1 human mentorship from real e-commerce specialists.",
  },
];

export const testimonials = [
  {
    name: "Ritika Sharma",
    city: "Jaipur",
    text: "Started with zero experience, now consistently processing 40-50 orders every month on Meesho. The turnkey setup team delivered everything ready from day one.",
  },
  {
    name: "Aman Verma",
    city: "Lucknow",
    text: "Wanted a reliable secondary income alongside my job. Crossed ₹1 Lakh in sales within 3 months, and the automated dispatch handled every single order seamlessly.",
  },
  {
    name: "Sandeep Nair",
    city: "Kochi",
    text: "Product research was the most challenging part. Using their curated catalog and margin data, finding validated winning products was instant.",
  },
  {
    name: "Pooja Deshmukh",
    city: "Pune",
    text: "Built my own D2C brand, ran targeted ads, and maintained returns below 5%. The 1-on-1 mentor strategy sessions are game changers.",
  },
];

export const stats = [
  { value: "1,000+", label: "Stores launched" },
  { value: "₹5Cr+", label: "Seller revenue generated" },
  { value: "4.8/5", label: "Average seller rating" },
  { value: "24/7", label: "Dedicated human support" },
];
