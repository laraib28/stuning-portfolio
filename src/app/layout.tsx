import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/home/navbar/responsiveNav";
import Footer from "./components/home/footer/page";
import ScrollToTop from "./components/helper/scrolltoTop/scrollToTop";

// Configure the Sora font
const soraFont = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"], // Ensure proper subsets for font usage
});

export const metadata: Metadata = {
  title: "stuning-portfolio",
  description: "stuning-portfolio with Next.js",
  manifest: "/manifest.json", // 🔥 Important for PWA support
  themeColor: "#000000",      // Optional for status bar theming on mobile
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={soraFont.className}>
      <head>
        {/* 🔥 PWA Meta Tags */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />

        {/* 🔥 Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/service-worker.js')
                    .then(reg => console.log('Service worker registered.', reg))
                    .catch(err => console.error('Service worker registration failed:', err));
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
