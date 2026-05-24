import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["italic", "normal"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Chronic Pain Free // Lifestyle Medicine & Pain Coaching",
    template: "%s | Chronic Pain Free"
  },
  description: "Evidence-based somatic, metabolic, and neuroplastic lifestyle coaching tracks engineered by Dr. Ahmed to help you dismantle chronic pain loops and reclaim functional freedom.",
  keywords: ["chronic pain coaching", "lifestyle medicine", "neuroplastic recovery", "fibromyalgia relief", "chronic pelvic pain management", "cervicogenic headache relief", "Dr. Ahmed pain coach"],
  authors: [{ name: "Dr. Ahmed" }],
  creator: "Dr. Ahmed",
  metadataBase: new URL("https://www.chronicpainfree.com"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "903G8rlyW4opfIb999n1KdYmzRZXmQPA1MCJMMSaMo0", 
  },
  openGraph: {
    title: "Chronic Pain Free // Lifestyle Medicine & Pain Coaching",
    description: "Look past temporary pharmacological patches. Reclaim your body's structural baseline with a personalized, clinical recovery blueprint.",
    url: "https://www.chronicpainfree.com",
    siteName: "Chronic Pain Free",
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} bg-[#07070a] text-[#f4f4f8] antialiased min-h-screen flex flex-col`}
      >
        {/* Persisted Sticky Header across all routes */}
        <Navbar />
        
        {/* Main Content Viewport */}
        <main className="flex-grow w-full overflow-x-hidden">
          {children}
        </main>
        
        {/* Persisted Footer across all routes */}
        <Footer />
      </body>
    </html>
  );
}