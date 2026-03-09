import { motion } from "motion/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/card";
import { Helmet } from "react-helmet-async";

// Importing Client Logos
import ckBirlaLogo from "../assets/images/client/client-1.png";
import anantaLogo from "../assets/images/client/client-2.png";
import krollLogo from "../assets/images/client/client-3.png";
import cnhLogo from "../assets/images/client/client-4.png";
import ibisLogo from "../assets/images/client/client-5.png";
import hcgLogo from "../assets/images/client/client-7.png";
import manipalLogo from "../assets/images/client/client-8.png";
import zeusLogo from "../assets/images/client/client-9.png";

const clientsList = [
  {
    name: "NEI – CK Birla Group",
    description: "Leading industrial conglomerate",
    benefits:
      "Comprehensive asset management and RFID implementation across multiple facilities.",
    logo: ckBirlaLogo,
  },
  {
    name: "HCG Hospital Group",
    description: "Premier cancer care network",
    benefits:
      "Hospital operations optimization and medical department outsourcing solutions.",
    logo: hcgLogo,
  },
  {
    name: "Manipal Hospitals",
    description: "Multi-specialty healthcare provider",
    benefits:
      "Fixed assets management and inventory valuation audit services.",
    logo: manipalLogo,
  },
  {
    name: "Kroll",
    description: "Global risk and financial advisory solutions",
    benefits:
      "Asset verification and valuation services for compliance and auditing.",
    logo: krollLogo,
  },
  {
    name: "Ananta Medicare LTD",
    description: "Healthcare solutions provider",
    benefits:
      "Medical equipment tracking and inventory management systems.",
    logo: anantaLogo,
  },
  {
    name: "CNH (UK Tractor Manufacturer)",
    description: "Agricultural equipment manufacturer",
    benefits:
      "Large-scale asset audit and fixed assets management implementation.",
    logo: cnhLogo,
  },
  {
    name: "Interglobe Group – IBIS Hotels",
    description: "International hospitality chain",
    benefits:
      "Asset tracking and inventory valuation across hotel properties.",
    logo: ibisLogo,
  },
  {
    name: "Top 5 Educational Institutions (North India)",
    description: "Leading academic institutions",
    benefits:
      "Fixed assets centralization and automated inventory management.",
    logo: null,
  },
  {
    name: "US-based NGO",
    description: "Non-profit organization",
    benefits:
      "Healthcare operations consulting and process improvement.",
    logo: null,
  },
  {
    name: "US Global Telecom Operator",
    description: "Telecommunications services",
    benefits:
      "IT asset management and RFID tracking solutions.",
    logo: null,
  },
  {
    name: "Fashion Brand (Europe + Asia)",
    description: "International retail fashion",
    benefits:
      "Inventory valuation and stock management automation.",
    logo: null,
  },
  {
    name: "Zeus Distributors LTD",
    description: "Distribution and logistics",
    benefits:
      "Comprehensive asset management and reconciliation services.",
    logo: zeusLogo,
  },
];

export function ClientsPage() {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Our Clients | Healthcare Organizations Trusting ValueKare</title>
        <meta name="description" content="Trusted by Apollo Hospitals, Fortis, Manipal, HCG, Kroll, CK Birla Group and more. See client success stories and industry partnerships." />
        <meta property="og:title" content="Our Clients | Healthcare Organizations Trusting ValueKare" />
        <meta property="og:description" content="Trusted by Apollo Hospitals, Fortis, Manipal, HCG, Kroll, CK Birla Group and more. See client success stories and industry partnerships." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Clients | Healthcare Organizations Trusting ValueKare" />
        <meta name="twitter:description" content="Trusted by Apollo Hospitals, Fortis, Manipal, HCG, Kroll, CK Birla Group and more. See client success stories and industry partnerships." />
        <link rel="canonical" href="https://valuekare.in/clients" />
      </Helmet>
      {/* ================= HEADER (unchanged content, refined look) ================= */}
      <section className="relative bg-gradient-to-br from-[#0d1912] via-[#0f2418] to-[#0b1a12] py-16 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-[#8BC34A]/18 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] bg-[#8BC34A]/12 rounded-full blur-[160px]" />
        <div className="absolute inset-0 opacity-[0.045] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIgZmlsbD0id2hpdGUiIC8+PC9zdmc+')]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-sm text-white/65 mb-3 tracking-wide">
              <a href="/" className="hover:text-white transition-colors duration-200">
                Home
              </a>
              <span className="mx-2 opacity-60">›</span>
              <span className="text-white font-medium">Clients</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-white leading-[1.15] mb-3">
              Our Clients
            </h1>

            <div className="relative w-20 h-[3px] bg-[#8BC34A] rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-white/30 blur-sm" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CLIENTS SECTION ================= */}
      <section className="py-24 bg-[#f6f5fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="max-w-3xl mb-24"
          >
            <span className="inline-block mb-5 text-sm font-medium text-primary px-5 py-2 bg-white/80 backdrop-blur border border-primary/20 rounded-full">
              Blogs
            </span>

            <h2 className="text-[40px] lg:text-[45px] leading-[1.1] tracking-tight mb-6">
              Trusted by <span className="text-primary">Industry Leaders</span>
            </h2>

            <p className="text-[17px] text-muted-foreground leading-[1.8] max-w-xl">
              We are proud to serve clients across healthcare, manufacturing,
              hospitality, education, and global industries.
            </p>
          </motion.div>

          {/* Client Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {clientsList.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <Card
                  className="
    group relative h-full
    bg-white/90 backdrop-blur
    rounded-3xl p-6
    border border-white/60
    shadow-md hover:shadow-2xl
    transition-all duration-500
    flex flex-col
    overflow-hidden
  "
                >
                  {/* Corner gradient glow */}
                  <div
                    className="
      pointer-events-none absolute inset-0
      opacity-0 group-hover:opacity-100
      transition-opacity duration-500
      bg-[radial-gradient(circle_at_top_right,rgba(139,195,74,0.25),transparent_60%)]
    "
                  />

                  <div
                    className="
      pointer-events-none absolute inset-0
      opacity-0 group-hover:opacity-100
      transition-opacity duration-500
      bg-[radial-gradient(circle_at_bottom_left,rgba(139,195,74,0.15),transparent_65%)]
    "
                  />

                  {/* Subtle light sheen */}
                  <div
                    className="
      pointer-events-none absolute inset-0
      bg-gradient-to-tr from-white/0 via-white/5 to-white/0
      opacity-0 group-hover:opacity-100
      transition-opacity duration-500
    "
                  />

                  {/* CONTENT */}
                  <div className="relative z-10 flex flex-col h-full">

                    {client.logo && (
                      <div className="w-full h-24 rounded-xl overflow-hidden mb-5 border bg-white flex items-center justify-center">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="max-h-full object-contain"
                        />
                      </div>
                    )}

                    <CardHeader className="p-0 mb-3">
                      <CardTitle className="text-lg leading-tight">
                        {client.name}
                      </CardTitle>
                      <CardDescription>{client.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="p-0 mt-auto">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        <span className="text-primary font-medium">Benefit:</span>{" "}
                        {client.benefits}
                      </p>
                    </CardContent>

                  </div>
                </Card>

              </motion.div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
}
