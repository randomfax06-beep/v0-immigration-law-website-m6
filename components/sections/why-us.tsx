"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { CheckCircle2 } from "lucide-react"

const reasons = [
  {
    number: "01",
    title: "Proven Track Record",
    description:
      "With over 2,500 successfully resolved cases, our firm has consistently delivered results across all areas of immigration law. Our 98% success rate speaks to our meticulous approach.",
  },
  {
    number: "02",
    title: "Personalized Strategy",
    description:
      "No two immigration cases are alike. We develop bespoke legal strategies tailored to your unique circumstances, goals, and timeline, ensuring the strongest possible application.",
  },
  {
    number: "03",
    title: "Transparent Communication",
    description:
      "You will never be left wondering about the status of your case. We provide regular updates, clear timelines, and direct access to your assigned counsel throughout the process.",
  },
  {
    number: "04",
    title: "Regulatory Expertise",
    description:
      "Immigration law evolves rapidly. Our attorneys stay ahead of policy changes, regulatory updates, and procedural shifts to protect your interests at every stage.",
  },
]

const commitments = [
  "Initial consultations within 48 hours",
  "Direct access to your assigned counsel",
  "Transparent fee structure with no hidden costs",
  "Multilingual team serving diverse communities",
  "Comprehensive document review before submission",
  "Post-approval guidance and support",
]

export function WhyUs() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()

  return (
    <section
      id="why-us"
      ref={ref}
      className="relative overflow-hidden bg-background py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
          {/* Left: Numbered reasons */}
          <div className="w-full lg:w-7/12">
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
                Why Choose Northway
              </p>
              <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl">
                <span className="text-balance">
                  The Difference Is in the Details
                </span>
              </h2>
            </div>

            <div className="mt-12 space-y-8">
              {reasons.map((reason, index) => (
                <div
                  key={reason.number}
                  className={`group flex gap-6 transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 150 + 200}ms` : "0ms",
                  }}
                >
                  <span className="shrink-0 font-serif text-3xl text-accent/30 transition-colors group-hover:text-accent">
                    {reason.number}
                  </span>
                  <div className="border-l border-border pl-6">
                    <h3 className="font-serif text-xl text-foreground">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Commitments */}
          <div
            className={`w-full lg:w-5/12 transition-all duration-1000 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div className="rounded-sm border border-border bg-card p-8 lg:p-10">
              <h3 className="font-serif text-2xl text-foreground">
                Our Commitments to You
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Every client relationship is built on a foundation of trust,
                transparency, and dedicated service.
              </p>
              <div className="mt-8 space-y-4">
                {commitments.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-sm bg-primary px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:bg-primary/90"
                >
                  Begin Your Assessment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
