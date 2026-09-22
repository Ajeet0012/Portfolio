import { ExternalLink } from 'lucide-react';

const certificates = [
  {
    index: '01',
    title: 'Course in Python',
    issuer: 'Google via Coursera',
    date: 'October 2023',
    verification: 'coursera.org/verify/R92X9VQNKGVY',
    description:
      'Comprehensive Python programming course covering fundamentals, data structures, algorithms, and practical applications in software development.',
    skills: ['Python Programming', 'Data Structures', 'Algorithms', 'Problem Solving'],
    type: 'Professional Certificate',
  },
  {
    index: '02',
    title: 'Full Stack Development Training Program',
    issuer: 'Geeks IT Data Solutions',
    date: 'July 2024',
    verification: null,
    description:
      'Intensive training covering end-to-end web development including frontend, backend, databases, and deployment strategies.',
    skills: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Full Stack Dev', 'API Development'],
    type: 'Training Certificate',
  },
];

const activities = [
  {
    title: 'Blood Donation Drive',
    org: 'SBCET College',
    desc: 'Actively participated in college blood donation drive, contributing to community welfare and health initiatives.',
    tag: 'Community Service',
  },
  {
    title: 'Sports Event Organisation',
    org: 'School Level',
    desc: 'Organised and managed sports events at school level, demonstrating leadership and organisational skills.',
    tag: 'Leadership',
  },
];

const Certificates = () => (
  <section id="certificates" style={{ padding: '40px', backgroundColor: '#000000', minHeight: '100%' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '40px' }} className="animate-fade-in">
        <p className="section-comment" style={{ marginBottom: '8px' }}>// section_05</p>
        <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '22px', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.01em' }}>
          certs<span style={{ color: '#4ec9b0' }}>_&_achievements</span>
        </h2>
        <div style={{ width: '40px', height: '1px', backgroundColor: '#4ec9b0', marginTop: '14px' }} />
      </div>

      {/* Certificates */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px', marginBottom: '48px' }}>
        {certificates.map((cert, i) => (
          <div
            key={cert.title}
            className={`ds-card ${i % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'}`}
            style={{
              padding: '22px',
              borderTop: '2px solid #4ec9b0',
              animationDelay: `${i * 100}ms`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span style={{
                fontSize: '9px',
                color: '#000000',
                backgroundColor: '#4ec9b0',
                padding: '2px 6px',
                borderRadius: '2px',
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
              }}>
                {cert.index}
              </span>
              <h3 style={{ fontSize: '13px', color: '#ffffff', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>
                {cert.title}
              </h3>
            </div>

            <p style={{ fontSize: '11px', color: '#4ec9b0', marginBottom: '2px' }}>{cert.issuer}</p>
            <p style={{ fontSize: '10px', color: '#777777', marginBottom: '12px' }}>{cert.date} · {cert.type}</p>

            <p style={{ fontSize: '11px', color: '#777777', lineHeight: '18px', marginBottom: '14px' }}>
              {cert.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
              {cert.skills.map(s => (
                <span key={s} className="token-chip" style={{ fontSize: '10px' }}>{s}</span>
              ))}
            </div>

            {cert.verification && (
              <a
                href={`https://${cert.verification}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '10px', textDecoration: 'none' }}
              >
                <ExternalLink size={11} />
                verify certificate
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Extracurricular */}
      <div>
        <p className="section-comment" style={{ marginBottom: '16px' }}>// extracurricular_activities</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
          {activities.map(a => (
            <div key={a.title} className="ds-card animate-fade-in" style={{ padding: '18px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4ec9b0', flexShrink: 0, marginTop: '5px' }} aria-hidden="true" />
              <div>
                <h4 style={{ fontSize: '12px', color: '#ffffff', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, marginBottom: '2px' }}>
                  {a.title}
                </h4>
                <p style={{ fontSize: '10px', color: '#4ec9b0', marginBottom: '6px' }}>{a.org}</p>
                <p style={{ fontSize: '11px', color: '#777777', lineHeight: '17px', marginBottom: '10px' }}>{a.desc}</p>
                <span className="token-chip" style={{ fontSize: '9px', color: '#777777', borderColor: '#3c3c3c' }}>{a.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="animate-fade-in ds-card" style={{ marginTop: '36px', padding: '20px 24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px' }}>
        {[
          { val: '2', label: 'Professional Certificates' },
          { val: '2', label: 'Community Activities' },
          { val: '8+', label: 'Skills Acquired' },
          { val: '2024', label: 'Latest Achievement' },
        ].map(({ val, label }) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '18px', fontWeight: 700, color: '#4ec9b0', fontFamily: "'JetBrains Mono', monospace" }}>{val}</div>
            <div style={{ fontSize: '10px', color: '#777777', marginTop: '2px' }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certificates;