import { motion } from 'motion/react';
import { Eye, School, Monitor, Activity } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

const initiatives = [
  {
    icon: School,
    title: 'Vision Checks in Govt Schools & Primary Schools',
  },
  {
    icon: Eye,
    title: 'Blindness prevention refractive Challenges & Deficiency',
  },
  {
    icon: Monitor,
    title: 'Screen Vision Syndrome prevention',
  },
  {
    icon: Activity,
    title: 'Software enabled Tracking Follow up Interphase with Govt PHC and Children Vision care',
  },
];

export function CSRInitiative() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">
            CSR Initiative
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Programmes For Awareness & Education in Children for Vision care and prevention of blindness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {initiatives.map((initiative, index) => {
                const Icon = initiative.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <CardTitle className="text-base">{initiative.title}</CardTitle>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1584792323914-329ce9bf59db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMHZpc2lvbnxlbnwxfHx8fDE3NjMyMDM5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Children Vision Education"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
