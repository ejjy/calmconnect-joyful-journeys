
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Button } from '@/components/ui/button';
import MoodTracker from '@/components/MoodTracker';
import DashboardStats from '@/components/DashboardStats';
import ForumCard, { ForumPostProps } from '@/components/ForumCard';
import { ArrowRight, BookOpen, MessageCircle, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample forum posts data
const recentForumPosts: ForumPostProps[] = [
  {
    id: '1',
    title: 'How do you manage exam anxiety?',
    excerpt: 'I have finals coming up and my anxiety is through the roof. Any tips for staying calm during exams?',
    category: 'Stress Management',
    comments: 24,
    upvotes: 45,
    timeAgo: '2 hours ago',
    isAnonymous: true,
  },
  {
    id: '2',
    title: 'Finding balance between studies and self-care',
    excerpt: 'Lately I've been struggling to find time for myself while keeping up with coursework. How do you all manage?',
    author: 'Jamie P.',
    category: 'Self Care',
    comments: 12,
    upvotes: 32,
    timeAgo: '1 day ago',
  },
  {
    id: '3',
    title: 'Career anxiety as graduation approaches',
    excerpt: 'Graduation is in 3 months and I'm feeling lost about what to do next. Anyone else feeling the same?',
    author: 'Alex W.',
    category: 'Career',
    comments: 18,
    upvotes: 29,
    timeAgo: '3 days ago',
  },
];

// Daily affirmation data
const dailyMotivation = {
  quote: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
  author: "Steve Jobs",
};

const Dashboard: React.FC = () => {
  return (
    <MainLayout>
      <section className="mb-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-sleepico-blue to-sleepico-purple bg-clip-text text-transparent">
            Your Mental Wellness Journey
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track your moods, connect with peers, and access support when you need it.
          </p>
        </div>
        
        <DashboardStats />
      </section>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-sleepico-blue">Recent Forum Discussions</h2>
              <Link to="/forums">
                <Button variant="ghost" size="sm" className="text-sleepico-blue">
                  View all <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="space-y-4">
              {recentForumPosts.map((post) => (
                <ForumCard key={post.id} {...post} />
              ))}
            </div>
          </section>
          
          <section className="sleepico-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-sleepico-blue">Daily Motivation</h2>
              <BookOpen className="h-5 w-5 text-sleepico-purple" />
            </div>
            <blockquote className="border-l-4 border-sleepico-light-purple pl-4 italic text-gray-700">
              "{dailyMotivation.quote}"
            </blockquote>
            <p className="text-right text-sm text-gray-500 mt-2">— {dailyMotivation.author}</p>
          </section>
        </div>
        
        <div className="space-y-6">
          <MoodTracker />
          
          <div className="sleepico-card p-6 space-y-4">
            <h2 className="text-xl font-semibold text-sleepico-blue">Quick Actions</h2>
            
            <div className="grid gap-3">
              <Button className="w-full justify-start bg-sleepico-blue hover:bg-sleepico-blue/90">
                <MessageCircle className="mr-2 h-4 w-4" />
                Talk to a Counselor
              </Button>
              
              <Button variant="outline" className="w-full justify-start border-sleepico-light-blue text-sleepico-blue hover:bg-sleepico-light-gray">
                <Users className="mr-2 h-4 w-4" />
                Join Group Session
              </Button>
              
              <Link to="/forums" className="w-full">
                <Button variant="ghost" className="w-full justify-start text-sleepico-purple hover:bg-sleepico-light-gray">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Start Forum Discussion
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
