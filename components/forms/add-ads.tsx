'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Addads() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData]:any = useState({
    lead: '',
  });
  const [featuredImage, setFeaturedImage]:any = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
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

 
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      // Create form data for multipart form upload
      const submitData:any = new FormData();
      
      // Add all text fields
      Object.keys(formData).forEach(key => {
        submitData.append(key, formData[key]);
      });
      
      // Add the featured image if it exists
      if (featuredImage) {
        submitData.append('featured_image', featuredImage);
      }

   

      // Submit the form data to the API route
      const response = await fetch('/api/ads', {
        method: 'POST',
        body: submitData,
        // Don't set Content-Type header as the browser will set it with the boundary for FormData
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create place');
      }

      // Success!
      setSuccess(true);
      
      // Reset the form
      setFormData({
        lead: '',
      });
      setFeaturedImage(null);
      
      // Refresh the places list
      router.refresh();
      
      // After 3 seconds, hide the success message
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (err:any) {
      console.error('Error submitting place:', err);
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="my-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add a New AD</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      
      {success && (
        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          AD added successfully!
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="lead" className="block text-gray-700 font-medium mb-1">
                Link *
              </label>
              <input
                type="text"
                id="lead"
                name="lead"
                value={formData.lead}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div> 
            <div>
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
          </div>
        </div>
        
    
        <div className="mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-4 py-2 rounded-md text-white font-medium ${
              isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Add AD'}
          </button>
        </div>
      </form>
    </div>
  );
}