import { Card } from '@/components/ui/card';
import { Code, Database, Users, Trophy } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Programming",
      description: "Proficient in multiple languages including C++, Python, JavaScript, and Java"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Experience with MySQL, MongoDB, SQLite, and Prisma ORM"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Strong communication skills with adaptability in team environments"
    },
    {
      icon: Trophy,
      title: "Problem Solver",
      description: "Enthusiastic contributor focused on delivering impactful solutions"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Summary */}
          <div className="animate-fade-in-left">
            <Card className="p-8 bg-card-glass border-border shadow-card backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Professional Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Enthusiastic Computer Science student with strong problem-solving skills and 
                proficiency in multiple programming languages. Adept at effective communication 
                and collaboration within team environments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Seeking opportunities to apply technical expertise and deliver impactful 
                solutions that contribute to organizational success. Currently pursuing 
                B.Tech in Computer Science Engineering with a focus on full-stack development 
                and emerging technologies.
              </p>
            </Card>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-right">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="p-6 bg-card-glass border-border shadow-card backdrop-blur-sm hover:shadow-glow transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:shadow-accent-glow transition-all duration-300">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in">
          {[
            { number: "2022", label: "Started B.Tech" },
            { number: "6.7", label: "Current CGPA" },
            { number: "2+", label: "Major Projects" },
            { number: "5+", label: "Technologies" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;