import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/home/navbar/responsiveNav";
import Footer from "./components/home/footer/footer";
import ScrollToTop from "./components/helper/scrolltoTop/scrollToTop";

const font = ({
  weight: ['100','200','300','400','500','600','700','800']
});

export const metadata: Metadata = {
  title: "stuning-portfolio",
  description: "stuning-portfolio with next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <ResponsiveNav/>
        {children}
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
