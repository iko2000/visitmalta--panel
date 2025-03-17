'use client'
import React, { useEffect, useState } from 'react';
import { 
  FaInternetExplorer,
  FaCalendar,
  FaBuilding,
} from 'react-icons/fa';
import { FiLogOut, FiGrid, FiMenu, FiX } from 'react-icons/fi';
import LogoutButtonclient from '@/components/buttons/lotout-button';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { supabase } from '@/utils/supabase/supabase';
import { faBuilding, faCalendar } from '@fortawesome/free-solid-svg-icons';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('/');


  useEffect(() => {
    const fetchInternalData = async () => {
      const session = await supabase.auth.getSession();
      const token = session.data?.session?.access_token;

      if (!token) {
        router.push('/sign-up');
        return;
      }
    };

    fetchInternalData();
    
    // Set active item based on current path
  }, [router]);

  // Define menu items based on role
  const menuItems = [
    { href: '/', label: 'Dashboard', icon: FiGrid },
    { href: '/protected/events', label: 'Events', icon: FaCalendar },
    { href: '/protected/places', label: 'Places', icon: FaBuilding },
    { href: '/protected/explore', label: 'Explore', icon: FaInternetExplorer },
    { href: '/protected/ads', label: 'Ads', icon: FaInternetExplorer },

  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between md:hidden">
        <div className="flex items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Visit Malta Dashboard
          </h1>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </header>

      {/* Sidebar */}
      <aside
        className={`${
          isMenuOpen ? 'fixed inset-0 z-50 bg-white' : 'hidden'
        } md:flex md:flex-col md:w-72 md:fixed md:inset-y-0 md:bg-white md:border-r md:border-gray-200 transition-all duration-300 ease-in-out`}
      >
        {/* Mobile close button */}
        {isMenuOpen && (
          <div className="flex justify-end p-4 md:hidden">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <FiX size={24} />
            </button>
          </div>
        )}
        
        {/* Sidebar header */}
        <div className="flex items-center justify-center px-6 py-6 border-b border-gray-200">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
          Visit Malta Dashboard
          </h1>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => {
                    setActiveItem(item.href);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 group ${
                    activeItem === item.href
                      ? 'bg-blue-50 text-blue-700 font-medium'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                >
                  <div className={`mr-3 ${
                    activeItem === item.href
                      ? 'text-blue-600'
                      : 'text-gray-500 group-hover:text-blue-600'
                  }`}>
                    <item.icon size={20} />
                  </div>
                  <span>{item.label}</span>
                  {activeItem === item.href && (
                    <div className="ml-auto w-1.5 h-8 bg-blue-600 rounded-full"></div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* User section */}
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex items-center mb-4">
            
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">User Profile</p>
            </div>
          </div>
          <LogoutButtonclient />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-72 p-6">
        <div className="bg-white rounded-lg shadow-sm p-6 min-h-screen">
          {children}
        </div>
      </main>
    </div>
  );
}