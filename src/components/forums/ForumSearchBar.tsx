
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PlusCircle, Search } from 'lucide-react';

interface ForumSearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const ForumSearchBar: React.FC<ForumSearchBarProps> = ({ 
  searchQuery, 
  setSearchQuery 
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
      <div className="relative w-full md:w-96">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Search discussions..."
          className="pl-9"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <Button className="w-full md:w-auto bg-gradient-to-r from-sleepico-blue to-sleepico-purple hover:opacity-90 transition-opacity">
        <PlusCircle className="mr-2 h-4 w-4" />
        Start New Discussion
      </Button>
    </div>
  );
};

export default ForumSearchBar;
