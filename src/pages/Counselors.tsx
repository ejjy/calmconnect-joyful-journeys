
import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CounselorCard, { CounselorProps } from '@/components/CounselorCard';
import { Search, Filter } from 'lucide-react';

// Sample counselor data
const counselors: CounselorProps[] = [
  {
    id: '1',
    name: 'Dr. Maya Johnson',
    title: 'Clinical Psychologist',
    specialty: ['Stress Management', 'Academic Anxiety', 'Depression'],
    rating: 4.8,
    reviewCount: 45,
    availability: 'Available today',
  },
  {
    id: '2',
    name: 'Alex Thompson',
    title: 'Career Counselor',
    specialty: ['Career Planning', 'Interview Prep', 'Resume Building'],
    rating: 4.5,
    reviewCount: 32,
    availability: 'Available tomorrow',
  },
  {
    id: '3',
    name: 'Dr. Sarah Chen',
    title: 'Mental Health Therapist',
    specialty: ['Depression', 'Social Anxiety', 'Family Issues'],
    rating: 4.9,
    reviewCount: 57,
    availability: 'Available in 2 days',
  },
  {
    id: '4',
    name: 'James Wilson',
    title: 'Academic Advisor',
    specialty: ['Study Strategies', 'Time Management', 'Goal Setting'],
    rating: 4.6,
    reviewCount: 28,
    availability: 'Available today',
  },
  {
    id: '5',
    name: 'Dr. Olivia Martinez',
    title: 'Licensed Therapist',
    specialty: ['Stress Management', 'Self Esteem', 'Life Transitions'],
    rating: 4.7,
    reviewCount: 39,
    availability: 'Available tomorrow',
  },
  {
    id: '6',
    name: 'Michael Lee',
    title: 'Life Coach',
    specialty: ['Personal Development', 'Motivation', 'Work-Life Balance'],
    rating: 4.4,
    reviewCount: 22,
    availability: 'Available in 3 days',
  },
];

const Counselors: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  
  // Filter counselors based on search query and specialty filter
  const filteredCounselors = counselors.filter(counselor => {
    const matchesSearch = counselor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          counselor.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'all' || 
                            counselor.specialty.some(spec => 
                              spec.toLowerCase().includes(selectedSpecialty.toLowerCase()));
    return matchesSearch && matchesSpecialty;
  });

  return (
    <MainLayout>
      <section className="mb-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-sleepico-blue to-sleepico-purple bg-clip-text text-transparent">
            Professional Counselors
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with trained professionals for personalized guidance and support.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative w-full md:flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search counselors by name or specialty..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="w-full md:w-64">
            <Select
              value={selectedSpecialty}
              onValueChange={setSelectedSpecialty}
            >
              <SelectTrigger>
                <div className="flex items-center">
                  <Filter className="mr-2 h-4 w-4 text-sleepico-blue" />
                  <SelectValue placeholder="Filter by specialty" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Specialties</SelectItem>
                <SelectItem value="stress">Stress Management</SelectItem>
                <SelectItem value="anxiety">Anxiety</SelectItem>
                <SelectItem value="depression">Depression</SelectItem>
                <SelectItem value="career">Career Planning</SelectItem>
                <SelectItem value="academic">Academic Support</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>
      
      <Tabs defaultValue="all" className="mb-6">
        <TabsList className="w-full flex overflow-x-auto px-1 py-1 bg-sleepico-light-gray">
          <TabsTrigger value="all" className="flex-1">
            All Counselors
          </TabsTrigger>
          <TabsTrigger value="available-today" className="flex-1">
            Available Today
          </TabsTrigger>
          <TabsTrigger value="highest-rated" className="flex-1">
            Highest Rated
          </TabsTrigger>
          <TabsTrigger value="most-reviewed" className="flex-1">
            Most Reviewed
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          {filteredCounselors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCounselors.map(counselor => (
                <CounselorCard key={counselor.id} {...counselor} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500">No counselors found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-2"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedSpecialty('all');
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="available-today" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCounselors
              .filter(counselor => counselor.availability.includes('today'))
              .map(counselor => (
                <CounselorCard key={counselor.id} {...counselor} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="highest-rated" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...filteredCounselors]
              .sort((a, b) => b.rating - a.rating)
              .map(counselor => (
                <CounselorCard key={counselor.id} {...counselor} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="most-reviewed" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...filteredCounselors]
              .sort((a, b) => b.reviewCount - a.reviewCount)
              .map(counselor => (
                <CounselorCard key={counselor.id} {...counselor} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
};

export default Counselors;
