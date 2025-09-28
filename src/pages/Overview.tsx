import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Zap, Shield, BarChart, Smartphone } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Task Management",
    description: "Create, assign, and track tasks with intuitive boards and lists that keep everyone aligned."
  },
  {
    icon: Users,
    title: "Team Collaboration", 
    description: "Real-time collaboration with comments, mentions, and file sharing to keep teams connected."
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Automate repetitive tasks and workflows to save time and reduce manual errors."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SSO, 2FA, and advanced permission controls for peace of mind."
  },
  {
    icon: BarChart,
    title: "Analytics & Reporting",
    description: "Gain insights with detailed analytics and customizable reports to track team productivity."
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Stay productive on the go with our native iOS and Android apps that sync seamlessly."
  }
];

const Overview = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Product <span className="bg-gradient-primary bg-clip-text text-transparent">Overview</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover how Whitepace transforms the way teams work together. Our comprehensive productivity platform 
                combines powerful features with intuitive design to help your team achieve more.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <Card key={index} className="card-gradient border-0 shadow-medium hover:shadow-glow transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold glow-effect" data-testid="overview-cta">
                Start Your Free Trial
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Overview;