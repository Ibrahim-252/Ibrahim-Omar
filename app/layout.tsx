import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LangProvider } from "@/components/LanguageSwitcher";

export const metadata: Metadata = {
  title: "Ibrahim Omar — Software Engineer & Digital Systems Builder",
  description: "Ibrahim Omar builds professional websites, digital platforms, and custom systems for businesses, governments, and organizations.",
  keywords: ["Ibrahim Omar", "Software Engineer", "Web Development", "Digital Systems", "Somalia", "Istanbul"],
  authors: [{ name: "Ibrahim Omar" }],
  openGraph: {
    title: "Ibrahim Omar — Software Engineer & Digital Systems Builder",
    description: "Professional websites and digital platforms for businesses, governments, and organizations.",
    type: "website",
    url: "https://www.ibrahimomar.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>
        <LangProvider>
          <Navbar />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
