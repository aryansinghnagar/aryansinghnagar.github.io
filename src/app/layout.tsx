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
    "Portfolio of Aryan Singh Nagar — Electrical Engineering graduate from IIT Bombay ('25, JEE Advanced AIR 413). Specializing in AI-native development, LLM architectures, and high-performance software engineering.",
  keywords: [
    "Aryan Singh Nagar",
    "AI-Native Developer",
    "AI Engineer",
    "IIT Bombay",
    "LLM Architecture",
    "Agentic Workflows",
    "Software Engineer",
    "Electrical Engineering",
    "Python",
    "TypeScript",
    "C++",
    "Rust",
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
      "IIT Bombay '25 (B.Tech EE) · JEE Advanced AIR 413 · AI-Native Developer",
    url: "https://aryansinghnagar.github.io",
    siteName: "Aryan Singh Nagar",
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Singh Nagar — AI-Native Developer | IIT Bombay '25",
    description:
      "IIT Bombay '25 (B.Tech EE) · JEE Advanced AIR 413 · AI-Native Developer",
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
                "Artificial Intelligence",
                "Machine Learning",
                "Large Language Models",
                "Full-Stack Development",
                "Low-Latency Systems",
                "Python",
                "TypeScript",
                "C++",
                "Rust",
                "Data Structures and Algorithms",
                "Software Engineering",
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
