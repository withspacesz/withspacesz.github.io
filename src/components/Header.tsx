import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/40 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')} 
            className="flex items-center"
            data-testid="logo-home"
          >
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              whitepace
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-products"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-solutions"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-resources"
            >
              Resources
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-pricing"
            >
              Pricing
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="font-medium" data-testid="button-login">
              Login
            </Button>
            <Button 
              onClick={() => scrollToSection('pricing')} 
              className="font-semibold"
              data-testid="button-try-free"
            >
              Try Whitepace free
            </Button>
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
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
                data-testid="mobile-link-products"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
                data-testid="mobile-link-solutions"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
                data-testid="mobile-link-resources"
              >
                Resources
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
                data-testid="mobile-link-pricing"
              >
                Pricing
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="font-medium justify-start" data-testid="mobile-button-login">
                  Login
                </Button>
                <Button 
                  onClick={() => scrollToSection('pricing')} 
                  className="font-semibold"
                  data-testid="mobile-button-try-free"
                >
                  Try Whitepace free
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;