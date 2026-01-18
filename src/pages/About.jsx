import React from 'react';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative group">
                 <img 
                    src="/craftsmanship.png" 
                    alt="Jewelry Making" 
                    className="relative rounded-lg shadow-xl w-full transform transition duration-500 group-hover:scale-[1.01]"
                />
            </div>
            <div>
                <h2 className="text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-red-700 mb-6">A Legacy of Craftsmanship</h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-red-500 rounded-full mb-8"></div>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg font-light">
                    Founded in 1995, Shiva Jewelers began with a simple vision: to bring the grandeur of <span className="font-semibold text-amber-700">Indian royal heritage</span> to the modern woman. 
                    What started as a small family-run workshop has grown into a trusted name synonymous with <span className="italic">quality, purity, and exquisite design</span>.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg font-light">
                    We believe everyday luxury is a right. Our artisans, some hailing from families that have served royalty for generations, ensure that every piece is perfect.
                </p>
            </div>
        </div>

        <SectionTitle title="Humare Sanskaar (Our Values)" centered={true} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Value 1 */}
            <div className="p-8 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="w-16 h-16 mx-auto mb-6 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3 text-amber-800">Purity First</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                    "Humare sone aur gemstones ki quality mein koi samjhauta nahi. <br/>
                    <span className="text-amber-700 font-bold">100% Transparency</span> hi humari pehchan hai."
                </p>
            </div>

            {/* Value 2 */}
            <div className="p-8 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3 text-red-800">Customer Dedication</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                    "Aapki khushi hi humari asli kamai hai. <br/>
                    Hum aapko <span className="text-red-700 font-bold">Perfect Match</span> dhoondne mein madad karte hain."
                </p>
            </div>

            {/* Value 3 */}
            <div className="p-8 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="w-16 h-16 mx-auto mb-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3 text-indigo-800">Innovation</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                    "Rivayat aur naye trends ka anokha sangam. <br/>
                    <span className="text-indigo-700 font-bold">Timeless Masterpieces</span> jo hamesha naye lagen."
                </p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default About;
