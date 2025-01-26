"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TermsModal } from "@/components/terms-modal";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "I would like to receive more information",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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
        process.env.NEXT_PUBLIC_SERVICE_ID!, // Replace with your Service ID
        process.env.NEXT_PUBLIC_TEMPLATE_ID!, // Replace with your Template ID
        formData,
        process.env.NEXT_PUBLIC_PUBLIC_KEY! // Replace with your Public Key
      );
      alert("Message sent successfully!");
      setFormData({ name: "", phone: "", message: "", email: "" });
      setIsAgreed(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      id="contact"
      className="border-[1px] p-4 rounded-lg space-y-8 mb-8 bg-gray-50 bg-opacity-5"
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Please fill the below form and i will get back to you as soon as
          possible.
        </p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-gray-600 dark:text-gray-400">
            Name
          </Label>
          <Input
            id="name"
            placeholder="Enter your name"
            className="border dark:bg-black"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-gray-600 dark:text-gray-400">
            Phone Number
          </Label>
          <Input
            id="phone"
            placeholder="Enter your phone number"
            className="border dark:bg-black"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-600 dark:text-gray-400">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="border dark:bg-black"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="text-gray-600 dark:text-gray-400">
            Message
          </Label>
          <Input
            id="message"
            className="border dark:bg-black"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="agreement"
            className="text-gray-600 dark:text-gray-400"
            checked={isAgreed}
            onCheckedChange={(checked) => setIsAgreed(checked as boolean)}
          />
          <Label
            htmlFor="agreement"
            className="text-sm font-normal text-gray-600 dark:text-gray-400"
          >
            I agree to the{" "}
            <button
              type="button"
              onClick={() => setIsTermsOpen(true)}
              className="underline underline-offset-2 text-gray-600 dark:text-gray-400"
            >
              Terms &amp; Conditions
            </button>
          </Label>
        </div>
        <Button
          type="submit"
          className="w-full bg-white text-black"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </Button>
      </div>
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </form>
  );
}
