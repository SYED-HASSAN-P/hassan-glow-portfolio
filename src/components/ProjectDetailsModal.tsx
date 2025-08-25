import { X, ExternalLink, Github, Calendar, Users, Code } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  highlight: string;
  fullDescription?: string;
  features?: string[];
  duration?: string;
  teamSize?: string;
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectDetailsModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailsModal = ({ project, isOpen, onClose }: ProjectDetailsModalProps) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative w-full max-w-2xl bg-card border border-border rounded-lg shadow-elegant animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-2 border border-primary/20">
                {project.category}
              </span>
              <h2 className="text-2xl font-bold text-foreground">
                {project.title}
              </h2>
              <p className="text-primary font-medium">
                {project.highlight}
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-secondary hover:bg-secondary/80 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Overview</h3>
              <p className="text-text-secondary leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Features */}
            {project.features && (
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-sm font-medium bg-secondary/50 text-secondary-foreground rounded-md border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="grid md:grid-cols-2 gap-4">
              {project.duration && (
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Duration</p>
                    <p className="font-medium text-foreground">{project.duration}</p>
                  </div>
                </div>
              )}
              {project.teamSize && (
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Team Size</p>
                    <p className="font-medium text-foreground">{project.teamSize}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-6 border-t border-border">
            <div className="flex items-center space-x-2 text-sm text-text-muted">
              <Code className="w-4 h-4" />
              <span>Built with modern development practices</span>
            </div>
            <div className="flex space-x-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg font-medium transition-colors flex items-center space-x-2"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors flex items-center space-x-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;