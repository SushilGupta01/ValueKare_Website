import { motion } from 'motion/react';
import ckBirlaLogo from '../assets/images/client/client-1.png';
import anantaMedicareLogo from '../assets/images/client/client-2.png';
import krollLogo from '../assets/images/client/client-3.png';

const clientLogos = [
  {
    name: 'CK Birla Group',
    logo: ckBirlaLogo,
  },
  {
    name: 'Ananta Medicare',
    logo: anantaMedicareLogo,
  },
  {
    name: 'Kroll',
    logo: krollLogo,
  },
];

export function Clients() {
  return (
    <section id="clients" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-[38px] lg:text-[46px] leading-tight mb-4">
              Our Valued <span className="text-primary">Clients</span>
            </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by organizations across healthcare, manufacturing, and global industries.
          </p>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="
                  bg-white rounded-2xl p-10
                  shadow-sm hover:shadow-xl
                  transition-all duration-300
                  flex items-center justify-center
                  hover:-translate-y-1
                "
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
