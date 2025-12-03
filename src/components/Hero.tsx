import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero({ onNavigate }: { onNavigate: (page: string) => void }) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759862466272-e4953f8e5411?crop=entropy&cs=tinysrgb&fit=max&fm=jpg"
          alt="Healthcare Technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Welcome To Value Kare Group
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground mb-8 text-lg"
          >
            Value Kare Group is an Outsourcing and Consulting services organization 
            specializing in Hospital Operations & Medical Services, Automated Fixed 
            Assets Management & Inventory Valuation Audit Solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" onClick={() => scrollToSection('about')}>
              Read More
              <ArrowRight className="ml-2" size={20} />
            </Button>

            {/* redirects to contact page */}
            <Button size="lg" variant="outline" onClick={() => onNavigate('contact')}>
  Enquire Now
</Button>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
