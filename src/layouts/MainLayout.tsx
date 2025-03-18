
import React from 'react';
import Navbar from '../components/Navbar';
import { Toaster } from '@/components/ui/toaster';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-6">
        {children}
      </main>
      <footer className="bg-white py-6 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sleepico. All rights reserved.</p>
          <p className="text-sm mt-1">A safe space for students and youth</p>
        </div>
      </footer>
      <Toaster />
    </div>
  );
};

export default MainLayout;
