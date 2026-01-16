import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-white via-white to-secondary/20 pt-32 pb-24 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-primary/6 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzhCQzM0QSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Trust Badge */}
          <div
            className="relative inline-flex items-center gap-2 px-4 py-2 mb-10 rounded-full
             bg-white
             animate-green-ring"
          >
            {/* Gradient ring */}
            <div
              className="absolute inset-0 rounded-full p-[1.5px]
               bg-gradient-to-r
               from-[#A5D66E]
               via-[#8BC34A]
               to-[#558B2F]
               -z-10"
            >
              <div className="w-full h-full rounded-full bg-white" />
            </div>

            {/* Soft outer aura */}
            <div
              className="absolute inset-0 rounded-full
               blur-2xl bg-[#8BC34A]/20 opacity-60 -z-20"
            />

            {/* Indicator dot */}
            <span className="w-2 h-2 bg-[#8BC34A] rounded-full animate-pulse" />

            {/* Text */}
            <span className="text-[14px] font-medium text-[#558B2F] tracking-wide">
              Trusted by 50+ Healthcare Organizations
            </span>
          </div>


          {/* Main Heading */}
          <h1 className="text-[85px] leading-[1.1] font-regular tracking-tight text-foreground mb-8">
            Expert Healthcare
            <span className="block text-primary mt-2">
              Operations & Consulting
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-[27px] text-muted-foreground leading-relaxed mb-14 max-w-4xl mx-auto">
            Transforming healthcare operations through innovative outsourcing,
            fixed asset management, and medical tourism solutions.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
            <Button
              size="lg"
              className="h-14 px-10 text-[16px] font-medium shadow-lg shadow-primary/20"
              onClick={() => scrollToSection('contact')}
            >
              Schedule Consultation
              <ArrowRight className="ml-2" size={20} />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-14 px-10 text-[16px] font-medium border-2"
              onClick={() => scrollToSection('about')}
            >
              <Phone className="mr-2" size={18} />
              Contact Us
            </Button>
          </div>

          {/* KPIs */}
          <div className="flex justify-center gap-20 pt-10 border-t border-border/60">
            <div>
              <div className="text-[52px] font-semibold text-primary mb-2">
                500+
              </div>
              <div className="text-[14px] text-muted-foreground uppercase tracking-wide">
                Projects Completed
              </div>
            </div>

            <div>
              <div className="text-[52px] font-semibold text-primary mb-2">
                15+
              </div>
              <div className="text-[14px] text-muted-foreground uppercase tracking-wide">
                Years Experience
              </div>
            </div>

            <div>
              <div className="text-[52px] font-semibold text-primary mb-2">
                98%
              </div>
              <div className="text-[14px] text-muted-foreground uppercase tracking-wide">
                Client Retention
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
