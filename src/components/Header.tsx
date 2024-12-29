import React, { useState, useEffect } from 'react';
import { PartyPopper, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'Events', href: '#' },
    { label: 'Templates', href: '#' },
    { label: 'Pricing', href: '#' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
              <PartyPopper className="relative h-8 w-8 text-purple-600 transform group-hover:scale-110 transition-transform duration-200" />
            </div>
            <span className="ml-3 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              Party Perfect
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200 group"
              >
                {item.label}
                <span className="absolute bottom-1.5 left-3 w-0 h-0.5 bg-purple-600 group-hover:w-[calc(100%-24px)] transition-all duration-200"></span>
              </a>
            ))}
            <button className="relative inline-flex items-center justify-center bg-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-medium overflow-hidden transition-all duration-300 hover:bg-purple-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-200"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed inset-0 top-20 bg-white/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <button 
              className="w-full mt-4 bg-purple-600 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-purple-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;