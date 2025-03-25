'use client'

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import bannerimage from "../../public/assets/banner.png";
import maltapic from "../../public/assets/maltaimage.jpg";
import AppFeaturesSection from './statssection';

export default function Homecontent() {
  // Rotating words for the tagline
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Beaches", "Culture", "History", "Cuisine", "Adventure"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };
  
  const wordAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };
  

  return (
    <>
    <div className="relative w-full min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-blue-500 opacity-10 rounded-bl-full transform -translate-x-1/4"></div>
      <div className="absolute bottom-0 right-0 w-full h-64 bg-yellow-400 opacity-10 rounded-tl-full transform translate-x-1/4"></div>
      
      {/* Malta image with styling */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-20 md:top-40 left-0 md:left-10 max-w-sm md:max-w-md lg:max-w-lg z-20"
      >
        <div className="relative p-2 md:p-4 bg-white shadow-2xl rounded-tr-3xl rounded-br-3xl">
          <Image
            src={maltapic}
            alt="Malta landscapes"
            width={500}
            height={600}
            className="rounded-tr-2xl rounded-br-2xl object-cover w-full h-auto"
            priority
          />
          <div className="absolute bottom-6 left-6 bg-white bg-opacity-80 p-4 rounded-lg shadow-lg">
            <p className="text-blue-800 font-semibold text-sm md:text-base">Valletta Harbor</p>
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-16">
        <motion.div
          className="container mx-auto flex flex-col items-center ml-0 md:ml-64 lg:ml-96"
          initial="hidden"
          animate="show"
          variants={container}
        >
          {/* Logo */}
          <motion.div
            className="mb-8"
            variants={item}
          
          >
            <Image
              src={bannerimage}
              alt="Explore Malta Logo"
              width={240}
              height={120}
              className="object-contain"
              priority
            />
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1
            className="text-4xl mt-[10vh] md:text-6xl font-bold text-center mb-6 text-blue-900 drop-shadow-sm"
            variants={item}
          >
            Discover the Heart of the Mediterranean
          </motion.h1>
          
          {/* Tagline with rotating words */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center text-2xl md:text-3xl font-medium mb-10 text-center"
            variants={item}
          >
            <span className="mr-2 text-gray-700">Experience Malta's</span>
            <div className="h-10 overflow-hidden relative">
              <motion.span
                key={currentWord}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={wordAnimation}
                transition={{ duration: 0.5 }}
                className="block absolute text-blue-600 font-bold"
              >
                {words[currentWord]}
              </motion.span>
            </div>
          </motion.div>
          
          {/* Single CTA Button */}
          <motion.div 
            className="mt-8"
            variants={item}
          >
            <Link href="#explore">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition-all text-lg"
              >
                Explore More
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
    <AppFeaturesSection/>
      </>
  );
}