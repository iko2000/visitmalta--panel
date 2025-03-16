import React from "react";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faCompass, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default async function ProtectedPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return redirect("/sign-up");
  }
  
  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <div className="w-full">
        <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
               
    
      
      <div>
        </div>
        </div>
        <h2 className="font-bold text-2xl mb-4">Admin Navigation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Events Link */}
          <Link 
            href="/protected/events" 
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
          >
            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-600 text-xl" />
            </div>
            <h3 className="font-semibold text-lg text-gray-800">Events</h3>
            <p className="text-gray-500 text-sm text-center mt-2">
              Manage and schedule upcoming events in Malta
            </p>
          </Link>
          
          {/* Places Link */}
          <Link 
            href="/protected/places" 
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
          >
            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600 text-xl" />
            </div>
            <h3 className="font-semibold text-lg text-gray-800">Places</h3>
            <p className="text-gray-500 text-sm text-center mt-2">
              Edit and organize locations around the island
            </p>
          </Link>
          
          {/* Explore Link */}
          <Link 
            href="/protected/explore" 
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
          >
            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faCompass} className="text-blue-600 text-xl" />
            </div>
            <h3 className="font-semibold text-lg text-gray-800">Explore</h3>
            <p className="text-gray-500 text-sm text-center mt-2">
              Customize the explore page content and features
            </p>
          </Link>
        </div>
      </div>
      
    </div>
  );
}