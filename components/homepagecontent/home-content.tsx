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

export default async function Homecontent() {
  return (
    <>
      <main className="flex-1 flex flex-col min-h-screen bg-white">
        {/* Hero Section */}
        <motion.section 
          className="relative h-screen w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image 
            src="/api/placeholder/1920/1080" 
            alt="Malta coastline" 
            fill 
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center px-4 max-w-4xl">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Discover Malta
              </motion.h1>
              <motion.p 
                className="text-xl text-white mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Experience the Mediterranean's hidden gem
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link href="/explore" className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition flex items-center gap-2 mx-auto w-fit">
                  Explore <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>
        
        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">
              Welcome to VisitMalta
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              Experience the magic of Malta with its crystal-clear waters, ancient temples, and vibrant culture. Our guides will help you discover the best of Malta's attractions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <LandmarkIcon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Beaches</h3>
                <p className="text-gray-600">Crystal clear waters perfect for swimming and diving</p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <LandmarkIcon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">History</h3>
                <p className="text-gray-600">Ancient temples and historical sites to explore</p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <Utensils className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Cuisine</h3>
                <p className="text-gray-600">Taste the delicious Mediterranean and Maltese dishes</p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Simple Call to Action */}
        <section className="py-12 px-4 bg-blue-600 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">
              Ready to plan your trip?
            </h2>
            <p className="text-white mb-8">
              A project of{" "}
              <a 
                href="https://sort-ex.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-blue-100 transition"
              >
                Sort-ex
              </a>
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition font-medium">
              Contact Us <MapPin size={18} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}