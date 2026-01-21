import { motion } from "motion/react";

import ckBirlaLogo from "../assets/images/client/client-1.png";
import anantaLogo from "../assets/images/client/client-2.png";
import krollLogo from "../assets/images/client/client-3.png";
import cnhLogo from "../assets/images/client/client-4.png";
import ibisLogo from "../assets/images/client/client-5.png";
import asterLogo from "../assets/images/client/client-11.png";

const logos = [
  ckBirlaLogo,
  anantaLogo,
  krollLogo,
  cnhLogo,
  ibisLogo,
  asterLogo,
];

export function TrustedMarquee() {
  return (
    <section className="bg-white border-t border-gray-200 overflow-hidden">
      <div className="relative py-14">

        {/* Fade edges (Apple-style mask) */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Marquee */}
        <div className="mx-auto overflow-hidden max-w-full">
          <motion.div
            className="flex items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            whileHover={{ animationPlayState: "paused" }}
            style={{ width: "max-content" }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                style={{
                  width: "211.5px",
                  height: "105.75px",
                  marginRight: "30px",
                }}
                className="flex items-center justify-center flex-shrink-0"
              >
                <img
                  src={logo}
                  alt="Trusted Client"
                  style={{
                    width: "211.5px",
                    height: "105.75px",
                  }}
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
