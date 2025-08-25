import { Mail, Linkedin, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "sayedhassank4@gmail.com",
      href: "mailto:sayedhassank4@gmail.com"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn", 
      value: "syed-hassan2k2",
      href: "https://www.linkedin.com/in/syed-hassan2k2"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 9140173473",
      href: "tel:+919140173473"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "India",
      href: null
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="text-primary glow-text">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to discuss new 
            opportunities and collaborate on innovative projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="group">
                  {item.href ? (
                    <a 
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center p-4 bg-card/50 rounded-xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4 group-hover:text-primary-glow transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm text-text-muted font-medium">{item.label}</div>
                        <div className="text-foreground font-semibold group-hover:text-primary transition-colors duration-300">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center p-4 bg-card/50 rounded-xl border border-border">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm text-text-muted font-medium">{item.label}</div>
                        <div className="text-foreground font-semibold">{item.value}</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-card rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-3">Available For</h4>
              <div className="space-y-2 text-sm text-text-secondary">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Full-time Software Development Roles
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Freelance Web Development Projects
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Technical Consulting & Mentoring
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in">
            <div className="bg-card/50 rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-text-muted focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-text-muted focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-text-muted focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full btn-hero justify-center group"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;