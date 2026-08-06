import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const serif = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif-echo",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans-echo",
  display: "swap",
});

const title = "Echo — A journal that answers";
const description =
  "Echo listens, then tells you what you were feeling. One entry a day, by voice or by writing. Free, private, no ads.";

export const metadata: Metadata = {
  // TODO: replace with the real production domain before launch.
  metadataBase: new URL("https://echo-journal.app"),
  title: {
    default: title,
    template: "%s — Echo",
  },
  description,
  applicationName: "Echo",
  keywords: [
    "journaling app",
    "voice journal",
    "AI journal",
    "mood tracking",
    "stress score",
    "Android journal app",
  ],
  authors: [{ name: "Echo" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Echo",
    title,
    description,
    url: "/",
    locale: "en_US",
    // og:image comes from app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    // twitter:image comes from app/twitter-image.tsx
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF6F1",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <head>
        {/* Scroll reveals start hidden. Without JS there is nothing to reveal
            them, so show everything instead of leaving a blank page. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
