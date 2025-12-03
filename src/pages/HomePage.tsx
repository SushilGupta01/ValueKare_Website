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
  UserCheck
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Differentiators } from '../components/Differentiators';
import { Services } from '../components/Services';
import { Expertise } from '../components/Expertise';
import { CSRInitiative } from '../components/CSRInitiative';
import { IndustryCoverage } from '../components/IndustryCoverage';
import { Clients } from '../components/Clients';
import { Contact } from '../components/Contact';

<<<<<<< HEAD

// --------------- IMPORT CLIENT LOGOS -----------------
import ckBirlaLogo from "../assets/images/client/client-1.png";
import anantaLogo from "../assets/images/client/client-2.png";
import krollLogo from "../assets/images/client/client-3.png";
import cnhLogo from "../assets/images/client/client-4.png";
import ibisLogo from "../assets/images/client/client-5.png";
import hcgLogo from "../assets/images/client/client-7.png";
import manipalLogo from "../assets/images/client/client-8.png";
import zeusLogo from "../assets/images/client/client-9.png";
// ------------------------------------------------------

// ---------- CLIENT LOGOS ARRAY ----------
const clientLogos = [
  ckBirlaLogo,
  anantaLogo,
  krollLogo,
  cnhLogo,
  ibisLogo,
  hcgLogo,
  manipalLogo,
  zeusLogo
];
=======
>>>>>>> cc46963472f36317b1c893aeb4ff8e4fc65a583c
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl mb-6">
              Welcome To Value Kare Group
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg mb-8">
              Value Kare Group is an Outsourcing and Consulting services organization specializing in Hospital Operations & Medical Services, Automated Fixed Assets management & Inventory Valuation Audit solutions.
            </p>
            <Button size="lg" onClick={scrollToContact}>
              Read More
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1587557983735-f05198060b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwdGVhbXxlbnwxfHx8fDE3NjMyMDM3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Healthcare Team"
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
                src="https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzMTcxNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern Office"
                className="w-full h-80 object-cover"
              />
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
            <h2 className="text-3xl sm:text-4xl mb-4">
              What Would Set us Apart – Our Key Differentiators - USP
            </h2>
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
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
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

<<<<<<< HEAD
       {/* ---------------- VALUE TO CLIENT ---------------- */}
=======
      {/* Value to Client Section */}
>>>>>>> cc46963472f36317b1c893aeb4ff8e4fc65a583c
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
<<<<<<< HEAD
            <h2 className="text-3xl sm:text-4xl mb-8">Value To Client</h2>

            {/* Images above the slider (same as before) */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
                  alt="Value to Client"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                  alt="Team Collaboration"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </motion.div>
            </div> */}
          </motion.div>

          {/* ---------------- CLIENT LOGO SLIDER ---------------- */}
          <div className="mt-16 overflow-hidden relative w-full">
            <div
              className="flex animate-scroll-smooth gap-12"
              style={{
                width: `${clientLogos.length * 300}px`,
                animation: "scrollLeft 18s linear infinite",
              }}
            >
              {clientLogos.concat(clientLogos).map((logo, index) => (
                <div key={index} className="w-48 h-24 flex items-center justify-center">
                  <img src={logo} alt="client logo" className="max-h-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Slider Animation CSS */}
          <style>
            {`
              @keyframes scrollLeft {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
              }
            `}
          </style>

=======
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
>>>>>>> cc46963472f36317b1c893aeb4ff8e4fc65a583c
        </div>
      </section>

      {/* Clients
      <Clients /> */}

      {/* Contact */}
      {/* <div id="contact">
        <Contact />
      </div> */}
    </div>
  );
}
