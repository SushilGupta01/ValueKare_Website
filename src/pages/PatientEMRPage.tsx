import { FileText, Activity, Clipboard, Users, FileCheck, TrendingUp, Shield, Clock } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

interface PatientEMRPageProps {
  onNavigate?: (page: string) => void;
}

export function PatientEMRPage({ onNavigate }: PatientEMRPageProps) {
  const features = [
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Complete Medical Records",
      description: "Comprehensive OPD/IPD records management with complete patient history, diagnosis, and treatment plans"
    },
    {
      icon: <Activity className="w-8 h-8 text-primary" />,
      title: "Vitals Monitoring",
      description: "Real-time tracking of patient vitals including BP, temperature, pulse, and other critical parameters"
    },
    {
      icon: <Clipboard className="w-8 h-8 text-primary" />,
      title: "Digital Prescriptions",
      description: "Electronic prescription generation with drug database, dosage tracking, and pharmacy integration"
    },
    {
      icon: <FileCheck className="w-8 h-8 text-primary" />,
      title: "Lab Reports Integration",
      description: "Seamless integration with laboratory systems for test orders and digital report management"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Multi-User Access",
      description: "Role-based access for doctors, nurses, administrators, and other healthcare professionals"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Analytics & Reporting",
      description: "Comprehensive reports and analytics for better decision making and hospital management"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Data Security",
      description: "HIPAA-compliant security measures with encrypted data storage and secure access controls"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Appointment Management",
      description: "Integrated appointment scheduling, queue management, and patient flow optimization"
    }
  ];

  const benefits = [
    "Improved patient care with complete medical history at fingertips",
    "Reduced paperwork and administrative burden",
    "Better collaboration between healthcare providers",
    "Enhanced data accuracy and reduced errors",
    "Quick retrieval of patient information",
    "Regulatory compliance and audit trails",
    "Cost savings through efficiency improvements",
    "Better patient satisfaction and outcomes"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="mb-6">Patient EMR System</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive Electronic Medical Records solution designed for modern healthcare facilities. 
              Streamline patient care, improve efficiency, and enhance clinical outcomes.
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
            <h2 className="mb-4">Comprehensive Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our EMR system provides all the tools you need to deliver exceptional patient care
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

      {/* Benefits Section */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Key Benefits</h2>
              <p className="text-muted-foreground mb-8">
                Transform your healthcare facility with our comprehensive EMR solution that delivers 
                measurable improvements in patient care, operational efficiency, and cost savings.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="mb-6">System Modules</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4>OPD Management</h4>
                  <p className="text-muted-foreground">Complete outpatient department workflow</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4>IPD Management</h4>
                  <p className="text-muted-foreground">Inpatient care and bed management</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4>Pharmacy Integration</h4>
                  <p className="text-muted-foreground">Medicine inventory and dispensing</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4>Laboratory Module</h4>
                  <p className="text-muted-foreground">Lab test management and reporting</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4>Billing & Insurance</h4>
                  <p className="text-muted-foreground">Financial management and claims</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-white">Ready to Transform Your Healthcare Facility?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join hundreds of hospitals and clinics that trust our EMR system for their daily operations
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
