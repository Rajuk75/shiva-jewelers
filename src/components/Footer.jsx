import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-primary">Shiva Jewelers</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting timeless elegance since 1995. We bring you the finest Indian traditional and contemporary jewellery.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-primary text-sm transition-colors">Home</a></li>
              <li><a href="/collections" className="text-gray-400 hover:text-primary text-sm transition-colors">Collections</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-primary text-sm transition-colors">Our Heritage</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-primary text-sm transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-1" />
                <span className="text-gray-400 text-sm">Shiva jewellery, Parsadepur Road, Salon</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary" />
                <span className="text-gray-400 text-sm">+91 88405 08898</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" />
                <a href="mailto:imshivakaushal@gmail.com" className="text-gray-400 text-sm hover:text-primary transition-colors">
                  imshivakaushal@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get updates on new arrivals and special offers.</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-dark-light border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-primary text-sm"
              />
              <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors text-sm font-medium">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Shiva Jewelers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
