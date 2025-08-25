import { Toaster } from "@/components/ui/toaster"; // shadcn/ui toaster
import { Toaster as Sonner } from "@/components/ui/sonner"; // Sonner notifications
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* ✅ Toast containers */}
      <Toaster /> {/* Shadcn Toaster (for inline/simple toasts) */}
      <Sonner />  {/* Sonner (for beautiful notifications) */}

      {/* ✅ Router setup */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
