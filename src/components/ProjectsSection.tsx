import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Fee Sync",
      description: "A college fee management software developed with PHP and MySQL to automate financial processes and improve transparency.",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      category: "Web Application",
      highlight: "College Management System"
    },
    {
      title: "Travel Management System", 
      description: "A Java-based desktop application with a MySQL backend for managing bookings and schedules, featuring user login and data validation.",
      technologies: ["Java", "MySQL", "Swing", "JDBC"],
      category: "Desktop Application",
      highlight: "Booking & Scheduling"
    },
    {
      title: "Portfolio Management System",
      description: "A financial investment tracker built using Java, Spring Boot, and MySQL. Thoroughly tested with regression and integration testing.",
      technologies: ["Java", "Spring Boot", "MySQL", "JUnit"],
      category: "Financial Software", 
      highlight: "Investment Tracking"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-primary glow-text">Work</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development,
            database design, and software engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card-interactive group fade-in">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-3 border border-primary/20">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="text-sm text-primary font-medium mb-3">
                    {project.highlight}
                  </div>
                </div>
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                    <ExternalLink className="w-4 h-4 text-primary" />
                  </div>
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                    <Github className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-text-secondary leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-md border border-border hover:border-primary/30 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action */}
              <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                <span className="text-sm mr-2">View Details</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 fade-in">
          <p className="text-text-secondary mb-6">
            Interested in collaborating on a project?
          </p>
          <a 
            href="mailto:sayedhassank4@gmail.com" 
            className="btn-hero inline-flex items-center"
          >
            Start a Conversation
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;