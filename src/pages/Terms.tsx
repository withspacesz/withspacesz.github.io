import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Terms of <span className="bg-gradient-primary bg-clip-text text-transparent">Service</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Last updated: December 15, 2024
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="space-y-8 text-muted-foreground">
                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Acceptance of Terms</h2>
                    <p className="leading-relaxed">
                      By accessing or using Whitepace's productivity platform and related services ("Services"), you agree to be 
                      bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our Services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Description of Service</h2>
                    <p className="leading-relaxed">
                      Whitepace provides a cloud-based productivity platform that enables teams to collaborate, manage projects, 
                      and streamline workflows. Our Services include task management, team collaboration tools, file sharing, 
                      analytics, and related features.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">User Accounts</h2>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-3">Account Creation</h3>
                    <p className="leading-relaxed mb-4">
                      To use our Services, you must create an account by providing accurate and complete information. 
                      You are responsible for maintaining the confidentiality of your account credentials.
                    </p>

                    <h3 className="text-xl font-semibold text-foreground mb-3">Account Responsibility</h3>
                    <p className="leading-relaxed mb-4">
                      You are solely responsible for:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>All activities that occur under your account</li>
                      <li>Maintaining the security of your login credentials</li>
                      <li>Notifying us immediately of any unauthorized use</li>
                      <li>Ensuring your account information remains accurate</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Acceptable Use</h2>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-3">Permitted Use</h3>
                    <p className="leading-relaxed mb-4">
                      You may use our Services for lawful business and personal productivity purposes in accordance with these Terms.
                    </p>

                    <h3 className="text-xl font-semibold text-foreground mb-3">Prohibited Activities</h3>
                    <p className="leading-relaxed mb-4">
                      You agree not to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Violate any applicable laws or regulations</li>
                      <li>Infringe on intellectual property rights</li>
                      <li>Upload malicious code or harmful content</li>
                      <li>Attempt to gain unauthorized access to our systems</li>
                      <li>Use the Services to harm, harass, or spam others</li>
                      <li>Reverse engineer or attempt to extract source code</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Content and Data</h2>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-3">Your Content</h3>
                    <p className="leading-relaxed mb-4">
                      You retain ownership of all content you create, upload, or share through our Services. By using our Services, 
                      you grant us a limited license to store, process, and display your content as necessary to provide the Services.
                    </p>

                    <h3 className="text-xl font-semibold text-foreground mb-3">Content Responsibility</h3>
                    <p className="leading-relaxed mb-4">
                      You are solely responsible for your content and must ensure it:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Does not violate any laws or third-party rights</li>
                      <li>Is accurate and not misleading</li>
                      <li>Does not contain harmful or malicious elements</li>
                      <li>Complies with our community guidelines</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Payment and Subscription</h2>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-3">Subscription Plans</h3>
                    <p className="leading-relaxed mb-4">
                      We offer various subscription plans with different features and usage limits. Current pricing and plan details 
                      are available on our website.
                    </p>

                    <h3 className="text-xl font-semibold text-foreground mb-3">Payment Terms</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Subscriptions are billed in advance on a recurring basis</li>
                      <li>All fees are non-refundable except as required by law</li>
                      <li>We may change pricing with 30 days' notice</li>
                      <li>You may cancel your subscription at any time</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Privacy and Security</h2>
                    <p className="leading-relaxed">
                      We are committed to protecting your privacy and securing your data. Our privacy practices are detailed in our 
                      Privacy Policy, which is incorporated into these Terms by reference.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Service Availability</h2>
                    <p className="leading-relaxed">
                      While we strive to maintain high service availability, we do not guarantee uninterrupted access to our Services. 
                      We may experience downtime for maintenance, updates, or technical issues.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
                    <p className="leading-relaxed">
                      The Services, including all software, designs, text, graphics, and trademarks, are owned by Whitepace and 
                      protected by intellectual property laws. You may not use our intellectual property without our written permission.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
                    <p className="leading-relaxed">
                      To the maximum extent permitted by law, Whitepace shall not be liable for any indirect, incidental, special, 
                      consequential, or punitive damages arising from your use of the Services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Termination</h2>
                    <p className="leading-relaxed mb-4">
                      Either party may terminate these Terms at any time. We may also suspend or terminate your access to the Services 
                      if you violate these Terms or engage in harmful activities.
                    </p>
                    <p className="leading-relaxed">
                      Upon termination, your right to use the Services will cease immediately, and we may delete your account and data 
                      in accordance with our data retention policies.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Changes to Terms</h2>
                    <p className="leading-relaxed">
                      We may modify these Terms from time to time. We will notify you of material changes and provide the opportunity 
                      to review the updated Terms before they take effect.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
                    <p className="leading-relaxed">
                      These Terms are governed by the laws of the State of California, without regard to conflict of law principles. 
                      Any disputes will be resolved in the courts of San Francisco County, California.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                    <p className="leading-relaxed">
                      If you have questions about these Terms, please contact us at:
                    </p>
                    <div className="mt-4 p-6 bg-muted/30 rounded-lg">
                      <p><strong>Whitepace LLC</strong></p>
                      <p>Email: legal@whitepace.com</p>
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

