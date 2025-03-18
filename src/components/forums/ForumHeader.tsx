
import React from 'react';

const ForumHeader: React.FC = () => {
  return (
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-sleepico-blue to-sleepico-purple bg-clip-text text-transparent">
        Community Forums
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Connect with peers, share experiences, and find support in our anonymous forums.
      </p>
    </div>
  );
};

export default ForumHeader;
