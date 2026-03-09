import { motion } from 'motion/react';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/valuecare-logo.png';

export function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (page: string) => {
    navigate(`/${page === 'home' ? '' : page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative bg-[#212121] text-white overflow-hidden"
    >

      {/* ===== Floating Accent Shapes ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(14)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: [
                '#8BC34A',
                '#23B396',
                '#8973D9',
                '#FA9979',
                '#E80D82',
              ][i % 5],
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.25,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 10 + Math.random() * 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Animated top accent line */}
      <motion.div
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#8BC34A] to-transparent"
      />

      <div className="relative z-10 max-w-[1300px] mx-auto px-8 py-14">

        {/* ===== MAIN GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">

          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Value Kare Group"
              className="h-12 w-auto mb-4"
            />
            <p className="text-white/70 text-[14px] leading-relaxed max-w-sm">
              Value Kare Group delivers healthcare operations, asset automation,
              and compliance-driven solutions with precision, trust, and responsibility.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-[14px] font-semibold text-[#8BC34A] uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['home','about','services','gallery','clients','contact'].map((page, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleNavigation(page)}
                    className="text-white/70 hover:text-[#8BC34A]
                               transition-colors duration-150 text-[14px]"
                  >
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-[14px] font-semibold text-[#8BC34A] uppercase tracking-wide">
              Contact
            </h4>

            <div className="space-y-3 text-white/70 text-[14px]">
              <div className="flex gap-3 items-start">
                <Phone size={16} className="text-[#8BC34A]" />
                <a
                  href="tel:+919314420245"
                  className="hover:text-[#8BC34A] transition-colors duration-150"
                >
                  +91 9314420245
                </a>
              </div>

              <div className="flex gap-3 items-start">
                <Mail size={16} className="text-[#8BC34A]" />
                <a
                  href="mailto:vikash@valuekare.in"
                  className="hover:text-[#8BC34A] transition-colors duration-150"
                >
                  vikash@valuekare.in
                </a>
              </div>

              <div className="flex gap-3 items-start">
                <MapPin size={16} className="text-[#8BC34A]" />
                <p className="leading-relaxed">
                  MNIT Incubation Center, Jaipur – 302017
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* ===== SOCIAL + COPYRIGHT ===== */}
        <div className="flex flex-col items-center gap-6 pt-8 border-t border-white/10">

          <div className="flex gap-5">
            {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.15 }}
                className="w-10 h-10 rounded-full bg-white/10
                           flex items-center justify-center
                           hover:bg-[#8BC34A]
                           transition-colors duration-150"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>

          <p className="text-white/60 text-[13px] text-center">
            © 2025 ValueKare Group. Built with trust, precision & responsibility.
          </p>

        </div>

      </div>
    </motion.footer>
  );
}
