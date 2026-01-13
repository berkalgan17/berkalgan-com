import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Virtual Cyber Risk Office (vCRO) | On-Demand Enterprise Security",
  description: "Specialized vCISO advisory, risk assessments, and compliance strategies for high-growth Fintech and Healthcare startups. Secure your business without the overhead.",
  keywords: ["vCISO", "Cybersecurity Advisory", "Fintech Security", "Healthcare Compliance", "SOC2", "HIPAA", "Risk Management"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${inter.variable} antialiased bg-navy-900 text-slate-400 font-sans selection:bg-teal-400/30 selection:text-teal-200`}
      >
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
