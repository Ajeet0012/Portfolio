import { useState, useEffect } from 'react';
import { Menu, X, Github, Mail } from 'lucide-react';

const navItems = [
  { id: 'hero',         label: 'home' },
  { id: 'about',        label: 'about' },
  { id: 'skills',       label: 'skills' },
  { id: 'projects',     label: 'projects' },
  { id: 'education',    label: 'education' },
  { id: 'certificates', label: 'certs' },
  { id: 'contact',      label: 'contact' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 80;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(0,0,0,0.95)' : '#000000',
        borderBottom: '1px solid #3c3c3c',
        backdropFilter: 'blur(8px)',
        transition: 'background-color 300ms',
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '52px' }}>

          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            aria-label="Go to top"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              padding: '4px 0',
            }}
          >
            <span style={{ color: '#777777', fontSize: '12px' }}>~/</span>
            <span style={{ color: '#ffffff', fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em' }}>ajeet_ojha</span>
            <span className="cursor-blink" />
          </button>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="hidden md:flex">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '11px',
                  fontFamily: "'JetBrains Mono', monospace",
                  color: activeSection === item.id ? '#4ec9b0' : '#777777',
                  padding: '4px 0',
                  borderBottom: activeSection === item.id ? '1px solid #4ec9b0' : '1px solid transparent',
                  transition: 'color 150ms, border-color 150ms',
                  letterSpacing: '0.03em',
                }}
                onMouseEnter={e => { if (activeSection !== item.id) (e.target as HTMLElement).style.color = '#cccccc'; }}
                onMouseLeave={e => { if (activeSection !== item.id) (e.target as HTMLElement).style.color = '#777777'; }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right — social + mobile */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div className="hidden md:flex" style={{ alignItems: 'center', gap: '14px' }}>
              <a
                href="https://github.com/Ajeet0012"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                style={{ color: '#777777', display: 'flex', alignItems: 'center', transition: 'color 150ms' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#4ec9b0')}
                onMouseLeave={e => (e.currentTarget.style.color = '#777777')}
              >
                <Github size={15} />
              </a>
              <a
                href="mailto:ajeetojha9057@gmail.com"
                aria-label="Send email"
                style={{ color: '#777777', display: 'flex', alignItems: 'center', transition: 'color 150ms' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#4ec9b0')}
                onMouseLeave={e => (e.currentTarget.style.color = '#777777')}
              >
                <Mail size={15} />
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary"
                style={{ fontSize: '10px', padding: '5px 14px' }}
              >
                hire me
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#777777', display: 'flex' }}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="md:hidden animate-slide-down"
            style={{
              borderTop: '1px solid #3c3c3c',
              padding: '16px 0',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    background: activeSection === item.id ? 'rgba(78,201,176,0.08)' : 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: '10px 12px',
                    fontSize: '12px',
                    fontFamily: "'JetBrains Mono', monospace",
                    color: activeSection === item.id ? '#4ec9b0' : '#777777',
                    borderRadius: '4px',
                    letterSpacing: '0.03em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span style={{ color: '#3c3c3c' }}>&gt;</span>
                  {item.label}
                </button>
              ))}
              <div style={{ borderTop: '1px solid #3c3c3c', marginTop: '8px', paddingTop: '12px', display: 'flex', gap: '12px', padding: '12px' }}>
                <a href="https://github.com/Ajeet0012" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: '#777777' }}>
                  <Github size={16} />
                </a>
                <a href="mailto:ajeetojha9057@gmail.com" aria-label="Email" style={{ color: '#777777' }}>
                  <Mail size={16} />
                </a>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn-primary"
                  style={{ fontSize: '10px', padding: '4px 12px', marginLeft: 'auto' }}
                >
                  hire me
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;