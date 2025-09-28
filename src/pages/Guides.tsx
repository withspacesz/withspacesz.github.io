import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, Clock, Users, Target } from "lucide-react";

const guides = [
  {
    icon: Book,
    title: "Getting Started Guide",
    description: "Complete walkthrough for setting up your first project and inviting your team.",
    level: "Beginner",
    duration: "15 min",
    topics: ["Setup", "Team Invitation", "First Project"]
  },
  {
    icon: Users,
    title: "Team Collaboration Mastery",
    description: "Advanced techniques for effective team communication and collaboration.",
    level: "Intermediate",
    duration: "30 min",
    topics: ["Communication", "File Sharing", "Real-time Editing"]
  },
  {
    icon: Target,
    title: "Project Planning & Execution",
    description: "Strategic approach to planning, executing, and delivering successful projects.",
    level: "Advanced",
    duration: "45 min",
    topics: ["Strategy", "Execution", "Delivery"]
  },
  {
    icon: Clock,
    title: "Time Management & Productivity",
    description: "Proven methods to boost productivity and manage time effectively.",
    level: "Intermediate",
    duration: "25 min",
    topics: ["Time Tracking", "Productivity", "Focus"]
  }
];

const tutorials = [
  {
    title: "Creating Your First Workflow",
    description: "Step-by-step tutorial on building automated workflows",
    duration: "10 min"
  },
  {
    title: "Setting Up Team Permissions",
    description: "Configure access controls and permissions for your team",
    duration: "8 min"
  },
  {
    title: "Using Analytics Dashboard",
    description: "Make data-driven decisions with our analytics tools",
    duration: "12 min"
  },
  {
    title: "Mobile App Deep Dive",
    description: "Get the most out of Whitepace on your mobile device",
    duration: "15 min"
  }
];

const Guides = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Guides & <span className="bg-gradient-primary bg-clip-text text-transparent">Tutorials</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Master Whitepace with our comprehensive guides and step-by-step tutorials. 
                From beginner basics to advanced techniques, we've got you covered.
              </p>
            </div>

            {/* Main Guides */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Complete Guides</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {guides.map((guide, index) => (
                  <Card key={index} className="card-gradient border-0 shadow-medium hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                          <guide.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <Badge className="mb-2">{guide.level}</Badge>
                          <h3 className="text-xl font-bold">{guide.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">{guide.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{guide.duration}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {guide.topics.map((topic, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Tutorials */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Quick Tutorials</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tutorials.map((tutorial, index) => (
                  <Card key={index} className="card-gradient border-0 shadow-medium hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-3">{tutorial.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{tutorial.description}</p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{tutorial.duration}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Guides;