import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Image, FileText, Palette, Globe } from "lucide-react";

const logoVariants = [
  {
    name: "Primary Logo",
    description: "Main logo for light backgrounds",
    formats: ["PNG", "SVG", "PDF"],
    usage: "Primary brand representation"
  },
  {
    name: "Dark Logo", 
    description: "Logo variant for dark backgrounds",
    formats: ["PNG", "SVG", "PDF"],
    usage: "Dark themes and backgrounds"
  },
  {
    name: "Icon Only",
    description: "Simplified icon version",
    formats: ["PNG", "SVG", "ICO"],
    usage: "App icons, favicons, small spaces"
  },
  {
    name: "Wordmark",
    description: "Text-only logo version",
    formats: ["PNG", "SVG", "PDF"],
    usage: "When symbol is not appropriate"
  }
];

const brandColors = [
  { name: "Primary Blue", hex: "#4285F4", usage: "Primary actions, links" },
  { name: "Secondary Blue", hex: "#1E40AF", usage: "Secondary elements" },
  { name: "Accent Green", hex: "#10B981", usage: "Success states, highlights" },
  { name: "Warning Orange", hex: "#F59E0B", usage: "Warnings, alerts" },
  { name: "Dark Gray", hex: "#1F2937", usage: "Text, headers" },
  { name: "Light Gray", hex: "#F3F4F6", usage: "Backgrounds, borders" }
];

const resources = [
  {
    icon: Image,
    title: "Brand Assets Package",
    description: "Complete collection of logos, icons, and brand elements",
    size: "15.2 MB",
    format: "ZIP"
  },
  {
    icon: Palette,
    title: "Brand Guidelines",
    description: "Comprehensive guide to using our brand correctly",
    size: "2.1 MB", 
    format: "PDF"
  },
  {
    icon: FileText,
    title: "Press Kit",
    description: "Company information, press releases, and media assets",
    size: "8.7 MB",
    format: "ZIP"
  },
  {
    icon: Globe,
    title: "Product Screenshots",
    description: "High-resolution product interface screenshots",
    size: "24.3 MB",
    format: "ZIP"
  }
];

