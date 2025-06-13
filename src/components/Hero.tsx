
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet/5 via-mint/5 to-warm-yellow/5"></div>
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              🎬 Turn Ideas into{" "}
              <span className="bg-gradient-to-r from-violet to-mint bg-clip-text text-transparent">
                Stories Together
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A creator's platform to find your perfect team — no money, just magic.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="gradient-violet text-white px-8 py-3 text-lg">
                <Search className="mr-2 h-5 w-5" />
                Explore Projects
              </Button>
              
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
                ✍️ Post Your Idea
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-scale-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-violet mb-2">500+</div>
              <div className="text-muted-foreground">Active Creators</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-mint mb-2">150+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warm-yellow mb-2">25+</div>
              <div className="text-muted-foreground">Cities Connected</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
