import React from "react";
import { Accordion, AccordionItem } from "@heroui/react";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is included in the tour package?",
      answer:
        "The tour package includes accommodation, meals, transportation, and guided tours. Specific details are provided for each tour.",
    },
    {
      question: "How can I book a tour?",
      answer:
        "You can book a tour through our website or contact our customer service for assistance.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "Our cancellation policy varies depending on the tour. Please refer to the terms and conditions for the specific tour you are booking.",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">คำถามที่พบบ่อยกับขายทัวร์</h2>
      <Accordion>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} title={faq.question}>
            <p className="text-gray-600 text-sm mt-2">{faq.answer}</p>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
