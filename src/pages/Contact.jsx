import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Get in Touch" subtitle="We'd love to hear from you. Visit our store or send us a message." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-xl shadow-sm overflow-hidden">
            
            {/* Contact Info */}
            <div className="bg-dark text-white p-12 flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-serif font-semibold mb-6">Contact Information</h3>
                    <p className="text-gray-400 mb-8">Fill the form and our team will get back to you within 24 hours.</p>
                    
                    <ul className="space-y-6">
                        <li className="flex items-center space-x-4">
                            <Phone className="text-primary" />
                            <span>+91 88405 08898</span>
                        </li>
                        <li className="flex items-center space-x-4">
                            <Mail className="text-primary" />
                            <span>imshivakaushal@gmail.com</span>
                        </li>
                        <li className="flex items-start space-x-4">
                            <MapPin className="text-primary mt-1" />
                            <span>Shiva jewellery, Parsadepur Road,<br />Salon</span>
                        </li>
                    </ul>
                </div>
                
                <div className="mt-12">
                    <p className="text-gray-400 text-sm">Follow us on social media for daily updates.</p>
                </div>
            </div>

            {/* Form */}
            <div className="p-12">
                <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                            <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                            <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input type="email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <textarea rows="4" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors"></textarea>
                    </div>
                    <button type="submit" className="btn-primary w-full">Send Message</button>
                </form>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
