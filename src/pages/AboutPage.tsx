import { motion } from 'motion/react';
import { About } from '../components/About';
import { Differentiators } from '../components/Differentiators';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
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
              <a href="/" className="hover:underline">Home</a> → About Us
            </div>
            <h1 className="text-4xl sm:text-5xl">About Us</h1>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl mb-6">
              Welcome To Value Kare Group
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Value Kare Group is an Outsourcing and Consulting services organization specializing in Hospital Operations & Medical Services, Automated Fixed Assets management & Inventory Valuation Audit solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1587557983735-f05198060b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwdGVhbXxlbnwxfHx8fDE3NjMyMDM3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Healthcare Team"
                className="w-full h-80 object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzMTcxNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern Office"
                className="w-full h-80 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <About />
      <Differentiators />
    </div>
  );
}
