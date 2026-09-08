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
  title: "Aryan Singh Nagar — AI-Native Developer | IIT Bombay '25",
  description:
    "Portfolio of Aryan Singh Nagar — IIT Bombay ('25, JEE Advanced AIR 413). Specializing in Python, SQL, Git, DSA, AI-native development, machine learning, deep learning, and data science.",
  keywords: [
    "Aryan Singh Nagar",
    "AI-Native Developer",
    "Machine Learning",
    "Deep Learning",
    "Data Science",
    "Python",
    "SQL",
    "Git",
    "Data Structures and Algorithms",
    "IIT Bombay",
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
    title: "Aryan Singh Nagar — AI-Native Developer | IIT Bombay '25",
    description:
      "IIT Bombay '25 · AI-Native Developer · Python, SQL, Git, DSA, Machine Learning, Deep Learning, Data Science",
    url: "https://aryansinghnagar.github.io",
    siteName: "Aryan Singh Nagar",
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Singh Nagar — AI-Native Developer | IIT Bombay '25",
    description:
      "IIT Bombay '25 · AI-Native Developer · Python, SQL, Git, DSA, Machine Learning, Deep Learning, Data Science",
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
              jobTitle: "AI-Native Developer",
              email: "auricwings13@gmail.com",
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
                "AI-Native Development",
                "Machine Learning",
                "Deep Learning",
                "Data Science",
                "Python",
                "SQL",
                "Git",
                "Data Structures and Algorithms",
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
