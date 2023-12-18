import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"; // or `v14-appRouter` if you are using Next.js v14

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
        <AppRouterCacheProvider>
          <Header />
          <div className="container">{children}</div>
          <ToTopBtn />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
