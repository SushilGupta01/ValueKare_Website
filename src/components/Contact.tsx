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

    // EXACT variable names EmailJS expects
    const payload = {
      from_name: formData.name,
      user_email: formData.email,
      phone: formData.phone,
      role: formData.subject,
      use_case: formData.subject,
      message: formData.message,
      to_email: EMAIL_CONFIG.ADMIN_EMAIL, // For admin template
    };

    try {
      // USER confirmation
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.USER_TEMPLATE_ID,
        payload,
        EMAIL_CONFIG.PUBLIC_KEY
      );

      // ADMIN notification
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
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Let's Connect
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Have any questions or want to discuss opportunities? Reach out —
              our team is here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <a
                  href="mailto:info@valuekare.in"
                  className="text-lg text-gray-700 hover:text-blue-600"
                >
                  info@valuekare.in
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <p className="text-lg text-gray-700">+91 90012 83921</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <form onSubmit={sendEmail} className="space-y-6">

                <div>
                  <label className="text-sm font-medium">Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto px-12">
                  Send Message
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
