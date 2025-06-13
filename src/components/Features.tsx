
import { Button } from "@/components/ui/button";

const Features = () => {
  const features = [
    {
      emoji: "🤝",
      title: "Smart Team Builder",
      description: "AI-powered matching to find creators who complement your skills perfectly",
      gradient: "from-violet to-mint"
    },
    {
      emoji: "💬",
      title: "Collab Workspace",
      description: "Built-in chat, shared assets, and project management tools for seamless collaboration",
      gradient: "from-mint to-warm-yellow"
    },
    {
      emoji: "⭐",
      title: "Karma System",
      description: "Build trust and reputation through reliable collaboration and quality contributions",
      gradient: "from-warm-yellow to-violet"
    },
    {
      emoji: "🎨",
      title: "Creative Assets",
      description: "Access royalty-free music, footage, and design elements for your projects",
      gradient: "from-violet to-warm-yellow"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🎤 Singers Meet Editors. Actors Meet Directors.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to turn creative ideas into amazing stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-card rounded-2xl p-8 border card-hover h-full">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6`}>
                  <span className="text-2xl">{feature.emoji}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">🤝 Make Stories, Not Invoices.</h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join a community that values creativity, collaboration, and passion over profit
          </p>
          <Button size="lg" className="gradient-violet text-white px-8">
            Join Our Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
