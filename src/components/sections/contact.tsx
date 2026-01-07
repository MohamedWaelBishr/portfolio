"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { TermsModal } from "@/components/terms-modal";
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  MapPin, 
  Loader2,
  CheckCircle,
  MessageSquare
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mohamedwaelbishr@gmail.com",
    href: "mailto:mohamedwaelbishr@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@MohamedWaelBishr",
    href: "https://github.com/MohamedWaelBishr",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Mohamed Wael Bishr",
    href: "https://www.linkedin.com/in/mohamed-wael-bishr/",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Egypt",
    href: null,
  },
];

// Glassmorphism card style
const glassCardStyle = {
  background: "rgba(255, 255, 255, 0.03)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
};

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAgreed) {
      alert("Please agree to the Terms & Conditions");
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      );
      setIsSuccess(true);
      setFormData({ name: "", phone: "", message: "", email: "" });
      setIsAgreed(false);
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-gradient-to-r from-primary to-transparent" />
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Connect</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Have a project in mind or want to discuss opportunities? 
          I&apos;m always open to new ideas and collaborations.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 space-y-6"
        >
          <div 
            className="rounded-2xl p-6 transition-all duration-500 hover:bg-white/[0.05] hover:border-white/[0.12]"
            style={glassCardStyle}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-primary/10 backdrop-blur-sm">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Let&apos;s Connect</h3>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="group">
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.03] transition-all duration-300"
                    >
                      <div className="p-2 rounded-lg bg-white/[0.05] backdrop-blur-sm group-hover:bg-primary/10 transition-colors">
                        <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="text-sm font-medium group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-3">
                      <div className="p-2 rounded-lg bg-white/[0.05] backdrop-blur-sm">
                        <item.icon className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="text-sm font-medium">{item.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Availability status */}
          <div 
            className="rounded-2xl p-6 transition-all duration-500 hover:bg-white/[0.05] hover:border-white/[0.12]"
            style={glassCardStyle}
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <span className="text-sm text-muted-foreground">
                Currently available for new opportunities
              </span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-3"
        >
          <form 
            onSubmit={handleSubmit} 
            className="rounded-2xl p-6 transition-all duration-500"
            style={glassCardStyle}
          >
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 backdrop-blur-sm flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-white/[0.03] backdrop-blur-sm border-white/[0.1] focus:border-primary/50 transition-colors"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-white/[0.03] backdrop-blur-sm border-white/[0.1] focus:border-primary/50 transition-colors"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Phone <span className="text-muted-foreground">(optional)</span>
                  </Label>
                  <Input
                    id="phone"
                    placeholder="Your phone number"
                    className="bg-white/[0.03] backdrop-blur-sm border-white/[0.1] focus:border-primary/50 transition-colors"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Message
                  </Label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.03] backdrop-blur-sm border border-white/[0.1] focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="agreement"
                    checked={isAgreed}
                    onCheckedChange={(checked) => setIsAgreed(checked as boolean)}
                    className="mt-0.5"
                  />
                  <Label
                    htmlFor="agreement"
                    className="text-sm text-muted-foreground font-normal cursor-pointer"
                  >
                    I agree to the{" "}
                    <button
                      type="button"
                      onClick={() => setIsTermsOpen(true)}
                      className="text-primary hover:underline"
                    >
                      Terms & Conditions
                    </button>
                  </Label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            )}
          </form>
        </motion.div>
      </div>

      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </section>
  );
}
