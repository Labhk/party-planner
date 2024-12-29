import { Calendar, Clock, Users, Music, Utensils, MapPin, Sparkles, Gift, Camera } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const featuresList: Feature[] = [
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