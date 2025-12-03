import { motion } from "motion/react";

export function BlogsPage() {
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
              <a href="/" className="hover:underline">Home</a> → Blogs
            </div>
            <h1 className="text-4xl sm:text-5xl">Blogs</h1>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl mb-4">Latest Articles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore industry insights on asset management, healthcare automation,
              inventory accuracy, medical tourism, and operational excellence.
            </p>
          </motion.div>

          {/* SEO BLOG CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* 1. Hospital Fixed Asset Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white shadow-lg rounded-xl p-6 border border-border"
            >
              <h3 className="text-xl font-semibold mb-3">
                The Importance of Hospital Fixed Asset Management in 2025
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Efficient fixed asset management ensures accurate tracking of medical
                equipment, reduces financial leakage, and improves compliance.
                Technologies like RFID and centralized FAR systems are transforming
                how hospitals manage millions worth of assets.
              </p>
              <button className="text-primary font-medium hover:underline">
                Read More →
              </button>
            </motion.div>

            {/* 2. Hospital Inventory Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white shadow-lg rounded-xl p-6 border border-border"
            >
              <h3 className="text-xl font-semibold mb-3">
                How Automated Inventory Management Reduces Stock Loss in Hospitals
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Hospitals face challenges like expired stock, shortage of critical
                items, and inaccurate inward–outward records. Digitized inventory
                systems improve transparency, reduce waste, and ensure uninterrupted
                patient care.
              </p>
              <button className="text-primary font-medium hover:underline">
                Read More →
              </button>
            </motion.div>

            {/* 3. RFID Technology in Healthcare */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white shadow-lg rounded-xl p-6 border border-border"
            >
              <h3 className="text-xl font-semibold mb-3">
                How RFID is Transforming Medical Equipment Tracking
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                RFID-based tracking enables real-time monitoring of high-value
                medical items, reduces loss and theft, and allows accurate audit
                trails for compliance and insurance reporting.
              </p>
              <button className="text-primary font-medium hover:underline">
                Read More →
              </button>
            </motion.div>

            {/* 4. Fixed Asset Valuation & Audit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white shadow-lg rounded-xl p-6 border border-border"
            >
              <h3 className="text-xl font-semibold mb-3">
                Why Annual Fixed Asset Audit is Essential for Hospitals
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Annual audits help remove ghost assets, correct depreciation,
                and maintain accurate FAR. This reduces insurance costs and
                improves financial reporting accuracy.
              </p>
              <button className="text-primary font-medium hover:underline">
                Read More →
              </button>
            </motion.div>

            {/* 5. International Medical Tourism */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="bg-white shadow-lg rounded-xl p-6 border border-border"
            >
              <h3 className="text-xl font-semibold mb-3">
                Growth of International Medical Tourism in India
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                India is emerging as a global hub for affordable medical
                treatment. With world-class hospitals and seamless support
                services, the demand for structured medical tourism solutions
                is increasing rapidly.
              </p>
              <button className="text-primary font-medium hover:underline">
                Read More →
              </button>
            </motion.div>

            {/* 6. Healthcare Automation Trends */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white shadow-lg rounded-xl p-6 border border-border"
            >
              <h3 className="text-xl font-semibold mb-3">
                Automation in Healthcare: Trends to Watch in 2025
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                From smart audits to digital FAR creation and automated medical
                workflows, hospitals are adopting new technologies to increase
                productivity and reduce operational costs.
              </p>
              <button className="text-primary font-medium hover:underline">
                Read More →
              </button>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
