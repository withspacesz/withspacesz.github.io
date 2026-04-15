import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Book, Clock, Users, Target, ChevronDown, ChevronUp, CheckCircle } from "lucide-react";

const guides = [
  {
    icon: Book,
    title: "Getting Started Guide",
    description: "Complete walkthrough for setting up your first project and inviting your team.",
    level: "Beginner",
    duration: "15 min",
    topics: ["Setup", "Team Invitation", "First Project"],
    steps: [
      {
        title: "Create Your Whitepace Account",
        content: "Visit whitepace.com and click 'Get Started Free.' Enter your work email address and choose a strong password. Verify your email through the confirmation link sent to your inbox. You can also sign up using Google or Microsoft for a faster experience."
      },
      {
        title: "Set Up Your Workspace",
        content: "After signing in for the first time, you'll be prompted to create your workspace. Give it a name (typically your company or team name) and upload a logo if you have one. Your workspace is the top-level container for all your projects and team members. You can create multiple workspaces if needed for different organizations or clients."
      },
      {
        title: "Create Your First Project",
        content: "Click the '+ New Project' button on your dashboard sidebar. Enter a project name, optional description, and select a color tag to identify it visually. Choose between a Board view (Kanban-style columns) or a List view (task rows) based on your team's preference. You can switch views at any time without losing data."
      },
      {
        title: "Add Your First Tasks",
        content: "Inside your project, click '+ Add Task' or press 'T' to create a task quickly. Give it a clear title, set a due date by clicking the calendar icon, and write a detailed description so anyone picking it up has full context. Attach relevant files by clicking the paperclip icon. You can also add custom labels, priority levels, and checklists within each task."
      },
      {
        title: "Invite Team Members",
        content: "Go to Workspace Settings (click your workspace name → Settings → Members). Click 'Invite Members' and enter your colleagues' email addresses. Choose their role: Admin (full access), Member (can create and edit), or Viewer (read-only). They'll receive an email invitation. Once they accept, they'll appear in your member list and you can start assigning tasks to them."
      },
      {
        title: "Assign Tasks and Set Due Dates",
        content: "Open any task and click the 'Assignee' field to choose a team member. You can assign one or multiple people to a single task. Set a due date using the date picker. Due dates appear on your team calendar and trigger automatic reminder notifications 24 hours before they're due — no more missed deadlines."
      }
    ]
  },
  {
    icon: Users,
    title: "Team Collaboration Mastery",
    description: "Advanced techniques for effective team communication and collaboration.",
    level: "Intermediate",
    duration: "30 min",
    topics: ["Communication", "File Sharing", "Real-time Editing"],
    steps: [
      {
        title: "Master the Comment System",
        content: "Every task has a rich comment thread. Use @mentions to notify specific teammates — type '@' followed by their name and they'll receive an immediate notification. Format your comments with bold (**text**), italics (*text*), and bullet lists for clarity. You can attach files directly to comments, making context easy to find alongside the discussion."
      },
      {
        title: "Use Reaction Emojis for Quick Acknowledgment",
        content: "Instead of clogging comment threads with 'Got it!' or 'Sounds good!', react to comments with emojis. Hover over any comment and click the smiley-face icon to pick a reaction. This keeps conversations clean while still giving the author meaningful feedback that their message was received."
      },
      {
        title: "Organize Files with Smart Folders",
        content: "Navigate to the 'Files' tab inside your project to see all uploaded documents, images, and links organized in one place. Create folders to group related files — for example, 'Design Assets,' 'Meeting Notes,' and 'Legal Docs.' You can search across all files in a project by name, file type, or uploader."
      },
      {
        title: "Set Up Project Notifications",
        content: "Open your project settings and go to 'Notifications.' Choose which events trigger alerts: new tasks, task status changes, due date reminders, and new comments. You can set different notification preferences per project — stay tightly looped on critical projects while reducing noise from lower-priority ones."
      },
      {
        title: "Create Team Templates",
        content: "If your team repeats similar project structures, save time by creating templates. Build a project with your standard phases, task types, and structure, then click 'Save as Template' in project settings. Next time you start a similar project, select your template and all the structure will be pre-built — just update names and dates."
      },
      {
        title: "Use the Team Dashboard",
        content: "The Team Dashboard gives you a bird's-eye view of everything happening across all projects. See tasks assigned to each person, upcoming deadlines, project completion rates, and recent activity. Use filters to focus on a specific team member or project. This view is invaluable for weekly planning and identifying workload imbalances before they become problems."
      }
    ]
  },
  {
    icon: Target,
    title: "Project Planning & Execution",
    description: "Strategic approach to planning, executing, and delivering successful projects.",
    level: "Advanced",
    duration: "45 min",
    topics: ["Strategy", "Execution", "Delivery"],
    steps: [
      {
        title: "Define Project Goals and Success Criteria",
        content: "Before adding a single task, write a clear project brief. Answer: What are we trying to achieve? How will we know when we've succeeded? What are the constraints (budget, timeline, scope)? Paste this into your project description so every team member has the same north star. Projects with clearly documented goals are three times more likely to finish on time and on scope."
      },
      {
        title: "Map Out Phases and Milestones",
        content: "Break your project into phases — for example, Discovery, Design, Development, Testing, Launch. Create a milestone for the end of each phase. Milestones appear as diamond markers on your project timeline and create natural checkpoints for stakeholder reviews. They also give your team a sense of progress and momentum throughout the project."
      },
      {
        title: "Use Dependencies to Sequence Work",
        content: "Some tasks can't start until others finish. Use Whitepace's dependency feature (right-click any task → 'Add Dependency') to link related tasks. Dependent tasks are automatically highlighted if their predecessor is late, alerting you to schedule risks before they cascade. This is especially powerful for complex projects with parallel workstreams."
      },
      {
        title: "Balance Workload Across the Team",
        content: "Switch to the Workload view to see how tasks are distributed across team members over time. If someone has 12 tasks due this week and another has 2, you have an imbalance that needs addressing. Use this view during your planning sessions to redistribute work before it becomes a bottleneck. A balanced workload prevents burnout and keeps the project moving smoothly."
      },
      {
        title: "Track Progress with Custom Statuses",
        content: "Customize your task statuses to match your team's actual workflow. Instead of generic 'To Do / In Progress / Done,' you might use 'Backlog / In Review / Blocked / Complete.' Custom statuses give your board more granularity and make it immediately clear where every task stands — no need to ask for status updates in meetings."
      },
      {
        title: "Run a Project Retrospective",
        content: "After delivering a project, hold a 60-minute retrospective with your team. Use a simple framework: What went well? What was challenging? What would we do differently? Document the learnings in a Project Notes document and pin it so future teams can reference it. This one habit compounds over time into a culture of continuous improvement."
      }
    ]
  },
  {
    icon: Clock,
    title: "Time Management & Productivity",
    description: "Proven methods to boost productivity and manage time effectively.",
    level: "Intermediate",
    duration: "25 min",
    topics: ["Time Tracking", "Productivity", "Focus"],
    steps: [
      {
        title: "Enable Time Tracking on Tasks",
        content: "Whitepace includes built-in time tracking. Open any task and click the timer icon to start tracking time. You can log time manually by entering hours and a note. Time logs appear in the task's activity history and aggregate at the project level in your analytics dashboard. This data helps you estimate future projects more accurately and understand where time is actually going."
      },
      {
        title: "Use My Tasks View for Personal Prioritization",
        content: "The 'My Tasks' view shows everything assigned to you across all projects in one unified list. Sort by due date, priority, or project. Each morning, spend 5 minutes reviewing your list and deciding your top three priorities for the day. This simple habit dramatically reduces the scattered, reactive work style that kills productivity."
      },
      {
        title: "Block Focus Time on Your Calendar",
        content: "In your profile settings, connect your Google or Outlook calendar. Block 2–4 hour windows of uninterrupted focus time each day. When your focus blocks are visible on the team calendar, colleagues know to schedule meetings outside those windows. Protecting focus time is one of the highest-leverage productivity habits you can build."
      },
      {
        title: "Use Filters to Reduce Noise",
        content: "Whitepace's powerful filtering system lets you narrow your view to exactly what matters right now. Filter tasks by assignee, due date, priority, status, or label. Save your favorite filters for quick access. For example, save a filter for 'My high-priority tasks due this week' and check it every morning instead of scrolling through everything."
      },
      {
        title: "Set Smart Reminders",
        content: "For critical tasks, add a personal reminder beyond the default due date notification. You can set reminders days or hours in advance — for example, remind yourself three days before a deadline to start a complex deliverable. Reminders appear as notifications on all your devices and in your Whitepace inbox, ensuring nothing slips through the cracks."
      },
      {
        title: "Review Your Productivity Analytics",
        content: "Visit your personal analytics dashboard weekly to review your task completion rate, average time per task, and workload trends over time. Look for patterns: Are you consistently under-estimating certain types of work? Are your completion rates higher on certain days of the week? Use these insights to adjust how you plan, estimate, and schedule your work."
      }
    ]
  }
];

