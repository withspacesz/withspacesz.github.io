import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HelpCircle, Search, MessageCircle, Mail, Phone, Book } from "lucide-react";

const faqCategories = [
  {
    icon: Book,
    title: "Getting Started",
    questions: [
      "How do I create my first project?",
      "How to invite team members?",
      "What are workspaces?",
      "How to set up notifications?"
    ]
  },
  {
    icon: MessageCircle,
    title: "Collaboration",
    questions: [
      "How to share files with team?",
      "Using comments and mentions",
      "Real-time editing features",
      "Managing team permissions"
    ]
  },
  {
    icon: HelpCircle,
    title: "Account & Billing",
    questions: [
      "How to upgrade my plan?",
      "Managing payment methods",
      "Canceling subscription",
      "Understanding usage limits"
    ]
  }
];

const contactOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant help from our support team",
    availability: "24/7 Available",
    action: "Start Chat"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed message",
    availability: "Response within 24h",
    action: "Send Email"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Talk directly with our experts",
    availability: "Mon-Fri 9AM-6PM",
    action: "Call Now"
  }
];

const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Help <span className="bg-gradient-primary bg-clip-text text-transparent">Center</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                Find answers to your questions and get the support you need to make the most of Whitepace.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="Search for help articles..." 
                  className="pl-12 py-6 text-lg"
                  data-testid="help-search"
                />
              </div>
            </div>

            {/* FAQ Categories */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {faqCategories.map((category, index) => (
                  <Card key={index} className="card-gradient border-0 shadow-medium hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                          <category.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold">{category.title}</h3>
                      </div>
                      
                      <div className="space-y-3">
                        {category.questions.map((question, i) => (
                          <button 
                            key={i} 
                            className="block w-full text-left text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                            data-testid={`faq-question-${index}-${i}`}
                          >
                            {question}
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-muted/30 rounded-3xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
                <p className="text-xl text-muted-foreground">
                  Our support team is here to help you succeed
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {contactOptions.map((option, index) => (
                  <Card key={index} className="border-0 shadow-medium hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <option.icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{option.description}</p>
                      <p className="text-sm text-muted-foreground mb-6">{option.availability}</p>
                      
                      <Button 
                        className="w-full" 
                        data-testid={`contact-${option.title.toLowerCase().replace(' ', '-')}`}
                      >
                        {option.action}
                      </Button>
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

export default HelpCenter;