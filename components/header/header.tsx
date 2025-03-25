'use client'
import React, { useState, useEffect } from 'react';
import { 
  FaMapMarkedAlt, 
  FaMobileAlt, 
  FaEnvelope, 
  FaInfoCircle, 
  FaBars, 
  FaTimes,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF
} from 'react-icons/fa';
import { MdRestaurant, MdAttractions, MdDirectionsBoat, MdEventNote } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';
import GradientText from '../reactbits/infinitmenu';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [showExploreMenu, setShowExploreMenu] = useState(false);

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Nav links with Malta-themed icons
  const navLinks = [
    { name: 'Home', icon: <FaMapMarkedAlt className="text-blue-500" />, href: '/' },
    { name: 'App', icon: <FaMobileAlt className="text-teal-500" />, href: '/#explore' },
    { name: 'Contact', icon: <FaEnvelope className="text-red-400" />, href: '/contact' },
    { name: 'About', icon: <FaInfoCircle className="text-amber-500" />, href: '/about' },
  ];

  // Explore categories for dropdown menu
  const exploreCategories = [
    { name: 'Restaurants', icon: <MdRestaurant className="text-orange-500" />, href: '/restaurants' },
    { name: 'Attractions', icon: <MdAttractions className="text-purple-500" />, href: '/attractions' },
    { name: 'Boat Tours', icon: <MdDirectionsBoat className="text-blue-400" />, href: '/boat-tours' },
    { name: 'Events', icon: <MdEventNote className="text-green-500" />, href: '/events' },
  ];

  // Social media links
  const socialLinks = [
    { icon: <FaWhatsapp />, href: 'https://whatsapp.com', ariaLabel: 'WhatsApp' },
    { icon: <FaInstagram />, href: 'https://instagram.com', ariaLabel: 'Instagram' },
    { icon: <FaFacebookF />, href: 'https://facebook.com', ariaLabel: 'Facebook' },
  ];

  // Close explore menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showExploreMenu && !event.target.closest('.explore-menu-container')) {
        setShowExploreMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showExploreMenu]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black bg-opacity-90 backdrop-blur-md shadow-lg text-gray-800' 
        : 'bg-black text-white'
    }`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="z-10">
          <div className="flex items-center cursor-pointer">
            {/* Small Malta icon/flag */}
      
            
            <GradientText
              colors={["#e53e3e", "#f6e05e", "#e53e3e", "#f6e05e", "#e53e3e"]}
              animationSpeed={3}
              showBorder={false}
              className={`text-2xl sm:text-3xl font-bold transition-all duration-300 ${
                scrolled ? 'text-blue-700' : 'text-white'
              }`}
            >
              EXPLORE Malta
            </GradientText>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              href={link.href} 
              key={link.name}
              onClick={() => setActiveLink(link.name)}
              className={`group flex items-center space-x-2 transition-all duration-200 hover:scale-105 ${
                activeLink === link.name ? 'font-semibold' : ''
              }`}
            >
              <span className="text-xl">{link.icon}</span>
              <span className="relative">
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-500 to-amber-400 transition-all duration-300 ${
                  activeLink === link.name ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </span>
            </Link>
          ))}

          {/* Explore Dropdown - Malta themed */}
          <div className="relative explore-menu-container">
            <button
              className={`group flex items-center space-x-2 transition-all duration-200 hover:scale-105 ${
                showExploreMenu ? 'font-semibold' : ''
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setShowExploreMenu(!showExploreMenu);
              }}
            >
              <span className="text-xl">
                <MdAttractions className="text-red-500" />
              </span>
              <span className="relative">
                Discover
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-500 to-amber-400 transition-all duration-300 ${
                  showExploreMenu ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </span>
              
              <svg 
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${showExploreMenu ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div className={`absolute top-full right-0 mt-2 w-64 rounded-xl overflow-hidden shadow-xl transition-all duration-300 origin-top-right transform ${
              showExploreMenu 
                ? 'opacity-100 scale-100 translate-y-0' 
                : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
            }`}>
              <div className="bg-white bg-opacity-95 backdrop-blur-md p-3 rounded-xl">
                <div className="p-2 mb-2 text-sm font-medium text-gray-500 border-b border-gray-100">
                  Explore Malta
                </div>
                {exploreCategories.map((category) => (
                  <Link 
                    href={category.href} 
                    key={category.name}
                    className="flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 hover:bg-blue-50 text-gray-700 hover:text-blue-600"
                    onClick={() => setShowExploreMenu(false)}
                  >
                    <span className="text-xl">{category.icon}</span>
                    <span>{category.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Social Media + Mobile Menu Button on the right */}
        <div className="flex items-center space-x-4">
          {/* Social Media Icons - Desktop only */}
          <div className="hidden md:flex items-center space-x-3">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  scrolled 
                    ? 'bg-blue-100 text-blue-600 hover:bg-blue-200' 
                    : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                }`}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`lg:hidden p-2 rounded-full transition-all duration-300 ${
              scrolled 
                ? 'bg-blue-100 text-blue-600 hover:bg-blue-200' 
                : 'bg-white bg-opacity-20 backdrop-blur-md text-white hover:bg-opacity-30'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Malta themed slide-in drawer */}
      <div 
        className={`fixed top-0 right-0 h-full bg-gradient-to-br from-blue-50 to-white shadow-2xl w-80 transform transition-transform duration-500 ease-in-out z-50 rounded-l-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-blue-100">
          <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
            Explore Malta
          </span>
          <button 
            onClick={() => setIsOpen(false)} 
            className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>
        
        {/* Malta-themed decoration */}
        <div className="absolute top-20 right-6 w-20 h-20 opacity-10">
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-red-500">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
        
        <nav className="flex flex-col p-4 space-y-1 mt-4">
          {/* Main Nav Links */}
          {navLinks.map((link) => (
            <Link 
              href={link.href} 
              key={link.name}
              className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 hover:bg-blue-50 ${
                activeLink === link.name 
                  ? 'bg-blue-100 text-blue-600 font-medium' 
                  : 'text-gray-700'
              }`}
              onClick={() => {
                setActiveLink(link.name);
                setIsOpen(false);
              }}
            >
              <span className="text-xl">{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          ))}
          
          {/* Divider */}
          <div className="my-2 border-t border-gray-100 pt-2">
            <h3 className="px-4 text-sm text-gray-500 font-medium">Discover Malta</h3>
          </div>
          
          {/* Explore Categories */}
          {exploreCategories.map((category) => (
            <Link 
              href={category.href} 
              key={category.name}
              className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 hover:bg-blue-50 text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.name}</span>
            </Link>
          ))}
          
          {/* Social Media for Mobile */}
          <div className="mt-auto pt-6 pb-8 px-4 border-t border-gray-100">
            <div className="flex justify-around">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Overlay for mobile menu with smoother transition */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-500 lg:hidden ${
          isOpen ? 'opacity-40 z-40' : 'opacity-0 -z-10'
        }`}
        onClick={() => setIsOpen(false)}
      />
    </header>
  );
}