import Homecontent from "@/components/homepagecontent/home-content";
// app/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Explore Malta | Your Ultimate Malta Travel Guide',
  description: 'Discover the beauty of Malta with our comprehensive travel app. Find the best beaches, historical sites, restaurants, and local events across Malta and Gozo.',
  keywords: ['Malta travel', 'Malta tourism', 'Malta beaches', 'Malta attractions', 'Valletta guide', 'Gozo travel'],
  openGraph: {
    title: 'Explore Malta | Your Ultimate Malta Travel Guide',
    description: 'Discover the beauty of Malta with our comprehensive travel app. Find the best beaches, historical sites, restaurants, and local events.',
    images: [
      {
        url: '/images/home-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Beautiful view of Malta',
      },
    ],
  },
  alternates: {
    canonical: 'https://explore-malta.com',
  },
};


export default async function Home() {
  return (
    <>
     <Homecontent/>
    </>
  );
}