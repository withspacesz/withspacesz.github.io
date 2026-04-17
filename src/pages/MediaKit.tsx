import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp, Users, Globe, Award, Newspaper } from "lucide-react";

const pressReleases = [
  {
    date: "December 10, 2024",
    title: "Whitepace Surpasses 500,000 Active Users Worldwide",
    summary: "Whitepace, the productivity platform built for modern teams, today announced it has surpassed 500,000 active monthly users across 120 countries. The milestone reflects rapid adoption across technology, healthcare, education, and marketing sectors.",
    body: "The company attributes its growth to its intuitive interface, real-time collaboration features, and affordable pricing that scales with teams of all sizes. In the past 12 months alone, Whitepace has added over 200,000 new users and expanded its enterprise customer base by 180%. CEO James Carter stated: 'This milestone reflects the trust our customers place in us every day. We are deeply committed to building tools that genuinely make teams more effective.'",
    category: "Company News"
  },
  {
    date: "November 5, 2024",
    title: "Whitepace Launches AI-Powered Task Automation Engine",
    summary: "Whitepace today unveiled its next-generation AI task automation engine, designed to eliminate up to 40% of repetitive manual work for knowledge workers.",
    body: "The new engine uses machine learning models trained on workflow patterns to intelligently suggest task assignments, predict project bottlenecks, and auto-schedule work based on team availability. Early beta testers reported saving an average of 6 hours per week. The automation engine is available on all Professional and Business plan tiers starting November 15, 2024. 'Our customers told us that their biggest pain point is not planning work — it is the endless cycle of manual follow-ups and status updates,' said CTO Sarah Lin. 'Our AI engine handles all of that automatically.'",
    category: "Product Update"
  },
  {
    date: "October 22, 2024",
    title: "Whitepace Achieves SOC 2 Type II Certification",
    summary: "Whitepace has successfully completed its SOC 2 Type II audit, reinforcing its commitment to enterprise-grade security and data protection standards.",
    body: "The certification, conducted by an independent third-party auditor, confirms that Whitepace maintains strict controls around data security, availability, processing integrity, confidentiality, and privacy. For enterprise customers in regulated industries such as healthcare and finance, SOC 2 Type II compliance is often a prerequisite for vendor approval. 'Security is not a feature — it is the foundation of everything we build,' said Chief Security Officer David Park. The full audit report is available to enterprise customers under NDA upon request.",
    category: "Security"
  },
  {
    date: "September 14, 2024",
    title: "Whitepace Raises Series A Funding to Accelerate Growth",
    summary: "Whitepace announced today the close of a $15 million Series A funding round led by Horizon Ventures, with participation from existing investors and strategic angels.",
    body: "The funding will be used to expand Whitepace's engineering team, accelerate product development, and drive international expansion into Southeast Asia and Europe. The company plans to double its headcount from 45 to 90 employees over the next 18 months. 'We are investing heavily in the next generation of collaboration tools because remote and hybrid work is not going away — it is becoming the default mode of working for the most productive teams in the world,' said founder and CEO James Carter. Whitepace has previously raised $3.5 million in seed funding.",
    category: "Funding"
  }
];

const companyFacts = [
  { icon: Users, label: "Active Users", value: "500,000+", detail: "Across 120 countries" },
  { icon: Globe, label: "Countries", value: "120+", detail: "Global reach" },
  { icon: TrendingUp, label: "Annual Growth", value: "180%", detail: "Enterprise customer growth" },
  { icon: Award, label: "Founded", value: "2019", detail: "San Francisco, CA" }
];

const brandColors = [
  { name: "Primary Blue", hex: "#4F9CF9", usage: "Primary CTAs, links, interactive elements" },
  { name: "Dark Navy", hex: "#043873", usage: "Headings, high-emphasis text, hero backgrounds" },
  { name: "Warm Yellow", hex: "#FFE492", usage: "Accent highlights, secondary badges" },
  { name: "Light Gray", hex: "#F7F7EE", usage: "Page backgrounds, card surfaces" }
];

