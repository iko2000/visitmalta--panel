'use client'
import { supabase } from '@/utils/supabase/supabase';
import Image from 'next/image';
import Link from 'next/link';
import AddPlaceForm from '@/components/forms/add-places';
import { useState, useEffect } from 'react';


// This component using Server Components to fetch data directly from Supabase
export default  function PlacesPage() {

  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Fetch places from Supabase
    const fetchPlaces = async () => {
      try {
        setLoading(true);
        const { data, error }:any = await supabase
          .from('places')
          .select('*')

          
        if (error) {
          throw error;
        }
        setPlaces(data);
      } catch (err:any) {
        console.error('Error fetching places:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPlaces();
  }, []);
  
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Discover Amazing Places</h1>
      
      {/* Add Place Form */}
      <AddPlaceForm />
      
      {places.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600">No places found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((place:any) => (
            <Link
              key={place.id}
              href={`/places/${place.id}`}
              className="group"
            >
              <div className="border rounded-lg overflow-hidden shadow-md bg-white transition-transform transform group-hover:scale-105">
                <div className="relative h-56 w-full">
                  {place.featured_image ? (
                    <Image
                      src={place.featured_image}
                      alt={place.name}
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
                  <h2 className="text-xl font-semibold mb-2">{place.name}</h2>
                  
                  {place.address && (
                    <p className="text-gray-600 mb-2">
                      {[place.address, place.city].filter(Boolean).join(', ')}
                    </p>
                  )}
                  
                  {place.description && (
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {place.description}
                    </p>
                  )}
                  
                  {place.google_maps_url && (
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {place.google_maps_url}
                    </p>
                  )}
                  
                  {place.contact_info && (
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {place.contact_info}
                    </p>
                  )}
                  
                  {place.website_url && (
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {place.website_url}
                    </p>
                  )}
                  
                  {place.updated_at && (
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {place.updated_at}
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