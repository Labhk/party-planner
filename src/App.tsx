import React from 'react';
import Header from './components/Header';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Make Your Events Extraordinary
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Plan, organize, and execute perfect events with our comprehensive suite of planning tools
            </p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Start Planning Now
            </button>
          </div>
        </section>

        {/* Features Section */}
        <Features />
      </main>
      <Footer />
    </div>
  );
}