const GuideDetail = ({ guide }: { guide: typeof guides[0] }) => {
  const [open, setOpen] = useState(false);
  return (
    <Card className="card-gradient border-0 shadow-medium hover:shadow-glow transition-all duration-300">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
            <guide.icon className="h-6 w-6 text-white" />
          </div>
          <div>
            <Badge className="mb-2">{guide.level}</Badge>
            <h2 className="text-xl font-bold">{guide.title}</h2>
          </div>
        </div>

        <p className="text-muted-foreground mb-6 leading-relaxed">{guide.description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-1" />
            <span>{guide.duration}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {guide.topics.map((topic, i) => (
            <Badge key={i} variant="outline" className="text-xs">{topic}</Badge>
          ))}
        </div>

        {open && (
          <div className="mt-4 border-t pt-6 space-y-6">
            {guide.steps.map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.content}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <Button
          variant="outline"
          className="mt-4 w-full"
          onClick={() => setOpen(!open)}
          data-testid={`guide-expand-${guide.title.substring(0, 15).toLowerCase().replace(/\s+/g, '-')}`}
        >
          {open ? (
            <><ChevronUp className="w-4 h-4 mr-2" /> Collapse Guide</>
          ) : (
            <><ChevronDown className="w-4 h-4 mr-2" /> Read Full Guide</>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

const quickTips = [
  { tip: "Press 'T' anywhere in a project to instantly create a new task.", label: "Keyboard Shortcut" },
  { tip: "Drag tasks between columns in Board view to update their status without opening them.", label: "Drag & Drop" },
  { tip: "Use '/' in task descriptions to insert tables, images, code blocks, and dividers.", label: "Rich Text" },
  { tip: "Star your most-used projects to pin them to the top of your sidebar for instant access.", label: "Favorites" },
  { tip: "Use the global search (Cmd/Ctrl + K) to find any task, project, or file instantly.", label: "Quick Search" },
  { tip: "Export any project to CSV or PDF from the project settings for reporting or archiving.", label: "Export" },
];

const Guides = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Guides & <span className="bg-gradient-primary bg-clip-text text-transparent">Tutorials</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Master Whitepace with our comprehensive step-by-step guides. From getting started to advanced
                project management, each guide gives you the exact steps to unlock the full power of the platform.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Complete Guides</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {guides.map((guide, index) => (
                  <GuideDetail key={index} guide={guide} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Quick Tips</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quickTips.map((item, index) => (
                  <Card key={index} className="card-gradient border-0 shadow-medium hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6 flex gap-4">
                      <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                      <div>
                        <Badge variant="outline" className="mb-2 text-xs">{item.label}</Badge>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.tip}</p>
                      </div>
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

export default Guides;
