"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-slate-200 rounded-xl overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-slate-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold text-slate-900 text-sm leading-snug">
              {item.question}
            </span>
            <ChevronDown
              size={18}
              className={cn(
                "flex-shrink-0 text-amber-600 transition-transform duration-200",
                openIndex === index ? "rotate-180" : ""
              )}
            />
          </button>

          <div
            className={cn(
              "overflow-hidden transition-all duration-300",
              openIndex === index ? "max-h-96" : "max-h-0"
            )}
          >
            <div className="px-5 pb-5 pt-1">
              <p className="text-slate-600 text-sm leading-relaxed">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
