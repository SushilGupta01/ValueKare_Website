import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Expertise() {
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
            Our Expertise
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6">
              Automated barcoding & RFID tracking of Assets & Inventory for Hospitals & Manufacturing industries
            </h3>
            <p className="text-muted-foreground mb-4">
              We have successfully developed and deployed and implemented the Asset Physical Verification, Auditing and Management system for one of largest industrial manufacturing units in India with asset audit system as per compliance of international standard auditor agencies. The audit process in integrated with enterprise mobility devices for RF card reading for physical audits of vast production lines having scarce connectivity.
            </p>
            <p className="text-muted-foreground">
              The system is versatile, user friendly and scalable and suitable for any size type and industry due its dynamic admin area.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1654703680115-4ab46aebebc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwbWFudWZhY3R1cmluZyUyMGluZHVzdHJ5fGVufDF8fHx8MTc2MzIwMzk1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Manufacturing Industry"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
