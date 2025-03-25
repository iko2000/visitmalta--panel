import React from 'react'
import Appscontent from '@/components/contents/apps-content'
// app/app/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Malta Travel App | Features and Download',
  description: 'Download our Explore Malta travel app for iOS and Android. Get restaurant guides, event calendars, and personalized travel itineraries for your Malta vacation.',
  keywords: ['Malta app', 'Malta travel app', 'Malta offline maps', 'Malta restaurant guide', 'Malta events app', 'download Malta travel app'],
  openGraph: {
    title: 'Explore Malta Travel App | Download for iOS and Android',
    description: 'Get our Explore Malta travel app for restaurant guides, event calendars, and personalized travel itineraries for your Malta vacation.',
    images: [
      {
        url: '/images/app-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Explore Malta App Screenshots',
      },
    ],
  },
  alternates: {
    canonical: 'https://explore-malta.com/apps',
  },
};

export default function Appspage() {
  return (
    <>
      <Appscontent/>
    </>
  )
}
