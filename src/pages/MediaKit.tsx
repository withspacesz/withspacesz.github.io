
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Image, FileText, Palette } from "lucide-react";

const mediaAssets = [
  {
    category: "Logos",
    icon: Image,
    items: [
      { name: "Whitepace Logo (PNG)", size: "2.1 MB", format: "PNG" },
      { name: "Whitepace Logo (SVG)", size: "45 KB", format: "SVG" },
      { name: "Whitepace Logo (Black)", size: "1.8 MB", format: "PNG" },
      { name: "Whitepace Logo (White)", size: "1.9 MB", format: "PNG" }
    ]
  },
  {
    category: "Brand Colors",
    icon: Palette,
    items: [
      { name: "Primary Blue", color: "#4F9CF9", hex: "#4F9CF9" },
      { name: "Secondary Yellow", color: "#FFE492", hex: "#FFE492" },
      { name: "Dark Blue", color: "#043873", hex: "#043873" },
      { name: "Light Gray", color: "#F7F7EE", hex: "#F7F7EE" }
    ]
  },
  {
    category: "Brand Guidelines",
    icon: FileText,
    items: [
      { name: "Brand Guidelines PDF", size: "8.5 MB", format: "PDF" },
      { name: "Logo Usage Guidelines", size: "3.2 MB", format: "PDF" },
      { name: "Typography Guide", size: "2.1 MB", format: "PDF" }
    ]
  }
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
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Download our brand assets, logos, and guidelines for media coverage, partnerships, and promotional materials.
              </p>
            </div>

            <div className="space-y-12">
              {mediaAssets.map((category, index) => (
                <div key={index}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <category.icon className="h-5 w-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">{category.category}</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <Card key={itemIndex} className="card-gradient border-0 shadow-medium hover:shadow-glow transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                              {item.size && (
                                <p className="text-sm text-muted-foreground">
                                  {item.size} • {item.format}
                                </p>
                              )}
                              {item.hex && (
                                <div className="flex items-center gap-2 mt-2">
                                  <div 
                                    className="w-6 h-6 rounded border"
                                    style={{ backgroundColor: item.color }}
                                  ></div>
                                  <span className="text-sm font-mono">{item.hex}</span>
                                </div>
                              )}
                            </div>
                          </div>
                          <Button className="w-full" variant="outline">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Usage Guidelines */}
            <div className="mt-16">
              <Card className="card-gradient border-0 shadow-medium">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Usage Guidelines</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-lg mb-3 text-green-600">✓ Do</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Use our official logos and brand colors</li>
                        <li>• Maintain proper spacing around logos</li>
                        <li>• Use high-resolution assets for print</li>
                        <li>• Follow our brand guidelines</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-3 text-red-600">✗ Don't</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Modify or distort our logo</li>
                        <li>• Use unapproved color variations</li>
                        <li>• Place logo on busy backgrounds</li>
                        <li>• Use low-resolution assets</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MediaKit;
