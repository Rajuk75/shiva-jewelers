import React from 'react';
import { Heart, Eye, ShoppingBag } from 'lucide-react';

const ProductCard = ({ image, name, price, category }) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(234,179,8,0.2)] transition-all duration-300 border border-yellow-300/50 hover:border-yellow-500 overflow-hidden ring-1 ring-yellow-400/30 hover:ring-yellow-500/70">
      
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Floating Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 transition-transform duration-300 ease-out z-10 translate-x-0 opacity-100 md:translate-x-10 md:group-hover:translate-x-0 md:opacity-0 md:group-hover:opacity-100">
          <button 
            className="p-2.5 bg-white text-gray-700 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors duration-200"
            title="Quick View"
          >
            <Eye size={18} />
          </button>
          <button 
            className="p-2.5 bg-white text-gray-700 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition-colors duration-200"
            title="Add to Wishlist"
          >
            <Heart size={18} />
          </button>
        </div>

        {/* Add to Cart Overlay Button - Hidden on mobile, standard button below on mobile? Or just show it? 
            Let's keep it slide-up on desktop, but maybe static or just icons on mobile. 
            Actually, the user specifically mentioned eye/heart icons. Let's fix those first. 
            For Add to Cart, let's leave it as hover for now or make it visible?
            Let's make Add to Cart visible on mobile too? 
            No, the layout might break. Let's stick to icons first as requested.
        */}
        <div className="absolute bottom-0 inset-x-0 p-4 translate-y-full md:group-hover:translate-y-0 transition-transform duration-300 ease-out z-10 hidden md:block">
           <button className="w-full py-3 bg-white text-dark font-medium rounded shadow-lg hover:bg-primary hover:text-white flex items-center justify-center gap-2 transition-colors">
              <ShoppingBag size={18} />
              Add to Cart
           </button>
        </div>
        
        {/* Category Tag */}
        <div className="absolute top-3 left-3 opacity-100 md:group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
             <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold tracking-widest uppercase rounded text-primary-dark shadow-sm">
                 {category}
             </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 text-center bg-white relative z-20">
        <h3 className="font-serif text-lg text-gray-900 mb-1 truncate group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-gray-600 font-medium">₹{price.toLocaleString()}</p>
      </div>
    
    </div>
  );
};

export default ProductCard;
