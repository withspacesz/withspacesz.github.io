import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock, ChevronDown, ChevronUp } from "lucide-react";

const blogPosts = [
  {
    title: "10 Productivity Tips for Remote Teams",
    excerpt: "Discover proven strategies to keep your remote team productive and engaged, no matter where they're working from.",
    author: "Sarah Johnson",
    date: "Dec 15, 2024",
    category: "Productivity",
    readTime: "5 min read",
    content: `Remote work has revolutionized how we think about productivity and collaboration. While it offers incredible flexibility, it also presents unique challenges that can derail even the most motivated teams. Here are ten proven strategies to keep your remote team at peak performance.

**1. Establish Clear Communication Norms**
Without the natural cues of an office environment, miscommunication becomes a real risk. Define which channels to use for different types of messages — instant messaging for quick questions, email for formal updates, and video calls for complex discussions. Set expectations around response times so no one feels anxious about delayed replies.

**2. Use Asynchronous Workflows**
Not everyone is online at the same time, especially across time zones. Design your workflows so progress doesn't grind to a halt when someone steps away. Document decisions clearly, use task management tools to track progress, and leave detailed context in comments so teammates can pick up right where you left off.

**3. Protect Deep Work Time**
Encourage team members to block out "focus time" on their calendars — uninterrupted periods for concentrated work. Respect these blocks and avoid scheduling unnecessary meetings during them. Teams that protect deep work time consistently produce higher-quality output in less time.

**4. Over-communicate Progress**
In a remote setting, visibility can drop sharply. Establish a brief daily or weekly check-in cadence where team members share what they're working on, what they've completed, and any blockers they're facing. This keeps everyone aligned without resorting to micromanagement.

**5. Set Outcome-Based Goals**
Shift focus from hours worked to results delivered. Use OKRs (Objectives and Key Results) or clearly defined deliverables so team members know exactly what success looks like. This empowers people to manage their own schedules while staying accountable for real outcomes.

**6. Invest in the Right Tools**
A disjointed tech stack kills productivity. Centralize your work in a single project management platform like Whitepace, where tasks, files, conversations, and timelines live in one place. Reduce tool-switching by integrating your most-used apps.

**7. Schedule Regular Video Calls**
Text alone can feel cold and transactional. Reserve time for face-to-face video meetings — not just for work but for genuine team connection. Start meetings with a short personal check-in to build the relationships that fuel collaboration.

**8. Encourage Flexible Schedules**
Remote work's greatest gift is flexibility. Trust your team to structure their day around their best work hours, family obligations, or personal energy patterns. Flexibility reduces burnout and increases loyalty, leading to better long-term performance.

**9. Document Everything**
Make documentation a first-class practice. When decisions, processes, and knowledge are written down and easily searchable, new team members onboard faster and institutional knowledge doesn't walk out the door when someone leaves.

**10. Celebrate Wins Together**
Remote teams can feel isolated, especially during tough stretches. Make it a habit to recognize achievements — big and small — in a shared channel. A culture of recognition boosts morale and reminds everyone that their contributions matter.

Remote work done well is not a compromise — it's a competitive advantage. Teams that master these habits outperform their in-office counterparts by building deeper focus, stronger trust, and more resilient processes.`
  },
  {
    title: "The Future of Work: Trends to Watch in 2025",
    excerpt: "Explore the emerging trends that will shape how we work in the coming year, from AI integration to hybrid collaboration.",
    author: "Michael Chen",
    date: "Dec 10, 2024",
    category: "Future of Work",
    readTime: "7 min read",
    content: `The workplace is undergoing one of the most significant transformations in modern history. As 2025 unfolds, five major trends are reshaping how businesses operate, how employees work, and what organizations value.

**AI as a True Work Partner**
Artificial intelligence has moved well beyond novelty. In 2025, AI-powered tools are embedded into daily workflows — summarizing meetings, generating first drafts, flagging risks in project timelines, and automating routine data entry. The most productive professionals are those who've learned to collaborate with AI effectively, using it to amplify their strengths rather than replace their judgment.

**The Hybrid Work Maturation**
After years of experimentation, hybrid work models are stabilizing. Organizations have learned that blanket policies — either fully remote or fully in-office — rarely work well. The best companies now offer structured flexibility: certain roles have core in-office days for collaboration, while deep-focus individual work happens from home. This requires intentional office design, clear team agreements, and digital infrastructure that makes remote participation genuinely equal.

**Skills Over Credentials**
Hiring managers are increasingly prioritizing demonstrated skills over traditional degrees. Micro-certifications, portfolio work, and skills assessments are becoming as valuable as four-year degrees for many roles. This shift is broadening talent pools and forcing organizations to rethink how they develop, evaluate, and promote people internally.

**The Well-being Imperative**
Employee well-being has moved from a "nice to have" to a business-critical priority. Companies that fail to address burnout, mental health, and workload sustainability face higher turnover and declining performance. Leading organizations are setting clear boundaries around after-hours communication, providing mental health resources, and training managers to recognize early signs of burnout.

**Data-Driven Team Management**
People analytics is transforming how leaders make decisions. Rather than relying solely on gut instinct or annual reviews, managers now have access to real-time data on team workload, project velocity, and collaboration patterns. When used responsibly, this data helps allocate resources more fairly, catch problems early, and ensure no individual is silently overwhelmed.

The organizations that thrive in 2025 won't be the ones who resist these changes — they'll be the ones who embrace them thoughtfully, building cultures that are flexible, human-centered, and genuinely adaptable.`
  },
  {
    title: "How to Build Better Team Communication",
    excerpt: "Learn practical techniques to improve communication within your team and reduce misunderstandings.",
    author: "Emily Rodriguez",
    date: "Dec 5, 2024",
    category: "Communication",
    readTime: "6 min read",
    content: `Poor communication is the root cause of most team failures. Missed deadlines, duplicated work, conflicts, and low morale all trace back, in part, to breakdowns in how people share information. The good news: communication is a skill, and skills can be built deliberately.

**Start With a Communication Agreement**
Before anything else, your team should align on how you communicate. Which channel is for urgent issues? How quickly should people respond to messages? What belongs in a meeting versus an email? Documenting these norms in a shared team handbook removes ambiguity and prevents misunderstandings from compounding.

**Choose the Right Channel for Every Message**
Not all communication is equal. Instant messages work well for quick, informal exchanges but create noise and interrupt deep work if overused. Email is better for detailed, non-urgent information that needs a paper trail. Video calls shine when tone and nuance matter. Choose your channel deliberately and resist the urge to over-message.

**Practice Active Listening**
Effective communication is as much about listening as talking. In meetings, put away distractions and give your full attention. Ask clarifying questions before responding. Summarize what you've heard before sharing your perspective — this prevents the common mistake of responding to what you assumed was said rather than what was actually said.

**Be Specific and Actionable**
Vague instructions create vague results. Instead of "can someone look into this?" say "Alex, please review the Q3 report and share your findings by Thursday noon." Clear ownership, clear deliverables, and clear deadlines are the foundation of effective delegation.

**Create Psychological Safety**
People communicate well only when they feel safe to speak up, share concerns, and admit mistakes. As a leader, model this behavior by acknowledging your own errors, rewarding candor, and never shooting the messenger. Teams with high psychological safety surface problems early — when they're still fixable.

**Reduce Meeting Overload**
Back-to-back meetings leave no time to actually do the work. Before scheduling a meeting, ask whether the goal could be achieved with a well-written message or document. When you do meet, share an agenda in advance, start and end on time, and send a concise summary of decisions and next steps afterward.

**Use Visual Aids**
Complex ideas land better with visuals. Use diagrams, flowcharts, or simple slide decks to explain processes, priorities, or plans. A well-crafted visual can communicate in seconds what paragraphs of text struggle to convey.

Investing in communication pays compounding returns. Teams that communicate clearly and honestly ship better products, resolve conflicts faster, and build the trust that fuels long-term performance.`
  },
  {
    title: "Project Management Best Practices",
    excerpt: "Master the essential practices that separate successful projects from failed ones, backed by industry research.",
    author: "David Park",
    date: "Nov 28, 2024",
    category: "Project Management",
    readTime: "8 min read",
    content: `Research consistently shows that the majority of projects run over budget, miss deadlines, or fail to deliver their intended value. Yet some teams deliver reliably, time after time. What separates them isn't luck — it's discipline, clarity, and the right habits.

**Define Success Before You Start**
The single biggest cause of project failure is ambiguity about what "done" looks like. Before writing a single line of code or making a single call, document your project's goals, key deliverables, success criteria, and constraints. Get explicit sign-off from all stakeholders. A project without a clear definition of success is a project on the path to failure.

**Break Work Into Manageable Chunks**
Large projects feel overwhelming when treated as monolithic blocks. Use a work breakdown structure (WBS) to decompose your project into phases, milestones, and individual tasks. Each task should be small enough to complete in a single work session and have a clear owner and due date. This creates momentum and makes progress visible.

**Build in Buffer Time**
Projects almost always take longer than expected. Add a 20–30% time buffer to each phase to account for unexpected complications, scope changes, and review cycles. This isn't pessimism — it's calibrated realism that protects your deadline and your team's wellbeing.

**Identify and Manage Risks Early**
At the start of every project, hold a risk brainstorm session. What could go wrong? What dependencies are outside your control? For each significant risk, define a mitigation strategy and assign an owner. Reviewing risks regularly throughout the project prevents surprises from becoming crises.

**Communicate Status Proactively**
Stakeholders hate being kept in the dark. Establish a regular cadence of status updates — weekly reports, bi-weekly review meetings, or a live project dashboard that anyone can check. Be transparent about progress, blockers, and risks. Proactive communication builds trust and gives stakeholders the information they need to make good decisions.

**Manage Scope Ruthlessly**
Scope creep — the gradual expansion of a project beyond its original boundaries — is one of the most common reasons projects fail. Every new request should be evaluated against your original goals and timeline. If it's genuinely valuable, prioritize it in a future phase. If it's not, decline it gracefully.

**Run a Retrospective**
After every project, gather your team to reflect: What went well? What should we do differently? What questions do we still have? A 60-minute retrospective pays for itself many times over by preventing the same mistakes from repeating and giving the team a chance to celebrate what worked.

Great project management isn't about following a rigid methodology — it's about clarity, communication, and the discipline to revisit your plan as reality evolves.`
  },
  {
    title: "Automation: Work Smarter, Not Harder",
    excerpt: "Discover how to automate repetitive tasks and focus on what matters most for your business growth.",
    author: "Lisa Wong",
    date: "Nov 20, 2024",
    category: "Automation",
    readTime: "4 min read",
    content: `Every minute your team spends on repetitive, low-value tasks is a minute not spent on creative problem-solving, customer relationships, and strategic work. Automation is the lever that changes this equation — and it's more accessible than ever.

**Identify Your Automation Candidates**
Not every task is a good automation candidate. The best ones share three characteristics: they're repetitive (done frequently), rule-based (follow a predictable pattern), and time-consuming. Start by mapping your team's weekly work and highlighting tasks that appear most often. Common winners include status update emails, data entry between systems, approval routing, and report generation.

**Start Small and Prove Value**
Resist the urge to automate everything at once. Pick one high-impact, low-complexity process and automate it thoroughly. Measure the time saved and any error reduction. A single successful automation that saves each team member 2 hours per week is worth far more than a complex automation project that stalls and never ships.

**Use No-Code Tools First**
You don't need a developer to automate most business processes. Tools like Zapier, Make (formerly Integromat), and native automations in platforms like Whitepace let you build powerful workflows with a drag-and-drop interface. Save developer time for automations that genuinely require custom code.

**Connect Your Tools**
Much of the manual work in modern businesses is moving data between disconnected tools — copying a lead from a form into a CRM, updating a spreadsheet when a task is completed, or sending a Slack message when a deal is closed. Integration-focused automation eliminates these bridges and keeps your systems in sync automatically.

**Automate Notifications and Reminders**
One of the highest-ROI automations is simply making sure the right people know about the right things at the right time. Set up automatic reminders for approaching deadlines, notifications when tasks change status, and alerts when key metrics cross a threshold. This keeps projects moving without requiring anyone to actively police them.

**Review and Refine**
Automations aren't set-and-forget. Schedule a quarterly review of your automations — check that they're still working correctly, still serving their original purpose, and haven't created unintended side effects. Retire automations that are no longer relevant and refine ones that could work better.

The goal of automation isn't to replace human judgment — it's to free humans for the work that requires it.`
  },
  {
    title: "Building a Culture of Innovation",
    excerpt: "Create an environment where creativity thrives and innovative ideas can flourish within your organization.",
    author: "Alex Thompson",
    date: "Nov 15, 2024",
    category: "Innovation",
    readTime: "6 min read",
    content: `Innovation doesn't happen by accident. The organizations that consistently generate breakthrough ideas and improve how they work don't just hire creative people and hope for the best — they deliberately build conditions where innovation can flourish.

**Psychological Safety Is the Foundation**
Before any innovation technique or brainstorming framework, you need a culture where people feel safe sharing half-baked ideas, admitting ignorance, and challenging the status quo. In teams where the cost of being wrong is too high, people stay silent. Create space for experimentation by celebrating learning from failure, not just from success.

**Allocate Time for Exploration**
Innovation requires slack — time not fully committed to immediate deliverables. Some of the most innovative companies allocate 10–20% of employee time to self-directed projects outside their normal responsibilities. Even small amounts of protected exploration time can generate ideas that transform the core business.

**Diversify Perspectives Intentionally**
Homogeneous teams produce predictable ideas. Bring together people with different backgrounds, disciplines, and thinking styles. Include customer-facing employees in strategy discussions. Invite engineers into product design conversations. Cross-functional collaboration is one of the most reliable sources of genuinely novel thinking.

**Make It Easy to Share Ideas**
The best idea in a company is worthless if it never surfaces. Create low-friction channels for people to share observations, suggestions, and experiments — a dedicated Slack channel, a weekly "ideas" meeting, or a lightweight innovation board in your project management tool. The easier it is to share, the more ideas you'll collect.

**Prototype Before You Perfect**
Innovative cultures move fast by building small, scrappy prototypes to test assumptions before committing significant resources. Encourage teams to ask, "What's the fastest way to test this?" A two-day prototype that proves an idea wrong is far more valuable than a two-month project that discovers the same thing.

**Measure and Reward Innovation Behavior**
You get what you measure and reward. If your performance reviews and incentive systems only reward hitting existing targets, people won't take risks on new ideas. Explicitly recognize people who experiment, who share knowledge across teams, and who challenge assumptions constructively — even when their experiments don't pan out.

**Learn from Everywhere**
The best sources of innovative ideas are often outside your industry. Study how hospitality handles personalization, how healthcare manages safety, or how gaming creates engagement. Bringing concepts from adjacent domains into your own creates ideas that feel both fresh and proven.

A culture of innovation is a compounding asset. Teams that build it early consistently outmaneuver competitors who treat innovation as a project rather than a practice.`
  }
];

