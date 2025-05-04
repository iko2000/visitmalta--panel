'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCode, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';

import sortExLogo from '../../public/assets/sortexlogo.png';
import maltaImage from '../../public/assets/banner.png';

export default function AboutPage() {
  // Animation variants
  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-10">
        
        
      
      </section>

      {/* Main Content */}
      <section className="py-16 -mt-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8 md:p-12">
                {/* Our Story */}
                <motion.div 
                  className="mb-12"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                      <p className="text-gray-600 mb-4">
                        Explore Malta was born from our passion for technology and our love for the Maltese islands. We noticed that travelers were missing out on authentic local experiences, often struggling to navigate the rich cultural tapestry that Malta offers.
                      </p>
                      <p className="text-gray-600">
                        Our app bridges this gap by combining cutting-edge technology with local expertise, creating a digital companion that helps visitors discover Malta like a local.
                      </p>
                    </div>
                    <div className="w-full relative h-72 sm:w-1/2 rounded-lg overflow-hidden">
                      <Image
                        src={maltaImage}
                        alt="Malta Landscapes"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
                
                {/* Part of Sort-Ex */}
                <motion.div 
                  className="mb-12"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Part of the Sort-Ex Group</h2>
                  <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                    <div className="md:w-1/2">
                      <p className="text-gray-600 mb-4">
                        Explore Malta is a proud project of Sort-Ex Group, a leading digitalization and software development company specializing in innovative technology solutions.
                      </p>
                      <p className="text-gray-600 mb-6">
                        At Sort-Ex, we transform businesses through digital innovation, creating custom software solutions that drive efficiency and growth. Our expertise in mobile development, cloud solutions, and user experience design has made Explore Malta possible.
                      </p>
                      <Link 
                        href="https://sort-ex.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-800 transition-colors"
                      >
                        <span>Visit Sort-Ex</span>
                        <FaExternalLinkAlt size={14} />
                      </Link>
                    </div>
                    <div className="md:w-1/2 bg-gray-50 p-8 rounded-lg flex items-center justify-center">
                      <div className="relative w-64 h-24">
                        <Image
                          src={sortExLogo}
                          alt="Sort-Ex Logo"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Our Expertise */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Expertise</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <div className="text-blue-600 mb-4">
                        <FaMobileAlt size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Mobile Development</h3>
                      <p className="text-gray-600">
                        Creating seamless mobile experiences with native and cross-platform technologies.
                      </p>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-lg">
                      <div className="text-green-600 mb-4">
                        <FaCode size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Software Solutions</h3>
                      <p className="text-gray-600">
                        Developing custom software to address unique business challenges.
                      </p>
                    </div>
                    
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <div className="text-purple-600 mb-4">
                        <FaLaptopCode size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Digital Transformation</h3>
                      <p className="text-gray-600">
                        Helping businesses evolve through digital innovation and automation.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Ready to experience Malta?
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Download our app today and start exploring the beautiful Maltese islands with confidence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link 
                href="/apps"
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Download Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}