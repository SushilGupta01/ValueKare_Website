import { Box, Barcode, Radio, TrendingUp, FileSearch, Shield, Database, CheckCircle } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

interface FixedAssetPageProps {
  onNavigate?: (page: string) => void;
}

export function FixedAssetPage({ onNavigate }: FixedAssetPageProps) {
  const features = [
    {
      icon: <Radio className="w-8 h-8 text-primary" />,
      title: "RFID Tracking",
      description: "Real-time asset tracking using RFID technology for accurate location and movement monitoring"
    },
    {
      icon: <Barcode className="w-8 h-8 text-primary" />,
      title: "Barcode Management",
      description: "Quick asset identification and data capture using barcode scanning technology"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Asset Valuation",
      description: "Automated calculation of asset values with depreciation tracking and reporting"
    },
    {
      icon: <FileSearch className="w-8 h-8 text-primary" />,
      title: "Audit Automation",
      description: "Streamlined audit processes with digital records and automated verification"
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Lifecycle Management",
      description: "Complete tracking from acquisition to disposal with maintenance scheduling"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Compliance Tracking",
      description: "Ensure regulatory compliance with comprehensive audit trails and documentation"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Security Features",
      description: "Multi-level access controls and encrypted data storage for asset security"
    },
    {
      icon: <Box className="w-8 h-8 text-primary" />,
      title: "Asset Categorization",
      description: "Flexible categorization and tagging system for organized asset management"
    }
  ];

  const capabilities = [
    {
      title: "RFID Technology",
      items: [
        "Active and passive RFID tags",
        "Real-time location tracking",
        "Automated check-in/check-out",
        "Bulk reading capability",
        "Integration with existing systems"
      ]
    },
    {
      title: "Asset Lifecycle",
      items: [
        "Procurement and acquisition",
        "Deployment and allocation",
        "Maintenance scheduling",
        "Transfer management",
        "Disposal and retirement"
      ]
    },
    {
      title: "Financial Management",
      items: [
        "Depreciation calculation",
        "Cost center allocation",
        "Budget planning",
        "ROI analysis",
        "Tax compliance reporting"
      ]
    },
    {
      title: "Audit & Compliance",
      items: [
        "Automated audit trails",
        "Physical verification",
        "Reconciliation reports",
        "Compliance documentation",
        "Regulatory reporting"
      ]
    }
  ];

  const industries = [
    "Healthcare Facilities",
    "Educational Institutions",
    "Manufacturing Units",
    "Government Organizations",
    "Corporate Offices",
    "Retail Chains",
    "Logistics & Warehousing",
    "Hospitality Sector"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
              <Box className="w-10 h-10 text-white" />
            </div>
            <h1 className="mb-6">Fixed Asset & Inventory Audit / Automation Solutions</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Complete asset tracking and inventory management solution with RFID, Barcode, lifecycle tracking, 
              valuation, and compliance. Automate asset audits, track inventory in real-time, and ensure 
              regulatory compliance effortlessly.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => onNavigate?.('contact')}>Request Demo</Button>
              <Button size="lg" variant="outline" onClick={() => onNavigate?.('contact')}>
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Comprehensive Asset & Inventory Management</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to track, manage, and optimize your organization's fixed assets and inventory
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Core Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end asset management capabilities covering every aspect of your asset lifecycle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="mb-4 text-primary">{capability.title}</h3>
                <ul className="space-y-3">
                  {capability.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mr-2 mt-0.5">
                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RFID Technology Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Radio className="w-5 h-5 text-primary mr-2" />
                <span className="text-primary">RFID Technology</span>
              </div>
              <h2 className="mb-6">Advanced RFID Asset Tracking</h2>
              <p className="text-muted-foreground mb-6">
                Our RFID-based asset tracking solution provides real-time visibility into asset locations, 
                movements, and status. Reduce time spent on manual audits by up to 95%.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Read hundreds of assets simultaneously in seconds</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Automatic alerts for unauthorized asset movement</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Integration with existing ERP and accounting systems</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Mobile app for on-the-go asset verification</span>
                </li>
              </ul>
              <Button size="lg" onClick={() => onNavigate?.('contact')}>
                Learn More About RFID
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <div className="text-4xl mb-2 text-primary">95%</div>
                <p className="text-muted-foreground">Time Savings on Audits</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl mb-2 text-primary">99.9%</div>
                <p className="text-muted-foreground">Accuracy Rate</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl mb-2 text-primary">100%</div>
                <p className="text-muted-foreground">Asset Visibility</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl mb-2 text-primary">24/7</div>
                <p className="text-muted-foreground">Real-time Tracking</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Industries We Serve</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our asset management solution is trusted across diverse industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow hover:border-primary">
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4>{industry}</h4>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-white">Ready to Optimize Your Asset Management?</h2>
          <p className="text-xl mb-8 text-white/90">
            Transform your asset tracking with our comprehensive RFID and barcode solution
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => onNavigate?.('contact')}
            >
              Schedule a Demo
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => onNavigate?.('contact')}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}