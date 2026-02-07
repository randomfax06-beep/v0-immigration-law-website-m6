"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What types of immigration cases do you handle?",
    answer:
      "We handle a comprehensive range of immigration matters including skilled worker visas, family sponsorship, business immigration, refugee and asylum claims, citizenship applications, and immigration appeals. Our team has extensive experience across all major immigration pathways.",
  },
  {
    question: "How long does the immigration process typically take?",
    answer:
      "Processing times vary significantly depending on the type of application, your country of origin, and current government processing volumes. During your initial consultation, we provide realistic timeline estimates based on current data and our extensive experience with similar cases.",
  },
  {
    question: "What should I bring to my initial consultation?",
    answer:
      "Please bring any relevant documents such as your passport, current visa or immigration documents, employment records, educational credentials, and any previous correspondence with immigration authorities. The more information you provide, the more thorough our initial assessment will be.",
  },
  {
    question: "Will my consultation remain confidential?",
    answer:
      "Absolutely. All communications with our firm are protected by solicitor-client privilege. Your personal information, immigration history, and case details are kept strictly confidential and are never shared without your explicit consent.",
  },
  {
    question: "What happens if my application is denied?",
    answer:
      "If an application is denied, we thoroughly analyze the reasons for refusal and advise on the best course of action. This may include filing an appeal, submitting a new application addressing the concerns raised, or exploring alternative immigration pathways.",
  },
  {
    question: "Do you offer payment plans for your legal services?",
    answer:
      "We understand that immigration legal services represent a significant investment. We offer transparent fee structures discussed upfront during your consultation, and flexible payment arrangements can be discussed on a case-by-case basis to make our services accessible.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()

  return (
    <section id="faq" ref={ref} className="py-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-4">
              Common Questions
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-border">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: isVisible ? `${(index + 1) * 100}ms` : "0ms",
                }}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-accent"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-serif text-lg text-foreground pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100 pb-6"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-muted-foreground leading-relaxed text-sm pr-12">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
