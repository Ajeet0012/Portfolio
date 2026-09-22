import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const contactMethods = [
  { icon: Mail,   label: 'email',    value: 'ajeetojha9057@gmail.com', href: 'mailto:ajeetojha9057@gmail.com' },
  { icon: Phone,  label: 'phone',    value: '+91 9057524558',           href: 'tel:+919057524558' },
  { icon: MapPin, label: 'location', value: 'Jaipur, Rajasthan',        href: undefined },
  { icon: Github, label: 'github',   value: 'github.com/Ajeet0012',     href: 'https://github.com/Ajeet0012' },
];

const inputStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: '#1e1e1e',
  border: '1px solid #3c3c3c',
  borderRadius: '4px',
  padding: '9px 12px',
  fontSize: '11px',
  fontFamily: "'JetBrains Mono', monospace",
  color: '#cccccc',
  outline: 'none',
  transition: 'border-color 150ms',
  boxSizing: 'border-box',
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = '#4ec9b0';
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = '#3c3c3c';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Hi Ajeet,\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}\n\nBest regards,\n${form.name}`
    );
    window.location.href = `mailto:ajeetojha9057@gmail.com?subject=${subject}&body=${body}`;
    toast({ title: 'Opening email client', description: 'Your default client will open with the message pre-filled.' });
  };

  return (
    <section id="contact" style={{ padding: '40px', backgroundColor: '#0a0a0a', minHeight: '100%' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '40px' }} className="animate-fade-in">
          <p className="section-comment" style={{ marginBottom: '8px' }}>// section_06</p>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '22px', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.01em' }}>
            let's<span style={{ color: '#4ec9b0' }}>_connect</span>
          </h2>
          <div style={{ width: '40px', height: '1px', backgroundColor: '#4ec9b0', marginTop: '14px' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {/* Info panel */}
          <div className="ds-card animate-fade-in-left" style={{ padding: '24px' }}>
            <p style={{ fontSize: '11px', color: '#777777', lineHeight: '18px', marginBottom: '24px' }}>
              I'm currently open to new opportunities and interesting projects.
              Whether you're looking for a developer, have a project in mind, or just want to connect —
              reach out via any channel below.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '24px' }}>
              {contactMethods.map(({ icon: Icon, label, value, href }) => {
                const Tag = href ? 'a' : 'div';
                return (
                  <Tag
                    key={label}
                    href={href}
                    target={href?.startsWith('http') ? '_blank' : undefined}
                    rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px',
                      borderRadius: '4px',
                      textDecoration: 'none',
                      transition: 'background-color 150ms',
                      cursor: href ? 'pointer' : 'default',
                    }}
                    onMouseEnter={href ? (e: React.MouseEvent) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(78,201,176,0.06)'; } : undefined}
                    onMouseLeave={href ? (e: React.MouseEvent) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; } : undefined}
                  >
                    <div style={{
                      width: '32px',
                      height: '32px',
                      backgroundColor: '#000000',
                      border: '1px solid #3c3c3c',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Icon size={14} style={{ color: '#4ec9b0' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '9px', color: '#777777', fontFamily: "'JetBrains Mono', monospace" }}>{label}</div>
                      <div style={{ fontSize: '11px', color: '#cccccc' }}>{value}</div>
                    </div>
                  </Tag>
                );
              })}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="mailto:ajeetojha9057@gmail.com" className="btn-primary"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', fontSize: '11px', textDecoration: 'none' }}>
                <Mail size={13} /> send quick email
              </a>
              <a href="tel:+919057524558" className="btn-ghost"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', fontSize: '11px', textDecoration: 'none' }}>
                <Phone size={13} /> call now
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="ds-card animate-fade-in-right" style={{ padding: '24px' }}>
            <p style={{ fontSize: '10px', color: '#4ec9b0', fontFamily: "'JetBrains Mono', monospace", marginBottom: '18px' }}>
              // send_a_message
            </p>
            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                <div>
                  <label htmlFor="contact-name" style={{ display: 'block', fontSize: '10px', color: '#777777', marginBottom: '5px', fontFamily: "'JetBrains Mono', monospace" }}>
                    name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="John Doe"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" style={{ display: 'block', fontSize: '10px', color: '#777777', marginBottom: '5px', fontFamily: "'JetBrains Mono', monospace" }}>
                    email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="john@example.com"
                    style={inputStyle}
                  />
                </div>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <label htmlFor="contact-subject" style={{ display: 'block', fontSize: '10px', color: '#777777', marginBottom: '5px', fontFamily: "'JetBrains Mono', monospace" }}>
                  subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder="Project Collaboration"
                  style={inputStyle}
                />
              </div>
              <div style={{ marginBottom: '18px' }}>
                <label htmlFor="contact-message" style={{ display: 'block', fontSize: '10px', color: '#777777', marginBottom: '5px', fontFamily: "'JetBrains Mono', monospace" }}>
                  message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder="Tell me about your project..."
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>
              <button
                id="contact-submit-btn"
                type="submit"
                className="btn-primary"
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px' }}
              >
                <Send size={13} />
                send message
              </button>
            </form>
            <p style={{ marginTop: '12px', fontSize: '10px', color: '#777777', textAlign: 'center' }}>
              // opens your default email client with the message pre-filled
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;