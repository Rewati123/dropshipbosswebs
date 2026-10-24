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
  period: string;
  discount: string;
  note: string;
  badge?: string;
  highlight: boolean;
  ctaText: string;
  categoryTag: "social" | "marketplace" | "website" | "monthly";
  features: string[];
  groupedFeatures: PlanCategoryGroup[];
}

export const plans: PlanItem[] = [
  {
    id: "silver",
    name: "Silver Plan",
    subtitle:
      "Ideal for beginners starting low-risk social commerce and reselling on WhatsApp",
    originalPrice: "₹1,000",
    price: "₹590",
    period: "/ year",
    discount: "Save 41% OFF",
    note: "Limited Time Offer • 12 Months Platform Access",
    badge: "Starter Favorite",
    highlight: false,
    categoryTag: "social",
    ctaText: "Subscribe to Silver",
    features: [
      "12 Months full platform & catalog access",
      "Get 20 new winning products every month",
      "Access to exclusive WhatsApp seller community",
      "Share & sell products directly on WhatsApp",
      "Low-risk, 100% zero-inventory business model",
      "No advance product purchase or stock required",
      "Shipping & delivery managed by our team",
    ],
    groupedFeatures: [
      {
        category: "Catalog & Sourcing",
        items: [
          "20 new curated winning products every month",
          "Instant high-res product photos & descriptions",
          "Zero inventory stock purchase needed",
        ],
      },
      {
        category: "Selling Channels",
        items: [
          "Direct sharing on WhatsApp & social groups",
          "Pre-set profit margins with zero financial risk",
          "No technical store setup required",
        ],
      },
      {
        category: "Logistics & Support",
        items: [
          "End-to-end packaging and delivery handled",
          "Exclusive WhatsApp seller community access",
          "12 Months full platform validity",
        ],
      },
    ],
  },
  {
    id: "gold",
    name: "Gold Plan",
    subtitle:
      "Start selling on WhatsApp, Instagram & Facebook with 40 curated winning products monthly",
    originalPrice: "₹3,000",
    price: "₹1,590",
    period: "/ year",
    discount: "Save 47% OFF",
    note: "Limited Time Offer • 40 Products Monthly",
    badge: "🔥 Top Social Commerce",
    highlight: true,
    categoryTag: "social",
    ctaText: "Subscribe to Gold",
    features: [
      "Get 40 new winning products every month",
      "Includes all Silver Plan platform bonuses",
      "Start business on WhatsApp, Instagram & Facebook",
      "Access to exclusive community support & mentorship",
      "Low-risk, 100% zero-inventory model",
      "No product purchase or advance capital required",
      "We handle complete packaging, shipping & delivery",
    ],
    groupedFeatures: [
      {
        category: "Catalog & Sourcing",
        items: [
          "40 high-margin products every month",
          "Access to verified Surat & Delhi supplier catalogs",
          "High-res promotional marketing creatives",
        ],
      },
      {
        category: "Selling Channels",
        items: [
          "Multi-channel social selling (Instagram, Facebook, WhatsApp)",
          "Social ad creatives & product hook templates",
          "Direct profit payouts on every order",
        ],
      },
      {
        category: "Logistics & Support",
        items: [
          "Fast pan-India courier delivery managed by our team",
          "Priority community support hotline",
          "12 Months validity with zero hidden fees",
        ],
      },
    ],
  },
  {
    id: "titanium",
    name: "Titanium Plan",
    subtitle:
      "Flexible monthly subscription for sellers testing product velocity with zero lock-in",
    originalPrice: "₹1,699",
    price: "₹899",
    period: "/ month",
    discount: "Save 47% OFF",
    note: "Monthly Flexibility • Cancel Anytime",
    badge: "Monthly Flex",
    highlight: false,
    categoryTag: "monthly",
    ctaText: "Subscribe to Titanium",
    features: [
      "Access to 40 trending winning products every month",
      "Direct access through the Dropship Boss seller panel",
      "A 100% zero-inventory automated selling model",
      "No requirement to purchase product stock in advance",
      "Live catalog stock sync & wholesale pricing rules",
      "Pay-as-you-go monthly freedom",
      "Automated courier dispatch & real-time tracking",
    ],
    groupedFeatures: [
      {
        category: "Catalog & Sourcing",
        items: [
          "Access to 40 curated products per month",
          "Dropship Boss cloud seller panel access",
          "Real-time stock availability & pricing",
        ],
      },
      {
        category: "Selling & Flexibility",
        items: [
          "Pay-as-you-go monthly freedom without annual lock-in",
          "Multi-platform export ready catalog",
          "Zero inventory stock requirement",
        ],
      },
      {
        category: "Logistics & Support",
        items: [
          "Automated warehouse dispatch across 19,000+ pin codes",
          "Real-time SMS tracking updates for buyers",
          "Standard email & chat assistance",
        ],
      },
    ],
  },
  {
    id: "platinum",
    name: "Platinum Plan",
    subtitle:
      "Start selling on Amazon.in, Flipkart & Meesho with 40 monthly products listed on your panel",
    originalPrice: "₹10,000",
    price: "₹5,000",
    period: "/ year",
    discount: "Save 50% OFF",
    note: "Limited Time Offer • Indian Marketplaces",
    badge: "⭐ Amazon & Flipkart Choice",
    highlight: true,
    categoryTag: "marketplace",
    ctaText: "Subscribe to Platinum",
    features: [
      "Start selling online on Amazon.in, Flipkart & Meesho",
      "40 New products listed every month on your seller panel",
      "Seller Central onboarding, GST category & ungating support",
      "SEO-optimized titles, bullet points & high-CTR imagery",
      "Low-risk, 100% zero-inventory business model",
      "No product purchase or warehouse storage required",
      "We handle quality inspection, packaging & delivery",
    ],
    groupedFeatures: [
      {
        category: "Marketplace Enablement",
        items: [
          "Amazon.in, Flipkart & Meesho seller account setup",
          "Brand authorization & category ungating guidance",
          "Seller Central verification assistance",
        ],
      },
      {
        category: "Catalog & Optimization",
        items: [
          "40 new products listed monthly on your seller panel",
          "Keyword-rich listing titles, bullets & backend tags",
          "Pre-negotiated wholesale profit margins (35%-55%)",
        ],
      },
      {
        category: "Automated Fulfillment",
        items: [
          "Direct cloud dispatch to Indian verified suppliers",
          "Strict QC check & custom packaging within 24-48 hours",
          "Automated RTO reduction SOPs & courier tracking",
        ],
      },
    ],
  },
  {
    id: "platinum-plus",
    name: "Platinum Plus",
    subtitle:
      "Sell globally on Amazon.com & international marketplaces with export fulfillment handled by us",
    originalPrice: "₹16,000",
    price: "₹8,000",
    period: "/ year",
    discount: "Save 50% OFF",
    note: "Limited Time Offer • Cross-Border Export",
    badge: "🌍 Global Amazon.com",
    highlight: false,
    categoryTag: "marketplace",
    ctaText: "Subscribe to Platinum Plus",
    features: [
      "Start selling online on Amazon.com (USA & Global)",
      "40 Global winning products listed monthly on your seller panel",
      "Cross-border seller registration & compliance guidance",
      "Low-risk, 100% zero-inventory export model",
      "No upfront product purchase or stock required",
      "Earn high profit margins in foreign currency (USD)",
      "Worldwide shipping handled by our logistics team",
    ],
    groupedFeatures: [
      {
        category: "Global Marketplaces",
        items: [
          "Amazon.com US & Global seller registration guidance",
          "International payment gateway & USD payout setup",
          "US keyword optimization & competitor research",
        ],
      },
      {
        category: "Export Sourcing",
        items: [
          "40 export-grade winning products listed monthly",
          "High USD margins (50%+ gross margin potential)",
          "International packaging & safety compliance",
        ],
      },
      {
        category: "Cross-Border Logistics",
        items: [
          "Worldwide shipping handled by our logistics team",
          "Export customs clearance & air courier coordination",
          "Dedicated international e-commerce specialist support",
        ],
      },
    ],
  },
  {
    id: "elite",
    name: "Elite Plan",
    subtitle:
      "Advanced multi-marketplace power seller setup with priority sourcing and dedicated VIP support",
    originalPrice: "₹20,000",
    price: "₹10,000",
    period: "/ year",
    discount: "Save 50% OFF",
    note: "Limited Time Offer • VIP Multi-Marketplace",
    badge: "👑 Elite Seller",
    highlight: false,
    categoryTag: "marketplace",
    ctaText: "Subscribe to Elite",
    features: [
      "Access to 40+ high-velocity products per month",
      "Direct access to products through the Dropship Boss seller panel",
      "Multi-marketplace automation (Amazon, Flipkart, Meesho)",
      "A 100% zero-inventory reselling model",
      "No requirement to purchase products before starting to sell",
      "Priority factory wholesale pricing from Surat & Delhi",
      "Dedicated VIP mentorship & weekly 1-on-1 strategy reviews",
    ],
    groupedFeatures: [
      {
        category: "Omnichannel Power",
        items: [
          "Multi-account synchronization across Amazon, Flipkart, Meesho",
          "Automated stock sync preventing out-of-stock penalties",
          "Enhanced A+ Brand Content & catalog architecture",
        ],
      },
      {
        category: "VIP Sourcing",
        items: [
          "40+ top-tier winning products added monthly",
          "First access to viral trending seasonal catalogs",
          "Direct factory wholesale pricing tiers",
        ],
      },
      {
        category: "Priority Fulfillment & Support",
        items: [
          "Priority warehouse queue with same-day order processing",
          "Dedicated account mentor with weekly review calls",
          "Direct 24/7 VIP hotline & WhatsApp support",
        ],
      },
    ],
  },
  {
    id: "diamond",
    name: "Diamond Plan",
    subtitle:
      "Complete turnkey e-commerce website setup — launch your own branded store with 100% automated fulfillment",
    originalPrice: "₹30,000",
    price: "₹15,000",
    period: "/ year",
    discount: "Save 50% OFF",
    note: "Limited Time Offer • Branded Store + Fulfillment",
    badge: "💎 Turnkey Branded Website",
    highlight: true,
    categoryTag: "website",
    ctaText: "Subscribe to Diamond",
    features: [
      "Complete e-commerce website setup with custom domain",
      "Mobile-friendly, ultra-fast responsive website design",
      "40 New winning products listed monthly on your seller panel",
      "Ready-to-use turnkey store structure delivered in 72 hours",
      "Integrated payment gateway (UPI, Cards, NetBanking & COD)",
      "Low-risk, 100% zero-inventory business model",
      "No product purchase required before selling",
      "Shipping and delivery managed by our team",
    ],
    groupedFeatures: [
      {
        category: "Turnkey D2C Website",
        items: [
          "Complete branded e-commerce website on custom domain",
          "Conversion-optimized mobile-first design theme",
          "Payment gateway integration (UPI, QR, Cards, COD)",
          "Meta Pixel & Google Analytics tracking integration",
        ],
      },
      {
        category: "Catalog & Sourcing",
        items: [
          "40 new trending winning products pre-loaded monthly",
          "Ready-to-use product descriptions, lifestyle photos & reviews",
          "Zero upfront product stock required",
        ],
      },
      {
        category: "Automated Logistics & Mentorship",
        items: [
          "End-to-end warehouse packaging & courier delivery",
          "Automated WhatsApp COD verification to slash RTO (< 10%)",
          "1-on-1 scaling mentorship & paid ads playbook",
          "12 Months complete platform & website maintenance",
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
    q: "Is e-commerce selling with zero-inventory fulfillment profitable in India in 2026?",
    a: "Yes, e-commerce selling in India is booming with rapid digital adoption, UPI penetration, and massive consumer demand across Tier 2, Tier 3, and Tier 4 cities. Because Dropship Boss eliminates warehouse leases, dead stock risk, and high employee payroll, your operational overhead remains near zero, allowing you to run a highly profitable business from home.",
  },
  {
    q: "How to start an online selling business in India in 6 simple steps?",
    a: "You can launch your automated e-commerce business in 6 simple steps: (1) Choose your high-demand niche from our vetted winning catalog; (2) Complete your business registration and GST setup with our compliance assistance; (3) Build your turnkey branded storefront on Shopify or onboard your seller accounts on Amazon, Flipkart, and Meesho; (4) Sync verified supplier listings, optimized product images, and high-converting descriptions; (5) Launch targeted ad campaigns and organic social channels using our marketing playbooks; (6) Automate courier dispatch across 19,000+ pin codes and collect your profit payouts.",
  },
  {
    q: "Are zero-inventory e-commerce selling and product fulfillment platforms legal in India?",
    a: "Yes, e-commerce selling is 100% legal and recognized by the Government of India. The business model operates under the Consumer Protection (E-Commerce) Rules, 2020, and the Information Technology Act. Dropship Boss assists sellers with proper GST compliance, transparent B2B tax invoicing, and authentic domestic manufacturer sourcing.",
  },
  {
    q: "Online selling business kya hai aur bina inventory ke kaise shuru karein?",
    a: "Online selling business bina inventory ek modern digital retail model hai, jise zero-inventory product fulfillment ya automated fulfillment kaha jata hai. Isme aapko koi dukan ya godown (warehouse) lene ki zaroorat nahi hoti. Dropship Boss aapke liye Amazon, Flipkart, Meesho ya Shopify par turnkey store banata hai, trending aur verified products list karta hai, aur order aane par verified domestic supplier direct customer ke ghar parcel deliver kar deta hai. Net profit seedha aapke bank account me transfer hota hai.",
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
