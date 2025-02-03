import React, { useState } from "react"; 
import { faqItems } from "../../../Mocks/Data";

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-blue-400 sm:text-4xl">
          FAQs
        </h2>
        <div className="space-y-4">
          {faqItems.map((faq, index) => (
            <div key={index} className="rounded bg-zinc-800 p-4 shadow-md">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)} 
                className="w-full text-left font-semibold text-blue-400"
              >
                {faq.question}
              </button>
              {openIndex === index && <p className="mt-2 text-gray-300">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
