'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

// You can replace this with your actual contact image
import contactImage from '../../public/assets/banner.png';

export default function ContactPage() {
  // Form state
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const  handleSubmit  = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
        // Simulate loading for demo purposes
        await new Promise((resolve) => setTimeout(resolve, 1500));
        
        const response = await fetch('/api/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formState),
        });
  
        if (response.ok) {
          setFormState({ name: '', email: '', subject: '', message: '' });
        } else {
            console.log('error')
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitted(false);
    }

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  // Animation variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  // Contact methods
  const contactMethods = [
    {
      icon: <FaWhatsapp size={24} />,
      title: "WhatsApp",
      description: "Available daily: 9am - 6pm CET",
      contact: "+356 9999 8888",
      action: "Chat on WhatsApp",
      link: "https://wa.me/+995599282670",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <FaEnvelope size={24} />,
      title: "Email",
      description: "We'll respond within 24 hours",
      contact: "shengelia1800@gmail.com",
      action: "Send an Email",
      link: "mailto:shengelia1800@gmail.com",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: "Office",
      description: "Visit us in Valletta",
      contact: "St. George's Park hotel, San-Giljan, Malta",
      action: "Get Directions",
      link: "https://maps.app.goo.gl/jr7FHBcZRiEEmv1m6",
      color: "bg-red-100 text-red-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
       
        
        {/* Wave divider */}
       
      </section>

      {/* Contact Methods */}
      <section className="py-10 -mt-10">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            {contactMethods.map((method, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-6"
                variants={itemVariant}
              >
                <div className={`w-14 h-14 rounded-full ${method.color} flex items-center justify-center mb-4`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{method.title}</h3>
                <p className="text-gray-500 mb-1">{method.description}</p>
                <p className="text-gray-800 font-medium mb-4">{method.contact}</p>
                <Link href={method.link} target="_blank" rel="noopener noreferrer">
                  <span className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center">
                    {method.action} 
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Image Side */}
              <div className="md:w-5/12 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-indigo-700/80 mix-blend-multiply z-10"></div>
                <Image
                  src={contactImage}
                  alt="Malta Contact"
                  fill
                  className="object-cover"
                />
                <div className="relative z-20 p-8 h-full flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-bold mb-4">Explore Malta Support</h3>
                  <p className="mb-6">Our friendly team is here to help with any questions about Malta or the app.</p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <FaWhatsapp className="mr-3" />
                      <span>+356 995-88-696</span>
                    </div>
                    <div className="flex items-center">
                      <FaEnvelope className="mr-3" />
                      <span>shengelia1800@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Form Side */}
              <div className="md:w-7/12 p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
                
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                  >
                    <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-600 mb-4">
                      Thank you for reaching out! We've received your message and will get back to you soon.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)} 
                      className="text-blue-600 font-medium hover:text-blue-700"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="How can we help?"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full py-3 px-6 rounded-lg font-medium text-white ${
                        isLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                      } transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions about our app and services.</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="space-y-4"
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  question: "What are the app's operating hours for customer support?",
                  answer: "Our customer support team is available via WhatsApp and email from 9am to 6pm Central European Time (CET), Monday through Friday. Weekend support is available for urgent inquiries."
                },
                {
                  question: "Is the app available offline?",
                  answer: "Yes! Our app is designed to work offline once you've downloaded the necessary data. Maps, attraction details, and restaurant information can all be accessed without an internet connection."
                },
                {
                  question: "How do I report an issue with the app?",
                  answer: "You can report issues directly through the app's 'Help & Support' section or by contacting us via email or WhatsApp. Please include details about your device, app version, and a description of the issue."
                },
                {
                  question: "Are the restaurant recommendations up to date?",
                  answer: "We update our restaurant database regularly. However, if you notice any outdated information, please let us know so we can keep everything current for all users."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-xl shadow-sm p-6"
                  variants={itemVariant}
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to explore Malta?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Download our app today and discover the beauty of Malta with our comprehensive guide.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-all"
          >
            Download the App
          </motion.button>
        </div>
      </section>
    </div>
  );
}