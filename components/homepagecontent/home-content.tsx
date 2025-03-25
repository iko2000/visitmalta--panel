'use client'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  MapPin,
  LandmarkIcon, 
  Utensils
} from 'lucide-react';
import bannerimage from "../../public/assets/banner.png"
import InfiniteMenu from '../reactbits/infinitmenu';


export default  function Homecontent() {


const items = [
  {
    image: 'http://localhost:3000/assets/banner.png',
    link: 'https://google.com/',
    title: 'Homepage',
    description: 'Explore Malta'
  },
  {
    image: 'http://localhost:3000/assets/app.png',
    link: 'https://google.com/',
    title: 'Try our App',
    description: 'About the Application'
  },
  {
    image: 'http://localhost:3000/assets/about.png',
    link: 'https://google.com/',
    title: 'About',
    description: 'Get more information about US'
  },
  {
    image: 'http://localhost:3000/assets/contact.png',
    link: 'https://google.com/',
    title: 'Contact',
    description: 'Contact us NOW'
  }
];

  return (
    <>
      <main className="flex-1 flex flex-col min-h-screen bg-white">
      <div className='relative h-screen'>
  <InfiniteMenu items={items}/>
</div>
      </main>
    </>
  );
}