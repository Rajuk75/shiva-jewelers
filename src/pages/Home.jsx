import React from 'react';
import { ArrowRight, Star, Clock, ShieldCheck, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const featuredProducts = [
    // {
    //   id: 1,
    //   name: "Royal Kundan Necklace",
    //   price: 125000,
    //   category: "Necklaces",
    //   image: "https://images.unsplash.com/photo-1599643477877-53135397e209?q=80&w=2574&auto=format&fit=crop"
    // },
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
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2574&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block py-1 px-3 border border-yellow-400/50 rounded-full text-sm md:text-base font-medium tracking-widest uppercase text-yellow-300 bg-black/30 backdrop-blur-sm">
              Timeless Elegance
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight drop-shadow-2xl"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200">
              Shiva Jewelers
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md"
          >
            Exquisite <span className="text-yellow-400 font-medium">Indian craftsmanship</span> that transcends generations. 
            Discover jewelry that tells your unique story.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/collections" className="group btn-primary inline-flex items-center space-x-3 text-lg px-10 py-4 bg-gradient-to-r from-primary to-yellow-600 hover:from-primary-dark hover:to-yellow-700 shadow-lg hover:shadow-yellow-500/30 ring-1 ring-white/20">
              <span className="font-semibold tracking-wide">Explore Collection</span>
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div 
              whileHover={{ y: -10 }}
              className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-amber-100"
            >
              <div className="inline-flex p-4 bg-gradient-to-tr from-primary to-yellow-400 rounded-full text-white mb-6 shadow-lg shadow-yellow-500/30">
                <ShieldCheck size={36} />
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-3 text-dark">Hallmarked Purity</h3>
              <p className="text-gray-600 leading-relaxed">100% certified BIS Hallmarked gold and IGI certified diamonds. Authenticity you can trust.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-amber-100"
            >
              <div className="inline-flex p-4 bg-gradient-to-tr from-primary to-yellow-400 rounded-full text-white mb-6 shadow-lg shadow-yellow-500/30">
                <Clock size={36} />
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-3 text-dark">Lifetime Exchange</h3>
              <p className="text-gray-600 leading-relaxed">We offer transparent value with our lifetime exchange policies, ensuring your investment grows.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-amber-100"
            >
              <div className="inline-flex p-4 bg-gradient-to-tr from-primary to-yellow-400 rounded-full text-white mb-6 shadow-lg shadow-yellow-500/30">
                <Truck size={36} />
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-3 text-dark">Insured Shipping</h3>
              <p className="text-gray-600 leading-relaxed">Free, fast, and fully insured shipping across India. Your precious cargo is our responsibility.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="section-padding bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] bg-fixed">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Featured Collection" 
            subtitle="Handpicked masterpieces that define luxury and tradition." 
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/collections" className="btn-secondary inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-3 rounded-full font-semibold tracking-wide transition-all shadow-md hover:shadow-lg">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Heritage/About Section */}
      <section className="py-24 relative overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
           <img 
            src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=2668&auto=format&fit=crop" 
            alt="Heritage Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                  <h4 className="text-yellow-400 font-medium tracking-widest uppercase mb-4">Our Legacy</h4>
                  <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-white leading-tight">
                    Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">Pure Tradition</span>
                  </h2>
                  <h3 className="text-2xl font-serif text-yellow-100 mb-6 italic">"Vishwaas aur Parampara ka Prateek"</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6 border-l-4 border-primary pl-6">
                    For over three decades, Shiva Jewelers has been a beacon of trust and tradition. Our artisans breathe life into gold and stones, creating designs that are not just jewelry, but family heirlooms.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-10">
                    From the intricate Jadau of Rajasthan to the Temple jewelry of the South, our collections celebrate the diverse purity of Indian culture.
                  </p>
                  <Link to="/about" className="inline-flex items-center text-white border-b-2 border-yellow-500 pb-1 text-lg font-medium hover:text-yellow-400 hover:border-yellow-400 transition-all group">
                    Read Our Story 
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20}/>
                  </Link>
              </motion.div>
            </div>
            
            <div className="relative hidden lg:block">
              <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="relative"
              >
                <div className="absolute -top-6 -right-6 w-full h-full border-4 border-yellow-500/30 rounded-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2670&auto=format&fit=crop" 
                  alt="Jewellery Detail" 
                  className="rounded-2xl shadow-2xl relative z-10 w-full h-auto object-cover border border-white/10"
                />
                
                {/* Floating Badge */}
                <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs animate-float">
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="text-primary">
                      {[1,2,3,4,5].map(i => <Star key={i} size={16} className="inline fill-current" />)}
                    </div>
                  </div>
                  <p className="text-dark font-serif text-lg italic">
                    "Shuddhta ki guarantie aur designs jo mann moh lein."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Kyun Chunein Humein?" subtitle="Reasons why Shiva Jewelers is the family's first choice." centered={true} />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
                <div className="text-center p-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary">
                        <span className="text-2xl font-bold text-primary">30+</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Years of Trust</h3>
                    <p className="text-gray-400 text-sm">30 saalon ka vishwaas aur parampara.</p>
                </div>
                <div className="text-center p-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary">
                        <span className="text-2xl font-bold text-primary">100%</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">BIS Hallmarked</h3>
                    <p className="text-gray-400 text-sm">Har gehne par shuddhta ki mohar.</p>
                </div>
                <div className="text-center p-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary">
                        <span className="text-2xl font-bold text-primary">0%</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Deduction Exchange</h3>
                    <p className="text-gray-400 text-sm">Purane sone par poora daam, bina kisi katouti ke.</p>
                </div>
                <div className="text-center p-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary">
                        <span className="text-2xl font-bold text-primary">10k+</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Happy Families</h3>
                    <p className="text-gray-400 text-sm">Hazaaron parivaron ki khushi ka hissa.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
             title="Customer Love" 
             subtitle="What our cherished customers say about us." 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               {
                 name: "Anjali",
                 review: "Shiva Jewelers se khareedari karna ek bahut hi accha anubhav raha. Unke designs bahut unique hain.",
                 location: "Salon"
               },
               {
                 name: "Prem",
                 review: "Best place for bridal jewelry. Providing authentic Hallmark gold. Trustworthy shop.",
                 location: "Uttar Pradesh"
               },
               {
                 name: "Ankit",
                 review: "Bahut hi supportive staff aur owners hain. Exchange policy bhi bahut transparent hai.",
                 location: "Amethi"
               }
             ].map((testimonial, idx) => (
                <div key={idx} className="bg-stone-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-stone-200/60">
                  <div className="flex text-yellow-500 mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-current" />)}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.review}"</p>
                  <div>
                    <h4 className="font-serif font-bold text-dark">{testimonial.name}</h4>
                    <span className="text-xs text-primary uppercase tracking-wider">{testimonial.location}</span>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
