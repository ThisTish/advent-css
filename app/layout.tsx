import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CSS-MAS",
  description: "24 days of CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="w-full py-5 flex justify-center bg-emerald-950 text-xs font-light gap-3">
        {[...Array(25)].map((_, i) => (
        <Link key={i} href={`/day${i + 1}`}>Day {i + 1}</Link>
      ))}
      </nav>
        {children}
      </body>
    </html>
  );
}
