import { motion } from 'motion/react';
import { CheckCircle2,
  DollarSign,
  Headphones,
  Award,
  Heart,
  Zap,
  Handshake,
  Target,
 } from 'lucide-react';

 function DifferentiatorCard({ item, index }: any) {
   const Icon = item.icon;
 
   return (
     <motion.div
       whileHover={{
         scale: 1.02,
         y: -6,
         rotateX: 4,
         rotateY: -4,
       }}
       transition={{ type: 'spring', stiffness: 200, damping: 15 }}
       className="group relative h-full p-7 rounded-2xl bg-white border
                  shadow-sm transition-all duration-400 ease-out"
       style={{ borderColor: item.color }}
     >
       {/* Glow */}
       <div
         className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"
         style={{ backgroundColor: item.color }}
       />
 
       {/* Icon */}
       <motion.div
         initial={{ scale: 0.6, opacity: 0 }}
         whileInView={{ scale: 1, opacity: 1 }}
         transition={{ duration: 0.6, delay: index * 0.05 }}
         className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-white"
         style={{ backgroundColor: item.ring }}
       >
         <Icon
           size={22}
           className="transition-colors duration-300"
           style={{ color: item.color }}
         />
       </motion.div>
 
       {/* Title */}
       <h3 className="text-[16px] font-semibold mb-2 transition-colors duration-300 group-hover:text-white">
         {item.title}
       </h3>
 
       {/* Description */}
       <p className="text-[14px] leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-white/90">
         {item.description}
       </p>
 
       {/* Hover overlay */}
       <div
         className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 -z-10"
         style={{ backgroundColor: item.color }}
       />
     </motion.div>
   );
 }

const differentiators = [
  {
    icon: DollarSign,
    title: 'Extended Cost Arbitrage',
    description: '20–30% cost optimization with enterprise-grade service quality.',
    color: '#F27e19',
    ring: '#FADDD4',
  },
  {
    icon: Headphones,
    title: 'Dedicated Management Bandwidth',
    description: 'Focused leadership and project ownership for every engagement.',
    color: '#23B396',
    ring: '#CAFBF1',
  },
  {
    icon: Award,
    title: 'Experienced Professionals',
    description: 'Seasoned experts ensuring precision, governance, and excellence.',
    color: '#8973D9',
    ring: '#DDD5FB',
  },
  {
    icon: Heart,
    title: 'Client Satisfaction',
    description: 'Relationships built on trust, care, and long-term value.',
    color: '#E80D82',
    ring: '#F8E1EB',
  },
  {
    icon: Zap,
    title: 'Flexibility & Adaptability',
    description: 'Highly adaptive delivery models aligned to client needs.',
    color: '#F27e19',
    ring: '#FADDD4',
  },
  {
    icon: Handshake,
    title: 'Business Partnering',
    description: 'We act as an extended arm of your organization.',
    color: '#23B396',
    ring: '#CAFBF1',
  },
  {
    icon: Target,
    title: 'Operational Excellence',
    description: 'Continuous benchmarking, lean processes, and automation.',
    color: '#8973D9',
    ring: '#DDD5FB',
  },
];

export function Differentiators() {
  return (
    <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1300px] mx-auto px-8">
    
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="inline-block mb-4 text-sm font-medium text-primary px-4 py-2 bg-white border border-primary/30 rounded-full">
                  Our Differentiators
                </span>
    
                <h2 className="text-[38px] lg:text-[46px] leading-tight mb-4">
                  What Sets Us <span className="text-primary">Apart</span>
                </h2>
    
                <p className="text-[16px] text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Distinct strengths that consistently deliver measurable outcomes for healthcare organizations.
                </p>
              </motion.div>
    
              {/* Cards Wrapper */}
              <div className="space-y-8">
    
                {/* Top Row (4 cards) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {differentiators.slice(0, 4).map((item, index) => {
                    const Icon = item.icon;
    
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.08,
                          ease: 'easeOut',
                        }}
                        viewport={{ once: true }}
                      >
                        <DifferentiatorCard item={item} index={index} />
                      </motion.div>
                    );
                  })}
                </div>
    
                {/* Bottom Row (3 cards centered perfectly) */}
                <div className="flex justify-center">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-3/4">
                    {differentiators.slice(4).map((item, index) => {
                      const Icon = item.icon;
    
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: (index + 4) * 0.08,
                            ease: 'easeOut',
                          }}
                          viewport={{ once: true }}
                        >
                          <DifferentiatorCard item={item} index={index + 4} />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
    
              </div>
            </div>
          </section>
  );
}
