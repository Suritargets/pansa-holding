import type { Metadata } from "next";
import { Oswald, Open_Sans } from "next/font/google";
import "./globals.css";

/* Heavy condensed font for headings — matches original site */
const oswald = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/* Clean readable font for body text */
const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PANSA GROUP OF COMPANIES N.V. - The Moving Force of The Industries",
  description:
    "Pansa Group of Companies N.V. - Leaders in field of services in Suriname & the region. Engineering, Procurement, Construction & Maintenance, Fabrication, Human Resource Services and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${openSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
