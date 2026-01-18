import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-gradient-to-r from-black/95 to-gray-900/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200 hover:from-yellow-300 hover:to-yellow-600 transition-all duration-300">
              Shiva Jewelers
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-200 hover:text-yellow-400 transition-colors bg-transparent">Home</Link>
            <Link to="/collections" className="text-gray-200 hover:text-yellow-400 transition-colors bg-transparent">Collections</Link>
            <Link to="/about" className="text-gray-200 hover:text-yellow-400 transition-colors bg-transparent">Our Story</Link>
            <Link to="/contact" className="text-gray-200 hover:text-yellow-400 transition-colors bg-transparent">Contact</Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-200 hover:text-yellow-400 transition-colors bg-transparent">
              <Search size={20} />
            </button>
            <button className="text-gray-200 hover:text-yellow-400 transition-colors relative bg-transparent">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-200 hover:text-yellow-400 p-2 bg-transparent">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <Link to="/" className="block px-3 py-2 text-dark hover:text-primary hover:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/collections" className="block px-3 py-2 text-dark hover:text-primary hover:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>Collections</Link>
              <Link to="/about" className="block px-3 py-2 text-dark hover:text-primary hover:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>Our Story</Link>
              <Link to="/contact" className="block px-3 py-2 text-dark hover:text-primary hover:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
