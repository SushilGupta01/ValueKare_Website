import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Expertise() {
  return (
    <section className="py-20 bg-[#f6f5fb] relative overflow-hidden">

  {/* Background geometry */}
  <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[140px]" />
  <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px]" />

  {/* Subtle grid */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#00000008_1px,transparent_0)] [background-size:24px_24px]" />

  <div className="max-w-[1400px] mx-auto px-8 lg:px-16 relative z-10">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mb-28 max-w-3xl"
    >
      <span className="inline-flex items-center gap-2 text-sm font-medium text-primary px-5 py-2 bg-white border border-primary/20 rounded-full shadow-sm">
        Our Expertise
      </span>

      <h2 className="mt-6 text-[42px] lg:text-[47px] leading-[1.05] tracking-tight">
        Engineering Precision
        <span className="block text-primary mt-2">Into Healthcare Operations</span>
      </h2>

      <p className="mt-6 text-[18px] text-muted-foreground leading-relaxed">
        We design, deploy, and manage enterprise-scale systems that ensure compliance,
        accuracy, and operational efficiency across hospitals and manufacturing environments.
      </p>
    </motion.div>

    {/* Main content grid */}
    <div className="grid lg:grid-cols-12 gap-20 items-center">

      {/* LEFT – text card */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="lg:col-span-5"
      >
        <div className="relative bg-white rounded-3xl p-12 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]">

          {/* Accent bar */}
          <div className="absolute left-0 top-12 w-[4px] h-20 bg-primary rounded-full" />

          <h3 className="text-[22px] font-semibold leading-tight mb-6">
            Automated RFID & Asset Intelligence Systems
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-6">
            We have successfully implemented large-scale asset verification and audit
            platforms for India’s largest manufacturing units — compliant with
            international audit agencies and regulatory standards.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Our solution integrates RFID mobility devices for real-time verification across
            vast production lines with limited connectivity, ensuring precision at scale.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            The platform is fully scalable, role-based, and adaptable to hospitals,
            pharma, and industrial enterprises.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-border/50">
            <div>
              <div className="text-2xl font-semibold text-primary">500K+</div>
              <div className="text-sm text-muted-foreground">Assets Tracked</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Audit Accuracy</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-primary">30%</div>
              <div className="text-sm text-muted-foreground">Cost Reduction</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* RIGHT – image system */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="lg:col-span-7"
      >
        <motion.div
          whileHover={{ scale: 1.04, rotateY: -4, rotateX: 2 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="relative rounded-[32px] overflow-hidden shadow-[0_60px_120px_-40px_rgba(0,0,0,0.45)]"
        >
          {/* Frame */}
          <div className="absolute inset-0 border border-white/40 rounded-[32px] z-20" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-transparent z-10" />

          <ImageWithFallback
            src="../src/assets/images/Audit.jpg"
            alt="RFID Audit System"
            className="w-full h-[520px] object-cover"
          />

          {/* Floating badge */}
          <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur px-6 py-4 rounded-xl shadow-lg z-30">
            <div className="text-sm font-medium text-primary">
              Enterprise Deployment
            </div>
            <div className="text-xs text-muted-foreground">
              Manufacturing & Hospitals
            </div>
          </div>
        </motion.div>
      </motion.div>

    </div>
  </div>
</section>

  );
}
