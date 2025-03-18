
import React from 'react';
import { Heart, BookOpen, Users, Briefcase } from 'lucide-react';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';

// Forum categories data
export const categories = [
  { id: 'stress', name: 'Stress Management', icon: <Heart className="h-4 w-4" /> },
  { id: 'study', name: 'Study Tips', icon: <BookOpen className="h-4 w-4" /> },
  { id: 'social', name: 'Social Connections', icon: <Users className="h-4 w-4" /> },
  { id: 'career', name: 'Career Planning', icon: <Briefcase className="h-4 w-4" /> },
];

interface ForumCategoriesProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const ForumCategories: React.FC<ForumCategoriesProps> = ({ 
  activeCategory, 
  setActiveCategory 
}) => {
  return (
    <TabsList className="w-full flex overflow-x-auto px-1 py-1 bg-sleepico-light-gray">
      <TabsTrigger 
        value="all" 
        onClick={() => setActiveCategory('all')} 
        className="flex-1"
      >
        All Topics
      </TabsTrigger>
      {categories.map(category => (
        <TabsTrigger 
          key={category.id} 
          value={category.id}
          onClick={() => setActiveCategory(category.id)}
          className="flex-1 flex items-center gap-1"
        >
          {category.icon}
          <span className="hidden md:inline">{category.name}</span>
        </TabsTrigger>
      ))}
    </TabsList>
  );
};

export default ForumCategories;
