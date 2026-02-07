"use client"

import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Accent line */}
      <div className="absolute left-1/2 top-0 h-32 w-px -translate-x-1/2 bg-gradient-to-b from-accent/60 to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center lg:px-8">
        {/* Overline */}
        <p className="animate-hero-fade-in mb-6 text-xs font-medium uppercase tracking-[0.3em] text-accent">
          Established Immigration Law Practice
        </p>

        {/* Main headline */}
        <h1 className="animate-hero-fade-in-delay-1 font-serif text-4xl font-medium leading-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-balance">
            Your Future Deserves
            <br />
            <span className="italic text-accent">Distinguished</span> Counsel
          </span>
        </h1>

        {/* Subheading */}
        <p className="animate-hero-fade-in-delay-2 mx-auto mt-8 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/60 sm:text-lg">
          We guide individuals, families, and businesses through every stage of
          the immigration process with the precision, discretion, and dedication
          your case demands.
        </p>

        {/* CTA Group */}
        <div className="animate-hero-fade-in-delay-3 mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-sm bg-accent px-8 py-4 text-xs font-semibold uppercase tracking-wider text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
          >
            <span className="relative z-10">Schedule Your Consultation</span>
            <div className="absolute inset-0 -translate-x-full bg-accent/80 transition-transform duration-500 group-hover:translate-x-0" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/20 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-primary-foreground/70 transition-all duration-300 hover:border-accent/40 hover:text-accent"
          >
            Our Practice Areas
          </a>
        </div>

        {/* Trust indicators */}
        <div className="animate-hero-fade-in-delay-3 mt-20 flex flex-wrap items-center justify-center gap-8 text-primary-foreground/40">
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl text-accent">15+</span>
            <span className="mt-1 text-[10px] uppercase tracking-widest">
              Years Experience
            </span>
          </div>
          <div className="h-8 w-px bg-primary-foreground/10" />
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl text-accent">2,500+</span>
            <span className="mt-1 text-[10px] uppercase tracking-widest">
              Cases Resolved
            </span>
          </div>
          <div className="h-8 w-px bg-primary-foreground/10" />
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl text-accent">98%</span>
            <span className="mt-1 text-[10px] uppercase tracking-widest">
              Success Rate
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-primary-foreground/30 transition-colors hover:text-accent"
          aria-label="Scroll to learn more"
        >
          <span className="text-[10px] uppercase tracking-widest">Discover</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
