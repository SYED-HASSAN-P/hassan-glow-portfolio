import { 
  Code2, 
  Globe, 
  Database, 
  Settings,
  FileCode,
  Server,
  Smartphone,
  GitBranch
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["PHP", "Java", "Python", "C/C++", "JavaScript"]
    },
    {
      title: "Web Technologies", 
      icon: <Globe className="w-6 h-6" />,
      skills: ["HTML", "CSS", "Laravel", "Spring Boot", "React"]
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "Schema Design", "Query Optimization", "Database Connectivity"]
    },
    {
      title: "Tools & APIs",
      icon: <Settings className="w-6 h-6" />,
      skills: ["Postman", "Git", "REST APIs", "Version Control"]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-primary glow-text">Toolkit</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A comprehensive set of technologies and tools I use to build 
            robust and scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-interactive fade-in">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-tag">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16 fade-in">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Core <span className="text-primary">Competencies</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Laravel", icon: <FileCode className="w-5 h-5" /> },
              { name: "Spring Boot", icon: <Server className="w-5 h-5" /> },
              { name: "MySQL", icon: <Database className="w-5 h-5" /> },
              { name: "REST APIs", icon: <Globe className="w-5 h-5" /> },
              { name: "Git", icon: <GitBranch className="w-5 h-5" /> },
              { name: "Postman", icon: <Settings className="w-5 h-5" /> },
            ].map((skill, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-4 bg-card/50 rounded-xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
              >
                <div className="text-primary group-hover:text-primary-glow mb-2 transition-colors duration-300">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-text-secondary group-hover:text-foreground transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;