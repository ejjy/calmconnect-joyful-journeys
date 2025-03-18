
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Calendar } from 'lucide-react';

export interface CounselorProps {
  id: string;
  name: string;
  title: string;
  specialty: string[];
  rating: number;
  reviewCount: number;
  availability: string;
  imageUrl?: string;
}

const CounselorCard: React.FC<CounselorProps> = ({
  id,
  name,
  title,
  specialty,
  rating,
  reviewCount,
  availability,
  imageUrl,
}) => {
  return (
    <Card className="sleepico-card hover:border-sleepico-light-purple transition-all">
      <CardHeader className="pb-2 flex flex-row items-center space-x-4">
        <Avatar className="h-16 w-16">
          {imageUrl ? (
            <AvatarImage src={imageUrl} alt={name} />
          ) : null}
          <AvatarFallback className="bg-sleepico-light-purple text-white text-lg">
            {name.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-lg font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground">{title}</p>
          <div className="flex items-center mt-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-1 mb-3">
          {specialty.map((spec, index) => (
            <Badge key={index} variant="secondary" className="bg-sleepico-light-gray text-sleepico-purple border-none">
              {spec}
            </Badge>
          ))}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-1 text-sleepico-blue" />
          <span>{availability}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full bg-sleepico-purple hover:bg-sleepico-purple/90"
        >
          Book Session
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CounselorCard;
