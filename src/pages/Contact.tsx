import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Clock, MessageSquare, Briefcase, HeartHandshake } from "lucide-react";

const contactChannels = [
  {
    icon: MessageSquare,
    title: "General Inquiries",
    description: "Questions about Whitepace, our platform, or anything else? We're happy to help.",
    contact: "hello@whitepace.com",
    response: "Response within 24 hours"
  },
  {
    icon: Briefcase,
    title: "Sales & Partnerships",
    description: "Interested in the Business or Enterprise plan? Our sales team will tailor a solution for your team.",
    contact: "sales@whitepace.com",
    response: "Response within 4 business hours"
  },
  {
    icon: HeartHandshake,
    title: "Support",
    description: "Having a technical issue or need help with your account? Our support team is here.",
    contact: "support@whitepace.com",
    response: "Response within 2 business hours"
  },
  {
    icon: Mail,
    title: "Press & Media",
    description: "Journalists, bloggers, and media professionals can reach our communications team directly.",
    contact: "press@whitepace.com",
    response: "Response within 1 business day"
  }
];

const offices = [
  {
    city: "San Francisco (HQ)",
    address: "535 Mission Street, 14th Floor",
    region: "San Francisco, CA 94105",
    country: "United States",
    phone: "+1 (415) 555-0194"
  },
  {
    city: "New York",
    address: "1 World Trade Center, Suite 8500",
    region: "New York, NY 10007",
    country: "United States",
    phone: "+1 (212) 555-0137"
  },
  {
    city: "London",
    address: "22 Bishopsgate, 33rd Floor",
    region: "London, EC2N 4BQ",
    country: "United Kingdom",
    phone: "+44 20 7946 0304"
  }
];

const faqs = [
  {
    q: "How quickly will I hear back from your team?",
    a: "Our support team responds to technical issues within 2 business hours. Sales inquiries are handled within 4 business hours. General questions are answered within 24 hours. For urgent matters, please mark your email subject line with [URGENT]."
  },
  {
    q: "Do you offer phone support?",
    a: "Phone support is available for Business and Enterprise plan customers. If you are on the Free or Pro plan, our email support team provides prompt and detailed assistance for all issues."
  },
  {
    q: "Where can I find product documentation?",
    a: "Our Help Center at whitepace.com/help contains step-by-step guides, video tutorials, and answers to common questions. Our Guides section at whitepace.com/guides includes in-depth tutorials for every major feature."
  },
  {
    q: "Can I schedule a product demo?",
    a: "Yes! Email our sales team at sales@whitepace.com to schedule a personalized 30-minute demo. We will walk you through the features most relevant to your team and answer any questions you have in real time."
  },
  {
    q: "How do I report a security vulnerability?",
    a: "We take security extremely seriously. Please report vulnerabilities responsibly to security@whitepace.com. Do not disclose the vulnerability publicly until our security team has had the opportunity to review and address it. We aim to respond to all security reports within 24 hours."
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">

        {/* Hero */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Contact <span className="bg-gradient-primary bg-clip-text text-transparent">Us</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Whether you have a question, a partnership idea, or just want to say hello — 
                our team is ready to help. Choose the right channel below and we'll get back to you promptly.
              </p>
            </div>

            {/* Contact Channels */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
              {contactChannels.map((channel, index) => (
                <Card key={index} className="card-gradient border-0 shadow-medium hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                      <channel.icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-lg font-bold mb-2">{channel.title}</h2>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{channel.description}</p>
                    <div className="font-mono text-sm text-primary font-semibold mb-2">{channel.contact}</div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {channel.response}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Offices</h2>
              <p className="text-muted-foreground max-w-2xl leading-relaxed">
                Whitepace is headquartered in San Francisco, California, with offices in New York and London. 
                While most of our support is handled remotely, our offices welcome visitors by appointment.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {offices.map((office, index) => (
                <Card key={index} className="border-0 shadow-medium">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="h-5 w-5 text-primary" />
                      <h3 className="font-bold text-lg">{office.city}</h3>
                    </div>
                    <div className="text-muted-foreground space-y-1 text-sm mb-4">
                      <div>{office.address}</div>
                      <div>{office.region}</div>
                      <div>{office.country}</div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="font-mono">{office.phone}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Support Hours */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-4">Support Hours</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our support team operates across multiple time zones to ensure you get help when you need it most. 
                Here are our standard hours for each type of support.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { label: "Email Support", hours: "Monday – Friday, 6am – 10pm PT", detail: "Applies to all plan tiers" },
                  { label: "Priority Support", hours: "Monday – Friday, 24 hours", detail: "Business and Enterprise plans only" },
                  { label: "Emergency Response", hours: "24/7, 365 days a year", detail: "Critical system issues, Enterprise only" },
                  { label: "Sales Team", hours: "Monday – Friday, 9am – 6pm PT", detail: "For demo scheduling and plan upgrades" },
                ].map((item, index) => (
                  <Card key={index} className="border-0 shadow-medium">
                    <CardContent className="p-5">
                      <div className="font-semibold mb-1">{item.label}</div>
                      <div className="text-primary text-sm font-medium mb-1">{item.hours}</div>
                      <div className="text-xs text-muted-foreground">{item.detail}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Before reaching out, check if your question is already answered here. These are the questions our team hears most often.
            </p>
            <div className="space-y-6 max-w-3xl">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-0 shadow-medium">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-3">{faq.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
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

export default Contact;
