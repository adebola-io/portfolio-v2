import type { Metadata } from "next";
import "@/scss/app.scss";

import { Header, Footer, Sidebar } from "@/components/layout";
import nectarThumbnail from "@/assets/nectar-thumbnail.png";

export const metadata: Metadata = {
  metadataBase: new URL("http://adebola-io-nectar.vercel.app"),
  title: "Sefunmi | Programmer",
  description:
    "A creative developer interested in creating amazing digital interfaces.",
  openGraph: {
    images: [nectarThumbnail.src],
  },
};

function FontsPreload() {
  return (
    <>
      <link
        href="https://fonts.cdnfonts.com/css/helvetica-neue-55"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <FontsPreload />
      </head>
      <body className="font-helvetica bg-nectar-alice-blue">
        <Sidebar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
