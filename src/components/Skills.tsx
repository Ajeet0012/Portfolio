import { useState } from 'react';
import { Code, Database, Wrench, Users } from 'lucide-react';

type SkillItem = { name: string; level: number; description: string };
type Categories = { [key: string]: { icon: React.ElementType; title: string; skills: SkillItem[] } };

const skillCategories: Categories = {
  programming: {
    icon: Code,
    title: 'Programming',
    skills: [
      { name: 'JavaScript', level: 90, description: 'ES6+, Async/Await, DOM Manipulation' },
      { name: 'Python',     level: 85, description: 'Data Structures, Algorithms, Automation' },
      { name: 'C++',        level: 80, description: 'OOP, STL, Competitive Programming' },
      { name: 'Java',       level: 75, description: 'Object-Oriented Programming, Collections' },
      { name: 'C',          level: 70, description: 'System Programming, Memory Management' },
    ],
  },
  database: {
    icon: Database,
    title: 'Databases',
    skills: [
      { name: 'MongoDB', level: 85, description: 'NoSQL, Aggregation, Atlas Cloud' },
      { name: 'MySQL',   level: 80, description: 'Relational Design, Complex Queries' },
      { name: 'Prisma',  level: 75, description: 'ORM, Type-safe Database Access' },
      { name: 'SQLite',  level: 70, description: 'Embedded Database, Local Storage' },
    ],
  },
  tools: {
    icon: Wrench,
    title: 'Tools & Frameworks',
    skills: [
      { name: 'React.js',  level: 85, description: 'Hooks, Context, Component Design' },
      { name: 'Node.js',   level: 80, description: 'Express, API Development, Middleware' },
      { name: 'Git',       level: 85, description: 'Version Control, Branching, Collaboration' },
      { name: 'VS Code',   level: 95, description: 'Extensions, Debugging, Git Integration' },
    ],
  },
  soft: {
    icon: Users,
    title: 'Soft Skills',
    skills: [
      { name: 'Team Collaboration', level: 90, description: 'Cross-functional teamwork' },
      { name: 'Problem Solving',    level: 88, description: 'Analytical thinking, debugging' },
      { name: 'Communication',      level: 85, description: 'Technical docs, presentations' },
      { name: 'Adaptability',       level: 87, description: 'Learning new technologies quickly' },
    ],
  },
};

const additionalTech = [
  'Express.js', 'Clerk Auth', 'Twilio API', 'OpenAI', 'n8n',
  'REST APIs', 'JWT', 'Bootstrap', 'Tailwind CSS', 'HTML', 'CSS',
];

const Skills = () => {
  const [active, setActive] = useState<keyof typeof skillCategories>('programming');
  const categories = Object.keys(skillCategories) as (keyof typeof skillCategories)[];

  return (
    <section id="skills" style={{ padding: '40px', backgroundColor: '#0a0a0a', minHeight: '100%' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '40px' }} className="animate-fade-in">
          <p className="section-comment" style={{ marginBottom: '8px' }}>// section_02</p>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '22px', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.01em' }}>
            technical<span style={{ color: '#4ec9b0' }}>_skills</span>
          </h2>
          <div style={{ width: '40px', height: '1px', backgroundColor: '#4ec9b0', marginTop: '14px' }} />
        </div>

        {/* Category tabs */}
        <div
          className="animate-fade-in"
          style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}
          role="tablist"
          aria-label="Skill categories"
        >
          {categories.map(cat => {
            const Icon = skillCategories[cat].icon;
            const isActive = active === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                id={`tab-${cat}`}
                aria-controls={`panel-${cat}`}
                onClick={() => setActive(cat)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '4px',
                  border: isActive ? '1px solid #4ec9b0' : '1px solid #3c3c3c',
                  backgroundColor: isActive ? 'rgba(78,201,176,0.1)' : 'transparent',
                  color: isActive ? '#4ec9b0' : '#777777',
                  fontSize: '11px',
                  fontFamily: "'JetBrains Mono', monospace",
                  cursor: 'pointer',
                  transition: 'all 150ms',
                }}
              >
                <Icon size={13} />
                {skillCategories[cat].title}
              </button>
            );
          })}
        </div>

        {/* Active panel */}
        <div
          className="ds-card animate-fade-in"
          id={`panel-${active}`}
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          style={{ padding: '24px' }}
        >
          <div style={{ display: 'grid', gap: '18px' }}>
            {skillCategories[active].skills.map((skill, i) => (
              <div key={skill.name} style={{ animationDelay: `${i * 60}ms` }} className="animate-fade-in-left">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                  <div>
                    <span style={{ fontSize: '12px', color: '#ffffff', fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>
                      {skill.name}
                    </span>
                    <span style={{ fontSize: '10px', color: '#777777', marginLeft: '10px' }}>{skill.description}</span>
                  </div>
                  <span style={{
                    fontSize: '10px',
                    color: '#4ec9b0',
                    border: '1px solid #3c3c3c',
                    borderRadius: '2px',
                    padding: '1px 6px',
                    fontFamily: "'JetBrains Mono', monospace",
                    flexShrink: 0,
                    marginLeft: '12px',
                  }}>
                    {skill.level}%
                  </span>
                </div>
                <div className="skill-track" aria-label={`${skill.name} proficiency ${skill.level}%`}>
                  <div className="skill-fill" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional tech */}
        <div className="animate-fade-in" style={{ marginTop: '32px' }}>
          <p style={{ fontSize: '10px', color: '#777777', marginBottom: '12px', fontFamily: "'JetBrains Mono', monospace" }}>
            // additional_technologies
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {additionalTech.map(tech => (
              <span key={tech} className="token-chip">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;