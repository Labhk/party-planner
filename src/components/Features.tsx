import React from 'react';
import { Calendar, Clock, Users, Music, Utensils, MapPin, Sparkles, Gift, Camera } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Smart Planning',
    description: 'Intelligent timeline creation and task management to keep your event on track'
  },
  {
    icon: Users,
    title: 'Guest Management',
    description: 'Effortlessly manage RSVPs, dietary preferences, and seating arrangements'
  },
  {
    icon: Utensils,
    title: 'Catering Solutions',
    description: 'Curate perfect menus and manage dietary restrictions with ease'
  },
  {
    icon: MapPin,
    title: 'Venue Finder',
    description: 'Discover and book the perfect venue that matches your vision'
  },
  {
    icon: Music,
    title: 'Entertainment',
    description: 'Book top-rated entertainment and create custom playlists'
  },
  {
    icon: Camera,
    title: 'Photo Sharing',
    description: 'Create shared albums and collect memories from all your guests'
  },
  {
    icon: Gift,
    title: 'Registry Tools',
    description: 'Set up and manage gift registries across multiple stores'
  },
  {
    icon: Sparkles,
    title: 'Theme Designer',
    description: 'Design cohesive event themes with our color and style tools'
  },
  {
    icon: Clock,
    title: 'Timeline',
    description: 'Keep your event running smoothly with automated schedules'
  }
];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;