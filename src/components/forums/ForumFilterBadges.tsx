
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface ForumFilterBadgesProps {
  activeFilter?: string;
  onFilterChange?: (filter: string) => void;
}

const ForumFilterBadges: React.FC<ForumFilterBadgesProps> = ({ 
  activeFilter = 'popular',
  onFilterChange = () => {}
}) => {
  const filters = [
    { id: 'popular', label: 'Popular' },
    { id: 'recent', label: 'Recent' },
    { id: 'unanswered', label: 'Unanswered' }
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {filters.map(filter => (
        <Badge 
          key={filter.id}
          variant="outline" 
          className={`bg-white cursor-pointer hover:bg-gray-100 transition-colors ${
            activeFilter === filter.id ? 'border-blue-500 text-blue-500' : ''
          }`}
          onClick={() => onFilterChange(filter.id)}
        >
          {filter.label}
        </Badge>
      ))}
    </div>
  );
};

export default ForumFilterBadges;
