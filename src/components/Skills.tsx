import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Wrench, Users } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('programming');

  const skillCategories = {
    programming: {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 90, description: "ES6+, Async/Await, DOM Manipulation" },
        { name: "Python", level: 85, description: "Data Structures, Algorithms, Automation" },
        { name: "C++", level: 80, description: "OOP, STL, Competitive Programming" },
        { name: "Java", level: 75, description: "Object-Oriented Programming, Collections" },
        { name: "C", level: 70, description: "System Programming, Memory Management" }
      ]
    },
    database: {
      icon: Database,
      title: "Database Management",
      skills: [
        { name: "MongoDB", level: 85, description: "NoSQL, Aggregation, Atlas Cloud" },
        { name: "MySQL", level: 80, description: "Relational Design, Complex Queries" },
        { name: "Prisma", level: 75, description: "ORM, Type-safe Database Access" },
        { name: "SQLite", level: 70, description: "Embedded Database, Local Storage" }
      ]
    },
    tools: {
      icon: Wrench,
      title: "Development Tools",
      skills: [
        { name: "VS Code", level: 95, description: "Extensions, Debugging, Git Integration" },
        { name: "React.js", level: 85, description: "Hooks, Context, Component Design" },
        { name: "Node.js", level: 80, description: "Express, API Development, Middleware" },
        { name: "Git", level: 85, description: "Version Control, Branching, Collaboration" }
      ]
    },
    soft: {
      icon: Users,
      title: "Interpersonal Skills",
      skills: [
        { name: "Team Collaboration", level: 90, description: "Cross-functional teamwork" },
        { name: "Problem Solving", level: 88, description: "Analytical thinking, debugging" },
        { name: "Communication", level: 85, description: "Technical documentation, presentations" },
        { name: "Adaptability", level: 87, description: "Learning new technologies quickly" }
      ]
    }
  };

  const categories = Object.keys(skillCategories) as (keyof typeof skillCategories)[];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-background to-card">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiencies
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
          {categories.map((category) => {
            const CategoryIcon = skillCategories[category].icon;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-gradient-primary text-primary-foreground shadow-glow'
                    : 'bg-card-glass text-muted-foreground hover:text-foreground border border-border'
                }`}
              >
                <CategoryIcon className="w-5 h-5" />
                {skillCategories[category].title}
              </button>
            );
          })}
        </div>

        {/* Skills Display */}
        <div className="animate-fade-in">
          <Card className="p-8 bg-card-glass border-border shadow-card backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              {skillCategories[activeCategory].title}
            </h3>
            
            <div className="grid gap-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="animate-fade-in-left group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h4 className="text-lg font-medium text-foreground">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                    <Badge variant="secondary" className="ml-4">
                      {skill.level}%
                    </Badge>
                  </div>
                  
                  {/* Skill Bar */}
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-accent rounded-full transition-all duration-1000 ease-out group-hover:shadow-accent-glow"
                      style={{ 
                        width: `${skill.level}%`,
                        animation: `fade-in-right 1s ease-out ${index * 100}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Additional Technologies */}
        <div className="mt-12 text-center animate-fade-in">
          <h4 className="text-xl font-semibold text-foreground mb-6">
            Additional Technologies & Frameworks
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Express.js", "Clerk Auth", "Twilio API", "OpenAI", "n8n", 
              "REST APIs", "JWT", "Bootstrap", "Tailwind CSS", "Responsive Design"
            ].map((tech) => (
              <Badge 
                key={tech}
                variant="outline" 
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300 px-4 py-2"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;