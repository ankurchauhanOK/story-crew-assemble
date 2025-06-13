
import ProjectCard from "./ProjectCard";

const ProjectFeed = () => {
  const projects = [
    {
      title: "Indie Music Video - Dreamy Vibes 🌙",
      description: "Creating a dreamy, ethereal music video for an indie artist. Think Billie Eilish meets Lorde aesthetics.",
      location: "Mumbai, Maharashtra",
      roles: ["Singer", "Cinematographer", "Color Grader"],
      skillTags: ["Indie Music", "Cinematography", "Color Grading", "Aesthetic"],
      contribution: "₹5,000 for location rent and props",
      duration: "2 weekends",
      creatorKarma: 85,
      creator: "Arjun Mehta"
    },
    {
      title: "Short Film: The Last Letter 📝",
      description: "A heartwarming short film about connections across generations through handwritten letters.",
      location: "Bangalore, Karnataka",
      roles: ["Actor (Senior)", "Sound Engineer", "Editor"],
      skillTags: ["Drama", "Emotional", "Sound Design", "Editing"],
      duration: "3 weeks",
      creatorKarma: 92,
      creator: "Priya Sharma"
    },
    {
      title: "Food Reel Series - Street Food Stories 🍛",
      description: "Documenting authentic street food stories across different neighborhoods.",
      location: "Delhi, NCR",
      roles: ["Food Stylist", "Drone Operator", "Social Media Manager"],
      skillTags: ["Food Photography", "Drone", "Social Media", "Documentary"],
      contribution: "₹3,000 for food and travel",
      duration: "1 month",
      creatorKarma: 78,
      creator: "Rohit Singh"
    },
    {
      title: "Dance Cover - Bollywood Fusion 💃",
      description: "Creating a high-energy dance cover blending classical and contemporary styles.",
      location: "Chennai, Tamil Nadu",
      roles: ["Choreographer", "Backup Dancers", "Video Editor"],
      skillTags: ["Dance", "Choreography", "Bollywood", "Fusion"],
      duration: "2 weeks",
      creatorKarma: 88,
      creator: "Kavya Iyer"
    },
    {
      title: "Comedy Sketch - Office Life Parody 😂",
      description: "Funny take on remote work culture and office dynamics post-pandemic.",
      location: "Pune, Maharashtra",
      roles: ["Comic Actor", "Script Writer", "Sound Mixer"],
      skillTags: ["Comedy", "Acting", "Script Writing", "Audio"],
      duration: "1 week",
      creatorKarma: 81,
      creator: "Ankit Joshi"
    },
    {
      title: "Travel Vlog - Hidden Gems of Rajasthan 🏰",
      description: "Showcasing lesser-known beautiful places in Rajasthan with storytelling focus.",
      location: "Jaipur, Rajasthan",
      roles: ["Travel Host", "Storyteller", "Thumbnail Designer"],
      skillTags: ["Travel", "Storytelling", "Graphic Design", "Tourism"],
      contribution: "₹8,000 for travel expenses",
      duration: "1 month",
      creatorKarma: 94,
      creator: "Ishita Agarwal"
    }
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🎬 Lights, Camera, Collaboration
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing projects and find your perfect creative team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Load More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectFeed;
