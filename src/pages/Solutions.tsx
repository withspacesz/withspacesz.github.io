
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Zap, Shield, BarChart, Globe, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Connect your team with real-time collaboration tools, file sharing, and seamless communication.",
    features: ["Real-time editing", "Comment system", "File versioning", "Team chat"],
    cta: "Start Collaborating"
  },
  {
    icon: Zap,
    title: "Project Management",
    description: "Streamline your projects with powerful task management, timeline tracking, and automation.",
    features: ["Task boards", "Timeline view", "Progress tracking", "Automated workflows"],
    cta: "Manage Projects"
  },
  {
    icon: BarChart,
    title: "Analytics & Insights",
    description: "Make data-driven decisions with comprehensive analytics and customizable reporting.",
    features: ["Performance metrics", "Custom reports", "Team productivity", "Goal tracking"],
    cta: "View Analytics"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Protect your data with enterprise-grade security, compliance, and access controls.",
    features: ["SSO integration", "2FA authentication", "Data encryption", "Compliance tools"],
    cta: "Secure Your Data"
  },
  {
    icon: Globe,
    title: "Remote Work",
    description: "Enable seamless remote work with cloud-based tools and mobile accessibility.",
    features: ["Cloud storage", "Mobile apps", "Offline sync", "Global access"],
    cta: "Work Remotely"
  },
  {
    icon: CheckCircle,
    title: "Workflow Automation",
    description: "Automate repetitive tasks and streamline your processes for maximum efficiency.",
    features: ["Custom workflows", "API integrations", "Task automation", "Smart notifications"],
    cta: "Automate Tasks"
  }
];

const industries = [
  {
    name: "Technology",
    description: "Software teams, startups, and tech companies scaling their operations.",
    useCases: ["Product development", "Sprint planning", "Code reviews", "Release management"]
  },
  {
    name: "Marketing",
    description: "Marketing teams managing campaigns, content, and cross-functional projects.",
    useCases: ["Campaign planning", "Content calendars", "Asset management", "Performance tracking"]
  },
  {
    name: "Education",
    description: "Educational institutions and training organizations managing curricula and resources.",
    useCases: ["Course planning", "Student collaboration", "Resource sharing", "Progress tracking"]
  },
  {
    name: "Healthcare",
    description: "Healthcare organizations coordinating patient care and administrative tasks.",
    useCases: ["Patient coordination", "Staff scheduling", "Compliance tracking", "Resource management"]
  }
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Solutions for Every <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover how Whitepace adapts to your unique workflow needs. From small teams to enterprise organizations, 
                we have the tools to help you succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Solutions</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to streamline your workflow and boost productivity
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="card-gradient border-0 shadow-medium hover:shadow-glow transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                      <solution.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{solution.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button className="w-full group" data-testid={`solution-${solution.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      {solution.cta}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Industry Solutions</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tailored solutions for different industries and use cases
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {industries.map((industry, index) => (
                <Card key={index} className="border-0 shadow-medium hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{industry.name}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{industry.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Common Use Cases:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {industry.useCases.map((useCase, i) => (
                          <div key={i} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                            {useCase}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Workflow?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of teams who have already revolutionized their productivity with Whitepace.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8 py-4 text-lg font-semibold glow-effect" data-testid="solutions-start-free">
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold" data-testid="solutions-demo">
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
