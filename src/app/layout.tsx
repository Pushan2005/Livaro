import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GeolocationProvider } from "../contexts/GeolocationContext";
import { ToastProvider } from "../components/ui/Toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Livaro - Student Renting Made Social",
  description:
    "Find your perfect student housing with Livaro. Connect with fellow students and find your ideal living space.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Ensure responsive sizing on all devices */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        {/* Preload Inter font for better performance */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" media="print" onLoad="this.media='all'" />
        <noscript>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
        </noscript>
      </head>
      <body className={`${inter.className} text-gray-900 antialiased bg-white`}>
        <ToastProvider>
          <GeolocationProvider>
            {children}
          </GeolocationProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
