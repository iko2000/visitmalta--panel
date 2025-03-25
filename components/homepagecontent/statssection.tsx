'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import CountUp from '../reactbits/numbers';
import imagen1 from "../../public/assets/2.jpg";
import imagen2 from "../../public/assets/5.jpg";
import imagen3 from "../../public/assets/3.jpeg";
import imagen4 from "../../public/assets/4.jpeg";
import imagen5 from "../../public/assets/1.jpeg";

export default function AppFeaturesSection() {
  // Animation variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Stats data with numerical values for CountUp
  const stats = [
    { value: 200, label: "Restaurants", icon: "🍽️" },
    { value: 500, label: "Event Organizers", icon: "🎭" },
    { value: 50, label: "Transport Options", icon: "🚌" },
    { value: 1000, label: "Places to Visit", icon: "🏛️" },
  ];

  // Features data with improved icon representations and corresponding images
  const features = [
    {
      title: "Local Events",
      description: "Discover festivals, concerts, and cultural events happening during your stay",
      icon: "📅", // Calendar icon
      color: "from-purple-500 to-indigo-600",
      image: imagen1
    },
    {
      title: "Places Explorer",
      description: "Find hidden gems, popular attractions, and must-visit locations across Malta",
      icon: "🗺️", // Map icon
      color: "from-blue-500 to-teal-400",
      image: imagen2
    },
    {
      title: "Finance Tracker",
      description: "Keep track of your expenses and find budget-friendly options for your trip",
      icon: "💶", // Euro icon
      color: "from-green-500 to-emerald-600",
      image: imagen3
    },
    {
      title: "Transport Guide",
      description: "Navigate Malta's transportation system with real-time updates and route planning",
      icon: "🚢", // Ferry icon (relevant for Malta)
      color: "from-orange-500 to-amber-600",
      image: imagen4
    },
    {
      title: "Electronic Info",
      description: "Access digital resources, WiFi hotspots, and tech services around the island",
      icon: "📱", // Mobile phone icon
      color: "from-rose-500 to-pink-600",
      image: imagen5
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section id='explore' className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-6">
            Explore Malta <span className="text-blue-600">Like Never Before</span>
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Our app brings the best of Malta to your fingertips with powerful features
            designed to make your experience unforgettable.
          </p>
          
          {/* App Store Badges */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <motion.a 
              href="#" 
              className="transition-transform hover:scale-105"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-black text-white flex items-center gap-2 px-4 py-2 rounded-xl">
                <div className="text-2xl">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.9902 5.2C16.0902 3.91 16.7202 2.23 16.5002 0.5C15.0302 0.57 13.3002 1.4 12.2402 2.67C11.2802 3.8 10.5202 5.46 10.7702 7.14C12.3702 7.25 13.9402 6.43 14.9902 5.2ZM17.9902 12.17C17.9402 9.56 20.0602 8.13 20.1602 8.07C18.8502 6.12 16.8402 5.88 16.1202 5.85C14.4302 5.67 12.8202 6.8 11.9602 6.8C11.1002 6.8 9.7502 5.87 8.3502 5.89C6.5202 5.92 4.8202 6.91 3.8902 8.54C1.9702 11.84 3.3502 16.69 5.2302 19.24C6.1402 20.5 7.2102 21.92 8.6302 21.87C10.0102 21.82 10.5402 20.98 12.1902 20.98C13.8402 20.98 14.3402 21.87 15.7902 21.85C17.2902 21.82 18.2202 20.55 19.0802 19.28C20.1402 17.83 20.5802 16.38 20.6002 16.31C20.5502 16.3 17.9602 15.23 17.9902 12.17Z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold leading-tight">App Store</div>
                </div>
              </div>
            </motion.a>
            
            <motion.a 
              href="#" 
              className="transition-transform hover:scale-105"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-black text-white flex items-center gap-2 px-4 py-2 rounded-xl">
                <div className="text-2xl">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.18121 21.9C2.75021 21.4 2.43921 20.8 2.21121 20.12C1.82021 18.96 1.64021 17.72 1.64021 16.4V7.6C1.64021 6.28 1.82021 5.04 2.21121 3.88C2.43921 3.2 2.75021 2.6 3.18121 2.1C3.95121 1.3 4.90121 0.9 6.13121 0.9H17.8712C19.1012 0.9 20.0512 1.3 20.8212 2.1C21.2522 2.6 21.5612 3.2 21.7912 3.88C22.1812 5.04 22.3612 6.28 22.3612 7.6V16.4C22.3612 17.72 22.1812 18.96 21.7912 20.12C21.5612 20.8 21.2522 21.4 20.8212 21.9C20.0512 22.7 19.1012 23.1 17.8712 23.1H6.13121C4.90121 23.1 3.95121 22.7 3.18121 21.9ZM14.4112 12L10.4112 8L11.8212 6.6L17.2212 12L11.8212 17.4L10.4112 16L14.4112 12Z" />
        </svg>
                </div>
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-semibold leading-tight">Google Play</div>
                </div>
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* Stats Section with CountUp */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-2xl shadow-xl p-6 text-center transform transition-transform hover:scale-105"
              variants={itemVariant}
            >
              <div className="text-4xl mb-3 bg-gradient-to-br from-blue-500 to-indigo-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto">{stat.icon}</div>
              <div className="text-4xl font-bold text-blue-600 mb-1 flex items-center justify-center">
                <CountUp
                  from={0}
                  to={stat.value}
                  separator=","
                  duration={2}
                />
                <span>+</span>
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Showcase */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Feature Phone Mockup with Images */}
          <motion.div
            className="relative h-[600px] flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute w-64 h-[550px] bg-gradient-to-br from-blue-600 to-indigo-800 rounded-[40px] p-3 shadow-2xl transform rotate-[-5deg]">
              <div className="w-full h-full bg-white rounded-[32px] overflow-hidden relative">
             
                {/* Phone screen with feature image */}
                <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <Image 
                      src={features[activeIndex].image}
                      alt={features[activeIndex].title}
                      fill
                      className="object-cover"
                      priority
                    />
                    
                    {/* Semi-transparent overlay with feature info */}
                
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Powerful Features</h3>
            <div className="space-y-5">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${activeIndex === index ? 'bg-white shadow-lg border-l-4 border-blue-600' : 'hover:bg-white/50'}`}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center text-white text-2xl shrink-0 shadow-md`}>
                      {feature.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-lg text-gray-800">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call To Action */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Ready to Experience Malta?</h3>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-full shadow-lg transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(66, 153, 225, 0.5)" }}
            whileTap={{ scale: 0.98 }}
          >
            Download Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}