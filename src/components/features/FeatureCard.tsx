import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-purple-100 rounded-lg">
          <Icon className="h-6 w-6 text-purple-600" />
        </div>
        <h3 className="ml-3 text-xl font-semibold text-gray-800">
          {title}
        </h3>
      </div>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;