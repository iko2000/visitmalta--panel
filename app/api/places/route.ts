// app/api/places/route.js
import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';
import { NextRequest, NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req: NextRequest) {
  console.log('inside..');
  try {
    // Process the multipart form data request
    const formData = await req.formData();
    
    // Extract all text fields
    const name = formData.get('name');
    const description = formData.get('description');
    const address = formData.get('address');
    const city = formData.get('city');
    const google_maps_url = formData.get('google_maps_url');
    const contact_info = formData.get('contact_info');
    const website_url = formData.get('website_url');
    const is_featured = formData.get('is_featured') === 'true';
    const category = formData.get('category');
    
    // Validate required fields
    if (!name) {
      return NextResponse.json(
        { message: 'Name is required' },
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
      const filePath = `places/${fileName}`;
      
      // Upload the image to Supabase Storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('general')  // replace with your bucket name
        .upload(filePath, imageFile, {
          cacheControl: '3600',
          upsert: false,
        });
      
      if (uploadError) {
        console.error('Error uploading file:', uploadError);
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
    
    // Handle additional images (for the images JSONB column)
    const additionalImageFiles = formData.getAll('additional_images');
    const imagesArray = [];
    
    if (additionalImageFiles && additionalImageFiles.length > 0) {
      for (const imageFile of additionalImageFiles) {
        if (typeof imageFile !== 'string' && imageFile.size > 0) {
          // Generate a unique filename for each additional image
          const fileExt = imageFile.name.split('.').pop();
          const fileName = `${uuidv4()}.${fileExt}`;
          const filePath = `places/additional/${fileName}`;
          
          // Upload the image to Supabase Storage
          const { data: uploadData, error: uploadError } = await supabase.storage
            .from('general')  // replace with your bucket name
            .upload(filePath, imageFile, {
              cacheControl: '3600',
              upsert: false,
            });
          
          if (uploadError) {
            console.error('Error uploading additional image:', uploadError);
            continue; // Skip this image but continue with others
          }
          
          // Get the public URL for the uploaded image
          const { data: { publicUrl } } = supabase.storage
            .from('general')  // replace with your bucket name
            .getPublicUrl(filePath);
          
          // Add image details to the array
          imagesArray.push({
            url: publicUrl,
            caption: "", // You can add caption functionality later if needed
            alt_text: "", // You can add alt text functionality later if needed
            order: imagesArray.length, // For ordering images
          });
        }
      }
    }
    
    // Insert the new place into the database
    const { data, error } = await supabase
      .from('places')
      .insert([
        {
          name,
          description,
          address,
          city,
          google_maps_url,
          contact_info,
          website_url,
          featured_image,
          images: imagesArray.length > 0 ? imagesArray : null,
          category,
          is_featured // Add the images array to the JSONB column
        },
      ])
      .select()
      .single();
    
    if (error) {
      console.error('Error inserting place:', error);
      return NextResponse.json(
        { message: 'Failed to create place' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { message: 'Place created successfully', place: data },
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