import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Heart, Zap, Globe } from "lucide-react";

const openings = [
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    experience: "5+ years",
    description: "Join our frontend team to build beautiful, performant user interfaces that delight millions of users."
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Remote / New York",
    type: "Full-time",
    experience: "3+ years",
    description: "Drive product strategy and execution for our core collaboration features."
  },
  {
    title: "UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    description: "Create intuitive and delightful user experiences that make complex workflows simple."
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote / Austin",
    type: "Full-time",
    experience: "3+ years",
    description: "Scale our infrastructure to support millions of users with reliability and performance."
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote / London",
    type: "Full-time",
    experience: "2+ years",
    description: "Help our enterprise customers achieve success and drive adoption across their organizations."
  },
  {
    title: "Marketing Analytics Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Drive data-driven marketing strategies and optimize our growth funnels."
  }
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision insurance. Mental health support and wellness stipends."
  },
  {
    icon: Globe,
    title: "Remote First",
    description: "Work from anywhere with flexible hours. Home office stipend and co-working space allowances."
  },
  {
    icon: Zap,
    title: "Growth & Learning",
    description: "Professional development budget, conference attendance, and internal learning programs."
  },
  {
    icon: Users,
    title: "Team Culture",
    description: "Regular team events, annual company retreats, and a supportive, inclusive environment."
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Help us build the future of work. We're looking for passionate, talented people
                to join our mission of empowering teams worldwide.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <Card key={index} className="card-gradient border-0 shadow-medium hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Open Positions</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Find your next opportunity and help us shape the future of team collaboration.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {openings.map((job, index) => (
                <Card key={index} className="border-0 shadow-medium hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1 mb-6 lg:mb-0">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <h3 className="text-xl font-bold">{job.title}</h3>
                          <Badge>{job.department}</Badge>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            <span>{job.experience}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                      </div>

                      <div className="lg:ml-8">
                        <Button
                          size="lg"
                          className="w-full lg:w-auto"
                          data-testid={`apply-${job.title.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Don't see a role that fits? We're always looking for great people.
              </p>
              <Button variant="outline" size="lg" data-testid="send-resume">
                Send Us Your Resume
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;