import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Privacy <span className="bg-gradient-primary bg-clip-text text-transparent">Policy</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Last updated: December 15, 2024
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="space-y-8 text-muted-foreground">
                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
                    <p className="leading-relaxed">
                      At Whitepace LLC ("we," "our," or "us"), we are committed to protecting your privacy and personal information. 
                      This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
                      productivity platform and related services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>

                    <h3 className="text-xl font-semibold text-foreground mb-3">Personal Information</h3>
                    <p className="leading-relaxed mb-4">
                      We collect personal information that you provide directly to us, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Name, email address, and contact information</li>
                      <li>Account credentials and profile information</li>
                      <li>Payment and billing information</li>
                      <li>Content you create, upload, or share through our services</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Usage Information</h3>
                    <p className="leading-relaxed mb-4">
                      We automatically collect information about how you use our services:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Device information and browser type</li>
                      <li>IP address and location data</li>
                      <li>Usage patterns and feature interactions</li>
                      <li>Performance and error logs</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                    <p className="leading-relaxed mb-4">
                      We use the information we collect to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide, maintain, and improve our services</li>
                      <li>Process transactions and send related information</li>
                      <li>Send technical notices and support messages</li>
                      <li>Respond to your comments and questions</li>
                      <li>Analyze usage patterns to enhance user experience</li>
                      <li>Detect and prevent fraud and abuse</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing and Disclosure</h2>
                    <p className="leading-relaxed mb-4">
                      We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>With your explicit consent</li>
                      <li>To service providers who assist in our operations</li>
                      <li>To comply with legal obligations</li>
                      <li>To protect our rights and safety</li>
                      <li>In connection with a business transfer</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
                    <p className="leading-relaxed">
                      We implement appropriate technical and organizational measures to protect your personal information against 
                      unauthorized access, alteration, disclosure, or destruction. This includes encryption, access controls, 
                      and regular security audits.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights and Choices</h2>
                    <p className="leading-relaxed mb-4">
                      Depending on your location, you may have certain rights regarding your personal information:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access and review your personal information</li>
                      <li>Correct inaccurate or incomplete information</li>
                      <li>Delete your personal information</li>
                      <li>Restrict or object to processing</li>
                      <li>Data portability</li>
                      <li>Withdraw consent where applicable</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Cookies and Tracking Technologies</h2>
                    <p className="leading-relaxed">
                      We use cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content. 
                      You can control cookie settings through your browser preferences, though some features may not function properly 
                      if cookies are disabled.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Children's Privacy</h2>
                    <p className="leading-relaxed">
                      Our services are not intended for children under 13 years of age. We do not knowingly collect personal 
                      information from children under 13. If you believe we have collected information from a child under 13, 
                      please contact us immediately.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">International Data Transfers</h2>
                    <p className="leading-relaxed">
                      Your information may be transferred to and processed in countries other than your country of residence. 
                      We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
                    <p className="leading-relaxed">
                      We may update this Privacy Policy from time to time. We will notify you of any material changes by posting 
                      the new Privacy Policy on our website and updating the "Last updated" date.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                    <p className="leading-relaxed">
                      If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                    </p>
                    <div className="mt-4 p-6 bg-muted/30 rounded-lg">
                      <p><strong>Whitepace LLC</strong></p>
                      <p>Email: privacy@whitepace.com</p>
                      <p>Address: 123 Innovation Drive, San Francisco, CA 94105</p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;