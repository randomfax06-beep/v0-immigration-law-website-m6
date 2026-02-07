"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"

export function CTA() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()

  return (
    <section ref={ref} className="py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground text-balance mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-primary-foreground/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Every successful immigration journey begins with a single step.
            Schedule your confidential consultation today and let us chart a
            clear path forward for you and your family.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              className="bg-accent text-primary hover:bg-accent/90 px-8 py-6 text-sm font-medium tracking-wide uppercase"
            >
              <a href="#consultation">Schedule a Consultation</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-sm font-medium tracking-wide uppercase bg-transparent"
            >
              <a href="tel:+15551234567">Call +1 (555) 123-4567</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
