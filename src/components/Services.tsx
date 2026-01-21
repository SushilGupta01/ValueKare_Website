import { motion } from 'motion/react';
import { Wifi, Building2, Lightbulb } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

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

export function Services() {
  return (
    <section className="py-20 bg-[#f6f5fb] relative overflow-hidden">
        {/* Ambient blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="max-w-3xl mb-24"
          >
            <span className="inline-block mb-5 text-sm font-medium text-primary px-5 py-2 bg-white/80 backdrop-blur border border-primary/20 rounded-full">
              Capabilities
            </span>

            <h2 className="text-[40px] lg:text-[45px] leading-[1.1] tracking-tight mb-6">
              Service  <span className="text-primary">Capabilities</span> 
            </h2>

            <p className="text-[17px] text-muted-foreground leading-[1.8] max-w-xl">
              Integrated solutions designed to streamline healthcare operations, reduce costs, and improve outcomes.
            </p>
          </motion.div>

          {/* Asymmetric Layout */}
          <div className="grid lg:grid-cols-12 gap-10">

            {/* Left feature card (highlighted) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="relative p-12 rounded-[28px] bg-white/80 backdrop-blur-xl
                     border border-white/60 shadow-xl group overflow-hidden"
              >
                {/* Accent gradient */}
                <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

                {/* Shimmer */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute -left-1/2 top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent
                            translate-x-[-100%] group-hover:translate-x-[300%]
                            transition-transform duration-700" />
                </div>

                <h3 className="text-[22px] font-semibold mb-6 leading-tight">
                  {serviceCapabilities[0].title}
                </h3>

                <p className="text-[16px] text-muted-foreground leading-[1.8]">
                  {serviceCapabilities[0].description}
                </p>
              </motion.div>
            </motion.div>

            {/* Right stacked cards */}
            <div className="lg:col-span-7 grid md:grid-cols-2 gap-10">
              {serviceCapabilities.slice(1).map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    className="relative p-10 rounded-3xl bg-white/70 backdrop-blur-xl
                         border border-white/60 shadow-lg hover:shadow-xl group overflow-hidden"
                  >
                    {/* Accent line */}
                    <div className="absolute left-0 top-0 h-full w-1 bg-primary/70" />

                    {/* Shimmer */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <div className="absolute -left-1/2 top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent
                                translate-x-[-100%] group-hover:translate-x-[300%]
                                transition-transform duration-700" />
                    </div>

                    <h4 className="text-[18px] font-semibold mb-4 leading-tight">
                      {service.title}
                    </h4>

                    <p className="text-[15px] text-muted-foreground leading-[1.7]">
                      {service.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}
