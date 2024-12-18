"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does it take to receive the photos?",
      answer:
        "We typically deliver the edited photos within 5 business days after your photo session. For weddings and larger events, it may take up to 2 weeks.",
    },
    {
      question: "Do you offer photo printing services?",
      answer:
        "Yes, we offer high-quality photo printing services. You can order prints directly through your online gallery, or we can arrange for custom prints and photo products.",
    },
    {
      question: "Can I reschedule my photo session?",
      answer:
        "Yes, you can reschedule your session up to 48 hours before the scheduled time without any penalty. Please contact us as soon as possible if you need to reschedule.",
    },
    {
      question: "Do you travel for photo sessions?",
      answer:
        "Yes, we are available for travel within Uganda and internationally. Additional travel fees may apply depending on the location.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="mb-16 px-3"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              className="w-full text-left p-4 focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold">{faq.question}</span>
                <ChevronRight
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                />
              </div>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-muted">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
