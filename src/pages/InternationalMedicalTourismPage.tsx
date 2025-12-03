import { Globe, Heart, Plane, Building2, Shield, Award, CheckCircle, Stethoscope } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import infographic from 'figma:asset/002c452449522e77edad068251d057b7c59aff45.png';

interface InternationalMedicalTourismPageProps {
  onNavigate?: (page: string) => void;
}

export function InternationalMedicalTourismPage({ onNavigate }: InternationalMedicalTourismPageProps) {
  const procedures = [
    {
      name: 'Dental Implant',
      costs: {
        usa: '$2,800',
        korea: '$4,200',
        singapore: '$1,500',
        india: '$1,000'
      }
    },
    {
      name: 'Angioplasty',
      costs: {
        usa: '$57,000',
        korea: '$15,200',
        singapore: '$13,000',
        india: '$3,300'
      }
    },
    {
      name: 'Knee Replacement',
      costs: {
        usa: '$50,000',
        korea: '$19,800',
        singapore: '$13,000',
        india: '$6,200'
      }
    },
    {
      name: 'Hip Replacement',
      costs: {
        usa: '$50,000',
        korea: '$14,120',
        singapore: '$12,000',
        india: '$7,000'
      }
    },
    {
      name: 'Heart Bypass Surgery',
      costs: {
        usa: '$144,000',
        korea: '$28,900',
        singapore: '$18,500',
        india: '$5,200'
      }
    },
    {
      name: 'Heart Valve Replacement',
      costs: {
        usa: '$170,000',
        korea: '$43,500',
        singapore: '$12,500',
        india: '$5,500'
      }
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "World-Class Hospitals",
      description: "JCI accredited hospitals with state-of-the-art infrastructure and technology"
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-primary" />,
      title: "Top-Tier Specialists",
      description: "Internationally trained doctors with decades of experience and expertise"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Quality Healthcare",
      description: "Advanced medical procedures with international quality standards and protocols"
    },
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      title: "Modern Infrastructure",
      description: "Cutting-edge medical equipment and world-class healthcare facilities"
    }
  ];

  const services = [
    "Complete treatment coordination and planning",
    "Visa assistance and travel arrangements",
    "Airport pickup and drop-off services",
    "Accommodation arrangements near hospitals",
    "Medical appointment scheduling",
    "Language translation services",
    "Post-treatment follow-up care",
    "24/7 patient support assistance"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h1 className="mb-6">International Medical Tourism</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Affordable, high-quality medical treatment in India with world-class hospitals, 
              expert specialists, and comprehensive care coordination services.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => onNavigate?.('contact')}>Get Medical Assistance</Button>
              <Button size="lg" variant="outline" onClick={() => onNavigate?.('contact')}>
                Request Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Infographic Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-6">Why the World is Choosing India for Medical Treatment in 2025</h2>
            <p className="text-muted-foreground max-w-4xl mx-auto text-lg">
              India has become one of the world's most trusted destinations for affordable, high-quality 
              medical treatment. International patients benefit from advanced healthcare infrastructure, 
              top-tier specialists, world-class hospitals, and significantly lower treatment costs compared 
              to the US, South Korea, and Singapore. This cost advantage, combined with expert care, makes 
              India a global leader in medical tourism.
            </p>
          </div>

          {/* Infographic Image */}
          <div className="mb-16 rounded-xl overflow-hidden shadow-2xl">
            <img 
              src={infographic} 
              alt="India's Medical Tourism - Cost Comparison Across Countries" 
              className="w-full h-auto"
            />
          </div>

          {/* Cost Comparison Table */}
          <div className="mb-12">
            <h3 className="text-center mb-8">Medical Procedure Cost Comparison (USD)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {procedures.map((procedure, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="bg-primary/10 px-6 py-4 border-b border-border">
                    <h4 className="text-primary">{procedure.name}</h4>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center pb-2 border-b border-border">
                          <span className="text-muted-foreground">USA</span>
                          <span>{procedure.costs.usa}</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-border">
                          <span className="text-muted-foreground">South Korea</span>
                          <span>{procedure.costs.korea}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center pb-2 border-b border-border">
                          <span className="text-muted-foreground">Singapore</span>
                          <span>{procedure.costs.singapore}</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-primary/30">
                          <span className="text-primary">India</span>
                          <span className="text-primary">{procedure.costs.india}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full">
                        <span className="text-primary">
                          Save up to {Math.round((1 - parseFloat(procedure.costs.india.replace(/[$,]/g, '')) / 
                          parseFloat(procedure.costs.usa.replace(/[$,]/g, ''))) * 100)}% in India
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" onClick={() => onNavigate?.('contact')}>
              Get Medical Assistance
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Choose India for Medical Treatment</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience world-class healthcare with significant cost savings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Plane className="w-5 h-5 text-primary mr-2" />
                <span className="text-primary">Complete Care Coordination</span>
              </div>
              <h2 className="mb-6">Comprehensive Medical Tourism Services</h2>
              <p className="text-muted-foreground mb-8">
                We handle every aspect of your medical journey to India, from initial consultation to 
                post-treatment follow-up. Our dedicated team ensures a seamless, stress-free experience 
                so you can focus on your recovery.
              </p>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="mb-6">Popular Medical Procedures</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4>Cardiac Surgery</h4>
                  <p className="text-muted-foreground">Heart bypass, valve replacement, angioplasty</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4>Orthopedic Surgery</h4>
                  <p className="text-muted-foreground">Hip/knee replacement, spine surgery</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4>Oncology Treatment</h4>
                  <p className="text-muted-foreground">Cancer treatment and chemotherapy</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4>Organ Transplant</h4>
                  <p className="text-muted-foreground">Kidney, liver, heart transplants</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4>Cosmetic Surgery</h4>
                  <p className="text-muted-foreground">Aesthetic and reconstructive procedures</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4>Dental Procedures</h4>
                  <p className="text-muted-foreground">Implants, cosmetic dentistry, orthodontics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-white">India Medical Tourism by Numbers</h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Trusted by patients worldwide for quality healthcare at affordable costs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-3">60-90%</div>
              <h3 className="mb-2 text-white">Cost Savings</h3>
              <p className="text-white/80">Compared to Western countries</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">500K+</div>
              <h3 className="mb-2 text-white">Medical Tourists</h3>
              <p className="text-white/80">Visit India annually</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">45+</div>
              <h3 className="mb-2 text-white">JCI Hospitals</h3>
              <p className="text-white/80">Internationally accredited</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">100%</div>
              <h3 className="mb-2 text-white">English Speaking</h3>
              <p className="text-white/80">Medical professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-white">Ready to Start Your Medical Journey?</h2>
          <p className="text-xl mb-8 text-white/90">
            Connect with us today for a free consultation and personalized treatment plan. 
            Our team is here to guide you every step of the way.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => onNavigate?.('contact')}
            >
              Get Medical Assistance
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => onNavigate?.('contact')}
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
