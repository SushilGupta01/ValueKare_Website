import { motion } from 'motion/react';
import { Contact } from '../components/Contact';
import { Helmet } from "react-helmet-async";

export function ContactPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-[#0d1912] via-[#0f2418] to-[#0b1a12] py-16 overflow-hidden">
        {/* Ambient green glow (more controlled, more premium) */}
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-[#8BC34A]/18 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] bg-[#8BC34A]/12 rounded-full blur-[160px]" />
        {/* Luxury grain texture */}
        <div className="absolute inset-0 opacity-[0.045] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIgZmlsbD0id2hpdGUiIC8+PC9zdmc+')]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} >
            {/* Breadcrumb */}
            <div className="text-sm text-white/65 mb-3 tracking-wide">
              <a href="/" className="hover:text-white transition-colors duration-200">
                Home
              </a>
              <span className="mx-2 opacity-60">›</span>
              <span className="text-white font-medium">Contact</span>
            </div>
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-white leading-[1.15] mb-3">
              Contact Us
            </h1>
            {/* Accent line (more elegant) */}
            <div className="relative w-20 h-[3px] bg-[#8BC34A] rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-white/30 blur-sm" />
            </div>
          </motion.div>
        </div>
      </section>

      <Contact />
    </div>
  );
}
