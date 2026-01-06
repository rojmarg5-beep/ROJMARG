import type { Metadata } from "next";

// =============================================================================
// ROJMARG SEO CONFIGURATION
// =============================================================================
// This file contains all SEO-related metadata, keywords, and structured data
// for the Rojmarg hiring platform. Update these values as your business grows.
// =============================================================================

// -----------------------------------------------------------------------------
// SITE INFORMATION
// -----------------------------------------------------------------------------
export const SITE_CONFIG = {
  name: "Rojmarg",
  tagline: "Where Careers Begin & Businesses Grow",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://rojmarg.com",
  locale: "en_IN",
  language: "en",
  country: "India",
  region: "Uttarakhand",
  city: "Haldwani",
  email: "info@rojmarg.com",
  phone: "+91 9084017662",
  foundingYear: 2024,
};

// -----------------------------------------------------------------------------
// PRIMARY KEYWORDS (Most Important - Use in Titles & H1)
// -----------------------------------------------------------------------------
export const PRIMARY_KEYWORDS = [
  "Rojmarg",
  "jobs in Haldwani",
  "hiring in Uttarakhand",
  "recruitment agency Haldwani",
  "job portal India",
  "staffing solutions Uttarakhand",
];

// -----------------------------------------------------------------------------
// SECONDARY KEYWORDS (Use in Descriptions & Content)
// -----------------------------------------------------------------------------
export const SECONDARY_KEYWORDS = [
  // Industry-specific
  "banking jobs Haldwani",
  "finance jobs Uttarakhand",
  "bank recruitment India",
  "financial sector jobs",

  // Service-related
  "recruitment services",
  "staffing agency",
  "HR solutions",
  "talent acquisition",
  "career placement",
  "employment agency",

  // Location-based
  "jobs in Nainital",
  "jobs in Kumaon",
  "Uttarakhand employment",
  "North India jobs",

  // Job seeker focused
  "find jobs",
  "apply for jobs",
  "job vacancies",
  "career opportunities",
  "fresher jobs",
  "experienced jobs",

  // Employer focused
  "hire employees",
  "post job openings",
  "find candidates",
  "talent pool",
  "workforce solutions",
];

// -----------------------------------------------------------------------------
// LONG-TAIL KEYWORDS (Use in Blog Posts & Detailed Content)
// -----------------------------------------------------------------------------
export const LONG_TAIL_KEYWORDS = [
  "best recruitment agency in Haldwani",
  "how to find banking jobs in Uttarakhand",
  "top staffing solutions for financial sector",
  "reliable hiring platform for businesses",
  "career opportunities in Kumaon region",
  "trusted job portal for freshers in India",
  "professional recruitment services for banks",
  "find qualified candidates in Uttarakhand",
];

// Combine all keywords for meta tags
export const ALL_KEYWORDS = [
  ...PRIMARY_KEYWORDS,
  ...SECONDARY_KEYWORDS,
  ...LONG_TAIL_KEYWORDS,
];

// -----------------------------------------------------------------------------
// DEFAULT METADATA (Used in layout.tsx)
// -----------------------------------------------------------------------------
export const DEFAULT_METADATA: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "Post jobs to attract top talent or apply to discover new career paths. Your trusted recruitment partner in Haldwani for banking and finance roles. Connect with employers and job seekers across Uttarakhand.",
  keywords: ALL_KEYWORDS,
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description:
      "Connect with top employers or find skilled professionals. Premier recruitment platform for banking and financial services in Uttarakhand, India.",
    images: [
      {
        url: "/og-image.png", // Create this image (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - Recruitment & Job Portal`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description:
      "Your trusted recruitment partner in Haldwani. Find jobs or hire talent in banking and finance sectors.",
    images: ["/og-image.png"],
    creator: "@rojmarg", // Update with actual Twitter handle
  },
  verification: {
    // Add these after setting up with respective services
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "Recruitment",
};

// -----------------------------------------------------------------------------
// JSON-LD STRUCTURED DATA (For Rich Search Results)
// -----------------------------------------------------------------------------
export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  name: SITE_CONFIG.name,
  description:
    "Premier recruitment and staffing agency connecting talented professionals with top employers in banking and financial sectors across Uttarakhand, India.",
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/logo.png`,
  image: `${SITE_CONFIG.url}/og-image.png`,
  telephone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  foundingDate: SITE_CONFIG.foundingYear.toString(),
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE_CONFIG.city,
    addressRegion: SITE_CONFIG.region,
    addressCountry: SITE_CONFIG.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "29.2183", // Haldwani coordinates
    longitude: "79.5130",
  },
  areaServed: [
    {
      "@type": "State",
      name: "Uttarakhand",
    },
    {
      "@type": "Country",
      name: "India",
    },
  ],
  serviceType: [
    "Recruitment Services",
    "Staffing Solutions",
    "Talent Acquisition",
    "Career Placement",
    "HR Consulting",
  ],
  sameAs: [
    // Add your social media profiles here
    // "https://www.linkedin.com/company/rojmarg",
    // "https://twitter.com/rojmarg",
    // "https://www.facebook.com/rojmarg",
    // "https://www.instagram.com/rojmarg",
  ],
};

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  description: DEFAULT_METADATA.description,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_CONFIG.url}/jobs?search={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// -----------------------------------------------------------------------------
// PAGE-SPECIFIC METADATA GENERATORS
// -----------------------------------------------------------------------------
export function generatePageMetadata(
  title: string,
  description: string,
  path: string = "",
  additionalKeywords: string[] = []
): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;
  const keywords = [...PRIMARY_KEYWORDS, ...additionalKeywords];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path || "/",
    },
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      url,
      siteName: SITE_CONFIG.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
    },
  };
}

// Pre-defined page metadata
export const PAGE_METADATA = {
  home: DEFAULT_METADATA,

  jobs: generatePageMetadata(
    "Browse Jobs",
    "Explore the latest job opportunities in banking, finance, and more across Haldwani and Uttarakhand. Apply now and take the next step in your career.",
    "/jobs",
    ["job listings", "vacancies", "openings", "apply online"]
  ),

  employers: generatePageMetadata(
    "For Employers",
    "Post job openings and find qualified candidates for your organization. Rojmarg connects you with skilled professionals in banking and financial sectors.",
    "/employers",
    ["post jobs", "hire candidates", "recruitment", "talent search"]
  ),

  about: generatePageMetadata(
    "About Us",
    "Learn about Rojmarg - your trusted recruitment partner in Haldwani, Uttarakhand. We connect talented professionals with leading employers since 2024.",
    "/about",
    ["about rojmarg", "our story", "recruitment agency"]
  ),

  contact: generatePageMetadata(
    "Contact Us",
    "Get in touch with Rojmarg for recruitment services, job inquiries, or partnership opportunities. Located in Haldwani, Uttarakhand.",
    "/contact",
    ["contact", "reach us", "inquiries", "support"]
  ),
};
