import { motion } from "motion/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/card";

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

  // NO LOGO FOR THESE
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

      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm mb-4 opacity-90">
              <a href="/" className="hover:underline">Home</a> → Clients
            </div>
            <h1 className="text-4xl sm:text-5xl">Our Clients</h1>
          </motion.div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are proud to serve clients across healthcare, manufacturing,
              hospitality, education, and global industries.
            </p>
          </motion.div>

          {/* Client Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">

            {clientsList.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow rounded-xl p-4">

                  {/* Only Show Logo If Exists */}
                  {client.logo && (
                    <div className="w-full h-24 bg-white rounded-lg overflow-hidden mb-4 border shadow flex items-center justify-center p-3">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-h-full object-contain"
                      />
                    </div>
                  )}

                  <CardHeader className="p-0">
                    <CardTitle>{client.name}</CardTitle>
                    <CardDescription className="mb-3">{client.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 mt-2">
                    <p className="text-muted-foreground">
                      <span className="text-primary font-medium">Benefit:</span>{" "}
                      {client.benefits}
                    </p>
                  </CardContent>

                </Card>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
}
