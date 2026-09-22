import { Github, Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'about',    id: 'about' },
  { label: 'skills',   id: 'skills' },
  { label: 'projects', id: 'projects' },
  { label: 'education',id: 'education' },
  { label: 'certs',    id: 'certificates' },
  { label: 'contact',  id: 'contact' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#000000',
        borderTop: '1px solid #3c3c3c',
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 24px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '36px', marginBottom: '36px' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '12px' }}>
              <span style={{ color: '#777777', fontSize: '11px' }}>~/</span>
              <span style={{ color: '#ffffff', fontSize: '14px', fontWeight: 700 }}>ajeet_ojha</span>
            </div>
            <p style={{ fontSize: '11px', color: '#777777', lineHeight: '18px', marginBottom: '12px' }}>
              Computer Science student passionate about full-stack development and building impactful solutions.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10px', color: '#777777' }}>
              <MapPin size={11} style={{ color: '#4ec9b0' }} />
              Jaipur, Rajasthan, India
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p style={{ fontSize: '10px', color: '#4ec9b0', marginBottom: '14px' }}>// quick_links</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
              {quickLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: '11px',
                    color: '#777777',
                    fontFamily: "'JetBrains Mono', monospace",
                    padding: '2px 0',
                    transition: 'color 150ms',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#4ec9b0')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#777777')}
                >
                  <span style={{ color: '#3c3c3c' }}>›</span>
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p style={{ fontSize: '10px', color: '#4ec9b0', marginBottom: '14px' }}>// connect</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href="https://github.com/Ajeet0012"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', transition: 'color 150ms', color: '#777777' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#4ec9b0')}
                onMouseLeave={e => (e.currentTarget.style.color = '#777777')}
              >
                <div style={{ width: '28px', height: '28px', border: '1px solid #3c3c3c', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Github size={13} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: '#cccccc' }}>GitHub</div>
                  <div style={{ fontSize: '10px', color: '#777777' }}>github.com/Ajeet0012</div>
                </div>
              </a>
              <a
                href="mailto:ajeetojha9057@gmail.com"
                aria-label="Email Ajeet"
                style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', transition: 'color 150ms', color: '#777777' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#4ec9b0')}
                onMouseLeave={e => (e.currentTarget.style.color = '#777777')}
              >
                <div style={{ width: '28px', height: '28px', border: '1px solid #3c3c3c', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={13} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: '#cccccc' }}>Email</div>
                  <div style={{ fontSize: '10px', color: '#777777' }}>ajeetojha9057@gmail.com</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #3c3c3c', paddingTop: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '10px', color: '#777777' }}>
            <span style={{ color: '#4ec9b0' }}>// </span>
            {year} Ajeet Ojha — All rights reserved.
          </span>
          <span style={{ fontSize: '10px', color: '#3c3c3c' }}>
            Built with React + TypeScript + Vite
          </span>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '36px',
          height: '36px',
          backgroundColor: '#1e1e1e',
          border: '1px solid #3c3c3c',
          borderRadius: '4px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#777777',
          fontSize: '14px',
          fontFamily: "'JetBrains Mono', monospace",
          transition: 'border-color 150ms, color 150ms',
          zIndex: 40,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = '#4ec9b0';
          e.currentTarget.style.color = '#4ec9b0';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = '#3c3c3c';
          e.currentTarget.style.color = '#777777';
        }}
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;