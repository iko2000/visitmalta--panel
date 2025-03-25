
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import "./globals.css";
// app/layout.tsx
import type { Metadata } from 'next';
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";


export const metadata: Metadata = {
  metadataBase: new URL('https://explore-malta.com'),
  title: {
    default: 'Explore Malta | Your Ultimate Malta Travel Guide',
    template: '%s | Explore Malta'
  },
  description: 'Discover the beauty of Malta with the ultimate travel companion app. Explore beaches, historical sites, restaurants, and local events across the Maltese islands.',
  keywords: ['Malta travel app', 'Malta tourism', 'Malta travel guide', 'Explore Malta', 'Malta vacation', 'Malta attractions'],
  creator: 'Explore Malta Team',
  publisher: 'Explore Malta',
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://explore-malta.com',
    siteName: 'Explore Malta',
    title: 'Explore Malta | Your Ultimate Malta Travel Guide',
    description: 'Discover the beauty of Malta with the ultimate travel companion app. Navigate Malta like a local with our comprehensive guide to beaches, restaurants, and attractions.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Explore Malta App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Explore Malta | Your Ultimate Malta Travel Guide',
    description: 'Discover the beauty of Malta with the ultimate travel companion app. Navigate Malta like a local.',
    images: ['/images/twitter-image.png'],
    creator: '@ExploreMalta',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://explore-malta.com',
    
  },
};




const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body>
          <main>
           <Header/>
          {children}    
          <Footer/>
          </main>
      </body>
    </html>
  );
}
