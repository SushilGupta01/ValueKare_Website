import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

<<<<<<< HEAD
export function Hero({ onNavigate }: { onNavigate: (page: string) => void }) {
=======
export function Hero() {
>>>>>>> cc46963472f36317b1c893aeb4ff8e4fc65a583c
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
<<<<<<< HEAD
          src="https://images.unsplash.com/photo-1759862466272-e4953f8e5411?crop=entropy&cs=tinysrgb&fit=max&fm=jpg"
=======
          src="https://images.unsplash.com/photo-1759862466272-e4953f8e5411?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGJ1aWxkaW5nJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzYzMTk0NTcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
>>>>>>> cc46963472f36317b1c893aeb4ff8e4fc65a583c
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
<<<<<<< HEAD
            Value Kare Group is an Outsourcing and Consulting services organization 
            specializing in Hospital Operations & Medical Services, Automated Fixed 
            Assets Management & Inventory Valuation Audit Solutions.
=======
            Value Kare Group is an Outsourcing and Consulting services organization specializing in Hospital Operations & Medical Services, Automated Fixed Assets management & Inventory Valuation Audit solutions.
>>>>>>> cc46963472f36317b1c893aeb4ff8e4fc65a583c
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
<<<<<<< HEAD

            {/* redirects to contact page */}
            <Button size="lg" variant="outline" onClick={() => onNavigate('contact')}>
  Enquire Now
</Button>

=======
            <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
              Enquire Now
            </Button>
>>>>>>> cc46963472f36317b1c893aeb4ff8e4fc65a583c
          </motion.div>
        </div>
      </div>
    </section>
  );
}
