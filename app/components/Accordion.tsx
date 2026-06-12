"use client";

import { useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            key={index}
            className={`transition-all duration-300 rounded-2xl border ${
              isOpen
                ? "bg-white shadow-[0_12px_30px_rgba(0,109,208,0.1)] border-primary/30 scale-[1.01]"
                : "bg-white/75 hover:bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] border-zinc-150/50"
            }`}
          >
            {/* Header Accordion */}
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none font-display"
            >
              <span className={`text-base sm:text-lg font-bold transition-colors duration-200 ${
                isOpen ? "text-primary" : "text-zinc-850"
              }`}>
                {item.question}
              </span>
              <span className={`ml-4 flex-shrink-0 transition-transform duration-300 ${
                isOpen ? "rotate-180 text-primary" : "text-zinc-400"
              }`}>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>

            {/* Content Accordion */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-96 border-t border-zinc-100" : "max-h-0"
              }`}
            >
              <div className="p-5 text-sm sm:text-base text-zinc-550 leading-relaxed font-medium">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
