import type { Metadata } from "next";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "300",
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Witam na mojej apce",
  description: "kot lisa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
