import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { WhyUs } from "@/components/sections/why-us"
import { Process } from "@/components/sections/process"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { Consultation } from "@/components/sections/consultation"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Testimonials />
        <FAQ />
        <Consultation />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
