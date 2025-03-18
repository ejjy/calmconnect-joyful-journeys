
import React from 'react';
import { Badge } from '@/components/ui/badge';

const ForumFilterBadges: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <Badge variant="outline" className="bg-white">
        Popular
      </Badge>
      <Badge variant="outline" className="bg-white">
        Recent
      </Badge>
      <Badge variant="outline" className="bg-white">
        Unanswered
      </Badge>
    </div>
  );
};

export default ForumFilterBadges;
