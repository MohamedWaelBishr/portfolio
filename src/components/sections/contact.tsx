"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { TermsModal } from "@/components/terms-modal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Mail,
  Send,
  Github,
  Linkedin,
  MapPin,
  Loader2,
  CheckCircle,
  MessageSquare,
  AlertCircle,
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

const fieldClass =
  "h-11 rounded-xl border-white/[0.08] bg-white/[0.03] backdrop-blur-sm transition-colors duration-300 placeholder:text-muted-foreground/50 focus-visible:border-white/30 focus-visible:ring-1 focus-visible:ring-white/20 focus-visible:ring-offset-0";

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
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!isAgreed) {
      setError("Please accept the Terms & Conditions before sending.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Loaded on submit so the mail SDK stays out of the initial bundle
      const { default: emailjs } = await import("@emailjs/browser");

      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      );
      setIsSuccess(true);
      setFormData({ name: "", phone: "", message: "", email: "" });
      setIsAgreed(false);
      setTimeout(() => setIsSuccess(false), 6000);
    } catch (err) {
      console.error("Error sending email:", err);
      setError(
        "Message could not be sent. Email mohamedwaelbishr@gmail.com directly and it will reach me."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 md:py-28" id="contact">
      <SectionHeading
        eyebrow="Connect"
        title="Get In Touch"
        description="Have a project in mind or want to discuss opportunities? I'm always open to new ideas and collaborations."
        className="mb-12"
      />

      <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex flex-col gap-6 lg:col-span-2"
        >
          <div className="glass-panel glass-panel--interactive p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="icon-tile h-10 w-10">
                <MessageSquare className="h-[18px] w-[18px] text-foreground/75" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-semibold leading-tight">Let&apos;s Connect</h3>
                <p className="text-xs text-muted-foreground">Replies within 24 hours</p>
              </div>
            </div>

            <ul className="divide-y divide-white/[0.05]">
              {contactInfo.map((item) => {
                const content = (
                  <>
                    <span className="icon-tile h-9 w-9 group-hover:border-white/20 group-hover:bg-white/[0.08]">
                      <item.icon
                        className="h-4 w-4 text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] uppercase tracking-[0.12em] text-muted-foreground/70">
                        {item.label}
                      </span>
                      <span className="block truncate text-sm font-medium transition-colors duration-300 group-hover:text-foreground">
                        {item.value}
                      </span>
                    </span>
                  </>
                );

                return (
                  <li key={item.label} className="py-1.5 first:pt-0 last:pb-0">
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3.5 rounded-xl p-2.5 transition-colors duration-300 hover:bg-white/[0.04]"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="group flex items-center gap-3.5 p-2.5">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Availability status */}
          <div className="glass-panel glass-panel--interactive flex items-center gap-3 p-6">
            <span className="status-dot text-foreground/80" />
            <div>
              <p className="text-sm font-medium">Currently available</p>
              <p className="text-xs text-muted-foreground">
                Open to full-time roles and freelance work
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
          className="lg:col-span-3"
        >
          <form onSubmit={handleSubmit} className="glass-panel h-full p-6 md:p-7">
            {isSuccess ? (
              <div className="flex h-full flex-col items-center justify-center py-14 text-center">
                <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.05]">
                  <CheckCircle className="h-8 w-8 text-foreground" aria-hidden="true" />
                </span>
                <h3 className="mb-2 text-xl font-semibold">Message sent</h3>
                <p className="max-w-sm text-sm text-muted-foreground">
                  Thanks for reaching out — I&apos;ll get back to you within a day.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="Your name"
                      className={fieldClass}
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
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="your@email.com"
                      className={fieldClass}
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
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Your phone number"
                    className={fieldClass}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="min-h-[132px] resize-none rounded-xl border-white/[0.08] bg-white/[0.03] px-4 py-3 backdrop-blur-sm transition-colors duration-300 placeholder:text-muted-foreground/50 focus-visible:border-white/30 focus-visible:ring-1 focus-visible:ring-white/20 focus-visible:ring-offset-0"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="agreement"
                    checked={isAgreed}
                    onCheckedChange={(checked) => {
                      setIsAgreed(checked as boolean);
                      if (checked) setError(null);
                    }}
                    className="mt-0.5"
                  />
                  <Label
                    htmlFor="agreement"
                    className="cursor-pointer text-sm font-normal leading-relaxed text-muted-foreground"
                  >
                    I agree to the{" "}
                    <button
                      type="button"
                      onClick={() => setIsTermsOpen(true)}
                      className="text-foreground underline-offset-4 hover:underline"
                    >
                      Terms &amp; Conditions
                    </button>
                  </Label>
                </div>

                <div aria-live="polite">
                  {error && (
                    <p className="flex items-start gap-2 rounded-xl border border-destructive/25 bg-destructive/10 p-3 text-sm text-destructive">
                      <AlertCircle
                        className="mt-0.5 h-4 w-4 flex-shrink-0"
                        aria-hidden="true"
                      />
                      {error}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="h-12 w-full gap-2 bg-primary text-primary-foreground shadow-[0_10px_34px_rgba(0,0,0,0.55)] transition-all duration-300 hover:bg-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" aria-hidden="true" />
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
