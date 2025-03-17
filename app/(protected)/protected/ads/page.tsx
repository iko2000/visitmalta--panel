'use client'
import { supabase } from '@/utils/supabase/supabase';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Addads from '@/components/forms/add-ads';


// This component using Server Components to fetch data directly from Supabase
export default  function Adspage() {

  const [ads, setads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Fetch ads from Supabase
    const fetchads = async () => {
      try {
        setLoading(true);
        const { data, error }:any = await supabase
          .from('ads')
          .select('*')

          
        if (error) {
          throw error;
        }
        setads(data);
      } catch (err:any) {
        console.error('Error fetching ads:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchads();
  }, []);
  
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Discover Amazing ads</h1>
<Addads/>
      {ads.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600">No ads found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ads.map((ad:any) => (
            <Link
              key={ad.id}
              href={ad.lead}
              className="group"
            >
                  {ad.src ? (
                    <Image
                      src={ad.url}
                      alt={ad.lead}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">No image</span>
                    </div>
                  )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}