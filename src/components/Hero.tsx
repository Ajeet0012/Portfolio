import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Mail, MapPin, Download } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import avatar from '@/assets/avatar.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Full Stack Developer & CS Student";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-scale-in">
          {/* Avatar */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary shadow-glow animate-pulse-glow">
            <img 
              src={avatar} 
              alt="Ajeet" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-4 animate-fade-in-left">
            AJEET
          </h1>

          {/* Animated typing effect */}
          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-accent font-medium animate-fade-in-right">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 mb-8 text-muted-foreground animate-fade-in">
            <MapPin className="w-5 h-5" />
            <span>Jaipur, Rajasthan</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold shadow-glow hover:shadow-accent-glow transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12 animate-fade-in">
            <a 
              href="https://github.com/Ajeet0012" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-300 hover:scale-110 transform"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="mailto:ajeetojha9057@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;