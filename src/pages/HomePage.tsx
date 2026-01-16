import { Hero } from '../components/Hero';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  Users,
  DollarSign,
  Headphones,
  Award,
  Heart,
  Zap,
  Handshake,
  Target,
  CheckCircle2,
  ArrowRight,
  FileCheck,
  Search,
  ClipboardCheck,
  RefreshCw,
  AlertCircle,
  UserCheck,
  Quote,
  Star,
  TrendingUp,
  Shield,
  Clock
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Differentiators } from '../components/Differentiators';
import { Services } from '../components/Services';
import { Expertise } from '../components/Expertise';
import { CSRInitiative } from '../components/CSRInitiative';
import { IndustryCoverage } from '../components/IndustryCoverage';
import { Clients } from '../components/Clients';
import { Contact } from '../components/Contact';

const differentiators = [
  {
    icon: Users,
    title: 'Strong Team',
    description: 'Experienced Professionals in Shared Services Operations, IT, Outsourcing Hospital Medical services and Consulting process automation, Fixed asset centralization and inventory audits and valuation for all industries Pan-India Operations.',
  },
  {
    icon: DollarSign,
    title: 'Extended Cost Arbitrage',
    description: '20% to 30% with enhanced quality of service delivery at par or even above Tier 1 clients due to low start up costs.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Management Bandwidth',
    description: 'Dedicated Management Bandwidth for Client with Operations, Consulting and Project Management Expertise.',
  },
  {
    icon: Award,
    title: 'Experienced Professionals',
    description: 'Guaranteed Over-management of Processes, high attention span for client for a delightful client experience.',
  },
  {
    icon: Heart,
    title: 'Client Satisfaction',
    description: 'Client Satisfaction will be our sole motto. We will treat our client with utmost care and not just treat them as another client. You will feel a guaranteed difference.',
  },
  {
    icon: Zap,
    title: 'Flexibility & Adaptability',
    description: 'Flexibility & Adaptability to Servicing Client Specific Requirements. There is no option for us to fail, we will put our best foot forward dedicatedly.',
  },
  {
    icon: Handshake,
    title: 'Business Partnering',
    description: 'Business Partnering and Collaboration approach - Extended Arm of the business.',
  },
  {
    icon: Target,
    title: 'Sound Pure Play Operational Background',
    description: 'Quality Focus, Continuous Benchmarking on Productivity, Lean, Technology and Automation.',
  },
];

const serviceCapabilities = [
  {
    title: 'Asset assurance and RFID automated solutions, Valuations',
    description: 'RFID tags empower highly computerized physical tracking of IT resources, bringing another level of cost efficiency to the ITAM cycle.',
  },
  {
    title: 'Outsourcing Hospital Operations & Medical Department services & Process & International Medical Tourism',
    description: 'Reimbursement is an unquestionably well-known process that medical care associations can use to control the rising costs of providing various types of assistance.',
  },
  {
    title: 'Consulting in Projects for setting up Hospital & Pharmaceutical Industry',
    description: 'Within a range of settings, reductions in training costs and sponsorship arrangements can often help school collaboration decisively.',
  },
];

const industryCoverageServices = [
  {
    icon: FileCheck,
    title: 'Fixed Assets',
    description: 'Fixed resources in medical clinics require an additional consideration, in particular, the climate in which they are used. There are, of course, two methods for fixed labeling.',
  },
  {
    icon: Search,
    title: 'Inward Verification',
    description: 'Since the advent of Electronic Clinical Records (EMR), there has been a vast improvement in the infrastructure of medical services.',
  },
  {
    icon: ClipboardCheck,
    title: 'Large Format Audit Supervision',
    description: 'Review documentation is evaluated by individuals in the commitment group performing the work and may be inspected by others.',
  },
  {
    icon: RefreshCw,
    title: 'Reconciliations',
    description: 'FAR reconciliation and Updation is a part of the Fixed assets management process. FAR Creation process with depreciation & Insurance Valuation.',
  },
  {
    icon: AlertCircle,
    title: 'Damage/Expired Stock Audit',
    description: 'Through our stock verification and evaluation administration, we identify material abundances/shortages in stock and identify out-of-date/damaged materials.',
  },
  {
    icon: UserCheck,
    title: 'Hospital Consultant Support',
    description: 'Interim Hospital Unit head, Finance head, operation head services for six month to one year contracts.',
  },
];

