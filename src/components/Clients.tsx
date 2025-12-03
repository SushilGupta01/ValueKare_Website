import { motion } from 'motion/react';
import ckBirlaLogo from 'figma:asset/88c94566b6c767ff7590263928671503f9613eb8.png';
import anantaMedicareLogo from 'figma:asset/c3fdc0d346b78c04dcf01a50654d24b0fa5a6a26.png';
import krollLogo from 'figma:asset/b48868211125c39945a35734c2c4047cabd22aba.png';

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

const clientNames = [
  'HCG Hospital Group',
  'Manipal Hospitals',
  'CNH (UK Tractor Manufacturer)',
  'Interglobe Group – IBIS Hotels',
  'Top 5 Educational Institutions',
  'US-based NGO',
  'US Global Telecom Operator',
  'Fashion Brand (Europe + Asia)',
  'Zeus Distributors LTD',
];

export function Clients() {
  return (
    <section id="clients" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">
            Our Valued Clients
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are proud to serve a diverse portfolio of industry-leading organizations across healthcare, manufacturing, hospitality, and technology sectors.
          </p>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full h-20 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Clients List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl mb-8">And Many More...</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientNames.map((clientName, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-background rounded-lg p-4 shadow hover:shadow-md transition-shadow duration-300 border border-border"
              >
                <p className="text-muted-foreground">{clientName}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center mt-16"
        >
          <h3 className="text-2xl mb-6">Value To Client</h3>
          <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
            Our commitment is to provide outstanding service delivery that exceeds expectations. We work closely with each client to understand their unique needs and deliver tailored solutions that drive real business value.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl text-primary mb-2">100+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div>
              <div className="text-3xl text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div>
              <div className="text-3xl text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
