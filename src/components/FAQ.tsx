"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-gray-150 py-4 sm:py-5">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full text-left font-bold text-base sm:text-lg text-brand-dark py-2.5 hover:text-primary transition-colors focus:outline-none"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <div className="p-1.5 rounded-lg bg-gray-50 border border-gray-100 shrink-0 ml-4 group-hover:bg-primary-light">
          {isOpen ? (
            <Minus className="w-4 h-4 text-primary" />
          ) : (
            <Plus className="w-4 h-4 text-gray-500 group-hover:text-primary" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-4 text-gray-500 text-sm sm:text-base leading-relaxed pr-6">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "O aplicativo funciona offline?",
      answer: "Sim! O aplicativo foi desenhado para funcionar 100% sem internet. Após descarregar, pode aceder a todas as centenas de perguntas, fazer simulados e acompanhar o seu progresso em qualquer parte de Moçambique, sem gastar os seus dados móveis.",
    },
    {
      question: "Como são os simulados?",
      answer: "Os simulados replicam a prova real do INATRO. Cada simulado é composto por 25 perguntas de escolha múltipla selecionadas aleatoriamente, com um cronómetro decrescente. Para passar, precisa de acertar pelo menos 18 perguntas (nota mínima de aprovação).",
    },
    {
      question: "As perguntas são atualizadas?",
      answer: "Sim, o nosso banco de dados de questões é regularmente atualizado para garantir total conformidade com o código de estrada em vigor e com as provas teóricas oficiais de Moçambique. Todas as novas placas de trânsito ou alterações nas leis são adicionadas rapidamente.",
    },
    {
      question: "O aplicativo é gratuito?",
      answer: "Sim! O descarregamento é gratuito e tem acesso imediato a centenas de simulados e questões de estudo sem pagar nada para começar a treinar.",
    },
    {
      question: "Como entro em contacto?",
      answer: (
        <span>
          Pode falar connosco a qualquer altura enviando um e-mail para{" "}
          <a href="mailto:edsonchivambo@gmail.com" className="text-primary hover:underline font-bold">
            edsonchivambo@gmail.com
          </a>{" "}
          ou preenchendo o formulário interativo de suporte na nossa página de{" "}
          <Link href="/contact" className="text-primary hover:underline font-bold">
            Contacto
          </Link>
          .
        </span>
      ),
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-primary tracking-widest uppercase mb-3">
            Tire as suas dúvidas
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Perguntas Frequentes
          </p>
          <div className="w-16 h-1.5 bg-primary rounded-full mx-auto mt-4" />
        </div>

        {/* FAQ Accordion List */}
        <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-10 shadow-sm">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
