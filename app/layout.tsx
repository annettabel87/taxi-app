import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { NavBar } from "./(components)/NavBar/NavBar";

const inter = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Taxi App",
  description: "taxi app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
        <NavBar />
        {children}</body>
      </html>
    </ClerkProvider>
  );
}
