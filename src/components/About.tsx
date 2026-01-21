import { motion } from 'motion/react';
import {
  CheckCircle2,
  TrendingUp,
  Shield,
  Target,
  Clock,
  Heart,
  ArrowRight,
} from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutProps {
  scrollToContact: () => void;
}


export function About({ scrollToContact }: AboutProps) {
  return (
    <>
      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="pt-20 pb-28 lg:pt-24 lg:pb-21 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block mb-6">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary px-5 py-2 bg-white border border-primary/30 rounded-full shadow-sm">
                  About Value Kare Group
                </span>
              </div>

              <h2 className="text-[45px] lg:text-[45px] leading-[1.1] tracking-tight mb-8">
                Delivering Excellence in
                <span className="block text-primary mt-2">
                  Healthcare Solutions
                </span>
              </h2>

              <p className="text-[18px] text-muted-foreground leading-[1.7] mb-12 max-w-xl">
                Value Kare Group is an Outsourcing and Consulting services organization
                specializing in Hospital Operations & Medical Services, Automated Fixed
                Assets Management & Inventory Valuation Audit solutions.
              </p>

              <div className="space-y-6 mb-12">
                {[
                  {
                    title: 'Proven Track Record',
                    desc: 'Operational delivery across healthcare and enterprise environments.',
                  },
                  {
                    title: 'Expert Team',
                    desc: 'Seasoned professionals with deep domain expertise.',
                  },
                  {
                    title: 'Innovative Solutions',
                    desc: 'Automation-driven, scalable and compliant systems.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                      <CheckCircle2 className="text-white" size={24} />
                    </div>

                    <div className="pt-2">
                      <h4 className="text-lg font-semibold mb-2">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                onClick={scrollToContact}
                className="h-14 px-8 text-base shadow-lg shadow-primary/20"
              >
                Learn More
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </motion.div>

            {/* RIGHT VISUAL GRID */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="space-y-6">
                <div className="rounded-3xl overflow-hidden shadow-xl border border-border/40">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1587557983735-f05198060b52"
                    alt="Healthcare Team"
                    className="w-full h-72 object-cover"
                  />
                </div>

                <div className="p-8 rounded-3xl bg-primary text-white shadow-xl shadow-primary/30">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                      <TrendingUp size={32} />
                    </div>
                    <div>
                      <div className="text-4xl font-semibold mb-1">30%</div>
                      <div className="text-sm opacity-90">Cost Reduction</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-12">
                <div className="p-8 rounded-3xl bg-white border border-border/40 shadow-lg">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Shield size={32} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-4xl font-semibold mb-1">100%</div>
                      <div className="text-sm text-muted-foreground">
                        Compliance
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl overflow-hidden shadow-xl border border-border/40">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1630283017802-785b7aff9aac"
                    alt="Modern Workspace"
                    className="w-full h-72 object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="pt-20 pb-28 lg:pt-24 bg-[#f6f5fb]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-flex text-sm font-medium text-primary px-5 py-2 bg-white border border-primary/30 rounded-full mb-6">
              Why Choose Us
            </span>

            <h2 className="text-[45px] lg:text-[47px] leading-[1.1] tracking-tight mb-8">
              Excellence That Drives
              <span className="block text-primary mt-2">
                Measurable Results
              </span>
            </h2>

            <p className="text-[18px] text-muted-foreground max-w-3xl mx-auto">
              Industry expertise combined with innovative solutions to deliver exceptional value
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                desc: 'Delivering innovative outsourcing and consulting solutions for healthcare and asset operations.',
                iconColor: 'text-[#fa9979]',
                bgColor: 'bg-[#faddd4]',
              },
              {
                icon: Shield,
                title: 'Quality Assurance',
                desc: 'Rigorous quality standards and continuous improvement processes ensure excellence.',
                iconColor: 'text-[#23b396]',
                bgColor: 'bg-[#cafbf1]',
              },
              {
                icon: Clock,
                title: 'Timely Delivery',
                desc: 'Commitment to meeting deadlines without compromising quality or service.',
                iconColor: 'text-[#8973d9]',
                bgColor: 'bg-[#ddd5fb]',
              },
              {
                icon: Heart,
                title: 'Client-Centric',
                desc: 'We build partnerships based on trust, transparency, and long-term results.',
                iconColor: 'text-[#e80d82]',
                bgColor: 'bg-[#f8e1eb]',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div
                    tabIndex={0}
                    className="
      group h-full p-10 rounded-2xl
      bg-white border border-border/40
      shadow-lg text-center
      transition-all duration-400 ease-out
      hover:bg-[#8BC34A]
      hover:-translate-y-[6px]
      hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)]
      focus-visible:outline-none
      focus-visible:ring-2 focus-visible:ring-[#8BC34A] focus-visible:ring-offset-4
    "
                  >
                    {/* Icon container */}
                    <div
                      className={`
        mx-auto mb-8 w-20 h-20 rounded-full
        flex items-center justify-center
        transition-all duration-300 ease-out
        ${item.bgColor}
        group-hover:bg-white
        group-hover:-translate-y-1
      `}
                    >
                      <Icon
                        size={36}
                        className={`
          transition-colors duration-300
          ${item.iconColor}
          group-hover:text-black
        `}
                      />
                    </div>

                    <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-white">
                      {item.title}
                    </h3>

                    <p className="leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-white/90">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>

              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
