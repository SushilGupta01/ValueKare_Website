import { motion } from "motion/react";

export function CareersPage() {
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
              <span className="text-white font-medium">Careers</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-white leading-[1.15] mb-3">
              Build Your Future
            </h1>

            <div className="relative w-20 h-[3px] bg-[#8BC34A] rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-white/30 blur-sm" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-24 bg-[#f6f5fb]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="max-w-3xl mb-24"
          >
            <span className="inline-block mb-5 text-sm font-medium text-primary px-5 py-2 bg-white/80 backdrop-blur border border-primary/20 rounded-full">
              Careers
            </span>

            <h2 className="text-[40px] lg:text-[45px] leading-[1.1] tracking-tight mb-6">
              Careers at  <span className="text-primary">ValueKare</span>
            </h2>

            <p className="text-[17px] text-muted-foreground leading-[1.8] max-w-xl">
              We’re building systems that power healthcare, improve operations,
              and create measurable impact. Join us in shaping the future.
            </p>
          </motion.div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {[
              {
                title: "Frontend Developer",
                desc:
                  "Build elegant, fast, and scalable interfaces using modern frontend technologies.",
                skills: [
                  "React, TypeScript, Tailwind",
                  "shadcn-ui & UI systems",
                  "Figma → Pixel-perfect UI",
                  "API integrations",
                ],
              },
              {
                title: "Backend Developer",
                desc:
                  "Design secure, scalable APIs and backend systems that power mission-critical workflows.",
                skills: [
                  "Node.js / NestJS",
                  "SQL / MongoDB",
                  "Authentication & Security",
                  "API Architecture",
                ],
              },
              {
                title: "Fixed Asset Associate",
                desc:
                  "Work directly with enterprise clients to manage and verify physical and digital assets.",
                skills: [
                  "Fixed Asset Verification",
                  "RFID tagging",
                  "FAR reconciliation",
                  "Excel & reporting",
                ],
              },
            ].map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="
                  bg-white/80 backdrop-blur-xl
                  border border-white/60
                  rounded-3xl p-8
                  shadow-sm hover:shadow-xl
                  transition-all duration-300
                  relative overflow-hidden
                "
              >
                {/* Accent bar */}
                <div className="absolute top-0 left-0 h-full w-[4px] bg-[#8BC34A]" />

                <h3 className="text-xl font-semibold mb-3">{job.title}</h3>

                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {job.desc}
                </p>

                <ul className="text-sm space-y-2 mb-6 text-muted-foreground">
                  {job.skills.map((skill, j) => (
                    <li key={j}>• {skill}</li>
                  ))}
                </ul>

                <p className="text-sm text-muted-foreground">
                  Apply at{" "}
                  <span className="text-[#8BC34A] font-medium">
                    vikash@valuekare.in
                  </span>
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
}
