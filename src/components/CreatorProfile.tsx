
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Users, Briefcase, Heart, MessageCircle, Share2, Settings, Camera, Instagram, Youtube, Linkedin, Plus } from "lucide-react";

interface CreatorProfileProps {
  isOwnProfile?: boolean;
}

const CreatorProfile = ({ isOwnProfile = false }: CreatorProfileProps) => {
  const profileData = {
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=300&fit=crop",
    profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop",
    name: "Priya Sharma",
    tagline: "Cinematic storyteller crafting emotional narratives",
    location: "Bangalore, Karnataka",
    isCollabOpen: true,
    stats: {
      projects: 12,
      collaborations: 28,
      followers: 1.2
    },
    socialHandles: {
      instagram: "@priyaframes",
      youtube: "@priyasharmastudios",
      linkedin: "priya-sharma-filmmaker"
    },
    portfolio: [
      {
        id: 1,
        type: "video",
        thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=300&fit=crop",
        title: "Monsoon Dreams",
        views: "12K",
        likes: "892"
      },
      {
        id: 2,
        type: "image",
        thumbnail: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=300&h=300&fit=crop",
        title: "Urban Poetry",
        views: "8.5K",
        likes: "634"
      },
      {
        id: 3,
        type: "video",
        thumbnail: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=300&h=300&fit=crop",
        title: "Street Symphony",
        views: "15K",
        likes: "1.1K"
      },
      {
        id: 4,
        type: "image",
        thumbnail: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=300&h=300&fit=crop",
        title: "Golden Hour",
        views: "6.7K",
        likes: "445"
      }
    ],
    stories: [
      {
        id: 1,
        thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=80&h=80&fit=crop",
        hasNew: true
      },
      {
        id: 2,
        thumbnail: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=80&h=80&fit=crop",
        hasNew: false
      }
    ]
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Cover Image Section */}
      <div className="relative h-64 md:h-80">
        <img 
          src={profileData.coverImage} 
          alt="Cover" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Header Actions */}
        <div className="absolute top-4 right-4 flex gap-2">
          {isOwnProfile ? (
            <Button size="sm" variant="secondary" className="bg-black/20 backdrop-blur-sm border-white/20 text-white hover:bg-black/30">
              <Settings className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          ) : (
            <>
              <Button size="sm" variant="secondary" className="bg-black/20 backdrop-blur-sm border-white/20 text-white hover:bg-black/30">
                <MessageCircle className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="secondary" className="bg-black/20 backdrop-blur-sm border-white/20 text-white hover:bg-black/30">
                <Share2 className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>

        {/* Profile Info Overlay */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-end gap-4">
            <div className="relative">
              <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-white">
                <AvatarImage src={profileData.profileImage} alt={profileData.name} />
                <AvatarFallback className="text-2xl font-bold">PS</AvatarFallback>
              </Avatar>
              {isOwnProfile && (
                <Button size="sm" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0 bg-violet text-white">
                  <Camera className="h-4 w-4" />
                </Button>
              )}
            </div>
            
            <div className="flex-1 text-white mb-2">
              <h1 className="text-2xl md:text-3xl font-bold">{profileData.name}</h1>
              <p className="text-white/90 text-sm md:text-base mb-2">{profileData.tagline}</p>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <MapPin className="h-4 w-4" />
                {profileData.location}
                {profileData.isCollabOpen && (
                  <Badge className="bg-mint text-white border-0 ml-2">
                    Open to Collab
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-6">
        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-violet">{profileData.stats.projects}</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-mint">{profileData.stats.collaborations}</div>
            <div className="text-sm text-muted-foreground">Collaborations</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-warm-yellow">{formatNumber(profileData.stats.followers * 1000)}</div>
            <div className="text-sm text-muted-foreground">Followers</div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-6">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Instagram className="h-4 w-4 text-pink-500" />
            {profileData.socialHandles.instagram}
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Youtube className="h-4 w-4 text-red-500" />
            YouTube
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Linkedin className="h-4 w-4 text-blue-500" />
            LinkedIn
          </Button>
        </div>

        {/* Stories Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Stories</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {isOwnProfile && (
              <div className="flex flex-col items-center gap-2 min-w-[80px]">
                <div className="h-16 w-16 rounded-full border-2 border-dashed border-muted-foreground flex items-center justify-center bg-muted/50">
                  <Plus className="h-6 w-6 text-muted-foreground" />
                </div>
                <span className="text-xs text-muted-foreground">Add Story</span>
              </div>
            )}
            {profileData.stories.map((story) => (
              <div key={story.id} className="flex flex-col items-center gap-2 min-w-[80px]">
                <div className={`h-16 w-16 rounded-full p-1 ${story.hasNew ? 'bg-gradient-to-tr from-violet to-mint' : 'bg-muted'}`}>
                  <img 
                    src={story.thumbnail} 
                    alt="Story" 
                    className="w-full h-full rounded-full object-cover border-2 border-background"
                  />
                </div>
                <span className="text-xs text-muted-foreground">
                  {story.hasNew ? 'New' : '1d ago'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        {!isOwnProfile && (
          <div className="flex gap-3 mb-6">
            <Button className="flex-1 bg-gradient-to-r from-violet to-mint text-white">
              <Users className="h-4 w-4 mr-2" />
              Collaborate
            </Button>
            <Button variant="outline" className="flex-1">
              <Heart className="h-4 w-4 mr-2" />
              Follow
            </Button>
          </div>
        )}

        {/* Portfolio Grid */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Portfolio</h3>
            {isOwnProfile && (
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Work
              </Button>
            )}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {profileData.portfolio.map((item) => (
              <Card key={item.id} className="group cursor-pointer overflow-hidden card-hover">
                <div className="relative aspect-square">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Video indicator */}
                  {item.type === 'video' && (
                    <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  )}
                  
                  {/* Hover overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                    <div className="flex items-center gap-3 text-xs">
                      <span>{item.views} views</span>
                      <span>{item.likes} likes</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline">
            View All Projects
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;
