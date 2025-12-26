import Favicon from "/public/favicon.ico";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  // variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guniism - Homepage",
  description: "Made by Guniism",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${nunito.className} antialiased`}>{children}</body>
    </html>
  );
}
