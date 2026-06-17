import HomeClient from "./HomeClient";

export const metadata = {
  title: " JEF Techno | Industrial Electrical Engineering Services",
  description:
    "JEF Techno delivers industrial electrical engineering, lightning protection, and technical solutions with expert support, quality service, and trusted results.",
  keywords:
    "industrial electrical engineering services, electrical engineering company, industrial electrical solutions, electrical engineering consultant, electrical services provider, electrical system design, industrial power solutions, electrical maintenance services, engineering consultancy services, industrial automation solutions, lightning protection services, lightning protection system, earthing solutions, electrical safety solutions, electrical inspection services, power distribution solutions, industrial electrical services India, manufacturing electrical solutions, commercial electrical engineering, infrastructure electrical solutions, industrial safety solutions",
  openGraph: {
    title: "Industrial Electrical Engineering Services | JEF Techno",
    description:
      "JEF Techno provides industrial electrical engineering, lightning protection, and reliable technical solutions for businesses.",
    url: "https://www.jefuae.com",
    siteName: "JEF Techno",
    images: [
      {
        url: "/HomePageImg/NavbarImg/JefTechno_logo_ 2.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Electrical Engineering Services | JEF Techno",
    description:
      "Expert industrial electrical engineering, lightning protection, and technical solutions from JEF Techno.",
    images: ["/HomePageImg/NavbarImg/JefTechno_logo_ 2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.jefuae.com",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "JEF Techno",
    "url": "https://www.jefuae.com",
    "logo": "https://www.jefuae.com/HomePageImg/NavbarImg/JefTechno_logo_ 2.png",
    "description": "JEF Techno provides industrial electrical engineering, lightning protection, and reliable technical solutions for businesses.",
    "sameAs": [
      "https://www.linkedin.com/company/jef-techno-solutions-pvt-ltd/",
      "https://www.facebook.com/jeftechnosolutions/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971-4-1234567",
      "contactType": "customer service",
      "areaServed": "AE",
      "availableLanguage": "en"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}