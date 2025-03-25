import type { Metadata } from 'next';
import AboutPage from '@/components/contents/about-content';

export const metadata: Metadata = {
  title: 'About Us | Explore Malta',
  description: 'Learn about the team behind Explore Malta app. Our mission is to help travelers discover the authentic Malta experience with local insights and expert recommendations.',
  keywords: ['About Explore Malta', 'Malta travel app team', 'Malta travel experts', 'Malta tourism app developers'],
  openGraph: {
    title: 'About Explore Malta - The Team Behind Your Malta Travel Guide',
    description: 'Meet the team behind Explore Malta app. Our mission is to help travelers discover the authentic Malta experience with local insights.',
    images: [
      {
        url: '/images/about-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Explore Malta team',
      },
    ],
  },
  alternates: {
    canonical: 'https://explore-malta.com/about',
  },
};

export default function About() {
  return (
    <>
    <AboutPage/>
    </>
  );
}