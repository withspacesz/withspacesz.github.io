
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for individuals and small teams getting started",
    features: [
      "Up to 5 team members",
      "3 projects",
      "5GB storage",
      "Basic task management",
      "Email support",
      "Mobile apps"
    ],
    limitations: [
      "Advanced reporting",
      "Custom workflows",
      "SSO integration",
      "API access"
    ],
    cta: "Get Started Free",
    popular: false
  },
  {
    name: "Pro",
    price: "$8",
    period: "per user/month",
    description: "Ideal for growing teams that need more features and flexibility",
    features: [
      "Unlimited team members",
      "Unlimited projects",
      "100GB storage",
      "Advanced task management",
      "Time tracking",
      "Custom fields",
      "Priority support",
      "Advanced reporting",
      "Team dashboard"
    ],
    limitations: [
      "SSO integration",
      "Custom branding",
      "Advanced security"
    ],
    cta: "Start Pro Trial",
    popular: true
  },
  {
    name: "Business",
    price: "$16",
    period: "per user/month",
    description: "For established businesses that need advanced features and security",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "Custom workflows",
      "Advanced analytics",
      "API access",
      "Guest access",
      "Custom branding",
      "Advanced permissions",
      "24/7 phone support"
    ],
    limitations: [
      "SSO integration",
      "Advanced compliance"
    ],
    cta: "Start Business Trial",
    popular: false
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact sales",
    description: "For large organizations with complex requirements and compliance needs",
    features: [
      "Everything in Business",
      "SSO integration",
      "Advanced security",
      "Compliance tools",
      "Custom integrations",
      "Dedicated support",
      "Training & onboarding",
      "SLA guarantee",
      "Advanced user management"
    ],
    limitations: [],
    cta: "Contact Sales",
    popular: false
  }
];

const faqs = [
  {
    question: "Can I change my plan at any time?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated and reflected in your next billing cycle."
  },
  {
    question: "Is there a free trial for paid plans?",
    answer: "Yes, we offer a 14-day free trial for all paid plans. No credit card required to start your trial."
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "You can export all your data before canceling. After cancellation, your data will be retained for 30 days before permanent deletion."
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer: "Yes, we offer a 20% discount when you pay annually. You can switch to annual billing from your account settings."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use bank-level encryption, regular security audits, and comply with industry standards like SOC 2 and GDPR."
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Simple, Transparent <span className="bg-gradient-primary bg-clip-text text-transparent">Pricing</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Choose the perfect plan for your team. Start free and scale as you grow. 
                No hidden fees, no surprises.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`relative border-0 shadow-medium hover:shadow-glow transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-primary scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary">
                      Most Popular
                    </Badge>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && (
                        <span className="text-muted-foreground ml-2">/{plan.period}</span>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {plan.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">
                        What's Included
                      </h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm">
                            <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {plan.limitations.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                          Not Included
                        </h4>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation, i) => (
                            <li key={i} className="flex items-center text-sm text-muted-foreground">
                              <X className="h-4 w-4 mr-3 flex-shrink-0" />
                              {limitation}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Button 
                      className={`w-full ${plan.popular ? 'glow-effect' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                      data-testid={`pricing-${plan.name.toLowerCase()}`}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                All plans include 99.9% uptime SLA and 30-day money-back guarantee
              </p>
              <Button variant="outline" size="lg" data-testid="pricing-contact-sales">
                Need a custom plan? Contact Sales
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about our pricing and plans
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-0 shadow-medium">
                  <CardContent className="p-8">
                    <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of teams already using Whitepace to boost their productivity.
              </p>
              <Button size="lg" className="px-8 py-4 text-lg font-semibold glow-effect" data-testid="pricing-start-free">
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

export default Pricing;
