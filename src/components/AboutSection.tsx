import { Code, Database, Globe } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-primary glow-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="fade-in">
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              I am a passionate Software Developer currently working at{' '}
              <span className="text-primary font-semibold">
                Meena Shah Institute of Technology and Management (MSITM)
              </span>
              , where I developed{' '}
              <span className="text-primary">"Fee Sync"</span> - a comprehensive 
              college fee management software, and actively maintain the college website.
            </p>
            
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              My journey in software development was further enriched during my tenure as a{' '}
              <span className="text-primary font-semibold">Java Developer Intern at CodeSoft</span>
              , where I honed my skills in backend logic development and database connectivity, 
              working with cutting-edge technologies and collaborative development practices.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg border border-border hover:border-primary/30 transition-all duration-300">
                <Code className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Clean Code</h3>
                <p className="text-sm text-text-muted">Writing maintainable and scalable code</p>
              </div>
              
              <div className="text-center p-4 rounded-lg border border-border hover:border-primary/30 transition-all duration-300">
                <Database className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Database Design</h3>
                <p className="text-sm text-text-muted">Optimized schema and query design</p>
              </div>
              
              <div className="text-center p-4 rounded-lg border border-border hover:border-primary/30 transition-all duration-300">
                <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Web Development</h3>
                <p className="text-sm text-text-muted">Full-stack web applications</p>
              </div>
            </div>
          </div>

          {/* Stats/Highlights */}
          <div className="fade-in">
            <div className="bg-gradient-card rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">Experience Highlights</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-foreground mb-2">Software Developer</h4>
                  <p className="text-primary text-sm mb-1">MSITM</p>
                  <p className="text-text-muted text-sm">
                    Developed Fee Sync and maintained college website infrastructure
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-foreground mb-2">Java Developer Intern</h4>
                  <p className="text-primary text-sm mb-1">CodeSoft</p>
                  <p className="text-text-muted text-sm">
                    Focused on backend development and database connectivity
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">3+</div>
                    <div className="text-sm text-text-muted">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">2+</div>
                    <div className="text-sm text-text-muted">Years Learning</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;