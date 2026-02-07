import { MapPin, Phone, Mail, Clock } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Work Permits", href: "#services" },
    { label: "Permanent Residency", href: "#services" },
    { label: "Family Sponsorship", href: "#services" },
    { label: "Business Immigration", href: "#services" },
    { label: "Citizenship", href: "#services" },
  ],
  firm: [
    { label: "About Us", href: "#about" },
    { label: "Our Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="font-serif text-xl text-background">
                Northway
              </span>
              <span className="block text-xs uppercase tracking-[0.2em] text-background/50 mt-0.5">
                Immigration Counsel
              </span>
            </div>
            <p className="text-sm text-background/40 leading-relaxed mb-6">
              Providing exceptional immigration legal services with integrity,
              precision, and unwavering dedication to our clients.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-background/60 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/40 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Firm Links */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-background/60 mb-4">
              Our Firm
            </h4>
            <ul className="space-y-3">
              {footerLinks.firm.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/40 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-background/60 mb-4">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-background/40">
                  100 King Street West, Suite 5600
                  <br />
                  Toronto, ON M5X 1C9
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <a
                  href="tel:+15551234567"
                  className="text-sm text-background/40 hover:text-accent transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <a
                  href="mailto:info@northwayimmigration.com"
                  className="text-sm text-background/40 hover:text-accent transition-colors"
                >
                  info@northwayimmigration.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-accent shrink-0" />
                <span className="text-sm text-background/40">
                  Mon - Fri: 9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 md:flex-row">
          <p className="text-xs text-background/30">
            {`\u00A9 ${new Date().getFullYear()} Northway Immigration Counsel. All rights reserved.`}
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-background/30 transition-colors hover:text-accent"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-background/30 transition-colors hover:text-accent"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-xs text-background/30 transition-colors hover:text-accent"
            >
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
