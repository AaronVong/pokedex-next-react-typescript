/**
 * @file This file contains Layout component for the whole application
 */

import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Container from "@mui/material/Container";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokedex - V2",
  description: "Using React Next Typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Container children={children} />
        <Footer />
      </body>
    </html>
  );
}
