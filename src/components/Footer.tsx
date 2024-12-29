import React from 'react';
import { PartyPopper, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-purple-900 to-purple-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <PartyPopper className="h-6 w-6 text-purple-300" />
              <span className="ml-2 text-xl font-bold">Party Perfect</span>
            </div>
            <p className="text-purple-200">
              one celebration at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Portfolio', 'Testimonials', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-purple-200 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {['Wedding Planning', 'Corporate Events', 'Birthday Parties', 'Social Gatherings', 'Virtual Events'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-purple-200 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-300" />
                <span className="text-purple-200">contact@partyperfect.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-300" />
                <span className="text-purple-200">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-300" />
                <span className="text-purple-200">123 Event Street, Suite 100<br />New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-purple-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-purple-200">
              © {currentYear} Party Perfect. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-purple-200 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;