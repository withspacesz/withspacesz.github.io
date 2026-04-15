import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, TrendingUp, Users, Clock, Target } from "lucide-react";

const stories = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    avatar: "SJ",
    rating: 5,
    headline: "40% Increase in Team Productivity",
    challenge: "TechCorp's product team of 25 people was juggling four different tools — a spreadsheet for tasks, email for communication, a shared drive for files, and a separate tool for project timelines. Information was scattered, updates were missed, and the team spent hours each week just trying to figure out the status of ongoing work.",
    solution: "After migrating to Whitepace, TechCorp consolidated all their work into a single platform. Tasks, files, conversations, and timelines now live in one place. The team standardized on weekly board reviews instead of status-update meetings.",
    result: "Within three months, the team measured a 40% increase in on-time delivery and a 60% reduction in time spent on status reporting. Onboarding new team members dropped from two weeks to three days.",
    quote: "Whitepace has completely transformed how our team collaborates. We can't imagine working without it now."
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "StartupXYZ",
    avatar: "MC",
    rating: 5,
    headline: "Scaled from 10 to 100 Employees Without Losing Efficiency",
    challenge: "StartupXYZ was growing fast — from 10 employees to 100 in 18 months. Their informal processes and verbal agreements worked fine as a small team, but at scale, things started falling through the cracks. Deadlines were missed because nobody knew who owned what. New hires took weeks to understand how work was organized.",
    solution: "The leadership team adopted Whitepace as the company's official operating system for work. They built templates for every recurring process — product launches, hiring workflows, and client onboarding. Every new project started from a template, so the structure was consistent and documentation was automatic.",
    result: "New hires now complete onboarding tasks in their first week and are productive contributors within 30 days. The same lightweight processes that worked at 10 people still work at 100, and the company is confident they'll continue to scale.",
    quote: "Whitepace helped us scale 10x with the same workflow efficiency. It's been a game changer for how we operate."
  },
  {
    name: "Emily Rodriguez",
    role: "Team Lead",
    company: "DesignStudio",
    avatar: "ER",
    rating: 5,
    headline: "Seamless Coordination Across a Fully Remote Team",
    challenge: "DesignStudio's 15-person creative team is distributed across six time zones. Without shared visibility into who was working on what, design reviews were delayed, revision requests piled up, and project managers spent their mornings on status calls just to understand where deliverables stood.",
    solution: "The team set up Whitepace with a standard project structure for each client engagement: discovery, concept, revision, and delivery phases. Each phase had clear task assignments, due dates, and file attachment requirements. The mobile app let team members review and approve work even when traveling.",
    result: "Design review cycles shortened from an average of 5 days to 2.5 days. Client satisfaction scores improved because deliverables arrived on time with fewer revision rounds. The team leads reclaimed 6+ hours per week that had previously gone to status reporting.",
    quote: "The mobile app is fantastic — I can manage my team and track progress even when I'm away from my desk."
  },
  {
    name: "David Park",
    role: "Operations Director",
    company: "Global Inc",
    avatar: "DP",
    rating: 5,
    headline: "30% Faster Project Completion",
    challenge: "Global Inc manages operational projects across eight countries with teams that speak five different languages. Coordinating cross-border projects in spreadsheets led to version conflicts, miscommunications, and frequent delays. The operations team had no reliable way to see the true health of projects in real time.",
    solution: "Global Inc deployed Whitepace as a centralized operations hub. They used custom labels to tag tasks by country and department, making it easy to filter the right view. Analytics dashboards gave the operations director a global view of all active projects without requiring status meetings.",
    result: "Project completion time fell by 30% in the first six months. The operations team identified three recurring bottlenecks in their workflow — things they hadn't noticed before because visibility was so limited — and fixed them, saving an estimated 200 person-hours per quarter.",
    quote: "Whitepace's analytics helped us identify bottlenecks we didn't even know existed. The ROI has been remarkable."
  }
];

const metrics = [
  { icon: TrendingUp, value: "40%", label: "Average productivity increase" },
  { icon: Clock, value: "6 hrs", label: "Time saved per person weekly" },
  { icon: Users, value: "1M+", label: "Teams using Whitepace" },
  { icon: Target, value: "30%", label: "Faster project delivery" },
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
                See how real teams around the world have transformed the way they work with Whitepace.
                These are their challenges, their solutions, and the results they've measured.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-20">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                    <metric.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1">
                    {metric.value}
                  </div>
                  <p className="text-muted-foreground text-sm">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-12">
              {stories.map((story, index) => (
                <Card key={index} className="card-gradient border-0 shadow-medium hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-8 md:p-10">
                    <div className="flex items-center mb-6">
                      <Avatar className="w-14 h-14 mr-4">
                        <AvatarFallback className="bg-gradient-primary text-white font-semibold text-lg">
                          {story.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-xl">{story.name}</h3>
                        <p className="text-muted-foreground">{story.role} at {story.company}</p>
                        <div className="flex mt-1">
                          {[...Array(story.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                      {story.headline}
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-muted/30 rounded-xl p-5">
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">The Challenge</h4>
                        <p className="text-foreground leading-relaxed text-sm">{story.challenge}</p>
                      </div>
                      <div className="bg-muted/30 rounded-xl p-5">
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">The Solution</h4>
                        <p className="text-foreground leading-relaxed text-sm">{story.solution}</p>
                      </div>
                      <div className="bg-primary/10 rounded-xl p-5">
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-primary mb-2">The Result</h4>
                        <p className="text-foreground leading-relaxed text-sm">{story.result}</p>
                      </div>
                    </div>

                    <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-muted-foreground">
                      "{story.quote}"
                    </blockquote>
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
