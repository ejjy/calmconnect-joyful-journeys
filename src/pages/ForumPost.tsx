
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { forumPosts } from '@/data/forumPosts';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ThumbsUp, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ForumPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = forumPosts.find(post => post.id === id);

  if (!post) {
    return (
      <MainLayout>
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold mb-4">Post Not Found</h2>
          <p className="mb-4">The post you're looking for doesn't exist or has been removed.</p>
          <Link to="/forums">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Forums
            </Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="mb-6">
        <Link to="/forums">
          <Button variant="outline" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Forums
          </Button>
        </Link>
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold">{post.title}</h1>
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                  <span>{post.isAnonymous ? 'Anonymous' : post.author}</span>
                  <span>•</span>
                  <span>{post.timeAgo}</span>
                </div>
              </div>
              <Badge>{post.category}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">{post.excerpt}</p>
          </CardContent>
          <CardFooter className="border-t pt-4 flex justify-between">
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="text-gray-500">
                <ThumbsUp className="mr-1 h-4 w-4" />
                {post.upvotes}
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-500">
                <MessageCircle className="mr-1 h-4 w-4" />
                {post.comments}
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </MainLayout>
  );
};

export default ForumPost;
