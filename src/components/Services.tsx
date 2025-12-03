import { motion } from 'motion/react';
import { Wifi, Building2, Lightbulb } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    icon: Wifi,
    title: 'Asset assurance and RFID automated solutions, Valuations',
    description: 'RFID taxis empower highly computerized physical tracking of IT resources, bringing another level of cost efficiency to the ITAM cycle.',
    image: 'https://images.unsplash.com/photo-1560549437-6fce5909aed7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSRklEJTIwdGVjaG5vbG9neSUyMGludmVudG9yeXxlbnwxfHx8fDE3NjMyMDM5NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Building2,
    title: 'Outsourcing Hospital Operations & Medical Department services & Process & International Medical Tourism',
    description: 'Reimbursement is an unquestionably well-known process that medical care associations can use to control the rising costs of providing various types of assistance.',
    image: 'https://images.unsplash.com/photo-1758653500437-26660f405fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1lZGljYWwlMjBvcGVyYXRpb25zfGVufDF8fHx8MTc2MzIwMzk1NXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Lightbulb,
    title: 'Consulting in Projects for setting up Hospital & Pharmaceutical Industry',
    description: 'Within a range of settings, reductions in training costs and sponsorship arrangements can often help school collaboration decisively.',
    image: 'https://images.unsplash.com/photo-1551135049-8a33b5883817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBtZWV0aW5nfGVufDF8fHx8MTc2MzE2OTE1NXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <CardTitle className="mb-3">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