const BlogPost = ({ post }: { post: typeof blogPosts[0] }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="card-gradient border-0 shadow-medium hover:shadow-glow transition-all duration-300">
      <CardContent className="p-6">
        <div className="mb-4">
          <Badge className="mb-3">{post.category}</Badge>
          <h2 className="text-xl font-bold mb-3 leading-tight">{post.title}</h2>
          <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{post.date}</span>
          </div>
        </div>

        <div className="flex items-center text-xs text-muted-foreground mb-4">
          <Clock className="w-3 h-3 mr-1" />
          <span>{post.readTime}</span>
        </div>

        {expanded && (
          <div className="mt-4 border-t pt-4 space-y-4">
            {post.content.split("\n\n").map((paragraph, idx) => {
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return <h3 key={idx} className="text-lg font-bold mt-4">{paragraph.replace(/\*\*/g, "")}</h3>;
              }
              const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={idx} className="text-muted-foreground leading-relaxed">
                  {parts.map((part, pIdx) =>
                    part.startsWith("**") && part.endsWith("**")
                      ? <strong key={pIdx}>{part.replace(/\*\*/g, "")}</strong>
                      : part
                  )}
                </p>
              );
            })}
          </div>
        )}

        <Button
          variant="outline"
          className="mt-4 w-full"
          onClick={() => setExpanded(!expanded)}
          data-testid={`blog-expand-${post.title.substring(0, 15).toLowerCase().replace(/\s+/g, '-')}`}
        >
          {expanded ? (
            <><ChevronUp className="w-4 h-4 mr-2" /> Close Article</>
          ) : (
            <><ChevronDown className="w-4 h-4 mr-2" /> Read Full Article</>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

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
                <BlogPost key={index} post={post} />
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
