const educationData = [
  {
    degree: 'B.Tech (Computer Science Engineering)',
    institution: 'Shri Balaji College Of Engineering & Technology',
    period: '2022 – 2026',
    grade: '6.7 CGPA',
    status: 'Current',
    location: 'Jaipur, Rajasthan',
    progress: 75,
    highlights: ['Core CS Fundamentals', 'Software Engineering', 'Database Systems', 'Web Development'],
  },
  {
    degree: 'Senior Secondary (12th)',
    institution: 'HVN Sr. Sec. Public School',
    period: '2021 – 2022',
    grade: '89%',
    status: 'Completed',
    location: 'Jaipur, Rajasthan',
    progress: null,
    highlights: ['Science Stream', 'Mathematics & Physics', 'Computer Science Basics'],
  },
  {
    degree: 'Secondary (10th)',
    institution: 'HVN Sr. Sec. Public School',
    period: '2019 – 2020',
    grade: '64.67%',
    status: 'Completed',
    location: 'Jaipur, Rajasthan',
    progress: null,
    highlights: ['Core Subjects', 'Mathematical Fundamentals', 'Introduction to Computers'],
  },
];

const Education = () => (
  <section id="education" style={{ padding: '40px', backgroundColor: '#0a0a0a', minHeight: '100%' }}>
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '40px' }} className="animate-fade-in">
        <p className="section-comment" style={{ marginBottom: '8px' }}>// section_04</p>
        <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '22px', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.01em' }}>
          educational<span style={{ color: '#4ec9b0' }}>_journey</span>
        </h2>
        <div style={{ width: '40px', height: '1px', backgroundColor: '#4ec9b0', marginTop: '14px' }} />
      </div>

      {/* Timeline */}
      <div style={{ position: 'relative', paddingLeft: '28px' }}>
        {/* Vertical line */}
        <div style={{ position: 'absolute', left: '7px', top: '8px', bottom: '0', width: '1px', backgroundColor: '#3c3c3c' }} aria-hidden="true" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {educationData.map((edu, i) => (
            <div
              key={edu.degree}
              className="animate-fade-in-left"
              style={{ position: 'relative', animationDelay: `${i * 150}ms` }}
            >
              {/* Dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '-28px',
                  top: '14px',
                  width: '15px',
                  height: '15px',
                  borderRadius: '50%',
                  backgroundColor: edu.status === 'Current' ? '#4ec9b0' : '#3c3c3c',
                  border: '2px solid #000000',
                  boxShadow: edu.status === 'Current' ? '0 0 0 1px #4ec9b0' : 'none',
                }}
                aria-hidden="true"
              />

              {/* Card */}
              <div
                className="ds-card"
                style={{
                  padding: '20px 24px',
                  borderLeft: edu.status === 'Current' ? '2px solid #4ec9b0' : '1px solid #3c3c3c',
                }}
              >
                {/* Top */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                      <h3 style={{ fontSize: '13px', color: '#ffffff', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>
                        {edu.degree}
                      </h3>
                      <span style={{
                        fontSize: '9px',
                        padding: '1px 7px',
                        borderRadius: '2px',
                        border: '1px solid',
                        fontFamily: "'JetBrains Mono', monospace",
                        ...(edu.status === 'Current'
                          ? { color: '#4ec9b0', borderColor: 'rgba(78,201,176,0.4)', backgroundColor: 'rgba(78,201,176,0.08)' }
                          : { color: '#777777', borderColor: '#3c3c3c', backgroundColor: 'transparent' }),
                      }}>
                        {edu.status}
                      </span>
                    </div>
                    <p style={{ fontSize: '12px', color: '#4ec9b0', marginBottom: '2px' }}>{edu.institution}</p>
                    <p style={{ fontSize: '10px', color: '#777777' }}>{edu.location}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '11px', color: '#cccccc', fontFamily: "'JetBrains Mono', monospace", marginBottom: '2px' }}>
                      {edu.grade}
                    </div>
                    <div style={{ fontSize: '10px', color: '#777777' }}>{edu.period}</div>
                  </div>
                </div>

                {/* Progress (current only) */}
                {edu.progress && (
                  <div style={{ marginBottom: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#777777', marginBottom: '4px' }}>
                      <span>progress</span>
                      <span>{edu.progress}%</span>
                    </div>
                    <div className="skill-track">
                      <div className="skill-fill" style={{ width: `${edu.progress}%` }} />
                    </div>
                  </div>
                )}

                {/* Highlights */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {edu.highlights.map(h => (
                    <span key={h} className="token-chip" style={{ fontSize: '10px', color: '#777777', borderColor: '#3c3c3c' }}>{h}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary footer */}
      <div
        className="animate-fade-in ds-card"
        style={{ marginTop: '36px', padding: '20px 24px', display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '16px', fontWeight: 700, color: '#4ec9b0', fontFamily: "'JetBrains Mono', monospace" }}>2026</div>
          <div style={{ fontSize: '10px', color: '#777777', marginTop: '2px' }}>Expected Graduation</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '16px', fontWeight: 700, color: '#4ec9b0', fontFamily: "'JetBrains Mono', monospace" }}>6.7</div>
          <div style={{ fontSize: '10px', color: '#777777', marginTop: '2px' }}>Current CGPA</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '16px', fontWeight: 700, color: '#4ec9b0', fontFamily: "'JetBrains Mono', monospace" }}>89%</div>
          <div style={{ fontSize: '10px', color: '#777777', marginTop: '2px' }}>12th Score</div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;