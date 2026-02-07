"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Calendar, Clock, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Consultation() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()

  return (
    <section id="consultation" ref={ref} className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: Copy */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-4">
              Schedule a Consultation
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance mb-6">
              Your Immigration Journey Starts With a Conversation
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Book a confidential consultation with one of our senior
              immigration counsel. We will assess your situation, outline your
              options, and chart a clear course forward.
            </p>

            <div className="space-y-4 mb-10">
              {[
                {
                  icon: Clock,
                  text: "45-minute comprehensive assessment",
                },
                {
                  icon: Calendar,
                  text: "Flexible scheduling, including evenings",
                },
                {
                  icon: Phone,
                  text: "In-person, phone, or video consultation",
                },
                {
                  icon: Mail,
                  text: "Written summary of your options provided",
                },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-sm text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Booking form mockup */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="rounded-lg border border-border bg-card p-8 shadow-sm">
              <h3 className="font-serif text-xl text-foreground mb-6">
                Book Your Consultation
              </h3>

              <div className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    How Can We Help?
                  </label>
                  <select className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent">
                    <option value="">Select a service</option>
                    <option value="work-permits">Work Permits</option>
                    <option value="permanent-residency">
                      Permanent Residency
                    </option>
                    <option value="family-sponsorship">
                      Family Sponsorship
                    </option>
                    <option value="business-immigration">
                      Business Immigration
                    </option>
                    <option value="citizenship">Citizenship Applications</option>
                    <option value="appeals">Immigration Appeals</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>

                <Button className="w-full bg-accent text-primary hover:bg-accent/90 py-6 text-sm font-medium tracking-wide uppercase">
                  Schedule Consultation
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Your information is confidential and protected by
                  solicitor-client privilege.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
