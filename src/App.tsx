
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Index";
import Forums from "./pages/Forums";
import Counselors from "./pages/Counselors";
import NotFound from "./pages/NotFound";
import ForumPost from "./pages/ForumPost";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/forums/post/:id" element={<ForumPost />} />
          <Route path="/counselors" element={<Counselors />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
