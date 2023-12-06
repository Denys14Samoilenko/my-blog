import type { Metadata } from "next";

import { Roboto } from "next/font/google";
import { Header, ToTopBtn } from "./components";

import "./globals.scss";
import "@/app/utils/normalize.scss";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <div className="container">{children}</div>
        <ToTopBtn />
      </body>
    </html>
  );
}
