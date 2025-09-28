import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";

const blogPosts = [
  {
    title: "10 Productivity Tips for Remote Teams",
    excerpt: "Discover proven strategies to keep your remote team productive and engaged, no matter where they're working from.",
    author: "Sarah Johnson",
    date: "Dec 15, 2024",
    category: "Productivity",
    readTime: "5 min read"
  },
  {
    title: "The Future of Work: Trends to Watch in 2025",
    excerpt: "Explore the emerging trends that will shape how we work in the coming year, from AI integration to hybrid collaboration.",
    author: "Michael Chen",
    date: "Dec 10, 2024",
    category: "Future of Work",
    readTime: "7 min read"
  },
  {
    title: "How to Build Better Team Communication",
    excerpt: "Learn practical techniques to improve communication within your team and reduce misunderstandings.",
    author: "Emily Rodriguez",
    date: "Dec 5, 2024",
    category: "Communication",
    readTime: "6 min read"
  },
  {
    title: "Project Management Best Practices",
    excerpt: "Master the essential practices that separate successful projects from failed ones, backed by industry research.",
    author: "David Park",
    date: "Nov 28, 2024",
    category: "Project Management",
    readTime: "8 min read"
  },
  {
    title: "Automation: Work Smarter, Not Harder",
    excerpt: "Discover how to automate repetitive tasks and focus on what matters most for your business growth.",
    author: "Lisa Wong",
    date: "Nov 20, 2024",
    category: "Automation",
    readTime: "4 min read"
  },
  {
    title: "Building a Culture of Innovation",
    excerpt: "Create an environment where creativity thrives and innovative ideas can flourish within your organization.",
    author: "Alex Thompson",
    date: "Nov 15, 2024",
    category: "Innovation",
    readTime: "6 min read"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our <span className="bg-gradient-primary bg-clip-text text-transparent">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Stay updated with the latest insights on productivity, team collaboration, and workplace innovation. 
                Expert tips and strategies to help your team succeed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="card-gradient border-0 shadow-medium hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Badge className="mb-3">{post.category}</Badge>
                      <h3 className="text-xl font-bold mb-3 leading-tight">{post.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    
                    <div className="mt-3 text-xs text-muted-foreground">
                      {post.readTime}
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

export default Blog;