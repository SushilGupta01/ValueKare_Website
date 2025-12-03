import { motion } from 'motion/react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To deliver innovative outsourcing and consulting solutions that transform healthcare and asset management operations.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Experienced professionals dedicated to providing exceptional service across all our specialized domains.',
  },
  {
    icon: Award,
    title: 'Quality Focus',
    description: 'Commitment to excellence with international standards compliance and continuous improvement.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Partner',
    description: 'Supporting our clients\' growth through strategic collaboration and innovative solutions.',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-6">
            About Value Kare Group
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Value Kare Group is an Outsourcing and Consulting services organization specializing in Hospital Operations & Medical Services, Automated Fixed Assets management & Inventory Valuation Audit solutions. We bring together expertise in healthcare, technology, and asset management to deliver comprehensive solutions that drive efficiency and excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <CardTitle className="mb-3">{value.title}</CardTitle>
                    <CardDescription>{value.description}</CardDescription>
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
