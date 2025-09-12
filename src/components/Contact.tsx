import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Github, Send, Download, Calendar } from 'lucide-react';
import techPattern from '@/assets/tech-pattern.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Hi Ajeet,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    
    window.location.href = `mailto:ajeetojha9057@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening Email Client",
      description: "Your default email client will open with the message pre-filled.",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ajeetojha9057@gmail.com",
      link: "mailto:ajeetojha9057@gmail.com",
      description: "Drop me an email anytime"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 90575 24558",
      link: "tel:+919057524558",
      description: "Call for immediate response"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jaipur, Rajasthan",
      link: "#",
      description: "Based in the Pink City"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Ajeet0012",
      link: "https://github.com/Ajeet0012",
      description: "Check out my repositories"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url(${techPattern})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-card opacity-90" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to discuss opportunities, collaborations, or just want to say hello? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in-left">
            <Card className="p-8 bg-card-glass border-border shadow-card backdrop-blur-sm h-fit">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Get In Touch
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm currently open to new opportunities and interesting projects. 
                Whether you're looking for a developer, have a project in mind, or just want to connect, 
                feel free to reach out through any of the channels below.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((contact, index) => (
                  <div 
                    key={contact.label}
                    className="group animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <a 
                      href={contact.link}
                      target={contact.label === "GitHub" ? "_blank" : undefined}
                      rel={contact.label === "GitHub" ? "noopener noreferrer" : undefined}
                      className="flex items-center p-4 rounded-lg hover:bg-muted transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 group-hover:shadow-glow transition-all duration-300">
                        <contact.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-foreground mb-1">
                          {contact.label}
                        </div>
                        <div className="text-accent text-sm mb-1">
                          {contact.value}
                        </div>
                        <div className="text-muted-foreground text-xs">
                          {contact.description}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <Button 
                  asChild
                  className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300"
                >
                  <a href="mailto:ajeetojha9057@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Quick Email
                  </a>
                </Button>
                
                <Button 
                  variant="outline"
                  asChild
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <a href="tel:+919057524558">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <Card className="p-8 bg-card-glass border-border shadow-card backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="bg-muted border-border focus:border-accent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="bg-muted border-border focus:border-accent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Collaboration"
                    className="bg-muted border-border focus:border-accent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello..."
                    rows={5}
                    className="bg-muted border-border focus:border-accent resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-accent text-accent-foreground hover:shadow-accent-glow transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  <span className="text-accent">Note:</span> The form will open your default email client with the message pre-filled.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="p-8 bg-gradient-secondary border-accent/20 shadow-glow">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Start Something Amazing?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited about new challenges and opportunities to create impactful solutions. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold shadow-glow hover:shadow-accent-glow transition-all duration-300 transform hover:scale-105"
              >
                <a href="#projects">
                  View My Work
                </a>
              </Button>
              <Button 
                variant="outline"
                asChild
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <a href="https://github.com/Ajeet0012" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub Profile
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;