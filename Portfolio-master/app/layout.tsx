

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Poornima Devi | Software & Systems Engineer",
  description: "The portfolio of Poornima Devi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      {/* This line sets the black background for the entire site */}
      <body className={`${inter.className} bg-black text-gray-300`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}