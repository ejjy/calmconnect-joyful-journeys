
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-sleepico-blue to-sleepico-purple mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold animate-pulse-gentle">
          404
        </div>
        <h1 className="text-3xl font-bold mb-4 text-sleepico-blue">Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-6 max-w-md mx-auto">
          We couldn't find the page you're looking for. Let's get you back on track.
        </p>
        <Link to="/">
          <Button className="bg-gradient-to-r from-sleepico-blue to-sleepico-purple hover:opacity-90">
            <Home className="mr-2 h-4 w-4" />
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
