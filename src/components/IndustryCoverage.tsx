import { motion, useScroll, useTransform } from 'motion/react';
import {
  Building,
  FileCheck,
  ClipboardList,
  RefreshCw,
  Package,
  Users,
} from 'lucide-react';
import { useRef } from 'react';

const industryCoverageServices = [
  {
    icon: Building,
    title: 'Fixed Assets',
    description:
      'Fixed resources in medical clinics require an additional consideration, in particular, the climate in which they are used. There are, of course, two methods for fixed labeling.',
  },
  {
    icon: FileCheck,
    title: 'Inward Verification',
    description:
      'Since the advent of Electronic Clinical Records (EMR), there has been a vast improvement in the infrastructure of medical services.',
  },
  {
    icon: ClipboardList,
    title: 'Large Format Audit Supervision',
    description:
      'Review documentation is evaluated by individuals in the commitment group performing the work and may be inspected by others.',
  },
  {
    icon: RefreshCw,
    title: 'Reconciliations',
    description:
      'FAR reconciliation and Updation is a part of the Fixed assets management process. FAR Creation process with depreciation & Insurance Valuation.',
  },
  {
    icon: Package,
    title: 'Damage/Expired Stock Audit',
    description:
      'Through our stock verification and evaluation administration, we identify material abundances/shortages in stock and identify out-of-date/damaged materials.',
  },
  {
    icon: Users,
    title: 'Hospital Consultant Support',
    description:
      'Interim Hospital Unit head, Finance head, operation head services for six month to one year contracts.',
  },
];

const COLORS = [
  { solid: '#FA9979', soft: 'rgba(250,153,121,0.15)' },
  { solid: '#23B396', soft: 'rgba(35,179,150,0.15)' },
  { solid: '#8973D9', soft: 'rgba(137,115,217,0.15)' },
  { solid: '#E80D82', soft: 'rgba(232,13,130,0.15)' },
];

export function IndustryCoverage() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={ref} className="py-20 bg-[#f6f5fb] relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <span className="inline-block mb-4 text-sm font-medium text-primary px-4 py-2 bg-white border border-primary/30 rounded-full">
            Industry Coverage
          </span>

          <h2 className="text-[36px] lg:text-[46px] leading-tight mb-4">
            Operational Coverage Across
            <span className="block text-primary">Healthcare & Industry</span>
          </h2>

          <p className="text-[16px] text-muted-foreground max-w-xl">
            Structured, compliant and scalable operational services connecting
            every asset, process and team.
          </p>
        </motion.div>

        {/* Timeline grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">

          {/* Center line */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-primary/10" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] bg-primary"
          />

          {industryCoverageServices.map((service, index) => {
            const Icon = service.icon;
            const isLeft = index % 2 === 0;
            const color = COLORS[index % COLORS.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true }}
                className={`relative ${isLeft ? 'lg:pr-12' : 'lg:pl-12'}`}
              >
                {/* Connector dot */}
                <div
                  className={`absolute top-6 ${isLeft ? 'right-[-26px]' : 'left-[-26px]'
                    } w-3 h-3 rounded-full`}
                  style={{ backgroundColor: color.solid }}
                />

                {/* CARD */}
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  variants={{
                    rest: { y: 0 },
                    hover: { y: -4 },
                  }}
                  transition={{ type: 'spring', stiffness: 200, damping: 16 }}
                  className="group relative p-6 bg-white rounded-2xl border border-white/50 shadow-sm hover:shadow-lg transition-all overflow-hidden"
                >
                  {/* Bottom underline */}
                  <motion.span
                    variants={{
                      rest: { width: 0, left: '50%' },
                      hover: { width: '100%', left: '0%' },
                    }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="absolute bottom-0 h-[4px]"
                    style={{ backgroundColor: color.solid }}
                  />

                  {/* ICON CONTAINER */}
                  <motion.div
                    variants={{
                      rest: {
                        rotate: 0,
                        backgroundColor: color.soft,
                      },
                      hover: {
                        rotate: +10,
                        backgroundColor: color.solid,
                      },
                    }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                  >
                    <motion.div
                      variants={{
                        rest: { color: color.solid },
                        hover: { color: '#ffffff' },
                      }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                    >
                      <Icon size={18} />
                    </motion.div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-[15px] font-semibold mb-1.5">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13.5px] text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
