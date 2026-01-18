import React from 'react';

const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4 relative inline-block">
        <span className="block text-primary text-sm font-sans tracking-[0.3em] uppercase mb-2 opacity-80">Discover</span>
        {title}
        <div className="flex items-center justify-center mt-4 space-x-2">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></span>
            <span className="w-2.5 h-2.5 rotate-45 border border-primary bg-primary/20"></span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></span>
        </div>
      </h2>
      {subtitle && <p className="text-gray-500 mt-4 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
