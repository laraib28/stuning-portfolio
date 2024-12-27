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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={soraFont.className}>
      <body>
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
