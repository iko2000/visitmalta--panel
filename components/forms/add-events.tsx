'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddEventForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData]:any = useState({
    title: '',
    description: '',
    address: '',
    city: '',
    google_maps_url: '',
    contact_info: '',
    website_url: '',
    event_date: '',
    end_date: '',
    price: '',
    ticket_url: '',
    is_featured: false,
    is_parking: false,
    is_certified: false,

  });
  const [featuredImage, setFeaturedImage] = useState(null);
  const [additionalImages, setAdditionalImages]:any = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleFeaturedImageChange = (e:any) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should be less than 5MB');
        return;
      }
      
      setFeaturedImage(file);
    }
  };

  const handleAdditionalImagesChange = (e:any) => {
    const files:any = Array.from(e.target.files);
    const validFiles = [];
    
    // Validate file sizes
    for (const file of files) {
      if (file.size > 5 * 1024 * 1024) {
        setError('All images should be less than 5MB');
        return;
      }
      validFiles.push(file);
    }
    
    setAdditionalImages([...additionalImages, ...validFiles]);
  };

  const removeAdditionalImage = (index:any) => {
    const updatedImages = [...additionalImages];
    updatedImages.splice(index, 1);
    setAdditionalImages(updatedImages);
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      // Create form data for multipart form upload
      const submitData:any = new FormData();
      
      // Add all text fields
      Object.keys(formData).forEach((key:any) => {
        submitData.append(key, formData[key]);
      });
      
      // Add the featured image if it exists
      if (featuredImage) {
        submitData.append('featured_image', featuredImage);
      }

      // Add all additional images
      if (additionalImages.length > 0) {
        additionalImages.forEach((img:any) => {
          submitData.append('additional_images', img);
        });
      }

      // Submit the form data to the API route
      const response = await fetch('/api/events', {
        method: 'POST',
        body: submitData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create event');
      }

      // Success!
      setSuccess(true);
      
      // Reset the form
      setFormData({
        title: '',
        description: '',
        address: '',
        city: '',
        google_maps_url: '',
        contact_info: '',
        website_url: '',
        event_date: '',
        end_date: '',
        price: '',
        ticket_url: '',
        is_featured: false,
        is_parking: false,
        is_certified: false,
      });
      setFeaturedImage(null);
      setAdditionalImages([]);
      
      // Refresh the events list
      router.refresh();
      
      // After 3 seconds, hide the success message
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (err:any) {
      console.error('Error submitting event:', err);
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="my-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add a New Event</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      
      {success && (
        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          Event added successfully!
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-gray-700 font-medium mb-1">
                Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="description" className="block text-gray-700 font-medium mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="event_date" className="block text-gray-700 font-medium mb-1">
                Event Date
              </label>
              <input
                type="date"
                id="event_date"
                name="event_date"
                value={formData.event_date}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="end_date" className="block text-gray-700 font-medium mb-1">
                End Date
              </label>
              <input
                type="date"
                id="end_date"
                name="end_date"
                value={formData.end_date}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="price" className="block text-gray-700 font-medium mb-1">
                Price
              </label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Free or $10-$20"
              />
            </div>
            
            <div>
              <label htmlFor="ticket_url" className="block text-gray-700 font-medium mb-1">
                Ticket URL
              </label>
              <input
                type="url"
                id="ticket_url"
                name="ticket_url"
                value={formData.ticket_url}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://ticketing-site.com/your-event"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="address" className="block text-gray-700 font-medium mb-1">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="city" className="block text-gray-700 font-medium mb-1">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="google_maps_url" className="block text-gray-700 font-medium mb-1">
                Google Maps URL
              </label>
              <input
                type="url"
                id="google_maps_url"
                name="google_maps_url"
                value={formData.google_maps_url}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="contact_info" className="block text-gray-700 font-medium mb-1">
                Contact Information
              </label>
              <input
                type="text"
                id="contact_info"
                name="contact_info"
                value={formData.contact_info}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="website_url" className="block text-gray-700 font-medium mb-1">
                Website URL
              </label>
              <input
                type="url"
                id="website_url"
                name="website_url"
                value={formData.website_url}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="is_featured"
                name="is_featured"
                checked={formData.is_featured}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="is_featured" className="ml-2 block text-gray-700">
                Featured Event
              </label>
            </div>
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="is_parking"
                name="is_parking"
                checked={formData.is_parking}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="is_parking" className="ml-2 block text-gray-700">
                IS Parking?
              </label>
            </div>
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="is_certified"
                name="is_certified"
                checked={formData.is_certified}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="is_certified" className="ml-2 block text-gray-700">
                Is Certified ?
              </label>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <label htmlFor="featured_image" className="block text-gray-700 font-medium mb-1">
            Featured Image (max 5MB)
          </label>
          <input
            type="file"
            id="featured_image"
            name="featured_image"
            onChange={handleFeaturedImageChange}
            accept="image/*"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mt-6">
          <label htmlFor="additional_images" className="block text-gray-700 font-medium mb-1">
            Additional Images (max 5MB each)
          </label>
          <input
            type="file"
            id="additional_images"
            name="additional_images"
            onChange={handleAdditionalImagesChange}
            accept="image/*"
            multiple
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {/* Preview of additional images */}
        {additionalImages.length > 0 && (
          <div className="mt-4">
            <p className="text-gray-700 font-medium mb-2">Selected Additional Images:</p>
            <div className="flex flex-wrap gap-2">
              {additionalImages.map((img:any, index:any) => (
                <div key={index} className="relative">
                  <div className="h-20 w-20 border rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                    <span className="text-xs text-gray-500">{img.name}</span>
                  </div>
                  <button 
                    type="button"
                    onClick={() => removeAdditionalImage(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-4 py-2 rounded-md text-white font-medium ${
              isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Add Event'}
          </button>
        </div>
      </form>
    </div>
  );
}