const mediaContacts = [
  {
    name: "Rachel Torres",
    title: "Head of Communications",
    email: "press@whitepace.com",
    note: "For press inquiries, interview requests, and media partnerships"
  },
  {
    name: "Marcus Webb",
    title: "Investor Relations",
    email: "ir@whitepace.com",
    note: "For analyst briefings and investor communications"
  }
];

const MediaKit = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">

        {/* Hero */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Whitepace <span className="bg-gradient-primary bg-clip-text text-transparent">Newsroom</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                The latest news, press releases, and official resources from Whitepace. 
                Journalists and analysts are welcome to republish any materials from this page with appropriate attribution.
              </p>
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {companyFacts.map((fact, index) => (
                <Card key={index} className="card-gradient border-0 shadow-medium text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <fact.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold mb-1">{fact.value}</div>
                    <div className="font-semibold mb-1">{fact.label}</div>
                    <div className="text-sm text-muted-foreground">{fact.detail}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-3 mb-12">
              <Newspaper className="h-7 w-7 text-primary" />
              <h2 className="text-3xl font-bold">Press Releases</h2>
            </div>

            <div className="space-y-8 max-w-4xl">
              {pressReleases.map((release, index) => (
                <Card key={index} className="border-0 shadow-medium">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary">{release.category}</Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {release.date}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 leading-tight">{release.title}</h3>
                    <p className="text-muted-foreground font-medium mb-4 leading-relaxed">{release.summary}</p>
                    <p className="text-muted-foreground leading-relaxed text-sm">{release.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Colors */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">Brand Colors</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Consistent use of our brand colors across all media ensures a unified, professional appearance. 
              Please use the exact hex values listed below and do not modify or substitute colors without approval.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {brandColors.map((color, index) => (
                <Card key={index} className="border-0 shadow-medium">
                  <CardContent className="p-6">
                    <div
                      className="w-full h-24 rounded-lg mb-4 border"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="font-semibold mb-1">{color.name}</div>
                    <div className="font-mono text-sm text-primary mb-2">{color.hex}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{color.usage}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Guidelines */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">Logo & Brand Usage Guidelines</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              The Whitepace logo is our primary brand asset. It represents our values of clarity, collaboration, and progress.
              Correct usage ensures our brand is communicated consistently across all touchpoints.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              <Card className="border-0 shadow-medium">
                <CardContent className="p-8">
                  <h3 className="font-bold text-xl mb-4 text-green-600">Permitted Usage</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Use the logo on white, light gray, or dark navy backgrounds for maximum legibility</li>
                    <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Maintain a clear exclusion zone of at least 16px on all sides of the logo</li>
                    <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Scale the logo proportionally — never stretch or distort it</li>
                    <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Use the single-color white version on photographic or colored backgrounds</li>
                    <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Reference Whitepace by full name in editorial copy when first mentioned</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-medium">
                <CardContent className="p-8">
                  <h3 className="font-bold text-xl mb-4 text-red-600">Prohibited Usage</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">✗</span>Do not alter the logo colors outside of approved brand palette variants</li>
                    <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">✗</span>Do not place the logo on cluttered or low-contrast backgrounds</li>
                    <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">✗</span>Do not add drop shadows, gradients, or effects to the logo mark</li>
                    <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">✗</span>Do not use the logo to imply endorsement without prior written agreement</li>
                    <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">✗</span>Do not use outdated versions of the logo from before 2023</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Media Contacts */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">Media Contacts</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Our communications team is available Monday through Friday, 9am–6pm Pacific Time. 
              We typically respond to press inquiries within one business day.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
              {mediaContacts.map((contact, index) => (
                <Card key={index} className="border-0 shadow-medium">
                  <CardContent className="p-6">
                    <div className="font-bold text-lg mb-1">{contact.name}</div>
                    <div className="text-primary font-medium mb-2">{contact.title}</div>
                    <div className="font-mono text-sm mb-3">{contact.email}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{contact.note}</div>
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

export default MediaKit;
