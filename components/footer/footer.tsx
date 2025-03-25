'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaWhatsappSquare, 
  FaInstagram,
  FaApple,
  FaGooglePlay,
  FaEnvelope,
  FaWhatsapp,
  FaEnvelopeOpen
} from 'react-icons/fa';

// Import your logo - replace with actual path
import logoImage from '../../public/assets/banner.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Simple footer links
  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "App", href: "/apps" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" }
  ];

  // Social media links
  const socialLinks = [
    { icon: <FaWhatsapp />, href: "https://wa.me/+995599282670", label: "Whatsup" },
    { icon: <FaEnvelopeOpen />, href: "mailto:shengelia1800@gmail.com", label: "Email" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 pb-8 border-b border-gray-700">
          {/* Logo and App Description */}
          <div className="md:w-1/3">
            <Link href="/" className="inline-block mb-4">
              <div className="relative h-24 w-80">
                <Image 
                  src={logoImage}
                  alt="Explore Malta Logo" 
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-300 mb-6">
              Your ultimate guide to discovering the gems of the Maltese islands.
            </p>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                href="#" 
                className="flex items-center space-x-2 bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <FaApple size={20} />
                <span className="font-medium">App Store</span>
              </Link>
              
              <Link 
                href="#" 
                className="flex items-center space-x-2 bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <FaGooglePlay size={18} />
                <span className="font-medium">Google Play</span>
              </Link>
            </div>
          </div>
          
          {/* Navigation and Contact */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Navigation Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Pages</h3>
              <ul className="space-y-2">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Information */}
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <FaEnvelope size={14} />
                  <a href="mailto:contact@exploremalta.com" className="text-gray-300 hover:text-white transition-colors">
                    contact@exploremalta.com
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaWhatsapp size={14} />
                  <a href="tel:+35699998888" className="text-gray-300 hover:text-white transition-colors">
                    +356 9999 8888
                  </a>
                </li>
              </ul>
              
              {/* Social Media Links */}
              <div className="flex items-center space-x-3 mt-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-2 md:mb-0">
            © {currentYear} Explore Malta. All rights reserved.
          </div>
          
          <div className="text-gray-400 text-sm">
            <span>Made in by SORT-EX group</span>
          </div>
        </div>
      </div>
    </footer>
  );
}