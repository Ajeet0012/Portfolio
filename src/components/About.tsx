const SectionHeader = ({
  comment,
  title,
  highlight,
  sub,
}: {
  comment: string;
  title: string;
  highlight: string;
  sub?: string;
}) => (
  <div style={{ marginBottom: '40px' }} className="animate-fade-in">
    <p className="section-comment" style={{ marginBottom: '8px' }}>{comment}</p>
    <h2
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '22px',
        fontWeight: 700,
        color: '#ffffff',
        marginBottom: sub ? '10px' : 0,
        letterSpacing: '-0.01em',
      }}
    >
      {title}
      <span style={{ color: '#4ec9b0' }}>_{highlight}</span>
    </h2>
    {sub && (
      <p style={{ fontSize: '11px', color: '#777777', maxWidth: '520px', lineHeight: '18px' }}>
        {sub}
      </p>
    )}
    <div
      style={{ width: '40px', height: '1px', backgroundColor: '#4ec9b0', marginTop: '14px' }}
    />
  </div>
);

const About = () => {
  const highlights = [
    {
      prompt: '01',
      title: 'Programming',
      desc: 'C, C++, JavaScript, Java — proficient across systems and web stacks.',
    },
    {
      prompt: '02',
      title: 'Databases',
      desc: 'MySQL, MongoDB, SQLite, Prisma ORM — relational and NoSQL experience.',
    },
    {
      prompt: '03',
      title: 'Collaboration',
      desc: 'Strong team communication, adaptability, and cross-functional skills.',
    },
    {
      prompt: '04',
      title: 'Problem Solving',
      desc: 'Analytical mindset focused on delivering clean, scalable solutions.',
    },
  ];

  return (
    <section id="about" style={{ padding: '40px', backgroundColor: '#000000' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionHeader
          comment="// section_01"
          title="about"
          highlight="me"
          sub="Motivated and detail-oriented Full Stack Developer fresher with hands-on knowledge of front-end and back-end technologies."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
            alignItems: 'start',
          }}
        >
          {/* Summary */}
          <div className="animate-fade-in-left ds-card" style={{ padding: '24px' }}>
            <p style={{ fontSize: '10px', color: '#4ec9b0', fontFamily: "'JetBrains Mono', monospace", marginBottom: '12px' }}>
              professional_summary.md
            </p>
            <p style={{ fontSize: '12px', color: '#777777', lineHeight: '20px', marginBottom: '14px' }}>
              Enthusiastic Software Developer with strong problem-solving skills and proficiency in multiple
              programming languages. Adept at effective communication and collaboration within team environments.
            </p>
            <p style={{ fontSize: '12px', color: '#777777', lineHeight: '20px', marginBottom: '20px' }}>
              Seeking opportunities to apply technical expertise and deliver impactful solutions that
              contribute to organisational success. Currently pursuing B.Tech in CSE from
              Shri Balaji College of Engineering &amp; Technology, Jaipur.
            </p>
            <div style={{ borderTop: '1px solid #3c3c3c', paddingTop: '16px' }}>
              {[
                { label: 'location', value: 'Jaipur, Rajasthan' },
                { label: 'email',    value: 'ajeetojha9057@gmail.com' },
                { label: 'phone',    value: '+91 9057524558' },
                { label: 'github',   value: 'github.com/Ajeet0012' },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: 'flex', gap: '8px', marginBottom: '6px', fontSize: '11px' }}>
                  <span style={{ color: '#3c3c3c', minWidth: '64px' }}>{label}:</span>
                  <span style={{ color: '#cccccc' }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights grid */}
          <div
            className="animate-fade-in-right"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}
          >
            {highlights.map(item => (
              <div key={item.prompt} className="ds-card" style={{ padding: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{
                    fontSize: '9px',
                    color: '#000000',
                    backgroundColor: '#4ec9b0',
                    borderRadius: '2px',
                    padding: '1px 5px',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 700,
                  }}>
                    {item.prompt}
                  </span>
                  <span style={{ fontSize: '12px', color: '#ffffff', fontWeight: 600 }}>{item.title}</span>
                </div>
                <p style={{ fontSize: '11px', color: '#777777', lineHeight: '17px' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;