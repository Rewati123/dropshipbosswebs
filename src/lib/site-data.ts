import fashion from "@/assets/cat-fashion.jpg";
import electronics from "@/assets/cat-electronics.jpg";
import home from "@/assets/cat-home.jpg";
import beauty from "@/assets/cat-beauty.jpg";
import kids from "@/assets/cat-kids.jpg";
import fitness from "@/assets/cat-fitness.jpg";

export const BRAND = "Dropship Boss";

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
    slug: "fashion",
    title: "Fashion & Apparel",
    image: fashion,
    tagline: "Kurti, shirts, ethnic wear",
    margin: "35-55%",
    products: "12,400+",
    blurb:
      "Sabse fast moving category. Trending styles har hafte update hote hain, low return supplier list ke saath.",
  },
  {
    slug: "electronics",
    title: "Gadgets & Electronics",
    image: electronics,
    tagline: "Earbuds, smartwatch, power banks",
    margin: "20-40%",
    products: "6,800+",
    blurb:
      "High ticket size aur repeat customers. Warranty-backed suppliers aur QC checked inventory.",
  },
  {
    slug: "home-kitchen",
    title: "Home & Kitchen",
    image: home,
    tagline: "Decor, storage, kitchenware",
    margin: "30-50%",
    products: "9,100+",
    blurb:
      "Evergreen demand, festive season me 3x spike. Bulky items ke liye local warehouse dispatch.",
  },
  {
    slug: "beauty",
    title: "Beauty & Personal Care",
    image: beauty,
    tagline: "Skincare, serum, grooming",
    margin: "40-65%",
    products: "4,300+",
    blurb:
      "Sabse best margin category with highest repeat rate. Sirf certified brands list karte hain.",
  },
  {
    slug: "kids",
    title: "Kids, Toys & Stationery",
    image: kids,
    tagline: "Toys, art kits, school items",
    margin: "35-60%",
    products: "5,600+",
    blurb:
      "Gifting season me demand double. Safe material aur age-graded product catalog.",
  },
  {
    slug: "fitness",
    title: "Fitness & Sports",
    image: fitness,
    tagline: "Dumbbells, mats, bands",
    margin: "25-45%",
    products: "3,200+",
    blurb:
      "New year aur summer me massive demand. Heavy items ke liye subsidised shipping slabs.",
  },
];

export const plans = [
  {
    name: "Starter",
    price: "₹2,999",
    note: "Ek baar, lifetime access",
    highlight: false,
    features: [
      "1 marketplace account setup",
      "Winning product list (50 items)",
      "Basic listing optimisation",
      "Supplier directory access",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "₹7,499",
    note: "Sabse popular choice",
    highlight: true,
    features: [
      "3 marketplace setups (Amazon, Meesho, Flipkart)",
      "Done-for-you store design",
      "500+ winning products catalog",
      "Order & dispatch coordination",
      "Weekly 1-on-1 mentorship call",
      "Ads starter playbook",
    ],
  },
  {
    name: "Scale Pro",
    price: "₹14,999",
    note: "Serious sellers ke liye",
    highlight: false,
    features: [
      "Unlimited marketplace + own D2C store",
      "Dedicated account manager",
      "Full catalog + auto price sync sheet",
      "Ads management guidance",
      "Priority supplier rates",
      "Lifetime support on call",
    ],
  },
];

export const steps = [
  {
    n: "01",
    title: "Plan choose karein",
    text: "Apne budget aur target marketplace ke hisaab se package select karein. Free consultation call bhi le sakte hain.",
  },
  {
    n: "02",
    title: "Store setup ho jata hai",
    text: "Account registration, GST guidance, branding aur listing — sab hamari team 72 ghante me complete karti hai.",
  },
  {
    n: "03",
    title: "Products import karein",
    text: "Curated catalog se ek click me products apne store me add karein. Price aur stock auto-suggest ho jate hain.",
  },
  {
    n: "04",
    title: "Order aaye, hum dispatch karein",
    text: "Aap sirf marketing pe focus karein. Packing, labeling aur courier pickup supplier network handle karta hai.",
  },
];

export const faqs = [
  {
    q: "Kya mujhe pehle se koi experience chahiye?",
    a: "Bilkul nahi. 70% members bilkul zero experience se shuru karte hain. Har step ke liye recorded walkthrough aur live support milta hai.",
  },
  {
    q: "Kya GST number zaroori hai?",
    a: "Amazon aur Flipkart pe zyada categories ke liye GST chahiye. Meesho aur own store pe bina GST ke bhi shuru kar sakte hain — hum guide karte hain.",
  },
  {
    q: "Inventory khareedni padegi?",
    a: "Nahi. Dropshipping model me order aane ke baad supplier direct customer ko dispatch karta hai, isliye upfront stock cost zero hai.",
  },
  {
    q: "Payment kab milta hai?",
    a: "Marketplace ke settlement cycle par depend karta hai — aam taur par 7 se 15 din. Own store pe payment gateway se 2-3 din me.",
  },
  {
    q: "Support kitne time tak milta hai?",
    a: "Growth aur Scale Pro plan me lifetime support hai. Starter plan me 90 din ka email support included hai.",
  },
];

export const testimonials = [
  {
    name: "Ritika Sharma",
    city: "Jaipur",
    text: "Housewife thi, ab har mahine 40-50 orders Meesho se aate hain. Setup team ne sab kuch ready karke diya.",
  },
  {
    name: "Aman Verma",
    city: "Lucknow",
    text: "Job ke saath side income ka plan tha. 3 mahine me pehla ₹1L revenue cross ho gaya, dispatch ka jhanjhat zero.",
  },
  {
    name: "Sandeep Nair",
    city: "Kochi",
    text: "Product research sabse mushkil part tha. Inka catalog aur margin data use karke winning items jaldi mil gaye.",
  },
  {
    name: "Pooja Deshmukh",
    city: "Pune",
    text: "Apna D2C store bana, ads chalu kiye aur ab returns 5% se bhi kam hain. Mentorship call sach me kaam ki hai.",
  },
];

export const stats = [
  { value: "1,000+", label: "Stores launched" },
  { value: "₹5Cr+", label: "Seller revenue" },
  { value: "4.8/5", label: "Average rating" },
  { value: "24x7", label: "Human support" },
];
