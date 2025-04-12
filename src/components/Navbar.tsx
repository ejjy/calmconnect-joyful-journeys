
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun, User } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [signupDialogOpen, setSignupDialogOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Forums', path: '/forums' },
    { name: 'Counselors', path: '/counselors' },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a mock login - in a real app, you would connect to an authentication service
    if (email && password) {
      toast({
        title: "Login successful",
        description: "Welcome back to Sleepico!",
      });
      setLoginDialogOpen(false);
      setEmail('');
      setPassword('');
    } else {
      toast({
        title: "Login failed",
        description: "Please enter your email and password",
        variant: "destructive"
      });
    }
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a mock signup - in a real app, you would connect to an authentication service
    if (name && email && password) {
      toast({
        title: "Account created",
        description: "Welcome to Sleepico! Your account has been created successfully.",
      });
      setSignupDialogOpen(false);
      setName('');
      setEmail('');
      setPassword('');
    } else {
      toast({
        title: "Signup failed",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
    }
  };

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
                onClick={() => setLoginDialogOpen(true)}
              >
                <User className="mr-2 h-4 w-4" />
                Login
              </Button>
              
              <Button 
                className="bg-gradient-to-r from-sleepico-blue to-sleepico-purple hover:opacity-90 transition-opacity"
                onClick={() => setSignupDialogOpen(true)}
              >
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
                onClick={() => {
                  setMobileMenuOpen(false);
                  setLoginDialogOpen(true);
                }}
              >
                <User className="mr-2 h-4 w-4" />
                Login
              </Button>
              <Button 
                className="w-full bg-gradient-to-r from-sleepico-blue to-sleepico-purple hover:opacity-90 transition-opacity"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSignupDialogOpen(true);
                }}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Login Dialog */}
      <Dialog open={loginDialogOpen} onOpenChange={setLoginDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Login to Sleepico</DialogTitle>
            <DialogDescription>
              Enter your credentials to access your account
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleLogin}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your@email.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" type="button" onClick={() => setLoginDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Login</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Signup Dialog */}
      <Dialog open={signupDialogOpen} onOpenChange={setSignupDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create an Account</DialogTitle>
            <DialogDescription>
              Join Sleepico to get personalized support for your mental wellness journey
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSignup}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  placeholder="Your name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input 
                  id="signup-email" 
                  type="email" 
                  placeholder="your@email.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="signup-password">Password</Label>
                <Input 
                  id="signup-password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" type="button" onClick={() => setSignupDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Create account</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navbar;

