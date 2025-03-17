// app/api/events/route.ts
import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';
import { NextRequest, NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req: NextRequest) {
  
  try {
    // Process the multipart form data request
    const formData = await req.formData();
    // Extract all text fields
    const link = formData.get('lead');
    
    if (!link) {
      return NextResponse.json(
        { message: 'link is required' },
        { status: 400 }
      );
    }
    
    // Check if there's a featured image file
    const imageFile = formData.get('featured_image');
    let featured_image = null;
    
    if (imageFile && typeof imageFile !== 'string' && imageFile.size > 0) {
      // Generate a unique filename for the image
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const filePath = `events/${fileName}`;
      
      // Upload the image to Supabase Storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('general')  // replace with your bucket name
        .upload(filePath, imageFile, {
          cacheControl: '3600',
          upsert: false,
        });
      
      if (uploadError) {
        console.error('Error uploading featured image:', uploadError);
        return NextResponse.json(
          { message: 'Failed to upload featured image' },
          { status: 500 }
        );
      }
      
      // Get the public URL for the uploaded image
      const { data: { publicUrl } } = supabase.storage
        .from('general')  // replace with your bucket name
        .getPublicUrl(filePath);
      
      featured_image = publicUrl;
    }
    
    
    
    // Insert the new event into the database
    const { data, error } = await supabase
      .from('ads')
      .insert([
        {
          src: featured_image,
          lead: link,
        },
      ])
      .select()
      .single();
    
    if (error) {
      console.error('Error inserting event:', error);
      return NextResponse.json(
        { message: 'Failed to create event' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { message: 'Event created successfully', event: data },
      { status: 201 }
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}