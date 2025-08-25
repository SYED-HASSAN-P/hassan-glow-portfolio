import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto fade-in">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Syed Mohammad</span>
            <br />
            <span className="text-primary glow-text">Hassan</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl text-text-secondary mb-4 font-medium">
            Software Developer | Web Development & API Integration
          </p>

          {/* Sub-headline */}
          <p className="text-base md:text-lg lg:text-xl text-text-muted max-w-3xl mx-auto mb-12 leading-relaxed">
            As a motivated and detail-oriented Software Developer, I specialize in 
            <span className="text-primary"> web development</span>, 
            <span className="text-primary"> database management</span>, and 
            <span className="text-primary"> API testing</span>. I have hands-on experience in these areas and am passionate about applying my skills in a growth-oriented organization. My professional background includes designing and deploying a fee management software called "Fee Sync" at the Meena Shah Institute of Technology and Management (MSITM). I also maintained the college website and built APIs for user authentication and data exchange. In addition, my internship at CodeSoft gave me experience developing Java-based applications with MySQL database connectivity and conducting API testing using Postman. With a solid foundation in PHP, MySQL, and Postman, I am eager to take on new challenges and master the 
            <span className="text-primary"> Laravel framework</span> to create scalable, reliable web applications.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={scrollToProjects}
              className="btn-hero group"
            >
              View My Projects
              <ArrowDown className="ml-2 w-4 h-4 group-hover:animate-bounce" />
            </button>
            
            <a 
              href="mailto:sayedhassank4@gmail.com"
              className="px-8 py-4 bg-transparent border border-text-secondary text-text-secondary hover:border-primary hover:text-primary transition-all duration-300 rounded-lg font-medium"
            >
              Get In Touch
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;