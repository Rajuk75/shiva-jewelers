import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import SectionTitle from '../components/SectionTitle';

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Necklaces", "Earrings", "Bangles", "Rings", "Bridal Sets"];

  const products = [
    {
      id: 1,
      name: "Royal Kundan Necklace",
      price: 125000,
      category: "Necklaces",
      image: "https://images.unsplash.com/photo-1685970731571-72ede0cb26ea?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      name: "Antique Gold Bangles",
      price: 85000,
      category: "Bangles",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2670&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Diamond Stud Earrings",
      price: 45000,
      category: "Earrings",
      image: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=2670&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Bridal Maang Tikka",
      price: 32000,
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?q=80&w=2670&auto=format&fit=crop"
    },
    {
       id: 5,
       name: "Ruby Temple Necklace",
       price: 150000,
       category: "Necklaces",
       image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 6,
        name: "Emerald Ring",
        price: 55000,
        category: "Rings",
        image: "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 7,
        name: "Polki Chandbalis",
        price: 65000,
        category: "Earrings",
        image: "https://images.unsplash.com/photo-1608508644127-ba99d7732fee?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 8,
        name: "Solitaire Engagement Ring",
        price: 210000,
        category: "Rings",
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2000"
    },
     {
        id: 9,
        name: "Bridal Set",
        price: 210000,
        category: "Bridal Sets",
        image: "https://images.unsplash.com/photo-1583878543723-dcd6ad8bcb3f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }

  ];

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Collections" 
          subtitle={<span className="text-primary font-medium tracking-wide">Explore our exclusive range of handcrafted jewelry.</span>} 
        />
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat 
                ? 'bg-primary border-primary text-white shadow-md' 
                : 'bg-transparent border-gray-400 text-gray-600 hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
        </div>
        
        {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-gray-500">
                <p>No products found in this category.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default Collections;
