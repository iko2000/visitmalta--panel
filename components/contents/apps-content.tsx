'use client'

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay, FaMapMarkedAlt, FaRoute, FaCalendarAlt, FaWifi } from 'react-icons/fa';
import { MdRestaurant, MdDirectionsBoat, MdLanguage, MdStar, MdNotifications } from 'react-icons/md';
import { IoTicket } from 'react-icons/io5';

// Import sample app screenshots - replace with your actual images
import appScreenshot1 from '../../public/assets/1.jpeg';
import appScreenshot2 from '../../public/assets/2.jpg';
import appScreenshot3 from '../../public/assets/3.jpeg';
import appScreenshot4 from '../../public/assets/4.jpeg';
import appScreenshot5 from '../../public/assets/5.jpg';
import appHeroImage from '../../public/assets/banner.png';

export default function Appscontent() {
  // Animation variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  // Features list
  const features = [
    {
      icon: <FaMapMarkedAlt size={28} />,
      title: "Interactive Maps",
      description: "Navigate Malta's historic sites, beaches, and hidden gems with detailed offline maps."
    },
    {
      icon: <MdRestaurant size={28} />,
      title: "Restaurant Guide",
      description: "Discover over 200 local restaurants with ratings, menus, and authentic Maltese cuisine options."
    },
    {
      icon: <FaRoute size={28} />,
      title: "Custom Itineraries",
      description: "Plan your perfect day with personalized itineraries based on your interests and time available."
    },
    {
      icon: <FaCalendarAlt size={28} />,
      title: "Event Calendar",
      description: "Stay updated with local festivals, concerts, and cultural events happening during your visit."
    },
    {
      icon: <MdDirectionsBoat size={28} />,
      title: "Transport Guide",
      description: "Access ferry schedules, bus routes, and taxi services to seamlessly travel around the islands."
    },
    {
      icon: <FaWifi size={28} />,
      title: "Offline Access",
      description: "Enjoy full functionality without an internet connection to avoid roaming charges."
    }
  ];

  // Additional features
  const additionalFeatures = [
    { icon: <IoTicket />, text: "Exclusive discounts on attractions" },
    { icon: <MdLanguage />, text: "Available in English" },
    { icon: <MdStar />, text: "Insider tips from locals" },
    { icon: <MdNotifications />, text: "Optional notifications for nearby points of interest" }
  ];

  // Reviews
  const reviews = [
    {
      name: "Sarah M.",
      location: "United Kingdom",
      rating: 5,
      comment: "This app made our Malta trip so much better! We discovered amazing beaches and restaurants we would have missed otherwise."
    },
    {
      name: "Marco L.",
      location: "Italy",
      rating: 5,
      comment: "Perfect for exploring Valletta's history. The audio guides were informative and the offline maps were a lifesaver."
    },
    {
      name: "Julia R.",
      location: "Germany",
      rating: 4,
      comment: "Great app with useful features. The ferry schedules helped us plan our trip to Gozo efficiently."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-full h-full bg-repeat" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
        </div>

        <div className="container mx-auto px-4 py-20 z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Hero Content */}
            <motion.div 
              className="lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Discover Malta Like a Local
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto lg:mx-0">
                Your all-in-one companion for exploring Malta's rich history, pristine beaches, and vibrant culture. Plan, navigate, and discover the heart of the Mediterranean.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <motion.a 
                  href="#" 
                  className="flex items-center justify-center space-x-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaApple size={24} />
                  <div className="flex flex-col items-start">
                    <span className="text-xs font-light">Download on the</span>
                    <span className="text-lg font-semibold">App Store</span>
                  </div>
                </motion.a>
                
                <motion.a 
                  href="#" 
                  className="flex items-center justify-center space-x-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGooglePlay size={22} />
                  <div className="flex flex-col items-start">
                    <span className="text-xs font-light">GET IT ON</span>
                    <span className="text-lg font-semibold">Google Play</span>
                  </div>
                </motion.a>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-4 text-blue-200">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="text-sm">4.8/5 from 2,500+ reviews</span>
              </div>
            </motion.div>
            
            {/* App Screenshots */}
            <motion.div 
              className="lg:w-1/2 relative h-[500px] md:h-[600px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Phone mockups with app screenshots */}
              <div className="relative w-full h-full">
                <motion.div 
                  className="absolute top-[5%] left-[10%] w-48 h-96 bg-black rounded-3xl p-2 shadow-2xl z-10 transform rotate-[-8deg]"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-black">
                    <Image src={appScreenshot1} alt="App Screenshot" fill className="object-cover" />
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute top-[15%] right-[15%] w-56 h-[450px] bg-black rounded-3xl p-2 shadow-2xl z-20"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-black">
                    <Image src={appScreenshot2} alt="App Screenshot" fill className="object-cover" />
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-[5%] left-[20%] w-48 h-96 bg-black rounded-3xl p-2 shadow-2xl z-30 transform rotate-[5deg]"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-black">
                    <Image src={appScreenshot3} alt="App Screenshot" fill className="object-cover" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff">
            <path d="M0,96L60,80C120,64,240,32,360,32C480,32,600,64,720,80C840,96,960,96,1080,80C1200,64,1320,32,1380,16L1440,0L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* App Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Your Perfect Malta Companion</h2>
            <p className="text-lg text-gray-600">
              Explore Malta is designed to enhance your experience by providing local insights, practical information, and hidden gems that most tourists miss.
            </p>
          </motion.div>
          
          {/* App Features Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                variants={itemVariant}
              >
                <div className="text-blue-600 mb-4 bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* App Showcase Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* App Screenshots Carousel */}
            <motion.div 
              className="lg:w-1/2 relative h-[600px]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full h-full flex justify-center items-center">
                {/* Main Phone */}
                <div className="relative w-64 h-[530px] bg-black rounded-[40px] p-3 shadow-2xl z-20">
                  <div className="w-full h-full bg-white rounded-[36px] overflow-hidden">
                    <div className="relative h-[calc(100%-4rem)]">
                      <Image src={appScreenshot5} alt="App Screenshot" fill className="object-cover" />
                    </div>
                  </div>
                </div>
                
                {/* Background Phones */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/4 w-56 h-96 bg-black rounded-[35px] p-2 opacity-40 rotate-[-15deg] z-10">
                  <div className="w-full h-full bg-white rounded-[30px] overflow-hidden">
                  <Image src={appScreenshot2} alt="App Screenshot" fill className="object-cover" />

                  </div>
                </div>
                <div className="absolute hidden sm:flex right-0 top-1/2 transform -translate-y-1/2 translate-x-1/4 w-56 h-96 bg-black rounded-[35px] p-2 opacity-40 rotate-[15deg] z-10">
                  <div className="w-full h-full bg-white rounded-[30px] overflow-hidden">
                  <Image src={appScreenshot1} alt="App Screenshot" fill className="object-cover" />

                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* App Details */}
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Designed for Travelers,<br />Perfected by Locals</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our app combines beautiful design with practical functionality to help you make the most of your Malta experience. Whether you're planning your trip or already exploring the islands, our app provides the guidance you need.
              </p>
              
              <div className="space-y-4 mb-8">
                {additionalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="text-green-500 mr-3">{feature.icon}</div>
                    <p className="text-gray-700">{feature.text}</p>
                  </div>
                ))}
              </div>
              
              <motion.button
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* User Reviews Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Travelers Say</h2>
            <p className="text-lg text-gray-600">
              Join thousands of travelers who have enhanced their Malta experience with our app.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{review.name}</h3>
                    <p className="text-gray-500 text-sm">{review.location}</p>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 italic">"{review.comment}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Download CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Ready to Explore Malta?
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl mb-10 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Download our app today and discover the beauty, history, and culture of Malta like never before.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.a 
                href="#" 
                className="flex items-center justify-center space-x-2 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-900 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaApple size={24} />
                <div className="flex flex-col items-start">
                  <span className="text-xs font-light">Download on the</span>
                  <span className="text-lg font-semibold">App Store</span>
                </div>
              </motion.a>
              
              <motion.a 
                href="#" 
                className="flex items-center justify-center space-x-2 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-900 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGooglePlay size={22} />
                <div className="flex flex-col items-start">
                  <span className="text-xs font-light">GET IT ON</span>
                  <span className="text-lg font-semibold">Google Play</span>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}