import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Calendar, Users, Shield, Bot } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Role-Based Admin Dashboard",
      period: "Sep 2024 - Dec 2024",
      description: "A comprehensive full-stack dashboard with sophisticated role-based access control system. Features secure authentication and distinct user interfaces for different roles.",
      icon: Shield,
      technologies: ["React.js", "Node.js", "MongoDB", "Clerk Auth", "Express.js", "JWT"],
      features: [
        "Admin panel for complete user management",
        "Accountant interface for transaction handling", 
        "Customer dashboard for data visualization",
        "Secure authentication with Clerk",
        "Protected routes and middleware"
      ],
      highlights: {
        users: "3 Role Types",
        auth: "Clerk Integration",
        database: "MongoDB Atlas"
      },
      status: "Completed",
      github: "https://github.com/Ajeet0012",
      demo: "#"
    },
    {
      title: "AI-Powered WhatsApp Bot",
      period: "Jan 2025 - May 2025",
      description: "Intelligent automation solution for e-commerce bill generation using WhatsApp as the interface. Integrates multiple AI services for natural language processing.",
      icon: Bot,
      technologies: ["n8n", "OpenAI API", "Twilio", "JavaScript", "Webhook", "AI"],
      features: [
        "Automated bill generation from chat",
        "Real-time invoice dispatch",
        "Payment status tracking",
        "Natural language processing",
        "Workflow automation with n8n"
      ],
      highlights: {
        ai: "OpenAI GPT",
        messaging: "Twilio API",
        automation: "n8n Workflows"
      },
      status: "In Development",
      github: "https://github.com/Ajeet0012",
      demo: "#"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "Completed" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400";
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Showcasing my technical expertise through real-world applications and innovative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`p-8 bg-card-glass border-border shadow-card backdrop-blur-sm hover:shadow-glow transition-all duration-500 transform hover:scale-[1.02] ${
                index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'
              }`}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Project Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-glow">
                      <project.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-foreground">
                          {project.title}
                        </h3>
                        <Badge className={`${getStatusColor(project.status)} border-none`}>
                          {project.status}
                        </Badge>
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        {project.period}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech}
                          variant="outline"
                          className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button 
                      asChild
                      className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                    <Button 
                      variant="outline"
                      asChild
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Project Highlights */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Project Highlights
                  </h4>
                  {Object.entries(project.highlights).map(([key, value]) => (
                    <Card key={key} className="p-4 bg-muted border-border">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent mb-1">
                          {value}
                        </div>
                        <div className="text-sm text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Interested in My Work?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            These projects represent my journey in full-stack development. 
            I'm always working on something new and exciting!
          </p>
          <Button 
            asChild
            className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold shadow-glow hover:shadow-accent-glow transition-all duration-300 transform hover:scale-105"
          >
            <a href="https://github.com/Ajeet0012" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;