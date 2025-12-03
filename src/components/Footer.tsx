import { Facebook, Twitter, Linkedin, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/images/valuecare-logo.png';  // ✅ Updated logo path

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const footerLinks = {
  quickLinks: [
    { name: 'Home', page: 'home' },
    { name: 'About Us', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Gallery', page: 'gallery' },
    { name: 'Clients', page: 'clients' },
    { name: 'Contact Us', page: 'contact' },
  ],
  social: [
    { icon: Facebook, href: 'https://www.facebook.com/valuekaresociety/', label: 'Facebook' },
    // { icon: Twitter, href: 'https://twitter.com/', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/value-kare-technologies/posts/?feedView=all', label: 'LinkedIn' },
    // { icon: Instagram, href: 'https://www.instagram.com/', label: 'Instagram' },
    // { icon: Youtube, href: 'https://www.youtube.com/', label: 'YouTube' },
  ],
};

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* About */}
          <div>
            <img
              src={logo}
              alt="Value Kare Group"
              className="h-14 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-background/80 mb-4">
              Value Kare Group is an Outsourcing and Consulting services organization specializing in Medical treatment and education, Asset Inventory automation
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation(link.page)}
                    className="text-background/80 hover:text-background transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">Contact</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-start gap-2">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="mb-1">Phone</p>
                  <a href="tel:+919314420245" className="hover:text-background transition-colors">
                    +91 9314420245
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="mb-1">Email</p>
                  <a
                    href="mailto:vikash@valuekare.in"
                    className="hover:text-background transition-colors"
                  >
                    vikash@valuekare.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="mb-1">Address</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Malviya+National+Institute+Of+Technology+MNIT+Incubation+Center+MIIC+Jaipur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-background transition-colors"
                  >
                    ValueKare Technologies PVT LTD<br />
                    Malviya National Institute Of Technology (MNIT) Incubation Center MIIC Start Up Room No 008 Jawahar lal Nehru Marg Malviya nagar Jaipur 302017
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-4 mb-8 pt-8 border-t border-background/10">
          {footerLinks.social.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <div className="text-center">
          <p className="text-background/80">
             Value Kare Group  © 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
