
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, ArrowUp, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface ForumPostProps {
  id: string;
  title: string;
  excerpt: string;
  author?: string;
  category: string;
  comments: number;
  upvotes: number;
  timeAgo: string;
  isAnonymous?: boolean;
}

const ForumCard: React.FC<ForumPostProps> = ({
  id,
  title,
  excerpt,
  author,
  category,
  comments,
  upvotes,
  timeAgo,
  isAnonymous = false,
}) => {
  return (
    <Card className="sleepico-card hover:border-sleepico-light-blue transition-all">
      <CardHeader className="pb-2 pt-4">
        <div className="flex items-start justify-between">
          <div>
            <Link 
              to={`/forums/post/${id}`}
              className="text-lg font-medium hover:text-sleepico-blue transition-colors line-clamp-2"
            >
              {title}
            </Link>
            <div className="flex items-center mt-1 space-x-2">
              <Badge variant="outline" className="bg-sleepico-light-gray text-sleepico-blue border-none">
                {category}
              </Badge>
              <span className="text-xs text-gray-500">{timeAgo}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-1 text-gray-500 hover:text-sleepico-purple transition-colors">
              <ArrowUp className="h-4 w-4" />
              <span className="text-xs font-medium">{upvotes}</span>
            </button>
            <div className="flex items-center space-x-1 text-gray-500">
              <MessageCircle className="h-4 w-4" />
              <span className="text-xs font-medium">{comments}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {isAnonymous ? (
              <span className="text-xs text-gray-500">Posted anonymously</span>
            ) : (
              <div className="flex items-center space-x-2">
                <Avatar className="h-6 w-6">
                  <AvatarFallback className="bg-sleepico-light-blue text-white text-xs">
                    {author?.substring(0, 2).toUpperCase() || "AN"}
                  </AvatarFallback>
                </Avatar>
                <span className="text-xs font-medium">{author}</span>
              </div>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ForumCard;
