'use client'
import { supabase } from '@/utils/supabase/supabase';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import AddEventForm from '@/components/forms/add-events';


// This component using Server Components to fetch data directly from Supabase
export default  function Eventspage() {

  const [events, setevents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Fetch events from Supabase
    console.log(supabase)
    const fetchevents = async () => {
      try {
        setLoading(true);
        const { data, error }:any = await supabase
          .from('events')
          .select('*')

          console.log(data)
          
        if (error) {
          throw error;
        }
        console.log(data);
        setevents(data);
      } catch (err:any) {
        console.error('Error fetching events:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchevents();
  }, []);
  
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Discover Amazing events</h1>
      
      <AddEventForm/>

      {events.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600">No events found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event:any) => (
            <Link
              key={event.id}
              href={`/events/${event.id}`}
              className="group"
            >
              <div className="border rounded-lg overflow-hidden shadow-md bg-white transition-transform transform group-hover:scale-105">
                <div className="relative h-56 w-full">
                  {event.featured_image ? (
                    <Image
                      src={event.featured_image}
                      alt={event.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">No image</span>
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                  
                  {event.address && (
                    <p className="text-gray-600 mb-2">
                      {[event.address, event.city].filter(Boolean).join(', ')}
                    </p>
                  )}
                     {event.end_date && (
                    <p className="text-gray-600 mb-2">
                     {event.end_date}
                    </p>
                  )}
                  {event.event_date && (
                    <p className="text-gray-600 mb-2">
                     {event.event_date}
                    </p>
                  )}
                  
                  {event.price && (
                    <p className="text-gray-600 mb-2">
                     {event.price}
                    </p>
                  )}
                    
                    {event.is_featured && (
                    <p className="text-gray-600 mb-2">
                     {event.is_featured}
                    </p>
                  )}
                    
                    {event.ticket_url && (
                    <p className="text-gray-600 mb-2">
                     {event.ticket_url}
                    </p>
                  )}
                  {event.description && (
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {event.description}
                    </p>
                  )}
                  
                  {event.google_maps_url && (
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {event.google_maps_url}
                    </p>
                  )}
                  
                  {event.contact_info && (
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {event.contact_info}
                    </p>
                  )}
                  
                  {event.website_url && (
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {event.website_url}
                    </p>
                  )}
                  
                  {event.updated_at && (
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {event.updated_at}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}