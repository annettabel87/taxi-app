import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { NavBar } from "./(components)/NavBar/NavBar";
import LocationState from "./(context)/LocationState";
import "./globals.css";

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
    <LocationState>
      <ClerkProvider>
        <html lang="en">
          <body className={inter.className}>
            <NavBar />
            <main className="main">{children}</main>
            <footer>footer</footer>
          </body>
        </html>
      </ClerkProvider>
    </LocationState>
  );
}
