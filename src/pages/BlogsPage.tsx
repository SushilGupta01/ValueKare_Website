import { motion } from "motion/react";

export function BlogsPage() {
  return (
    <div className="pt-20">
      {/* ================= HEADER ================= */}
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
              <span className="text-white font-medium">Blogs</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-white leading-[1.15] mb-3">
              Insights & Blogs
            </h1>

            <div className="relative w-20 h-[3px] bg-[#8BC34A] rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-white/30 blur-sm" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= BLOG SECTION ================= */}
      <section className="py-24 bg-[#f6f5fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
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
              Latest  <span className="text-primary">Articles</span>
            </h2>

            <p className="text-[17px] text-muted-foreground leading-[1.8] max-w-xl">
               Explore industry insights on asset management, healthcare automation,
              inventory accuracy, medical tourism, and operational excellence.
            </p>
          </motion.div>

          {/* BLOG CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {[
              {
                title: "The Importance of Hospital Fixed Asset Management in 2025",
                desc:
                  "Efficient fixed asset management ensures accurate tracking of medical equipment, reduces financial leakage, and improves compliance. Technologies like RFID and centralized FAR systems are transforming how hospitals manage millions worth of assets.",
              },
              {
                title: "How Automated Inventory Management Reduces Stock Loss in Hospitals",
                desc:
                  "Hospitals face challenges like expired stock, shortage of critical items, and inaccurate inward–outward records. Digitized inventory systems improve transparency, reduce waste, and ensure uninterrupted patient care.",
              },
              {
                title: "How RFID is Transforming Medical Equipment Tracking",
                desc:
                  "RFID-based tracking enables real-time monitoring of high-value medical items, reduces loss and theft, and allows accurate audit trails for compliance and insurance reporting.",
              },
              {
                title: "Why Annual Fixed Asset Audit is Essential for Hospitals",
                desc:
                  "Annual audits help remove ghost assets, correct depreciation, and maintain accurate FAR. This reduces insurance costs and improves financial reporting accuracy.",
              },
              {
                title: "Growth of International Medical Tourism in India",
                desc:
                  "India is emerging as a global hub for affordable medical treatment. With world-class hospitals and seamless support services, the demand for structured medical tourism solutions is increasing rapidly.",
              },
              {
                title: "Automation in Healthcare: Trends to Watch in 2025",
                desc:
                  "From smart audits to digital FAR creation and automated medical workflows, hospitals are adopting new technologies to increase productivity and reduce operational costs.",
              },
            ].map((blog, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="
                  group bg-white/90 backdrop-blur
                  rounded-3xl p-8
                  border border-white/60
                  shadow-md hover:shadow-xl
                  transition-all duration-300
                  flex flex-col justify-between
                "
              >
                {/* soft top accent */}
                <div className="h-[3px] w-12 bg-[#8BC34A] rounded-full mb-6" />

                <div>
                  <h3 className="text-xl font-semibold mb-4 leading-snug group-hover:text-[#0b1a12] transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {blog.desc}
                  </p>
                </div>

                <button
                  className="
                    mt-auto text-[#8BC34A] font-medium
                    inline-flex items-center gap-1
                    transition-all duration-300
                    group-hover:gap-2
                  "
                >
                  Read More →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
