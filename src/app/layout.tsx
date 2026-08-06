import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Aryan Singh Nagar — Generative AI Engineer · ML Engineer · Full-Stack Developer",
  description:
    "IIT Bombay EE '25 graduate (JEE Adv AIR 413) specializing in Generative AI, ML engineering, and full-stack development. Shipped production ML systems, cut token costs by 60%, reduced dev timelines by 85%.",
  keywords: [
    "Aryan Singh Nagar",
    "SilverFox",
    "Generative AI Engineer",
    "ML Engineer",
    "LLM Engineer",
    "Full-Stack Developer",
    "IIT Bombay",
    "AI/ML",
    "Data Scientist",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Aryan Singh Nagar" }],
  creator: "Aryan Singh Nagar",
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Aryan Singh Nagar — Generative AI Engineer",
    description:
      "IIT Bombay '25 · JEE Adv AIR 413 · Generative AI / ML / Full-Stack. Shipped production ML systems, cut token costs 60%, reduced dev timelines 85%.",
    url: "https://aryansinghnagar.github.io",
    siteName: "Aryan Singh Nagar",
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Singh Nagar — Generative AI Engineer",
    description:
      "IIT Bombay '25 · JEE Adv AIR 413 · Generative AI / ML / Full-Stack Developer",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" sizes="any" />
        <link rel="shortcut icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aryan Singh Nagar",
              alternateName: "SilverFox",
              jobTitle: "Generative AI Engineer",
              email: "asn.dyrnwyn@gmail.com",
              url: "https://aryansinghnagar.github.io",
              sameAs: [
                "https://www.linkedin.com/in/aryan-singh-nagar-414675263",
                "https://github.com/aryansinghnagar",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Indian Institute of Technology, Bombay",
              },
              knowsAbout: [
                "Generative AI",
                "Large Language Models",
                "Machine Learning",
                "Computer Vision",
                "Python",
                "TensorFlow",
                "Full-Stack Development",
                "NLP",
                "Deep Learning",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
