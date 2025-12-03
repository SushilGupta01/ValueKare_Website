import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const differentiators = [
  'Strong Team - Experienced Professionals in Shared Services Operations, IT, Outsourcing Hospital Medical services and Consulting process automation, Fixed asset centralization and inventory audits and valuation for all industries Pan-India Operations.',
  'Extended Cost Arbitrage 20% to 30% with enhanced quality of service delivery at par or even above Tier 1 clients due to low start up costs.',
  'Dedicated Management Bandwidth for Client with Operations, Consulting and Project Management Expertise.',
  'Experienced Professionals – Guaranteed Over-management of Processes, high attention span for client for a delightful client experience.',
  'Client Satisfaction will be our sole motto. We will treat our client with utmost care and not just treat them as another client. You will feel a guaranteed difference.',
  'Flexibility & Adaptability to Servicing Client Specific Requirements. There is no option for us to fail, we will put our best foot forward dedicatedly.',
  'Business Partnering and Collaboration approach- Extended Arm of the business.',
  'Sound Pure Play Operational Background- Quality Focus, Continuous Benchmarking on Productivity, Lean, Technology and Automation.',
];

export function Differentiators() {
  return (
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex gap-4 p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
              <p className="text-muted-foreground">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
