import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Heart, Zap, Globe } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "People First",
    description: "We believe that great products are built by great people. Our team-centric approach puts people at the heart of everything we do."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every detail, from product design to customer support, ensuring the best experience for our users."
  },
  {
    icon: Heart,
    title: "Empathy",
    description: "We understand the challenges teams face and build solutions with genuine care for our users' needs and experiences."
  },
  {
    icon: Globe,
    title: "Innovation",
    description: "We continuously innovate to stay ahead of the curve, embracing new technologies to solve tomorrow's challenges today."
  }
];

const teamStats = [
  { number: "500+", label: "Team Members" },
  { number: "50+", label: "Countries" },
  { number: "1M+", label: "Happy Users" },
  { number: "5", label: "Years of Innovation" }
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="bg-gradient-primary bg-clip-text text-transparent">Whitepace</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We're on a mission to transform how teams collaborate and achieve their goals. 
                Founded in 2019, Whitepace has grown from a simple idea to a platform trusted by millions worldwide.
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {teamStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                To empower every team to do their best work by providing intuitive, powerful tools that 
                remove barriers to collaboration and unlock human potential.
              </p>
              <Badge className="px-6 py-2 text-base">Building the Future of Work</Badge>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                These core values guide every decision we make and every product we build.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="card-gradient border-0 shadow-medium hover:shadow-glow transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Story</h2>
              
              <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Whitepace began with a simple observation: teams everywhere were struggling with 
                  fragmented tools and inefficient workflows. Our founders, experienced product 
                  managers themselves, knew there had to be a better way.
                </p>
                
                <p>
                  In 2019, we set out to build the productivity platform we wished we'd had. Starting 
                  with a small team of passionate engineers and designers, we focused on creating 
                  something truly different – a platform that would adapt to how teams actually work, 
                  not the other way around.
                </p>
                
                <p>
                  Today, Whitepace serves over a million users across 50 countries, from startups 
                  to Fortune 500 companies. But our mission remains the same: to help every team 
                  achieve their full potential through better collaboration and productivity tools.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;