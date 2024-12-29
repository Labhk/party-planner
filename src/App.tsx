import React from 'react';
import Header from './components/Header';
import EventAlgebra from './components/EventAlgebra';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-12 pt-24">
        <div className="mt-8">
          <EventAlgebra />
        </div>
      </div>
    </div>
  );
}

export default App;