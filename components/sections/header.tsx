"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Practice Areas", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#consultation" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-accent/40 bg-accent/10">
            <span className="font-serif text-lg font-bold text-primary-foreground">N</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-foreground">
              Northway
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent">
              Immigration Counsel
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-wider text-primary-foreground/70 transition-colors duration-300 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 text-xs text-primary-foreground/70 transition-colors hover:text-accent"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>+1 (234) 567-890</span>
          </a>
          <a
            href="#consultation"
            className="rounded-sm border border-accent bg-accent px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground transition-all duration-300 hover:bg-accent/90"
          >
            Book Consultation
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-primary-foreground lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          mobileOpen ? "max-h-96 border-t border-accent/20" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 bg-primary/95 px-6 py-4 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-sm px-3 py-2.5 text-sm text-primary-foreground/80 transition-colors hover:bg-accent/10 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#consultation"
            onClick={() => setMobileOpen(false)}
            className="mt-3 rounded-sm border border-accent bg-accent px-5 py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-accent-foreground transition-all duration-300 hover:bg-accent/90"
          >
            Book Consultation
          </a>
        </nav>
      </div>
    </header>
  )
}
