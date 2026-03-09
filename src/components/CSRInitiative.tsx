import { motion } from 'motion/react';
import { Eye, School, Monitor, Activity } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CSRInitiative() {
  const points = [
    {
      text: 'Awareness & education programs for children to prevent avoidable vision loss.',
      bg: 'rgba(250, 153, 121, 0.10)',
      solid: '#fa9979',
    },
    {
      text: 'Vision screening in government and primary schools.',
      bg: 'rgba(35, 179, 150, 0.10)',
      solid: '#23b396',
    },
    {
      text: 'Early detection of refractive challenges and visual deficiencies.',
      bg: 'rgba(137, 115, 217, 0.10)',
      solid: '#8973d9',
    },
    {
      text: 'Software-enabled tracking with government PHCs for long-term follow-ups.',
      bg: 'rgba(232, 13, 130, 0.10)',
      solid: '#e80d82',
    },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-20 items-center">

          {/* LEFT – IMAGE STORY (REDUCED & ELEGANT) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="grid gap-6">
              {/* Main image */}
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="../src/assets/images/6.jpg"
                  alt="Healthcare digital tracking"
                  className="w-full h-[420px] object-cover object-center"
                />
              </div>

              {/* Supporting images */}
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="../src/assets/images/4.jpg"
                    alt="Children education program"
                    className="w-full h-52 object-cover"
                  />
                </div>

                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="../src/assets/images/1.jpg"
                    alt="Vision check camp"
                    className="w-full h-52 object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT – CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <span className="inline-block mb-5 text-sm font-medium text-primary px-4 py-2 bg-white border border-primary/30 rounded-full">
              CSR Initiative
            </span>

            <h2 className="text-[38px] lg:text-[46px] leading-[1.05] tracking-tight mb-10">
              Creating Impact Through
              <span className="block text-primary mt-2">
                Responsible Healthcare
              </span>
            </h2>

            <div className="space-y-6 max-w-xl">
              {points.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="relative p-5 pl-10 rounded-2xl
                             transition-all duration-300
                             hover:-translate-y-[2px]
                             hover:shadow-lg"
                  style={{ backgroundColor: p.bg }}
                >
                  {/* Accent bar */}
                  <span
                    className="absolute left-0 top-0 h-full w-[5px] rounded-r-full"
                    style={{ backgroundColor: p.solid }}
                  />

                  <p className="text-[16px] leading-relaxed text-gray-700">
                    {p.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