export default Terms;
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Terms of <span className="bg-gradient-primary bg-clip-text text-transparent">Service</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Last updated: December 15, 2024
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      By accessing or using Whitepace's services, you agree to be bound by these Terms of Service 
                      and all applicable laws and regulations. If you do not agree with any of these terms, 
                      you are prohibited from using or accessing this service.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Whitepace provides a cloud-based productivity and collaboration platform that allows 
                      teams to organize, communicate, and manage projects. Our service includes web and 
                      mobile applications, data storage, and related features.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      To use our service, you must create an account and provide accurate information. 
                      You are responsible for:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Maintaining the confidentiality of your account credentials</li>
                      <li>All activities that occur under your account</li>
                      <li>Notifying us immediately of any unauthorized use</li>
                      <li>Ensuring your information is accurate and up-to-date</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">4. Acceptable Use</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      You agree not to use our service to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Violate any applicable laws or regulations</li>
                      <li>Infringe on intellectual property rights</li>
                      <li>Distribute malware, spam, or harmful content</li>
                      <li>Attempt to gain unauthorized access to our systems</li>
                      <li>Interfere with or disrupt our service</li>
                      <li>Use our service for illegal or unauthorized purposes</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">5. Content and Data</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      You retain ownership of all content and data you upload to our service. By using our service, you grant us:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>A license to host, store, and process your content</li>
                      <li>The right to backup and secure your data</li>
                      <li>Permission to share content with team members you invite</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">6. Privacy and Security</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We are committed to protecting your privacy and securing your data. Our collection 
                      and use of your information is governed by our Privacy Policy, which is incorporated 
                      by reference into these terms.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">7. Payment and Billing</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      For paid services:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Fees are charged in advance on a monthly or annual basis</li>
                      <li>All fees are non-refundable unless required by law</li>
                      <li>We may change our pricing with 30 days notice</li>
                      <li>Your account may be suspended for non-payment</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">8. Service Availability</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      While we strive to provide continuous service, we do not guarantee 100% uptime. 
                      We may temporarily suspend service for maintenance, updates, or due to circumstances 
                      beyond our control.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Either party may terminate this agreement at any time. Upon termination, your right 
                      to use the service ceases immediately. We will provide you with the ability to 
                      export your data for 30 days after termination.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">10. Limitation of Liability</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Whitepace shall not be liable for any indirect, incidental, special, or consequential 
                      damages arising from your use of our service. Our total liability shall not exceed 
                      the amount paid by you for the service in the 12 months preceding the claim.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We reserve the right to modify these terms at any time. We will notify users of 
                      material changes via email or through our service. Continued use of the service 
                      after changes constitutes acceptance of the new terms.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you have any questions about these Terms of Service, please contact us at 
                      legal@whitepace.com or through our support center.
                    </p>
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

export default Terms;
