import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Github, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial active section
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="text-2xl font-bold text-foreground cursor-pointer hover:text-accent transition-colors duration-300"
            onClick={() => scrollToSection('hero')}
          >
            AJEET<span className="text-accent">.</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-accent relative ${
                  activeSection === item.id 
                    ? 'text-accent' 
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent rounded-full animate-scale-in" />
                )}
              </button>
            ))}
          </div>

          {/* Social Links & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Desktop Social Links */}
            <div className="hidden md:flex items-center gap-4">
              <a 
                href="https://github.com/Ajeet0012" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="mailto:ajeetojha9057@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-primary text-primary-foreground px-6 py-2 rounded-lg font-medium shadow-glow hover:shadow-accent-glow transition-all duration-300 transform hover:scale-105"
              >
                Let's Talk
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-foreground hover:text-accent transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-accent bg-accent/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex items-center gap-4 px-4 pt-4 border-t border-border">
                <a 
                  href="https://github.com/Ajeet0012" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:ajeetojha9057@gmail.com"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <Button 
                  onClick={() => {
                    scrollToSection('contact');
                    setIsOpen(false);
                  }}
                  className="ml-auto bg-gradient-primary text-primary-foreground px-4 py-2 rounded-lg font-medium shadow-glow"
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;