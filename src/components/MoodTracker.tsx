
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Smile, Meh, Frown, ThumbsUp } from 'lucide-react';
import { useToast } from '@/components/ui/toast';

const moods = [
  { id: 1, name: 'Happy', icon: Smile, color: 'text-sleepico-green' },
  { id: 2, name: 'Neutral', icon: Meh, color: 'text-amber-400' },
  { id: 3, name: 'Sad', icon: Frown, color: 'text-sleepico-blue' },
];

const MoodTracker: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [stressLevel, setStressLevel] = useState<number[]>([5]);
  const { toast } = useToast();

  const handleMoodSubmit = () => {
    if (selectedMood === null) {
      toast({
        title: "Please select a mood",
        description: "Let us know how you're feeling today",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Mood tracked!",
      description: "Thanks for checking in today",
      action: (
        <div className="h-8 w-8 bg-sleepico-green rounded-full flex items-center justify-center">
          <ThumbsUp className="h-4 w-4 text-white" />
        </div>
      ),
    });
  };

  return (
    <Card className="sleepico-card border-none">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-center text-sleepico-blue">
          How are you feeling today?
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-center space-x-6 pt-4">
          {moods.map((mood) => (
            <div 
              key={mood.id} 
              className={`flex flex-col items-center cursor-pointer transition-all p-3 rounded-lg ${
                selectedMood === mood.id 
                  ? 'bg-sleepico-light-gray scale-110' 
                  : 'hover:bg-gray-50'
              }`}
              onClick={() => setSelectedMood(mood.id)}
            >
              <mood.icon className={`h-10 w-10 mb-2 ${mood.color}`} />
              <span className="text-sm font-medium text-gray-700">{mood.name}</span>
            </div>
          ))}
        </div>
        
        <div className="pt-4">
          <p className="text-sm font-medium text-gray-700 mb-3">Stress Level</p>
          <Slider
            value={stressLevel}
            onValueChange={setStressLevel}
            max={10}
            step={1}
            className="py-4"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Low</span>
            <span>Moderate</span>
            <span>High</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleMoodSubmit}
          className="w-full bg-sleepico-green hover:bg-sleepico-green/90"
        >
          Track My Mood
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MoodTracker;
