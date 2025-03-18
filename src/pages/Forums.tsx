
import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Tabs, TabsContent } from '@/components/ui/tabs';

// Import the new components
import ForumHeader from '@/components/forums/ForumHeader';
import ForumSearchBar from '@/components/forums/ForumSearchBar';
import ForumCategories, { categories } from '@/components/forums/ForumCategories';
import ForumFilterBadges from '@/components/forums/ForumFilterBadges';
import ForumPostsList from '@/components/forums/ForumPostsList';
import { forumPosts } from '@/data/forumPosts';

const Forums: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Filter posts based on search query and active category
  const filteredPosts = forumPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || post.category.toLowerCase().includes(activeCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  return (
    <MainLayout>
      <section className="mb-8">
        <ForumHeader />
        <ForumSearchBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />
      </section>
      
      <Tabs defaultValue="all" className="mb-6">
        <ForumCategories 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
        
        <TabsContent value="all" className="mt-6">
          <ForumFilterBadges />
          <ForumPostsList 
            filteredPosts={filteredPosts}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </TabsContent>
        
        {categories.map(category => (
          <TabsContent key={category.id} value={category.id} className="mt-6">
            <ForumPostsList 
              filteredPosts={filteredPosts}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </TabsContent>
        ))}
      </Tabs>
    </MainLayout>
  );
};

export default Forums;
