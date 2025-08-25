import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card/80 border-t border-border">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-text-secondary">
              © 2025 Syed Mohammad Hassan. All Rights Reserved.
            </span>
          </div>
          
          <div className="flex items-center text-text-secondary">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-2 text-red-500 fill-current animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-sm text-text-muted">
            Passionate about creating scalable web applications and innovative solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;