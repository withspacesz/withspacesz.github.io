import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, HelpCircle, ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-24">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <div className="text-8xl font-extrabold text-primary/20 mb-4">404</div>
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            The page you are looking for may have been moved, renamed, or no longer exists.
            Here are some helpful links to get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" asChild>
              <Link to="/"><Home className="w-4 h-4 mr-2" />Go to Homepage</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/help"><HelpCircle className="w-4 h-4 mr-2" />Visit Help Center</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/blog"><BookOpen className="w-4 h-4 mr-2" />Read Our Blog</Link>
            </Button>
          </div>

          <div className="border-t pt-12">
            <h2 className="text-2xl font-bold mb-6">Popular Pages</h2>
            <div className="grid sm:grid-cols-3 gap-4 text-left">
              {[
                { to: "/overview", label: "Product Overview", desc: "Explore all Whitepace features and capabilities" },
                { to: "/pricing", label: "Pricing Plans", desc: "Compare Free, Pro, Business, and Enterprise plans" },
                { to: "/customer-stories", label: "Customer Stories", desc: "See how real teams use Whitepace every day" },
                { to: "/guides", label: "Getting Started Guides", desc: "Step-by-step tutorials for new users" },
                { to: "/solutions", label: "Solutions by Team", desc: "Find the right setup for your team type" },
                { to: "/about", label: "About Whitepace", desc: "Our mission, values, and the team behind the product" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group flex items-start gap-3 p-4 rounded-lg hover:bg-muted transition-colors"
                >
                  <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  <div>
                    <div className="font-semibold mb-1">{link.label}</div>
                    <div className="text-sm text-muted-foreground leading-snug">{link.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
