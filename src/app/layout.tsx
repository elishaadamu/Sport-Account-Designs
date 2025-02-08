import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/src/components";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <header className="lg:py-4 h-20 lg:px-6 py-3 px-4 shadow-md bg-white backdrop-blur-xl z-40 dark:bg-slate-900 fixed top-0 left-0 w-full ">
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
