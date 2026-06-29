import type { Metadata, Viewport } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://www.f10consulting.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "F10 Consulting — Placement universitaire à l'étranger | Études en France, Canada, Espagne…",
  description:
    "F10 Consulting (by F-DIS PARTNERS) accompagne étudiants et professionnels dans leurs études à l'étranger : orientation, candidatures, dossier et visa. Consultation gratuite sur WhatsApp. Depuis 2023, Abidjan.",
  keywords: [
    "études à l'étranger",
    "placement universitaire",
    "Côte d'Ivoire",
    "Abidjan",
    "visa étudiant",
    "France",
    "Canada",
    "Espagne",
    "Belgique",
    "bourses",
    "F10 Consulting",
    "F-DIS PARTNERS",
  ],
  authors: [{ name: "F10 Consulting" }],
  robots: { index: true, follow: true, "max-image-preview": "large" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "F10 Consulting",
    title: "F10 Consulting — Vos études à l'étranger, simples et sûres",
    description:
      "Placement universitaire à l'étranger depuis 2023. Orientation, candidatures, dossier et visa — un seul interlocuteur, de la première question jusqu'à votre départ.",
    url: SITE_URL,
    images: ["/assets/logo.jpeg"],
    locale: "fr_FR",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "F10 Consulting — Placement universitaire à l'étranger",
    description:
      "Études à l'étranger, simplifiées : orientation, candidatures et visa. Consultation gratuite sur WhatsApp.",
    images: ["/assets/logo.jpeg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1c357e",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "F10 Consulting",
  alternateName: "F-DIS PARTNERS",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/assets/logo.jpeg`,
  description:
    "Placement universitaire à l'étranger : orientation, candidatures, accompagnement administratif et visa pour étudiants et professionnels.",
  foundingDate: "2023",
  email: "dispartners10@gmail.com",
  areaServed: "CI",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abidjan",
    addressCountry: "CI",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+2252722283643",
      contactType: "customer service",
      availableLanguage: ["French", "English"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+2250702028189",
      contactType: "sales",
      contactOption: "WhatsApp",
      availableLanguage: ["French", "English"],
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien coûte l'accompagnement de F10 Consulting ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La première consultation est gratuite. Nos forfaits sont ensuite modulaires : vous ne payez que les services dont vous avez besoin, du simple conseil à l'accompagnement complet jusqu'au visa.",
      },
    },
    {
      "@type": "Question",
      name: "Dans quels pays pouvez-vous me placer ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous plaçons des étudiants dans 10 destinations : France, Espagne, Canada, Belgique, Luxembourg, États-Unis, Chine, Inde, Malaisie et Turquie, auprès d'établissements reconnus.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il déjà avoir une admission pour vous contacter ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. Nous intervenons dès l'orientation : nous vous aidons à choisir la filière, le pays et l'université, puis nous montons et déposons vos candidatures pour vous.",
      },
    },
    {
      "@type": "Question",
      name: "Aidez-vous aussi pour le visa étudiant ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. L'accompagnement administratif couvre le dossier, les traductions, la préparation au visa ainsi que l'organisation du logement et du départ.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps prend la procédure ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Selon le pays et la période d'admission, comptez généralement de 1 à 6 mois. Plus vous commencez tôt, plus nous avons de marge pour viser les meilleures options et les bourses.",
      },
    },
    {
      "@type": "Question",
      name: "Accompagnez-vous les professionnels en reconversion ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Nous accompagnons aussi bien les étudiants que les professionnels en formation continue ou en reconversion, avec des programmes adaptés à leur parcours.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${sora.variable} ${jakarta.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
