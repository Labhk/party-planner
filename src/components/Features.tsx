import React from 'react';
import FeaturesList from './features/FeaturesList';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Everything You Need for the Perfect Event
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From planning to execution, our comprehensive suite of tools helps you create unforgettable experiences
          </p>
        </div>
        <FeaturesList />
      </div>
    </section>
  );
};

export default Features;