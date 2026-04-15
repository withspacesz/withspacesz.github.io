import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Zap, Shield, BarChart, Smartphone } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Task Management",
    description: "Create, assign, and track tasks with intuitive boards and lists that keep everyone aligned.",
    details: [
      "Organize work in Kanban boards, list views, or calendar views — switch instantly without losing data",
      "Set priorities, due dates, time estimates, and custom labels on every task",
      "Create checklists inside tasks to break complex work into smaller, trackable steps",
      "Use task dependencies to clearly define the order work must happen and automatically flag schedule risks",
      "Attach files, links, and images directly to tasks so all context lives in one place",
      "Set recurring tasks for regular obligations that need to happen on a schedule"
    ]
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Real-time collaboration with comments, mentions, and file sharing to keep teams connected.",
    details: [
      "Comment on any task with rich text, images, code blocks, and file attachments",
      "Use @mentions to notify teammates instantly and bring the right people into a conversation",
      "See live updates as teammates make changes — no refreshing required",
      "View a complete activity log on every task showing who changed what and when",
      "React to comments with emojis to acknowledge messages without cluttering threads",
      "Share project views with external stakeholders via secure, view-only links"
    ]
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Automate repetitive tasks and workflows to save time and reduce manual errors.",
    details: [
      "Build no-code automation rules using simple 'When X happens, do Y' logic",
      "Auto-assign tasks to team members based on project, tag, or task type",
      "Trigger status changes, notifications, and due date updates automatically",
      "Integrate with 50+ tools including Slack, Google Drive, GitHub, and Zapier",
      "Create approval workflows that route tasks to the right person at each stage",
      "Set up recurring automations for weekly reports, reminders, and data syncs"
    ]
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SSO, 2FA, and advanced permission controls for peace of mind.",
    details: [
      "All data encrypted at rest with AES-256 and in transit with TLS 1.3",
      "Single Sign-On (SSO) support via SAML 2.0 for seamless, secure login",
      "Two-factor authentication (2FA) enforced across all team members",
      "Granular role-based access controls: Admin, Member, and Viewer at workspace and project level",
      "Full audit logs capturing every action — who did what, and when",
      "SOC 2 Type II certified with GDPR and CCPA compliance built in"
    ]
  },
  {
    icon: BarChart,
    title: "Analytics & Reporting",
    description: "Gain insights with detailed analytics and customizable reports to track team productivity.",
    details: [
      "Project dashboards showing completion rates, task counts, and milestone progress",
      "Team workload charts that make imbalances visible before they cause problems",
      "Time tracking reports that reveal where hours are actually going",
      "Custom report builder — filter, group, and sort data any way you need",
      "Burndown charts for sprint-based teams tracking work against a timeline",
      "Export any report to PDF or CSV for sharing with leadership or stakeholders"
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Stay productive on the go with our native iOS and Android apps that sync seamlessly.",
    details: [
      "Full-featured iOS and Android apps built for speed and reliability",
      "Offline mode lets you view and edit tasks even without an internet connection",
      "Push notifications for task assignments, due date reminders, and @mentions",
      "Quick-capture widget for creating tasks from your home screen in seconds",
      "Swipe gestures for completing, archiving, and prioritizing tasks fast",
      "Dark mode support for comfortable use in any lighting condition"
    ]
  }
];

const stats = [
  { number: "1M+", label: "Active Users" },
  { number: "50+", label: "Countries" },
  { number: "99.9%", label: "Uptime SLA" },
  { number: "4.9/5", label: "Average Rating" },
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
                Whitepace is a comprehensive productivity platform built for modern teams. It brings together
                task management, collaboration, automation, and analytics into one streamlined workspace —
                so your team spends less time managing work and more time doing it.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-8 mb-16">
              {features.map((feature, index) => (
                <Card key={index} className="card-gradient border-0 shadow-medium hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/3">
                        <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                          <feature.icon className="h-8 w-8 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold mb-3">{feature.title}</h2>
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                      <div className="md:w-2/3">
                        <ul className="space-y-3">
                          {feature.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-muted-foreground leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to transform how your team works? Start your free 14-day trial — no credit card required.
              </p>
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
