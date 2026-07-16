import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

/**
 * IRANYekanX — variable font, self-hosted. The Farsi-numerals build renders
 * Latin digits as Persian automatically, so numbers stay ۰۱۲۳ everywhere.
 */
const iranYekan = localFont({
  src: "./fonts/IRANYekanXVFaNumVF.woff2",
  variable: "--font-iranyekan",
  display: "swap",
  weight: "100 1000",
});

export const metadata: Metadata = {
  title: "اوستا | دیزاین سیستم",
  description: "دیزاین سیستم اوستا — پایه‌ی shadcn، کاستوم و راست‌به‌چپ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${iranYekan.variable} antialiased`}>
      <body className="min-h-dvh bg-background text-foreground">
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
