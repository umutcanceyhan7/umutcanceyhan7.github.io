import type { Metadata } from "next";
import { Bungee, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { ViewModeProvider } from "@/contexts/ViewModeContext";

const bungee = Bungee({
  weight: "400",
  variable: "--font-bungee",
  subsets: ["latin"],
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Umutcan Ceyhan | Personal Portfolio",
  description: "Umutcan Ceyhan's personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bungee.variable} ${sourceCodePro.variable} antialiased`}
      >
        <ViewModeProvider>
          <Navigation />
          {children}
        </ViewModeProvider>
      </body>
    </html>
  );
}
