import { motion } from "motion/react";

export function CareersPage() {
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
              <a href="/" className="hover:underline">Home</a> → Careers
            </div>
            <h1 className="text-4xl sm:text-5xl">Careers</h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl mb-6">Join Our Team</h2>
            <p className="text-muted-foreground text-lg mb-10">
              We are looking for passionate and skilled professionals to be part of our growing team.
              Explore the open roles below and apply if you’re a good fit.
            </p>

            {/* Job Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Frontend Developer */}
              <div className="bg-card border rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-3">Frontend Developer</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  We are looking for a developer skilled in React, TypeScript, Tailwind CSS,
                  and UI/UX fundamentals to build responsive and modern user interfaces.
                </p>

                <ul className="text-sm space-y-2 mb-4">
                  <li>• Strong knowledge of React & JavaScript/TypeScript</li>
                  <li>• Experience with HTML, CSS, Tailwind, shadcn-ui</li>
                  <li>• Ability to convert Figma designs into clean UI</li>
                  <li>• Understanding of API integrations</li>
                </ul>

                <p className="text-sm text-muted-foreground">
                  Send your resume to:{" "}
                  <span className="text-primary font-semibold">vikash@valuekare.in</span>
                </p>
              </div>

              {/* Backend Developer */}
              <div className="bg-card border rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-3">Backend Developer</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  We need a backend engineer who can build scalable APIs, manage databases, and
                  support product features with clean and secure backend systems.
                </p>

                <ul className="text-sm space-y-2 mb-4">
                  <li>• Experience in Node.js / Express / NestJS</li>
                  <li>• Knowledge of SQL / MongoDB</li>
                  <li>• API development and integration</li>
                  <li>• Understanding of authentication & backend security</li>
                </ul>

                <p className="text-sm text-muted-foreground">
                  Send your resume to:{" "}
                  <span className="text-primary font-semibold">vikash@valuekare.in</span>
                </p>
              </div>

              {/* Fixed Asset Associate */}
              <div className="bg-card border rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-3">Fixed Asset Associate</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  We are hiring Fixed Asset Associates to support asset verification, tagging,
                  reconciliation, and reporting for our clients.
                </p>

                <ul className="text-sm space-y-2 mb-4">
                  <li>• Knowledge of fixed asset management processes</li>
                  <li>• Physical verification & RFID tagging</li>
                  <li>• FAR reconciliation & documentation</li>
                  <li>• Basic Excel & reporting skills</li>
                </ul>

                <p className="text-sm text-muted-foreground">
                  Send your resume to:{" "}
                  <span className="text-primary font-semibold">vikash@valuekare.in</span>
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
