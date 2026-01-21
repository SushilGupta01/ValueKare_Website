import { Hero } from '../components/Hero';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  Users,
  Quote,
  Star,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Differentiators } from '../components/Differentiators';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { Expertise } from '../components/Expertise';
import { CSRInitiative } from '../components/CSRInitiative';
import { IndustryCoverage } from '../components/IndustryCoverage';
import { Clients } from '../components/Clients';
import { Contact } from '../components/Contact';
import { TrustedMarquee } from '../components/TrustedMarquee';

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
      <About scrollToContact={scrollToContact}/>

      {/* Key Differentiators */}
      <Differentiators />

      {/* Service Capabilities */}
      <Services />

      {/* Testimonials Section */}
      <section className="py-32 bg-white relative overflow-hidden">

        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 relative z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className="inline-block mb-6 text-sm font-medium text-primary px-5 py-2 bg-white/80 backdrop-blur border border-primary/20 rounded-full">
              Testimonials
            </span>

            <h2 className="text-[42px] lg:text-[47px] leading-[1.1] tracking-tight mb-6">
              What Our <span className="text-primary">Clients Say</span>
            </h2>

            <p className="text-[18px] text-muted-foreground max-w-3xl mx-auto leading-[1.8]">
              Real experiences from healthcare organizations we've partnered with
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                name: 'Dr. Rajesh Kumar',
                role: 'Medical Director, Apollo Hospitals',
                text:
                  'Value Kare Group transformed our hospital operations with their innovative RFID solutions. Efficiency gains have been remarkable and sustainable.',
              },
              {
                name: 'Priya Sharma',
                role: 'CFO, Fortis Healthcare',
                text:
                  'Their fixed asset management and consulting approach saved us countless hours and reduced discrepancies. A truly strategic partner.',
              },
              {
                name: 'Dr. Amit Patel',
                role: 'CEO, Max Healthcare',
                text:
                  'Their medical tourism solutions helped us expand internationally. Professional, reliable, and deeply knowledgeable.',
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  className="group relative p-10 rounded-[28px] bg-white/75 backdrop-blur-xl
                       border border-white/60 shadow-xl hover:shadow-2xl
                       transition-all duration-500 overflow-hidden h-full"
                >
                  {/* Accent gradient line */}
                  <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-primary via-primary/60 to-transparent" />

                  {/* Quote mark */}
                  <Quote
                    size={56}
                    className="absolute top-8 right-8 text-primary/10"
                  />

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-primary fill-primary" size={18} />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-[16px] text-muted-foreground leading-[1.9] mb-10">
                    “{t.text}”
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="text-primary" size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold">{t.name}</h4>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </div>

                  {/* Shimmer */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div
                      className="absolute -left-1/2 top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent
                           translate-x-[-100%] group-hover:translate-x-[300%]
                           transition-transform duration-700"
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <Expertise />

      {/* CSR Initiative */}
      <CSRInitiative />

      <IndustryCoverage />

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
              Trusted by Healthcare Leaders
            </h2>
            <p className="text-lg text-white/90 mb-9 max-w-2xl mx-auto leading-relaxed">
              Join the growing number of healthcare organizations that rely on Value Kare Group for operational excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clients */}
      <Clients />

      {/* Contact */}
      <div id="contact">
        <Contact />
        <TrustedMarquee />
      </div>
    </div>
  );
}