export function HomePage() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Hero />

      {/* Welcome Section with Images */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4">About Value Kare Group</Badge>
              <h2 className="text-[47px] leading-[1.2] mb-6 font-Regular">
                Delivering Excellence in{' '}
                <span className="text-primary">Healthcare Solutions</span>
              </h2>

              <p className="text-muted-foreground text-[18px] leading-[1.7] mb-8">
                Value Kare Group is an Outsourcing and Consulting services organization specializing in Hospital Operations & Medical Services, Automated Fixed Assets management & Inventory Valuation Audit solutions.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-white border border-primary/30 shadow-sm flex items-center justify-center flex-shrink-0 mt-1">

                    <CheckCircle2 className="text-primary" size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium text-[16px] mb-1">
                      Proven Track Record
                    </h4>

                    <p className="text-muted-foreground">Over 500+ successful projects delivered across multiple industries.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="text-primary" size={16} />
                  </div>
                  <div>
                    <h4 className="mb-1">Expert Team</h4>
                    <p className="text-muted-foreground">Experienced professionals with deep industry knowledge.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="text-primary" size={16} />
                  </div>
                  <div>
                    <h4 className="mb-1">Innovative Solutions</h4>
                    <p className="text-muted-foreground">Cutting-edge technology and automation for optimal results.</p>
                  </div>
                </div>
              </div>

              <Button size="lg" onClick={scrollToContact} className="group">
                Learn More
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1587557983735-f05198060b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwdGVhbXxlbnwxfHx8fDE3NjMyMDM3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Healthcare Team"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <Card className="p-6 bg-primary text-primary-foreground">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <div className="text-2xl mb-1">30%</div>
                      <div className="text-sm opacity-90">Cost Reduction</div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="space-y-4 mt-8">
                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl mb-1">100%</div>
                      <div className="text-sm text-muted-foreground">Compliance</div>
                    </div>
                  </div>
                </Card>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzMTcxNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Modern Office"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Our Differentiators</Badge>
            <h2 className="text-3xl sm:text-5xl mb-4">
              What Sets Us <span className="text-primary">Apart</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Our unique value propositions that make us the preferred choice for healthcare operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                    <CardHeader>
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
                        <Icon className="text-primary group-hover:text-white transition-colors duration-300" size={26} />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl sm:text-5xl mb-4">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Real experiences from healthcare organizations we've partnered with
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-8 hover:shadow-xl transition-all duration-300 relative">
                <Quote className="absolute top-6 right-6 text-primary/10" size={48} />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-primary fill-primary" size={18} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Value Kare Group transformed our hospital operations with their innovative RFID solutions. The efficiency gains have been remarkable, and their team's expertise is unmatched."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4>Dr. Rajesh Kumar</h4>
                    <p className="text-sm text-muted-foreground">Medical Director, Apollo Hospitals</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-8 hover:shadow-xl transition-all duration-300 relative border-primary/20">
                <Quote className="absolute top-6 right-6 text-primary/10" size={48} />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-primary fill-primary" size={18} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "The fixed asset management system has saved us countless hours and significantly reduced discrepancies. Their consulting team understood our needs perfectly."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4>Priya Sharma</h4>
                    <p className="text-sm text-muted-foreground">CFO, Fortis Healthcare</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-8 hover:shadow-xl transition-all duration-300 relative">
                <Quote className="absolute top-6 right-6 text-primary/10" size={48} />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-primary fill-primary" size={18} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Outstanding service! Their medical tourism solutions helped us expand our international patient base significantly. Professional and reliable partnership."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4>Dr. Amit Patel</h4>
                    <p className="text-sm text-muted-foreground">CEO, Max Healthcare</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Capabilities */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl mb-4">
              Service Capabilities
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {serviceCapabilities.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Service Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758653500437-26660f405fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1lZGljYWwlMjBvcGVyYXRpb25zfGVufDF8fHx8MTc2MzIwMzk1NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Hospital Operations"
                className="w-full h-48 object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560549437-6fce5909aed7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSRklEJTIwdGVjaG5vbG9neSUyMGludmVudG9yeXxlbnwxfHx8fDE3NjMyMDM5NTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="RFID Technology"
                className="w-full h-48 object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1654703680115-4ab46aebebc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwbWFudWZhY3R1cmluZyUyMGluZHVzdHJ5fGVufDF8fHx8MTc2MzIwMzk1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Manufacturing Industry"
                className="w-full h-48 object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551135049-8a33b5883817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBtZWV0aW5nfGVufDF8fHx8MTc2MzE2OTE1NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Consulting Services"
                className="w-full h-48 object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MzE2OTE1NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Medical Equipment"
                className="w-full h-48 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <Expertise />

      {/* CSR Initiative */}
      <CSRInitiative />

      {/* Industry Coverage */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl mb-4">
              Industry Coverage
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryCoverageServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value to Client Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl mb-8">
              Value To Client
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHZhbHVlJTIwdGVhbXdvcmt8ZW58MXx8fHwxNzYzMTY5MTU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Value to Client"
                  className="w-full h-80 object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjMxNjkxNTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Team Collaboration"
                  className="w-full h-80 object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-5xl mb-6 text-white">
              Ready to Transform Your Healthcare Operations?
            </h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join the growing number of healthcare organizations that trust Value Kare Group for their operational excellence. Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 group"
                onClick={scrollToContact}
              >
                Get Started Today
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={scrollToContact}
              >
                Schedule a Consultation
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20">
              <div className="text-white">
                <div className="text-4xl mb-2">500+</div>
                <div className="text-white/80">Successful Projects</div>
              </div>
              <div className="text-white">
                <div className="text-4xl mb-2">50+</div>
                <div className="text-white/80">Healthcare Partners</div>
              </div>
              <div className="text-white">
                <div className="text-4xl mb-2">15+</div>
                <div className="text-white/80">Years of Excellence</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clients */}
      <Clients />

      {/* Contact */}
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}