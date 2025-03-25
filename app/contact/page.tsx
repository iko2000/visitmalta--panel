import React from 'react'
import ContactPage from '@/components/contents/contact'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Explore Malta',
  description: 'Contact the Explore Malta team for support, feedback, or business inquiries. We re available via email, WhatsApp, and our contact form.',
  keywords: ['Contact Explore Malta', 'Malta travel app support', 'Malta travel app feedback', 'Malta tourism help'],
  openGraph: {
    title: 'Contact Explore Malta - Get Support and Information',
    description: 'Contact the Explore Malta team for support, feedback, or business inquiries. We re available via email, WhatsApp, and our contact form.',
    images: [
      {
        url: '/images/contact-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact Explore Malta',
      },
    ],
  },
  alternates: {
    canonical: 'https://explore-malta.com/contact',
  },
};


export default function Contact() {
  return (
    <>
    <ContactPage/>
    </>
  )
}
