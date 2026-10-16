import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SiteLoader } from "@/components/SiteLoader";
import { Toaster } from "@/components/ui/sonner";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title:
          "Dropship Boss — #1 Dropshipping & E-Commerce Automation Partner in India | Zero Inventory",
      },
      {
        name: "description",
        content:
          "Start & scale an automated dropshipping business in India with zero inventory. Turnkey store setup for Shopify, Amazon, Flipkart & Meesho with vetted Indian suppliers, winning product catalogs, and automated order fulfillment.",
      },
      {
        name: "keywords",
        content:
          "dropshipping in india, automated dropshipping, ecommerce dropshipping india, zero inventory business, shopify dropshipping india, amazon dropshipping supplier, meesho reselling, winning products catalog, b2b dropship india, order fulfillment, rto reduction, dropship boss",
      },
      { name: "author", content: "Dropship Boss" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Dropship Boss" },
      { property: "og:url", content: "https://dropshipboss.in/" },
      {
        property: "og:title",
        content: "Dropship Boss — #1 Dropshipping & E-Commerce Automation Partner in India",
      },
      {
        property: "og:description",
        content:
          "Build a profitable zero-inventory online store. Complete turnkey setup for Shopify, Amazon & Meesho with winning product sourcing, automated dispatch, and lifetime mentorship.",
      },
      { property: "og:image", content: "/dropship-boss-logo.png" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Dropship Boss — Dropshipping & E-Commerce Partner in India",
      },
      {
        name: "twitter:description",
        content:
          "Zero inventory dropshipping business setup in India. Turnkey store design, verified suppliers & automated fulfillment.",
      },
      { name: "twitter:site", content: "@DropshipBoss" },
      { name: "twitter:image", content: "/dropship-boss-logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://dropshipboss.in/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/dropship-boss-logo.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/dropship-boss-logo.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://dropshipboss.in/#organization",
              name: "Dropship Boss",
              url: "https://dropshipboss.in",
              logo: "https://dropshipboss.in/dropship-boss-logo.png",
              description:
                "Leading turnkey dropshipping and e-commerce automation partner in India.",
              email: "support@dropshipboss.in",
              telephone: "+91-9582617055",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Ekta Enclave Block A, Baba Surdas Colony, Near Balaji Hospital, Tilpat",
                addressLocality: "Faridabad",
                addressRegion: "Haryana",
                postalCode: "121003",
                addressCountry: "IN",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://dropshipboss.in/#website",
              url: "https://dropshipboss.in",
              name: "Dropship Boss",
              description:
                "Automated Dropshipping and E-Commerce Solutions in India",
              publisher: {
                "@id": "https://dropshipboss.in/#organization",
              },
            },
            {
              "@type": "Service",
              name: "E-Commerce Dropshipping Business Setup",
              serviceType: "Dropshipping Automation & Sourcing",
              provider: {
                "@id": "https://dropshipboss.in/#organization",
              },
              areaServed: "India",
              description:
                "Turnkey dropshipping store setup, catalog research, verified supplier sourcing, order fulfillment, and seller mentorship.",
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="amber" data-surface="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
              try {
                var t = localStorage.getItem('ss-theme') || 'amber';
                var s = localStorage.getItem('ss-surface') || 'dark';
                document.documentElement.dataset.theme = t;
                document.documentElement.dataset.surface = s;
              } catch(e) {}
            })()`,
          }}
        />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster richColors position="top-center" />
      <SiteLoader />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </QueryClientProvider>
  );
}
