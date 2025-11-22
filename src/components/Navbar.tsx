import { useState } from 'react';
import { Menu, X, ChevronDown, FileText, Box, Globe } from 'lucide-react';
import { Button } from './ui/button';
import logo from '../assets/images/valuecare-logo.png';
import { EnquiryModal } from "./EnquiryModal";

interface NavbarProps {
  currentPage?: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage = 'home', onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
    setIsSolutionsOpen(false);
    window.scrollTo(0, 0);
  };

  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'About Us', page: 'about' },
    { name: 'Services', page: 'services' },
  ];

  const solutions = [
    {
      page: 'patient-emr',
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: 'Patient EMR System',
      subtitle: 'Electronic Medical Records for Hospitals',
      description: 'OPD/IPD records, prescriptions, vitals, lab reports'
    },
    {
      page: 'fixed-asset-inventory',
      icon: <Box className="w-6 h-6 text-primary" />,
      title: 'Fixed Asset & Inventory Audit / Automation Solutions',
      subtitle: 'RFID, Barcode, Lifecycle Tracking, Valuation & Compliance',
      description: 'FAM & Inventory Management with complete automation'
    },
    {
      page: 'medical-tourism',
      icon: <Globe className="w-6 h-6 text-primary" />,
      title: 'International Medical Tourism',
      subtitle: 'Affordable, High-Quality Medical Treatment in India',
      description: 'World-class hospitals, expert care, comprehensive support'
    }
  ];

  const navItemsAfter = [
    { name: 'Gallery', page: 'gallery' },
    { name: 'Clients', page: 'clients' },
    { name: 'Contact', page: 'contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavigate('home')}>
              <img src={logo} alt="Value Kare Group" className="h-16 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavigate(item.page)}
                  className={`transition-colors ${
                    currentPage === item.page ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </button>
              ))}

              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 transition-colors ${
                    ['patient-emr', 'fixed-asset-inventory', 'medical-tourism'].includes(currentPage)
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  Solutions
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isSolutionsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[720px]">
                    <div className="bg-white rounded-lg shadow-xl border border-border overflow-hidden">
                      <div className="p-2">
                        {solutions.map((solution) => (
                          <button
                            key={solution.page}
                            onClick={() => handleNavigate(solution.page)}
                            className={`w-full flex items-start gap-4 p-4 rounded-md transition-colors hover:bg-accent group ${
                              currentPage === solution.page ? 'bg-accent' : ''
                            }`}
                          >
                            <div className="flex-shrink-0 mt-1">{solution.icon}</div>
                            <div className="flex-1 text-left">
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="text-foreground group-hover:text-primary transition-colors">
                                  {solution.title}
                                </h4>
                                <ChevronDown className="w-4 h-4 text-muted-foreground -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <p className="text-muted-foreground mb-1">{solution.subtitle}</p>
                              <p className="text-muted-foreground">{solution.description}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {navItemsAfter.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavigate(item.page)}
                  className={`transition-colors ${
                    currentPage === item.page ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button onClick={() => setIsModalOpen(true)}>Enquire Now</Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground hover:text-primary"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background border-b border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavigate(item.page)}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                    currentPage === item.page
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-accent'
                  }`}
                >
                  {item.name}
                </button>
              ))}

              {/* Solutions Mobile */}
              <div className="space-y-1">
                <button
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-md text-foreground hover:bg-accent"
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isSolutionsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isSolutionsOpen && (
                  <div className="ml-4 space-y-1">
                    {solutions.map((solution) => (
                      <button
                        key={solution.page}
                        onClick={() => handleNavigate(solution.page)}
                        className={`block w-full text-left px-3 py-3 rounded-md transition-colors ${
                          currentPage === solution.page
                            ? 'bg-primary/10 text-primary'
                            : 'text-foreground hover:bg-accent'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-0.5">{solution.icon}</div>
                          <div className="flex-1">
                            <div className="mb-0.5">{solution.title}</div>
                            <p className="text-muted-foreground">{solution.subtitle}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {navItemsAfter.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavigate(item.page)}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                    currentPage === item.page
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-accent'
                  }`}
                >
                  {item.name}
                </button>
              ))}

              <div className="px-3 pt-2">
                <Button onClick={() => setIsModalOpen(true)} className="w-full">
                  Enquire Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Enquiry Popup Modal */}
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
