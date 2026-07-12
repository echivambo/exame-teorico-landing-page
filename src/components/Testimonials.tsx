"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      initials: "AM",
      name: "Anabela Matusse",
      role: "Exemplo de Estudante (Maputo)",
      text: "Consegui passar no meu exame teórico de condução com 23 acertos à primeira tentativa! Os simulados do aplicativo são idênticos ao exame oficial da DNT/INATRO. Recomendo imenso a todos.",
      stars: 5,
    },
    {
      initials: "CL",
      name: "Carlos Langa",
      role: "Exemplo de Estudante (Matola)",
      text: "O facto de funcionar 100% offline ajudou-me imenso. Conseguia estudar no chapa a caminho do trabalho sem gastar o meu saldo de dados. A interface é muito limpa e rápida.",
      stars: 5,
    },
    {
      initials: "JM",
      name: "Jafar Machava",
      role: "Exemplo de Estudante (Beira)",
      text: "Gostei muito da divisão por categorias de sinalização e regras de prioridade. Ajudou-me a focar nos meus pontos fracos. O histórico de notas dá uma confiança incrível para o teste.",
      stars: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-brand-bg scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-xs font-bold text-primary tracking-widest uppercase mb-3">
            O que dizem os nossos alunos
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Casos de Sucesso Simulados
          </p>
          <div className="w-16 h-1.5 bg-primary rounded-full mx-auto mt-4" />
          <p className="text-xs text-gray-400 mt-3 italic">
            *Estes depoimentos são exemplos demonstrativos e serão substituídos por avaliações reais da Google Play.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 relative flex flex-col justify-between"
            >
              {/* Quote Mark */}
              <Quote className="absolute top-6 right-8 w-10 h-10 text-gray-100 shrink-0" />

              <div className="relative z-10 flex-1">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(test.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 italic">
                  &ldquo;{test.text}&rdquo;
                </p>
              </div>

              {/* Reviewer info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100">
                <div className="w-11 h-11 rounded-full bg-primary-light text-primary font-bold text-sm flex items-center justify-center border border-primary/10 shrink-0">
                  {test.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-dark leading-tight">
                    {test.name}
                  </h4>
                  <p className="text-xs text-gray-400 font-medium">
                    {test.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
