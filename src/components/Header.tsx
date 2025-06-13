
import { Button } from "@/components/ui/button";
import { Search, User } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg gradient-violet flex items-center justify-center">
              <span className="text-white font-bold text-sm">SC</span>
            </div>
            <span className="font-bold text-xl">StoryCrew</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#" className="transition-colors hover:text-primary">
              Explore
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Projects
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Creators
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Community
            </a>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 bg-muted rounded-full px-4 py-2 w-64">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects, creators..."
              className="bg-transparent border-none outline-none flex-1 text-sm"
            />
          </div>
          
          <Button variant="outline" size="sm">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button>
          
          <Button size="sm" className="gradient-violet text-white">
            Post Project
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
