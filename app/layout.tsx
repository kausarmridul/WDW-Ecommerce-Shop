import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./../components/home/Nav";
import Footer from "./../components/home/Footer";
import StoreProvider from "./../StoreProvider/StoreProvider";
import { Toaster } from "@/components/ui/sonner";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "WebDev Shop | Next JS",
  description: "WebDev warriros shop using Next JS",
  openGraph: {
    title: "WebDev Shop | Next JS",
    description: "WebDev warriros shop using Next JS",
    url: "/og-image.png",
    siteName: "WebDev Shop",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WebDev Shop | Next JS",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WebDev Shop | Next JS",
    description: "WebDev warriros shop using Next JS",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en" className={`${inter.className} h-full antialiased`}>
        <body className="min-h-full flex flex-col">
          <Nav />
          {children}
          <Toaster duration={2000} />
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