const MediaKit = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Media <span className="bg-gradient-primary bg-clip-text text-transparent">Kit</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Download our brand assets, logos, and guidelines. Everything you need to 
                represent Whitepace accurately in your projects and publications.
              </p>
            </div>

            {/* Quick Download */}
            <div className="text-center mb-16">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold glow-effect" data-testid="download-all">
                <Download className="mr-2 h-5 w-5" />
                Download Complete Media Kit
              </Button>
            </div>
          </div>
        </section>

        {/* Logo Variants */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Logo Variants</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose the right logo variant for your use case
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {logoVariants.map((logo, index) => (
                <Card key={index} className="border-0 shadow-medium hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-8">
                    {/* Logo Preview */}
                    <div className="bg-gradient-to-br from-background to-muted/50 rounded-lg p-8 mb-6 flex items-center justify-center min-h-[120px]">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">W</span>
                      </div>
                    </div>
                    
                    <h3 className="font-bold mb-2">{logo.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{logo.description}</p>
                    
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground mb-2">Available formats:</p>
                      <div className="flex flex-wrap gap-1">
                        {logo.formats.map((format, i) => (
                          <span key={i} className="text-xs bg-muted px-2 py-1 rounded">
                            {format}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button size="sm" className="w-full" data-testid={`download-${logo.name.toLowerCase().replace(' ', '-')}`}>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Colors */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Brand Colors</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our carefully crafted color palette
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {brandColors.map((color, index) => (
                <Card key={index} className="border-0 shadow-medium hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div 
                      className="w-full h-16 rounded-lg mb-4"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <h3 className="font-bold mb-1">{color.name}</h3>
                    <p className="text-sm font-mono text-muted-foreground mb-2">{color.hex}</p>
                    <p className="text-xs text-muted-foreground">{color.usage}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Downloads */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Additional Resources</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Complete packages and guidelines for media and press
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {resources.map((resource, index) => (
                <Card key={index} className="border-0 shadow-medium hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-6">
                        <resource.icon className="h-6 w-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{resource.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-muted-foreground">
                            {resource.size} • {resource.format}
                          </div>
                          <Button data-testid={`download-${resource.title.toLowerCase().replace(/\s+/g, '-')}`}>
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Usage Guidelines</h2>
              
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <h3 className="text-foreground">Brand Usage</h3>
                <p>
                  Please use our brand assets respectfully and in accordance with these guidelines. 
                  The Whitepace logo and brand elements are important assets that help maintain 
                  our brand integrity.
                </p>
                
                <h3 className="text-foreground">Do's</h3>
                <ul>
                  <li>Use the logo as provided without modifications</li>
                  <li>Maintain proper spacing around the logo</li>
                  <li>Use approved color variants only</li>
                  <li>Ensure good contrast on backgrounds</li>
                </ul>
                
                <h3 className="text-foreground">Don'ts</h3>
                <ul>
                  <li>Don't stretch, skew, or distort the logo</li>
                  <li>Don't change the colors or add effects</li>
                  <li>Don't use the logo on busy backgrounds</li>
                  <li>Don't recreate or redraw the logo</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MediaKit;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Image, FileText, Palette } from "lucide-react";

const assets = [
  {
    category: "Logos",
    icon: Image,
    items: [
      { name: "Primary Logo (PNG)", size: "2.4 MB" },
      { name: "Primary Logo (SVG)", size: "1.2 MB" },
      { name: "Logo Mark Only (PNG)", size: "1.8 MB" },
      { name: "White Logo (PNG)", size: "2.1 MB" }
    ]
  },
  {
    category: "Brand Colors",
    icon: Palette,
    items: [
      { name: "Color Palette (Adobe Swatch)", size: "0.5 MB" },
      { name: "Brand Guidelines (PDF)", size: "3.2 MB" }
    ]
  },
  {
    category: "Press Kit",
    icon: FileText,
    items: [
      { name: "Company Factsheet", size: "1.1 MB" },
      { name: "Leadership Bios", size: "0.8 MB" },
      { name: "Product Screenshots", size: "15.6 MB" },
      { name: "Press Release Template", size: "0.3 MB" }
    ]
  }
];

const brandColors = [
  { name: "Primary Blue", hex: "#4F46E5", rgb: "79, 70, 229" },
  { name: "Accent Purple", hex: "#7C3AED", rgb: "124, 58, 237" },
  { name: "Success Green", hex: "#10B981", rgb: "16, 185, 129" },
  { name: "Warning Orange", hex: "#F59E0B", rgb: "245, 158, 11" },
  { name: "Dark Gray", hex: "#1F2937", rgb: "31, 41, 55" },
  { name: "Light Gray", hex: "#F9FAFB", rgb: "249, 250, 251" }
];

const MediaKit = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Media <span className="bg-gradient-primary bg-clip-text text-transparent">Kit</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Download official Whitepace brand assets, logos, and press materials. 
                Please review our brand guidelines before using these assets.
              </p>
            </div>

            {/* Brand Guidelines */}
            <div className="bg-muted/30 rounded-2xl p-8 mb-16">
              <h2 className="text-2xl font-bold mb-6">Brand Guidelines</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Logo Usage</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Maintain minimum clear space around the logo</li>
                    <li>• Do not alter the logo colors or proportions</li>
                    <li>• Use the white version on dark backgrounds</li>
                    <li>• Ensure adequate contrast for readability</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Brand Voice</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Professional yet approachable</li>
                    <li>• Clear and concise communication</li>
                    <li>• Focus on productivity and collaboration</li>
                    <li>• Emphasize user empowerment</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Brand Colors */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Brand Colors</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {brandColors.map((color, index) => (
                  <Card key={index} className="card-gradient border-0 shadow-medium">
                    <CardContent className="p-6">
                      <div 
                        className="w-full h-20 rounded-lg mb-4"
                        style={{ backgroundColor: color.hex }}
                      ></div>
                      <h3 className="font-semibold mb-2">{color.name}</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>HEX: {color.hex}</p>
                        <p>RGB: {color.rgb}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Download Assets */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Download Assets</h2>
              <div className="space-y-8">
                {assets.map((category, index) => (
                  <Card key={index} className="card-gradient border-0 shadow-medium">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                          <category.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold">{category.category}</h3>
                      </div>
                      
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-muted-foreground">{item.size}</p>
                            </div>
                            <Button size="sm" variant="outline">
                              <Download className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="text-center mt-16 p-8 bg-muted/30 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Need Custom Assets?</h3>
              <p className="text-muted-foreground mb-6">
                For custom brand assets or press inquiries, please contact our marketing team.
              </p>
              <Button>Contact Marketing Team</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MediaKit;
