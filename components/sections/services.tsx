"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  Briefcase,
  Users,
  GraduationCap,
  Heart,
  Building,
  FileCheck,
  ArrowRight,
} from "lucide-react"

const services = [
  {
    icon: Briefcase,
    title: "Skilled Worker Visas",
    description:
      "Expert guidance through work permit applications, employer sponsorship, and skilled worker immigration pathways.",
    areas: ["Work Permits", "LMIA Processing", "Employer Compliance"],
  },
  {
    icon: Users,
    title: "Family Reunification",
    description:
      "Reuniting families with compassionate and thorough handling of sponsorship and dependent applications.",
    areas: ["Spousal Sponsorship", "Parent & Grandparent", "Dependent Children"],
  },
  {
    icon: GraduationCap,
    title: "Student Immigration",
    description:
      "Comprehensive support for international students from study permits to post-graduation work pathways.",
    areas: ["Study Permits", "PGWP", "Co-op Work Permits"],
  },
  {
    icon: Building,
    title: "Business Immigration",
    description:
      "Strategic counsel for entrepreneurs, investors, and corporations navigating business immigration programs.",
    areas: ["Start-up Visa", "Investor Programs", "Intra-company Transfers"],
  },
  {
    icon: Heart,
    title: "Humanitarian & Refugee",
    description:
      "Dedicated advocacy for those seeking protection through refugee claims and humanitarian grounds.",
    areas: ["Refugee Claims", "H&C Applications", "Protected Persons"],
  },
  {
    icon: FileCheck,
    title: "Permanent Residency",
    description:
      "Navigating Express Entry, Provincial Nominee Programs, and all pathways to permanent residency.",
    areas: ["Express Entry", "PNP", "CEC Applications"],
  },
]

export function Services() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()

  return (
    <section
      id="services"
      ref={ref}
      className="relative bg-primary py-24 lg:py-32"
    >
      {/* Section header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`max-w-2xl transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Practice Areas
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              Comprehensive Immigration Legal Services
            </span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-primary-foreground/50">
            Our practice spans the full breadth of immigration law, ensuring
            that whatever your circumstances, you receive counsel tailored
            precisely to your needs.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative rounded-sm border border-primary-foreground/10 bg-primary-foreground/[0.03] p-8 transition-all duration-700 hover:border-accent/30 hover:bg-primary-foreground/[0.06] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100 + 200}ms` : "0ms",
              }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-accent/20 bg-accent/10 transition-colors group-hover:bg-accent/20">
                <service.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-primary-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/50">
                {service.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.areas.map((area) => (
                  <span
                    key={area}
                    className="rounded-sm bg-primary-foreground/5 px-2.5 py-1 text-[10px] uppercase tracking-wider text-primary-foreground/40"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                <span>Learn more</span>
                <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
