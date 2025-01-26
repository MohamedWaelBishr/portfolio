import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Terms & Conditions for Contact Form</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm">
          <section>
            <h3 className="font-bold mb-2">1. Introduction</h3>
            <p>
              By submitting the contact form on this website, you agree to the
              following terms and conditions. If you do not agree with these
              terms, please do not use the contact form.
            </p>
          </section>

          <section>
            <h3 className="font-bold mb-2">2. Data Collection</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Personal Information: The contact form collects your name, email
                address, phone number, and any message you provide.
              </li>
              <li>
                Purpose: This information is used solely to respond to your
                inquiry or request.
              </li>
              <li>
                Data Storage: Your data will be stored securely and will not be
                shared with third parties without your consent, except as
                required by law.
              </li>
            </ul>
          </section>

          {/* Add remaining sections similarly */}
          {/* ...existing sections... */}

          <section>
            <h3 className="font-bold mb-2">8. Contact Information</h3>
            <p>
              If you have any questions about these terms, please contact us at:
            </p>
            <ul className="list-disc pl-5 pt-2">
              <li>Email: mohamedwaelbishr@gmail.com</li>
              <li>Phone: +201011034907</li>
            </ul>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
