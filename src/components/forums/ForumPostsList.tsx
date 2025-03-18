
import React from 'react';
import { Button } from '@/components/ui/button';
import ForumCard, { ForumPostProps } from '@/components/ForumCard';

interface ForumPostsListProps {
  filteredPosts: ForumPostProps[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const ForumPostsList: React.FC<ForumPostsListProps> = ({ 
  filteredPosts,
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory
}) => {
  if (filteredPosts.length > 0) {
    return (
      <div className="space-y-4">
        {filteredPosts.map(post => (
          <ForumCard key={post.id} {...post} />
        ))}
      </div>
    );
  }

  return (
    <div className="text-center py-10">
      <p className="text-gray-500">
        {activeCategory !== 'all' 
          ? "No discussions found in this category." 
          : "No discussions found matching your criteria."}
      </p>
      {searchQuery && (
        <Button 
          variant="outline" 
          className="mt-2"
          onClick={() => setSearchQuery('')}
        >
          Clear search
        </Button>
      )}
      {activeCategory !== 'all' && !searchQuery && (
        <Button 
          variant="outline" 
          className="mt-2"
          onClick={() => setActiveCategory('all')}
        >
          View all categories
        </Button>
      )}
      {(searchQuery || activeCategory !== 'all') && (
        <Button 
          variant="outline" 
          className="mt-2 ml-2"
          onClick={() => {
            setSearchQuery('');
            setActiveCategory('all');
          }}
        >
          Clear all filters
        </Button>
      )}
    </div>
  );
};

export default ForumPostsList;
