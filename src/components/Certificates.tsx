import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, ExternalLink, Calendar, Building } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "Course in Python",
      issuer: "Google via Coursera",
      date: "October 2023",
      verification: "coursera.org/verify/R92X9VQNKGVY",
      description: "Comprehensive Python programming course covering fundamentals, data structures, algorithms, and practical applications in software development.",
      skills: ["Python Programming", "Data Structures", "Algorithms", "Problem Solving"],
      credentialType: "Professional Certificate",
      provider: "Google",
      platform: "Coursera"
    },
    {
      title: "Full Stack Development Training Program",
      issuer: "Geeks IT Data Solutions",
      date: "July 2024",
      verification: "Contact for verification",
      description: "Intensive training program covering end-to-end web development including frontend technologies, backend development, databases, and deployment strategies.",
      skills: ["React.js", "Node.js", "MongoDB", "Express.js", "Full Stack Development", "API Development"],
      credentialType: "Training Certificate",
      provider: "Geeks IT Data Solutions",
      platform: "In-Person Training"
    }
  ];

  const extracurricular = [
    {
      title: "Blood Donation Drive Participation",
      organization: "SBCET College",
      description: "Actively participated in college blood donation drive, contributing to community welfare and health initiatives.",
      type: "Community Service",
      impact: "Health & Wellness"
    },
    {
      title: "Sports Event Organization",
      organization: "School Level",
      description: "Organized and managed sports events at school level, demonstrating leadership and organizational skills.",
      type: "Leadership & Organization", 
      impact: "Event Management"
    }
  ];

  return (
    <section id="certificates" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Certificates & <span className="text-accent">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Professional certifications and extracurricular achievements that showcase continuous learning and community involvement
          </p>
        </div>

        {/* Certificates Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 animate-fade-in">
            Professional Certifications
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <Card 
                key={cert.title}
                className={`p-6 bg-card-glass border-border shadow-card backdrop-blur-sm hover:shadow-glow transition-all duration-500 transform hover:scale-[1.02] group ${
                  index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'
                }`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-glow group-hover:shadow-accent-glow transition-all duration-300">
                    <Award className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      {cert.title}
                    </h4>
                    <div className="flex items-center text-accent font-semibold mb-1">
                      <Building className="w-4 h-4 mr-2" />
                      {cert.issuer}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {cert.date}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Skills Gained */}
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-foreground mb-3">
                    Skills Gained:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="outline"
                        className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <span className="text-muted-foreground">Type: </span>
                    <span className="text-foreground font-medium">{cert.credentialType}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Platform: </span>
                    <span className="text-foreground font-medium">{cert.platform}</span>
                  </div>
                </div>

                {/* Verification Link */}
                {cert.verification !== "Contact for verification" && (
                  <Button 
                    asChild
                    variant="outline"
                    className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  >
                    <a 
                      href={`https://${cert.verification}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Verify Certificate
                    </a>
                  </Button>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Extracurricular Activities */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Extracurricular Activities
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {extracurricular.map((activity, index) => (
              <Card 
                key={activity.title}
                className="p-6 bg-card-glass border-border shadow-card backdrop-blur-sm hover:shadow-glow transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      {activity.title}
                    </h4>
                    <p className="text-accent text-sm font-medium mb-2">
                      {activity.organization}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {activity.description}
                </p>

                <div className="flex justify-between items-center">
                  <Badge variant="outline" className="border-muted text-muted-foreground text-xs">
                    {activity.type}
                  </Badge>
                  <Badge className="bg-accent/20 text-accent border-none text-xs">
                    {activity.impact}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievement Summary */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="p-8 bg-gradient-secondary border-accent/20 shadow-glow">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
              These certifications and activities reflect my commitment to continuous learning, 
              professional development, and community engagement. I believe in balancing technical 
              expertise with social responsibility.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">2</div>
                <div className="text-sm text-muted-foreground">Professional Certificates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">2</div>
                <div className="text-sm text-muted-foreground">Community Activities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">8+</div>
                <div className="text-sm text-muted-foreground">Skills Acquired</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">2024</div>
                <div className="text-sm text-muted-foreground">Latest Achievement</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certificates;