import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HelpCircle, Search, MessageCircle, Mail, Phone, Book, ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    category: "Getting Started",
    icon: Book,
    items: [
      {
        question: "How do I create my first project?",
        answer: "Creating your first project in Whitepace is simple. After logging in, click the '+ New Project' button on your dashboard. Give your project a name and optional description, then choose a template or start from scratch. You can set a deadline, assign team members, and choose a color label to keep your projects organized. Once created, you'll be taken directly to your project board where you can start adding tasks and workflows."
      },
      {
        question: "How to invite team members?",
        answer: "To invite team members, navigate to your workspace settings by clicking on your workspace name in the top-left corner. Select 'Members' from the sidebar, then click 'Invite Members.' Enter the email addresses of your colleagues — you can invite multiple people at once by separating emails with commas. They'll receive an invitation email with a link to join. You can set their role as Admin, Member, or Viewer before sending the invitation."
      },
      {
        question: "What are workspaces?",
        answer: "A workspace in Whitepace is the top-level container for all your projects, members, and settings. Think of it as your organization's digital headquarters. You can have multiple workspaces — for example, one for your company and another for a freelance project. Each workspace has its own member list, billing, and settings. Within a workspace, you can create unlimited projects and invite different team members with different roles and permissions."
      },
      {
        question: "How to set up notifications?",
        answer: "To set up notifications, go to your profile settings by clicking your avatar in the top-right corner and selecting 'Notifications.' You can customize alerts for task assignments, comments, due date reminders, project updates, and more. Choose between in-app notifications, email digests (daily or weekly), and push notifications for mobile. You can also mute specific projects or only be notified when you're directly mentioned using the @mention feature."
      }
    ]
  },
  {
    category: "Collaboration",
    icon: MessageCircle,
    items: [
      {
        question: "How to share files with team?",
        answer: "Sharing files in Whitepace is straightforward. Open any task and click the paperclip icon or drag and drop files directly into the task detail panel. Whitepace supports uploading documents, images, spreadsheets, and PDFs up to 250MB per file. Team members with access to that project can view and download the files. You can also attach links to external documents from Google Drive or Dropbox by pasting the URL in the attachment section."
      },
      {
        question: "Using comments and mentions",
        answer: "Every task in Whitepace has a comment section where you can leave notes, updates, or questions. To notify a specific team member, type @ followed by their name in any comment. They'll receive an instant notification. You can format your comments using markdown — use ** for bold, * for italics, and backticks for inline code. Comments support attachments too, so you can share screenshots or documents directly in the conversation thread."
      },
      {
        question: "Real-time editing features",
        answer: "Whitepace supports real-time collaboration so your entire team can work simultaneously without conflicts. When multiple users have a task open, you'll see their avatars at the top of the screen. Changes are synced instantly — task titles, descriptions, due dates, and status updates appear for everyone within milliseconds. If two people edit the same field simultaneously, Whitepace uses intelligent conflict resolution to merge changes. You can also see a full edit history by clicking the 'Activity' tab on any task."
      },
      {
        question: "Managing team permissions",
        answer: "Whitepace offers granular permission controls at both the workspace and project level. In workspace settings, assign roles: Admins can manage billing, members, and settings; Members can create and edit projects; Viewers can only read content. At the project level, you can further restrict who can edit tasks, view sensitive information, or invite others. Enterprise plans include advanced controls like IP whitelisting, SSO enforcement, and audit logs to track all permission changes."
      }
    ]
  },
  {
    category: "Account & Billing",
    icon: HelpCircle,
    items: [
      {
        question: "How to upgrade my plan?",
        answer: "To upgrade your plan, go to your workspace settings and select 'Billing.' You'll see a comparison of available plans — Free, Pro, and Business. Click 'Upgrade' on your desired plan, enter your payment details, and confirm. Your upgrade is instant: you'll immediately get access to all the features of your new plan. If you're upgrading mid-billing cycle, you'll only be charged the prorated difference for the remaining days."
      },
      {
        question: "Managing payment methods",
        answer: "You can add, remove, or update payment methods in Workspace Settings → Billing → Payment Methods. Whitepace accepts all major credit cards (Visa, Mastercard, Amex) and bank transfers for annual plans. To add a new card, click 'Add Payment Method' and enter your card details — they are securely stored and processed via Stripe. To set a card as your default, click the three-dot menu next to it and select 'Set as Default.'"
      },
      {
        question: "Canceling subscription",
        answer: "You can cancel your subscription at any time without penalties. Go to Workspace Settings → Billing → Subscription and click 'Cancel Plan.' Your subscription will remain active until the end of your current billing period — you won't lose any data or access until then. After the period ends, your workspace will downgrade to the Free plan. If you change your mind before the period ends, you can reactivate your subscription from the same billing settings page."
      },
      {
        question: "Understanding usage limits",
        answer: "Each plan has different limits on storage, members, and features. The Free plan allows up to 5 members, 5 projects, and 1GB of file storage. The Pro plan supports unlimited members, unlimited projects, and 20GB of storage. The Business plan includes 100GB of storage, priority support, advanced analytics, and custom integrations. You can monitor your current usage at any time in Workspace Settings → Usage. If you're approaching your limit, you'll receive an email notification 7 days in advance."
      }
    ]
  }
];

const contactOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant help from our support team. Our agents are trained to resolve most issues within minutes. Available around the clock including weekends and holidays.",
    availability: "24/7 Available",
    action: "Start Chat"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed message and our support team will respond with a thorough answer, usually within one business day. Best for complex or technical issues.",
    availability: "Response within 24h",
    action: "Send Email"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Talk directly with our product experts for personalized guidance. Available for Pro and Business plan subscribers during business hours.",
    availability: "Mon–Fri 9AM–6PM",
    action: "Call Now"
  }
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0 py-4">
      <button
        className="flex items-center justify-between w-full text-left font-semibold text-foreground hover:text-primary transition-colors"
        onClick={() => setOpen(!open)}
        data-testid={`faq-${question.substring(0, 20).toLowerCase().replace(/\s+/g, '-')}`}
      >
        <span>{question}</span>
        {open ? <ChevronUp className="w-5 h-5 shrink-0 ml-4" /> : <ChevronDown className="w-5 h-5 shrink-0 ml-4" />}
      </button>
      {open && (
        <p className="mt-3 text-muted-foreground leading-relaxed">{answer}</p>
      )}
    </div>
  );
};

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
                Find detailed answers to your questions and get everything you need to make the most of Whitepace.
              </p>
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search for help articles..."
                  className="pl-12 py-6 text-lg"
                  data-testid="help-search"
                />
              </div>
            </div>

            <div className="mb-16 space-y-10">
              <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
              {faqs.map((section, sIdx) => (
                <Card key={sIdx} className="card-gradient border-0 shadow-medium">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                        <section.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">{section.category}</h3>
                    </div>
                    <div className="space-y-1">
                      {section.items.map((item, iIdx) => (
                        <FAQItem key={iIdx} question={item.question} answer={item.answer} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-muted/30 rounded-3xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
                <p className="text-xl text-muted-foreground">
                  Our dedicated support team is ready to assist you — choose the option that works best for you.
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
                        data-testid={`contact-${option.title.toLowerCase().replace(/\s+/g, '-')}`}
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
