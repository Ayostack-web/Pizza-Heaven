"use client"; // if using Next.js app router

import { useState } from "react";
import { ChevronDown } from "lucide-react"; // modern icon set

export default function Accordion() {
  const items = [
    {
      title: "🍕 What ingredients do we use?",
      content:
        "We use fresh dough, authentic mozzarella cheese, and organic toppings sourced locally for the best flavor.",
    },
    {
      title: "🚚 Do you offer home delivery?",
      content:
        "Yes! We deliver pizzas right to your doorstep within 30-40 minutes, depending on your location.",
    },
    {
      title: "💳 What payment methods are accepted?",
      content:
        "We accept cash on delivery, credit/debit cards, and mobile payments.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-blue-50">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          ❓ Frequently Asked <span className="text-red-600">Questions</span>
        </h2>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold bg-white hover:bg-gray-100 transition"
              >
                {item.title}
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-red-600" : ""
                  }`}
                />
              </button>

              {/* Accordion Content */}
              <div
                className={`px-6 bg-gray-50 text-gray-700 overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-40 py-4" : "max-h-0"
                }`}
              >
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
