import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/app/lib/site";

const metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? site.url);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: `${site.site.name} | ${site.site.tagline}`,
    template: `%s | ${site.site.name}`,
  },
  description: site.site.description,
  openGraph: {
    title: `${site.site.name} | ${site.site.tagline}`,
    description: site.site.description,
    url: "/",
    siteName: site.site.name,
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${site.site.name} OGP`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-amber-50/30 text-slate-900 antialiased">
        <div className="min-h-screen">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
