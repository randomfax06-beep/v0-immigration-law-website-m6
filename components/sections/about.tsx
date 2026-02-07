"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Scale, Shield, Globe } from "lucide-react"

export function About() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-background py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start gap-16 lg:flex-row lg:gap-20">
          {/* Left Column: Image / Visual */}
          <div
            className={`relative w-full lg:w-5/12 transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-primary/5">
              <img
                src="/placeholder.svg?height=800&width=640"
                alt="Interior of Northway Immigration Counsel office"
                className="h-full w-full object-cover"
              />
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-sm border border-accent/20 bg-primary/90 p-6 backdrop-blur-sm">
                <p className="font-serif text-lg text-primary-foreground">
                  {"\"Precision in every case, compassion in every interaction.\""}
                </p>
                <p className="mt-2 text-xs uppercase tracking-widest text-accent">
                  Our Founding Principle
                </p>
              </div>
            </div>
            {/* Accent decoration */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-sm border border-accent/20" />
          </div>

          {/* Right Column: Text Content */}
          <div
            className={`w-full lg:w-7/12 transition-all duration-1000 delay-200 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              About Our Firm
            </p>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl">
              <span className="text-balance">
                A Legacy of Excellence in Immigration Law
              </span>
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Northway Immigration Counsel was founded on the principle that
                every immigration case deserves meticulous attention and
                unwavering advocacy. Our team of seasoned attorneys brings
                decades of combined experience to each matter we undertake.
              </p>
              <p>
                We represent clients across the full spectrum of immigration
                law, from skilled worker pathways and family reunification to
                complex business immigration and humanitarian cases. Our
                approach is defined by thoroughness, strategic thinking, and
                a deep commitment to our clients' aspirations.
              </p>
            </div>

            {/* Pillars */}
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                {
                  icon: Scale,
                  title: "Legal Precision",
                  text: "Every filing reviewed with meticulous attention to detail",
                },
                {
                  icon: Shield,
                  title: "Client Protection",
                  text: "Your information and case handled with utmost confidentiality",
                },
                {
                  icon: Globe,
                  title: "Global Reach",
                  text: "Experience across jurisdictions and immigration pathways",
                },
              ].map((pillar) => (
                <div key={pillar.title} className="group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent/10 transition-colors group-hover:bg-accent/20">
                    <pillar.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
