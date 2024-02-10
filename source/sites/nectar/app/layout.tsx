import type { Metadata } from "next";
import { Syncopate } from "next/font/google";
import nectarThumbnail from "@/assets/nectar-thumbnail.png";
import "./globals.css";

const syncopate = Syncopate({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://adebola-io-nectar.vercel.app"),
  title: "Sefunmi | Programmer",
  description:
    "A creative developer interested in creating amazing digital interfaces.",
  openGraph: {
    images: [nectarThumbnail.src],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={syncopate.className}>{children}</body>
    </html>
  );
}
