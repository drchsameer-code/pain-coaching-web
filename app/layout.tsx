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
  title: "Lifestyle Medicine // Chronic Pain Coaching",
  description: "Evidence-based somatic and behavioral restructuring tracks.",
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