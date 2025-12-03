import { motion } from 'motion/react';
import { Building, FileCheck, ClipboardList, RefreshCw, Package, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

const coverage = [
  {
    icon: Building,
    title: 'Fixed Assets',
    description: 'Fixed resources in medical clinics require an additional consideration, in particular, the climate in which they are used. There are, of course, two methods for fixed labeling.',
  },
  {
    icon: FileCheck,
    title: 'Inward Verification',
    description: 'Since the advent of Electronic Clinical Records (EMR), there has been a vast improvement in the infrastructure of medical services.',
  },
  {
    icon: ClipboardList,
    title: 'Large Format Audit Supervision',
    description: 'Review documentation is evaluated by individuals in the commitment group performing the work and may be inspected by others.',
  },
  {
    icon: RefreshCw,
    title: 'Reconciliations',
    description: 'FAR reconciliation and Updation is a part of the Fixed assets management process. FAR Creation process with depreciation & Insurance Valuation.',
  },
  {
    icon: Package,
    title: 'Damage/Expired Stock Audit',
    description: 'Through our stock verification and evaluation administration, we identify material abundances/shortages in stock and identify out-of-date/damaged materials.',
  },
  {
    icon: Users,
    title: 'Hospital Consultant Support',
    description: 'Interim Hospital Unit head, Finance head, operation head services for six month to one year contracts.',
  },
];

export function IndustryCoverage() {
  return (
    <section id="gallery" className="py-20 bg-muted/30">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coverage.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
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
