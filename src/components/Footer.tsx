import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        {/* Newsletter Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Try Whitepace today
          </h3>
          <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
            Get started for free. Add your whole team as your needs grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-background text-foreground border-background/20"
            />
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Try Taskey free
            </Button>
          </div>
          <p className="text-sm text-background/60 mt-4">
            On a big team? Contact sales
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
                <span className="text-foreground font-bold text-lg">W</span>
              </div>
              <span className="text-2xl font-bold">whitepace</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Whitepace was created for the new ways we live and work. 
              We make a better workspace around the world.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Product</h4>
            <ul className="space-y-3">
              <li><Link to="/overview" className="text-background/80 hover:text-background transition-colors" data-testid="footer-overview">Overview</Link></li>
              <li><Link to="/pricing" className="text-background/80 hover:text-background transition-colors" data-testid="footer-pricing">Pricing</Link></li>
              <li><Link to="/customer-stories" className="text-background/80 hover:text-background transition-colors" data-testid="footer-customer-stories">Customer stories</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-background/80 hover:text-background transition-colors" data-testid="footer-blog">Blog</Link></li>
              <li><Link to="/guides" className="text-background/80 hover:text-background transition-colors" data-testid="footer-guides">Guides & tutorials</Link></li>
              <li><Link to="/help" className="text-background/80 hover:text-background transition-colors" data-testid="footer-help">Help center</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-background/80 hover:text-background transition-colors" data-testid="footer-about">About us</Link></li>
              <li><Link to="/careers" className="text-background/80 hover:text-background transition-colors" data-testid="footer-careers">Careers</Link></li>
              <li><Link to="/media-kit" className="text-background/80 hover:text-background transition-colors" data-testid="footer-media-kit">Media kit</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <p className="text-background/60 text-sm">
                ©2021 Whitepace LLC.
              </p>
              <Link to="/privacy" className="text-background/60 hover:text-background text-sm transition-colors" data-testid="footer-privacy">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-background/60 hover:text-background text-sm transition-colors" data-testid="footer-terms">
                Terms of Service
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;