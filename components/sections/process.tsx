"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "Schedule a confidential consultation where we assess your unique circumstances and identify the most viable immigration pathway.",
  },
  {
    number: "02",
    title: "Strategy Development",
    description:
      "We craft a tailored legal strategy based on your goals, timeline, and eligibility, ensuring the strongest possible application.",
  },
  {
    number: "03",
    title: "Application Preparation",
    description:
      "Our team meticulously prepares and reviews every document, anticipating potential issues before they arise.",
  },
  {
    number: "04",
    title: "Submission & Follow-Up",
    description:
      "We submit your application and actively monitor its progress, responding to any requests from immigration authorities promptly.",
  },
]

export function Process() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()

  return (
    <section id="process" ref={ref} className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-4">
            Our Process
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance">
            A Clear Path Forward
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We simplify the complex immigration process into clear, manageable
            steps so you always know what comes next.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`group relative flex gap-8 pb-12 last:pb-0 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: isVisible ? `${(index + 1) * 150}ms` : "0ms" }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[27px] top-14 h-[calc(100%-3.5rem)] w-px bg-border" />
              )}

              {/* Number circle */}
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-background text-accent font-serif text-lg transition-all duration-300 group-hover:bg-accent group-hover:text-primary group-hover:border-accent">
                {step.number}
              </div>

              {/* Content */}
              <div className="pb-8">
                <h3 className="font-serif text-xl text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
