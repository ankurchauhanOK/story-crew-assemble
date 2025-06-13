
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Circle } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  location: string;
  roles: string[];
  skillTags: string[];
  contribution?: string;
  duration: string;
  creatorKarma: number;
  creator: string;
}

const ProjectCard = ({
  title,
  description,
  location,
  roles,
  skillTags,
  contribution,
  duration,
  creatorKarma,
  creator
}: ProjectCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 border card-hover animate-scale-in">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{description}</p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Location and Duration */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>📍 {location}</span>
          <span>⏱ {duration}</span>
        </div>

        {/* Roles Needed */}
        <div>
          <span className="text-sm font-medium text-foreground mb-2 block">🎭 Roles Needed:</span>
          <div className="flex flex-wrap gap-2">
            {roles.map((role, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {role}
              </Badge>
            ))}
          </div>
        </div>

        {/* Skill Tags */}
        <div>
          <span className="text-sm font-medium text-foreground mb-2 block">💬 Skills:</span>
          <div className="flex flex-wrap gap-2">
            {skillTags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Contribution */}
        {contribution && (
          <div className="bg-warm-yellow/10 rounded-lg p-3">
            <span className="text-sm font-medium">💸 Optional Contribution:</span>
            <p className="text-sm text-muted-foreground mt-1">{contribution}</p>
          </div>
        )}

        {/* Creator Info */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-violet/10 flex items-center justify-center">
              <User className="h-4 w-4 text-violet" />
            </div>
            <div>
              <p className="text-sm font-medium">{creator}</p>
              <div className="flex items-center space-x-1">
                <Circle className="h-2 w-2 fill-mint text-mint" />
                <span className="text-xs text-muted-foreground">Karma: {creatorKarma}</span>
              </div>
            </div>
          </div>
          
          <Button size="sm" className="gradient-violet text-white">
            Join Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
