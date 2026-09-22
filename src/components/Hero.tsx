import { useState, useEffect } from 'react';
import { Github, Mail, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full Stack & Software Developer';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100%',
        backgroundColor: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dot grid background */}
      <div
        className="dot-grid"
        style={{ position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none' }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div
        className="animate-scale-in"
        style={{
          maxWidth: '800px',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Comment line */}
        <p
          className="section-comment animate-fade-in"
          style={{ animationDelay: '100ms', marginBottom: '16px' }}
        >
          // hello, world
        </p>

        {/* Name */}
        <h1
          className="animate-fade-in"
          style={{
            animationDelay: '200ms',
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            fontSize: 'clamp(40px, 8vw, 68px)',
            lineHeight: 1.05,
            color: '#ffffff',
            marginBottom: '8px',
            letterSpacing: '-0.02em',
          }}
        >
          I am Ajeet{' '}
          <span style={{ color: '#4ec9b0' }}>Ojha</span>
        </h1>

        {/* Typing subtitle */}
        <div
          className="animate-fade-in"
          style={{ animationDelay: '300ms', height: '28px', marginBottom: '24px' }}
        >
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '14px',
              color: '#777777',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span style={{ color: '#4ec9b0' }}>&gt;</span>
            <span>{displayText}</span>
            <span className="cursor-blink" aria-hidden="true" />
          </p>
        </div>

        {/* Contact chips row */}
        <div
          className="animate-fade-in"
          style={{
            animationDelay: '400ms',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '36px',
          }}
        >
          {[
            { icon: MapPin, text: 'Jaipur, Rajasthan', href: undefined },
            { icon: Mail,   text: 'ajeetojha9057@gmail.com', href: 'mailto:ajeetojha9057@gmail.com' },
            { icon: Phone,  text: '+91 9057524558', href: 'tel:+919057524558' },
            { icon: Github, text: 'Ajeet0012', href: 'https://github.com/Ajeet0012' },
          ].map(({ icon: Icon, text, href }) => {
            const Tag = href ? 'a' : 'span';
            return (
              <Tag
                key={text}
                href={href}
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  border: '1px solid #3c3c3c',
                  borderRadius: '4px',
                  padding: '4px 10px',
                  fontSize: '11px',
                  fontFamily: "'JetBrains Mono', monospace",
                  color: '#cccccc',
                  textDecoration: 'none',
                  transition: 'border-color 150ms, color 150ms',
                  cursor: href ? 'pointer' : 'default',
                }}
                onMouseEnter={href ? (e: React.MouseEvent) => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#4ec9b0';
                  (e.currentTarget as HTMLElement).style.color = '#4ec9b0';
                } : undefined}
                onMouseLeave={href ? (e: React.MouseEvent) => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#3c3c3c';
                  (e.currentTarget as HTMLElement).style.color = '#cccccc';
                } : undefined}
              >
                <Icon size={12} />
                {text}
              </Tag>
            );
          })}
        </div>

        {/* Pro summary */}
        <p
          className="animate-fade-in"
          style={{
            animationDelay: '500ms',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px',
            lineHeight: '20px',
            color: '#777777',
            maxWidth: '580px',
            marginBottom: '36px',
          }}
        >
          Motivated Full Stack Developer fresher with hands-on knowledge of front-end and
          back-end technologies. Building responsive web apps, databases, and APIs.
          Passionate about clean code, problem-solving, and scalable solutions.
        </p>

        {/* CTA Buttons */}
        <div
          className="animate-fade-in"
          style={{
            animationDelay: '600ms',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <button
            id="hero-view-work-btn"
            onClick={() => scrollToSection('projects')}
            className="btn-primary"
          >
            view projects
          </button>
          <button
            id="hero-contact-btn"
            onClick={() => scrollToSection('contact')}
            className="btn-ghost"
          >
            get in touch
          </button>
          <a
            id="hero-github-btn"
            href="https://github.com/Ajeet0012"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#777777',
              fontSize: '11px',
              fontFamily: "'JetBrains Mono', monospace",
              textDecoration: 'none',
              padding: '7px 16px',
              border: '1px solid #3c3c3c',
              borderRadius: '4px',
              transition: 'color 150ms, border-color 150ms',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#4ec9b0';
              e.currentTarget.style.borderColor = '#4ec9b0';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = '#777777';
              e.currentTarget.style.borderColor = '#3c3c3c';
            }}
          >
            <Github size={13} />
            github.com/Ajeet0012
          </a>
        </div>

        {/* Stats row */}
        <div
          className="animate-fade-in"
          style={{
            animationDelay: '700ms',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '32px',
            marginTop: '52px',
            paddingTop: '24px',
            borderTop: '1px solid #3c3c3c',
          }}
        >
          {[
            { val: 'B.Tech CSE', label: '2022–2026' },
            { val: '6.7',        label: 'CGPA' },
            { val: '2+',         label: 'Major Projects' },
            { val: '10+',        label: 'Technologies' },
          ].map(({ val, label }) => (
            <div key={label}>
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#4ec9b0', fontFamily: "'JetBrains Mono', monospace" }}>
                {val}
              </div>
              <div style={{ fontSize: '10px', color: '#777777', marginTop: '2px' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '28px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
        }}
        aria-hidden="true"
      >
        <span style={{ fontSize: '9px', color: '#3c3c3c', fontFamily: "'JetBrains Mono', monospace" }}>scroll</span>
        <div style={{ width: '1px', height: '24px', backgroundColor: '#3c3c3c' }} />
      </div>
    </section>
  );
};

export default Hero;