
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Forums', path: '/forums' },
    { name: 'Counselors', path: '/counselors' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-sleepico-blue to-sleepico-purple animate-pulse-gentle"></div>
            <span className="text-xl font-heading font-semibold bg-gradient-to-r from-sleepico-blue to-sleepico-purple bg-clip-text text-transparent">
              Sleepico
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-sleepico-light-gray text-sleepico-blue'
                      : 'text-gray-600 hover:text-sleepico-blue hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center ml-4 space-x-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all text-sleepico-blue" />
              </Button>
              
              <Button
                variant="ghost"
                className="rounded-full text-gray-600 hover:text-sleepico-blue"
              >
                <User className="mr-2 h-4 w-4" />
                Login
              </Button>
              
              <Button className="bg-gradient-to-r from-sleepico-blue to-sleepico-purple hover:opacity-90 transition-opacity">
                Sign Up
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-sleepico-blue hover:bg-gray-50 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-lg animate-fade-in">
          <div className="space-y-1 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-sleepico-light-gray text-sleepico-blue'
                    : 'text-gray-600 hover:text-sleepico-blue hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 flex flex-col space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-start text-gray-600 hover:text-sleepico-blue"
              >
                <User className="mr-2 h-4 w-4" />
                Login
              </Button>
              <Button className="w-full bg-gradient-to-r from-sleepico-blue to-sleepico-purple hover:opacity-90 transition-opacity">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
