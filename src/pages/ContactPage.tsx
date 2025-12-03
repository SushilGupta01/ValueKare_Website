import { motion } from 'motion/react';
import { Contact } from '../components/Contact';

export function ContactPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm mb-4 opacity-90">
              <a href="/" className="hover:underline">Home</a> → Contact
            </div>
            <h1 className="text-4xl sm:text-5xl">Contact Us</h1>
          </motion.div>
        </div>
      </section>

      <Contact />
    </div>
  );
}
