
import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import ForumCard, { ForumPostProps } from '@/components/ForumCard';
import { PlusCircle, Search, Users, Heart, BookOpen, Briefcase } from 'lucide-react';

// Sample forum categories
const categories = [
  { id: 'stress', name: 'Stress Management', icon: <Heart className="h-4 w-4" /> },
  { id: 'study', name: 'Study Tips', icon: <BookOpen className="h-4 w-4" /> },
  { id: 'social', name: 'Social Connections', icon: <Users className="h-4 w-4" /> },
  { id: 'career', name: 'Career Planning', icon: <Briefcase className="h-4 w-4" /> },
];

// Sample forum posts
const forumPosts: ForumPostProps[] = [
  {
    id: '1',
    title: 'How do you manage exam anxiety?',
    excerpt: 'I have finals coming up and my anxiety is through the roof. Any tips for staying calm during exams? I've tried deep breathing but it just doesn't seem to work for me. Looking for other strategies that might help.',
    category: 'Stress Management',
    comments: 24,
    upvotes: 45,
    timeAgo: '2 hours ago',
    isAnonymous: true,
  },
  {
    id: '2',
    title: 'Finding balance between studies and self-care',
    excerpt: 'Lately I've been struggling to find time for myself while keeping up with coursework. How do you all manage to maintain a healthy work-life balance while in school?',
    author: 'Jamie P.',
    category: 'Self Care',
    comments: 12,
    upvotes: 32,
    timeAgo: '1 day ago',
  },
  {
    id: '3',
    title: 'Career anxiety as graduation approaches',
    excerpt: 'Graduation is in 3 months and I'm feeling lost about what to do next. Anyone else feeling the same? How are you dealing with the uncertainty?',
    author: 'Alex W.',
    category: 'Career',
    comments: 18,
    upvotes: 29,
    timeAgo: '3 days ago',
  },
  {
    id: '4',
    title: 'Best study techniques for online classes',
    excerpt: 'I'm taking all online classes this semester and finding it hard to stay focused. What study techniques have worked best for you in virtual learning environments?',
    author: 'Taylor K.',
    category: 'Study Tips',
    comments: 32,
    upvotes: 56,
    timeAgo: '2 days ago',
  },
  {
    id: '5',
    title: 'Making friends in a new city',
    excerpt: 'Just moved to a new city for university and don't know anyone. Feeling pretty lonely. Any advice on making friends as an introvert?',
    author: 'Jordan M.',
    category: 'Social Connections',
    comments: 15,
    upvotes: 24,
    timeAgo: '4 days ago',
  },
  {
    id: '6',
    title: 'How to prepare for internship interviews',
    excerpt: 'I've got several internship interviews coming up and I'm nervous. Anyone have tips for preparing and making a good impression?',
    category: 'Career',
    comments: 27,
    upvotes: 41,
    timeAgo: '3 days ago',
    isAnonymous: true,
  },
];

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
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-sleepico-blue to-sleepico-purple bg-clip-text text-transparent">
            Community Forums
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with peers, share experiences, and find support in our anonymous forums.
          </p>
        </div>
        
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
      </section>
      
      <Tabs defaultValue="all" className="mb-6">
        <TabsList className="w-full flex overflow-x-auto px-1 py-1 bg-sleepico-light-gray">
          <TabsTrigger value="all" onClick={() => setActiveCategory('all')} className="flex-1">
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
        
        <TabsContent value="all" className="mt-6">
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
          
          <div className="space-y-4">
            {filteredPosts.length > 0 ? (
              filteredPosts.map(post => (
                <ForumCard key={post.id} {...post} />
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">No discussions found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  className="mt-2"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </TabsContent>
        
        {categories.map(category => (
          <TabsContent key={category.id} value={category.id} className="mt-6">
            <div className="space-y-4">
              {filteredPosts.length > 0 ? (
                filteredPosts.map(post => (
                  <ForumCard key={post.id} {...post} />
                ))
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-500">No discussions found in this category.</p>
                  {searchQuery && (
                    <Button 
                      variant="outline" 
                      className="mt-2"
                      onClick={() => setSearchQuery('')}
                    >
                      Clear search
                    </Button>
                  )}
                </div>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </MainLayout>
  );
};

export default Forums;
