import { motion } from "motion/react";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { EMAIL_CONFIG } from "../lib/emailConfig";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: any) => {
    e.preventDefault();
    toast.info("Sending message...");

    const payload = {
      from_name: formData.name,
      user_email: formData.email,
      phone: formData.phone,
      role: formData.subject,
      use_case: formData.subject,
      message: formData.message,
      to_email: EMAIL_CONFIG.ADMIN_EMAIL,
    };

    try {
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.USER_TEMPLATE_ID,
        payload,
        EMAIL_CONFIG.PUBLIC_KEY
      );

      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.ADMIN_TEMPLATE_ID,
        payload,
        EMAIL_CONFIG.PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative py-21 bg-[#f6f5fb] overflow-hidden">
      
      {/* ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block mb-6 text-sm font-medium text-primary px-4 py-2 bg-white border border-primary/30 rounded-full">
              Contact Us
            </span>

            <h2 className="text-[42px] lg:text-[56px] leading-[1.05] tracking-tight mb-8">
              We’re here 
              <span className="text-primary mt-2"> to help </span>
            </h2>

            <p className="text-[18px] text-muted-foreground leading-relaxed mb-10 max-w-xl">
              Whether you’re exploring collaboration, services, or consulting,
              our team is ready to listen and respond with clarity.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" />
                </div>
                <a
                  href="mailto:info@valuekare.in"
                  className="text-[17px] text-gray-700 hover:text-primary transition"
                >
                  info@valuekare.in
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="text-primary" />
                </div>
                <p className="text-[17px] text-gray-700">
                  +91 90012 83921
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="
              relative bg-white/80 backdrop-blur-xl
              p-12 rounded-3xl
              border border-white/50
              shadow-xl
            ">
              <form onSubmit={sendEmail} className="space-y-5">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone (optional)"
                  />
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                  />
                </div>

                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you need..."
                  rows={6}
                  required
                />

                <div className="pt-4 flex justify-end">
                  <Button
                    type="submit"
                    className="h-12 px-8 shadow-lg shadow-primary/30 hover:shadow-xl transition"
                  >
                    Send Message
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
