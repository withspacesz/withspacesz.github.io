import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/40 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
            data-testid="logo-home"
          >
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              whitepace
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button 
                className="flex items-center text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                data-testid="nav-products"
              >
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-50">
                  <Link 
                    to="/overview" 
                    className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                    onClick={() => setIsProductsOpen(false)}
                    data-testid="nav-overview"
                  >
                    Overview
                  </Link>
                  <Link 
                    to="/#pricing" 
                    className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                    onClick={() => setIsProductsOpen(false)}
                    data-testid="nav-pricing"
                  >
                    Pricing
                  </Link>
                  <Link 
                    to="/customer-stories" 
                    className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                    onClick={() => setIsProductsOpen(false)}
                    data-testid="nav-customer-stories"
                  >
                    Customer stories
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/#features" 
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="nav-solutions"
            >
              Solutions
            </Link>
            
            <div className="relative">
              <button 
                className="flex items-center text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                data-testid="nav-resources"
              >
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isResourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-50">
                  <Link 
                    to="/blog" 
                    className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                    onClick={() => setIsResourcesOpen(false)}
                    data-testid="nav-blog"
                  >
                    Blog
                  </Link>
                  <Link 
                    to="/guides" 
                    className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                    onClick={() => setIsResourcesOpen(false)}
                    data-testid="nav-guides"
                  >
                    Guides & tutorials
                  </Link>
                  <Link 
                    to="/help" 
                    className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                    onClick={() => setIsResourcesOpen(false)}
                    data-testid="nav-help"
                  >
                    Help center
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/#pricing" 
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="nav-pricing-main"
            >
              Pricing
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="font-medium" data-testid="button-login">
              Login
            </Button>
            <Link to="/#pricing">
              <Button className="font-semibold" data-testid="button-try-free">
                Try Whitepace free
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/40">
            <nav className="flex flex-col space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-muted-foreground px-2">Products</p>
                <Link 
                  to="/overview" 
                  className="block px-4 py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  data-testid="mobile-nav-overview"
                >
                  Overview
                </Link>
                <Link 
                  to="/#pricing" 
                  className="block px-4 py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  data-testid="mobile-nav-pricing"
                >
                  Pricing
                </Link>
                <Link 
                  to="/customer-stories" 
                  className="block px-4 py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  data-testid="mobile-nav-customer-stories"
                >
                  Customer stories
                </Link>
              </div>
              
              <Link 
                to="/#features" 
                className="text-foreground hover:text-primary transition-colors font-medium text-left px-2"
                onClick={() => setIsMenuOpen(false)}
                data-testid="mobile-nav-solutions"
              >
                Solutions
              </Link>
              
              <div className="space-y-2">
                <p className="text-sm font-semibold text-muted-foreground px-2">Resources</p>
                <Link 
                  to="/blog" 
                  className="block px-4 py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  data-testid="mobile-nav-blog"
                >
                  Blog
                </Link>
                <Link 
                  to="/guides" 
                  className="block px-4 py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  data-testid="mobile-nav-guides"
                >
                  Guides & tutorials
                </Link>
                <Link 
                  to="/help" 
                  className="block px-4 py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  data-testid="mobile-nav-help"
                >
                  Help center
                </Link>
              </div>
              
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="font-medium justify-start" data-testid="mobile-button-login">
                  Login
                </Button>
                <Link to="/#pricing">
                  <Button 
                    className="font-semibold w-full"
                    data-testid="mobile-button-try-free"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Try Whitepace free
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;