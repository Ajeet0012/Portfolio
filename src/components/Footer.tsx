import { Github, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/Ajeet0012', 
      label: 'GitHub',
      description: 'Check out my code' 
    },
    { 
      icon: Mail, 
      href: 'mailto:ajeetojha9057@gmail.com', 
      label: 'Email',
      description: 'Send me a message' 
    }
  ];

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-t from-card to-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              AJEET<span className="text-accent">.</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Computer Science student passionate about creating innovative solutions 
              through full-stack development and emerging technologies.
            </p>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="w-4 h-4 mr-2 text-accent" />
              <span className="text-sm">Jaipur, Rajasthan, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 text-left text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              Connect With Me
            </h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label === 'GitHub' ? '_blank' : undefined}
                  rel={social.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                  className="flex items-center group hover:text-accent transition-colors duration-300"
                >
                  <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center mr-3 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <social.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      {social.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {social.description}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center text-muted-foreground text-sm">
              <span>© {currentYear} Ajeet. Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" />
              <span>and lots of ☕</span>
            </div>
            
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>Built with React + TypeScript</span>
              <span>•</span>
              <span>Styled with Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-primary text-primary-foreground rounded-full shadow-glow hover:shadow-accent-glow transition-all duration-300 transform hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-4 h-4 border-t-2 border-r-2 border-primary-foreground transform -rotate-45 translate-y-0.5" />
        </div>
      </button>
    </footer>
  );
};

export default Footer;