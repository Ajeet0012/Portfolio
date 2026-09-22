import { Github, ExternalLink } from 'lucide-react';

type Project = {
  index: string;
  title: string;
  period: string;
  description: string;
  features: string[];
  technologies: string[];
  highlights: Record<string, string>;
  status: 'Completed' | 'In Development';
  github: string;
  demo: string;
};

const projects: Project[] = [
  {
    index: '01',
    title: 'School Management System',
    period: 'Sep 2024 – Dec 2024',
    description:
      'A full-stack school management system for managing student records, attendance, fees, teachers, and results. Features secure login with role-based access for Admin, Teacher, and Student.',
    features: [
      'Student records, attendance & fees management',
      'Role-based access: Admin, Teacher, Student',
      'Secure login system with protected routes',
      'Results and report generation',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    highlights: { stack: 'MERN', roles: '3 Role Types', db: 'MongoDB Atlas' },
    status: 'Completed',
    github: 'https://github.com/Ajeet0012',
    demo: '#',
  },
  {
    index: '02',
    title: 'Role-Based Admin Dashboard',
    period: 'Jan 2025 – May 2025',
    description:
      'Comprehensive full-stack dashboard with sophisticated role-based access control. Features secure authentication and distinct user interfaces for Admin, Accountant, and Customer.',
    features: [
      'Admin panel for complete user management',
      'Accountant interface for transaction handling',
      'Customer dashboard with data visualisation',
      'Secure auth via Clerk, protected middleware',
    ],
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Clerk Auth', 'Express.js', 'JWT'],
    highlights: { roles: '3 Role Types', auth: 'Clerk Integration', db: 'MongoDB Atlas' },
    status: 'Completed',
    github: 'https://github.com/Ajeet0012',
    demo: '#',
  },
];

const otherProjects = [
  'yugsoft-tech/Ai',
  'aksofttech/Ai-backend',
  'aksofttech/Ai-frontend',
  'yugsoft-tech/yugsoft',
  'Ajeet0012/School_erp',
  'aksofttech/Portfolio',
  'aksofttech/School-ERP-backend',
  'Ajeet0012/Ai',
  'aksofttech/School-ERP-frontend',
  'aksofttech/Marketplace-Frontend',
  'Ajeet0012/catalog',
  'Ajeet0012/ERP',
  'Ajeet0012/Portfolio',
  'Ajeet0012/-Smart-Adaptive-Knowledge-Speech-based-Human-Interface',
  'aksofttech/Marketplace-Backend',
  'Ajeet0012/Snake-bite',
  'Ajeet0012/chud.ai'
];

const statusStyles: Record<string, React.CSSProperties> = {
  Completed: {
    backgroundColor: 'rgba(78,201,176,0.1)',
    color: '#4ec9b0',
    border: '1px solid rgba(78,201,176,0.3)',
  },
  'In Development': {
    backgroundColor: 'rgba(255,95,87,0.1)',
    color: '#ff5f57',
    border: '1px solid rgba(255,95,87,0.3)',
  },
};

const Projects = () => (
  <section id="projects" style={{ padding: '40px', backgroundColor: '#000000', minHeight: '100%' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '40px' }} className="animate-fade-in">
        <p className="section-comment" style={{ marginBottom: '8px' }}>// section_03</p>
        <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '22px', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.01em' }}>
          featured<span style={{ color: '#4ec9b0' }}>_projects</span>
        </h2>
        <div style={{ width: '40px', height: '1px', backgroundColor: '#4ec9b0', marginTop: '14px' }} />
      </div>

      {/* Project cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {projects.map((project, i) => (
          <div
            key={project.title}
            className={`ds-card ${i % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'}`}
            style={{ padding: '28px', animationDelay: `${i * 120}ms` }}
          >
            {/* Top row */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{
                  fontSize: '10px',
                  fontFamily: "'JetBrains Mono', monospace",
                  color: '#000000',
                  backgroundColor: '#4ec9b0',
                  padding: '2px 7px',
                  borderRadius: '2px',
                  fontWeight: 700,
                }}>
                  {project.index}
                </span>
                <h3 style={{ fontSize: '15px', color: '#ffffff', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>
                  {project.title}
                </h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '10px', color: '#777777' }}>{project.period}</span>
                <span style={{
                  ...statusStyles[project.status],
                  fontSize: '10px',
                  borderRadius: '2px',
                  padding: '2px 8px',
                  fontFamily: "'JetBrains Mono', monospace",
                }}>
                  {project.status}
                </span>
              </div>
            </div>

            {/* Body */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '24px', flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontSize: '12px', color: '#777777', lineHeight: '20px', marginBottom: '16px' }}>
                  {project.description}
                </p>

                {/* Features */}
                <div style={{ marginBottom: '16px' }}>
                  <p style={{ fontSize: '10px', color: '#4ec9b0', marginBottom: '8px', fontFamily: "'JetBrains Mono', monospace" }}>
                    // key_features
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {project.features.map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '11px', color: '#777777' }}>
                        <span style={{ color: '#4ec9b0', flexShrink: 0, marginTop: '1px' }}>›</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {project.technologies.map(t => (
                    <span key={t} className="token-chip" style={{ fontSize: '10px' }}>{t}</span>
                  ))}
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '10px', textDecoration: 'none' }}
                  >
                    <Github size={12} />
                    view code
                  </a>
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '10px', textDecoration: 'none' }}
                    >
                      <ExternalLink size={12} />
                      live demo
                    </a>
                  )}
                </div>
              </div>

              {/* Highlights sidebar */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth: '130px' }}>
                {Object.entries(project.highlights).map(([key, val]) => (
                  <div
                    key={key}
                    style={{
                      border: '1px solid #3c3c3c',
                      borderRadius: '4px',
                      padding: '10px 14px',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#4ec9b0', fontFamily: "'JetBrains Mono', monospace" }}>
                      {val}
                    </div>
                    <div style={{ fontSize: '9px', color: '#777777', marginTop: '2px', textTransform: 'capitalize' }}>
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub Repos Grid */}
      <div className="animate-fade-in" style={{ marginTop: '48px', animationDelay: '300ms' }}>
        <p className="section-comment" style={{ marginBottom: '8px' }}>// other_repositories</p>
        <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '18px', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.01em', marginBottom: '20px' }}>
          github<span style={{ color: '#4ec9b0' }}>_archives</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
          {otherProjects.map(repo => (
            <a
              key={repo}
              href={`https://github.com/${repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ds-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#4ec9b0';
                const icon = e.currentTarget.querySelector('svg');
                if (icon) icon.style.color = '#4ec9b0';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#3c3c3c';
                const icon = e.currentTarget.querySelector('svg');
                if (icon) icon.style.color = '#777777';
              }}
            >
              <Github size={16} style={{ color: '#777777', transition: 'color 150ms' }} />
              <div>
                <div style={{ fontSize: '10px', color: '#777777', marginBottom: '2px' }}>{repo.split('/')[0]}</div>
                <div style={{ fontSize: '12px', color: '#ffffff', fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>
                  {repo.split('/')[1]}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="animate-fade-in" style={{ textAlign: 'center', marginTop: '48px' }}>
        <p style={{ fontSize: '11px', color: '#777777', marginBottom: '16px' }}>
          // view all work on github
        </p>
        <a
          href="https://github.com/Ajeet0012"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', textDecoration: 'none' }}
        >
          <Github size={13} />
          visit profile
        </a>
      </div>
    </div>
  </section>
);

export default Projects;