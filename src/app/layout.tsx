import type { Metadata } from "next";
import { Crimson_Pro, Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { APP_TITLE, APP_DESCRIPTION } from "@/constants/app";
import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import { loadReviewData } from "@/lib/loadData";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: APP_TITLE,
  description: APP_DESCRIPTION,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = loadReviewData();
  const sectionLinks = data.sections.map((s) => ({ id: s.id, name: s.name }));

  return (
    <html lang="en" className={`${crimsonPro.variable} ${inter.variable} ${dmSans.variable}`}>
      <body className="antialiased bg-slate-50 text-slate-800 font-serif">
        <MobileHeader sections={sectionLinks} />
        <div className="flex min-h-screen">
          <Sidebar sections={sectionLinks} />
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
