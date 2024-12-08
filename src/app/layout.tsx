import type { Metadata } from "next";
import "./globals.css";
import Topbar from "./(components)/Topbar";

// const integralCF = localFont({
//   src: "/fonts/IntegralCF.woff2", // Path to the font file
//   variable: "--font-integral",   // Custom CSS variable for the font
// });

// const satoshi = localFont({
//   src: "/fonts/Satoshi.woff", // Path to the font file
//   variable: "--font-satoshi",       // Custom CSS variable for the font
// });

export const metadata: Metadata = {
  title: "Ecomeerce Website",
  description: "Designed by Muhammad Wasif",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}  //${integralCF.variable} ${satoshi.variable}
      >
            <Topbar />
        {children}
      </body>
    </html>
  );
}
