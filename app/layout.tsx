import type { Metadata } from "next";
import { Cairo, Manrope, Reem_Kufi } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

const reemKufi = Reem_Kufi({
  subsets: ["arabic", "latin"],
  variable: "--font-reem-kufi",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-bc85e6f8.vercel.app"),
  title: "كلمة نور | Kalimat Noor",
  description:
    "مساحة رقمية تحتفي بنور الكلمة العربية وتقدم تأملات تفاعلية بين الضوء والمعنى.",
  openGraph: {
    title: "كلمة نور | Kalimat Noor",
    description:
      "مساحة رقمية تحتفي بنور الكلمة العربية وتقدم تأملات تفاعلية بين الضوء والمعنى.",
    url: "https://agentic-bc85e6f8.vercel.app",
    siteName: "Kalimat Noor",
    locale: "ar",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "كلمة نور | Kalimat Noor",
    description:
      "مساحة رقمية تحتفي بنور الكلمة العربية وتقدم تأملات تفاعلية بين الضوء والمعنى."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} ${manrope.variable} ${reemKufi.variable} font-body bg-aurora-950 text-aurora-50`}
      >
        {children}
      </body>
    </html>
  );
}
