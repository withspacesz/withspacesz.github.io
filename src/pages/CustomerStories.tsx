import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const stories = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content: "Whitepace has completely transformed how our team collaborates. The intuitive interface and powerful features have increased our productivity by 40%. We can't imagine working without it now.",
    avatar: "SJ",
    rating: 5,
    results: "40% increase in productivity"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "StartupXYZ",
    content: "We've tried many project management tools, but Whitepace stands out with its clean design and robust automation features. It's helped us scale from 10 to 100 employees seamlessly.",
    avatar: "MC",
    rating: 5,
    results: "Scaled 10x with same workflow efficiency"
  },
  {
    name: "Emily Rodriguez",
    role: "Team Lead",
    company: "DesignStudio",
    content: "The mobile app is fantastic - I can manage my team and track progress even when I'm away from my desk. It's been a game changer for our remote work setup.",
    avatar: "ER",
    rating: 5,
    results: "100% remote team coordination"
  },
  {
    name: "David Park",
    role: "Operations Director",
    company: "Global Inc",
    content: "Whitepace's analytics helped us identify bottlenecks we didn't even know existed. We've reduced project completion time by 30% since implementing it.",
    avatar: "DP",
    rating: 5,
    results: "30% faster project completion"
  }
];

const CustomerStories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Customer <span className="bg-gradient-primary bg-clip-text text-transparent">Stories</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                See how teams around the world are achieving remarkable results with Whitepace. 
                Real stories from real customers who've transformed their workflows.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {stories.map((story, index) => (
                <Card key={index} className="card-gradient border-0 shadow-medium hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Avatar className="w-12 h-12 mr-4">
                        <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                          {story.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-lg">{story.name}</h3>
                        <p className="text-muted-foreground">{story.role} at {story.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">"{story.content}"</p>
                    
                    <div className="bg-primary/10 rounded-lg p-4">
                      <p className="font-semibold text-primary">Key Result:</p>
                      <p className="text-sm text-muted-foreground">{story.results}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerStories;