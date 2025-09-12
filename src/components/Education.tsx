import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Trophy } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech (Computer Science Engineering)",
      institution: "Shri Balaji College Of Engineering & Technology",
      period: "2022 - 2026",
      grade: "6.7 CGPA",
      status: "Current",
      location: "Jaipur, Rajasthan",
      description: "Pursuing comprehensive computer science education with focus on software development, data structures, algorithms, and modern programming paradigms.",
      highlights: [
        "Core CS fundamentals",
        "Software Engineering principles", 
        "Database Management Systems",
        "Web Development technologies"
      ]
    },
    {
      degree: "Senior Secondary School (12th)",
      institution: "HVN Sr. Sec. Public School",
      period: "2021 - 2022",
      grade: "89%",
      status: "Completed",
      location: "Jaipur, Rajasthan", 
      description: "Completed higher secondary education with strong performance in Science stream, building foundation for engineering studies.",
      highlights: [
        "Science Stream",
        "Mathematics & Physics",
        "Computer Science basics",
        "Strong analytical foundation"
      ]
    },
    {
      degree: "Secondary School (10th)",
      institution: "HVN Sr. Sec. Public School", 
      period: "2019 - 2020",
      grade: "64.67%",
      status: "Completed",
      location: "Jaipur, Rajasthan",
      description: "Foundation education completed with focus on core subjects and introduction to computer science concepts.",
      highlights: [
        "Core subjects mastery",
        "Introduction to computers",
        "Mathematical fundamentals",
        "Problem-solving skills"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "Current" ? "bg-green-500/20 text-green-400" : "bg-blue-500/20 text-blue-400";
  };

  const getGradeColor = (grade: string) => {
    if (grade.includes("CGPA")) return "text-accent";
    const percentage = parseFloat(grade);
    if (percentage >= 85) return "text-green-400";
    if (percentage >= 70) return "text-yellow-400";
    return "text-orange-400";
  };

  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-br from-card to-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Educational <span className="text-accent">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            My academic path in computer science and the foundation that drives my passion for technology
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-accent opacity-30 hidden md:block" />

          {/* Education Items */}
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div 
                key={edu.degree}
                className={`relative animate-fade-in-left group`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-accent rounded-full shadow-accent-glow border-2 border-background hidden md:block" />

                {/* Education Card */}
                <div className="md:ml-16">
                  <Card className="p-6 bg-card-glass border-border shadow-card backdrop-blur-sm hover:shadow-glow transition-all duration-500 transform hover:scale-[1.02] group-hover:border-accent/30">
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Main Info */}
                      <div className="md:col-span-2">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-glow">
                            <GraduationCap className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2 flex-wrap">
                              <h3 className="text-xl font-bold text-foreground">
                                {edu.degree}
                              </h3>
                              <Badge className={`${getStatusColor(edu.status)} border-none`}>
                                {edu.status}
                              </Badge>
                            </div>
                            <h4 className="text-accent font-semibold mb-2">
                              {edu.institution}
                            </h4>
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {edu.description}
                        </p>

                        {/* Highlights */}
                        <div>
                          <h5 className="text-sm font-semibold text-foreground mb-2">
                            Key Focus Areas:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {edu.highlights.map((highlight) => (
                              <Badge 
                                key={highlight}
                                variant="outline"
                                className="border-muted text-muted-foreground text-xs"
                              >
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Details Sidebar */}
                      <div className="space-y-4">
                        {/* Duration */}
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2 text-accent" />
                          <span className="text-sm">{edu.period}</span>
                        </div>

                        {/* Location */}
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2 text-accent" />
                          <span className="text-sm">{edu.location}</span>
                        </div>

                        {/* Grade */}
                        <div className="flex items-center">
                          <Trophy className="w-4 h-4 mr-2 text-accent" />
                          <span className={`text-sm font-semibold ${getGradeColor(edu.grade)}`}>
                            {edu.grade}
                          </span>
                        </div>

                        {/* Progress Bar for Current Education */}
                        {edu.status === "Current" && (
                          <div className="mt-4">
                            <div className="flex justify-between text-xs text-muted-foreground mb-1">
                              <span>Progress</span>
                              <span>60%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div 
                                className="h-full bg-gradient-accent rounded-full shadow-accent-glow transition-all duration-1000"
                                style={{ width: '60%' }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="p-6 bg-gradient-secondary border-accent/20 shadow-glow">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Current Academic Focus
            </h3>
            <p className="text-muted-foreground mb-4">
              Actively pursuing advanced topics in software engineering, full-stack development, 
              and emerging technologies while maintaining strong academic performance.
            </p>
            <div className="flex justify-center gap-4">
              <Badge variant="outline" className="border-accent text-accent">
                Expected Graduation: 2026
              </Badge>
              <Badge variant="outline" className="border-accent text-accent">
                Current CGPA: 6.7
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;