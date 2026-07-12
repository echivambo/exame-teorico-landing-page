"use client";

import { motion } from "framer-motion";
import { Download, BookOpen, Layers, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Download,
      title: "Instale o aplicativo",
      description: "Descarregue gratuitamente o aplicativo diretamente da Google Play Store no seu smartphone Android.",
    },
    {
      number: "02",
      icon: BookOpen,
      title: "Escolha um tema",
      description: "Estude por categorias específicas: Sinalização, Regras de Prioridade, Velocidades ou Mecânica Geral.",
    },
    {
      number: "03",
      icon: Layers,
      title: "Faça simulados",
      description: "Pratique com simulados de 25 perguntas e cronómetro idêntico ao sistema oficial do exame real.",
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Passe no exame",
      description: "Com a correção automática e acompanhamento de estatísticas, estará pronto para passar à primeira tentativa.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-brand-bg scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-xs font-bold text-primary tracking-widest uppercase mb-3">
            O seu percurso para o sucesso
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Como funciona a preparação com o nosso app
          </p>
          <div className="w-16 h-1.5 bg-primary rounded-full mx-auto mt-4" />
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Connecting line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex flex-col items-center text-center bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 relative group"
                >
                  {/* Step bubble */}
                  <span className="absolute -top-6 text-5xl font-black text-gray-100 group-hover:text-primary-light transition-colors duration-300 select-none">
                    {step.number}
                  </span>

                  {/* Icon Container */}
                  <div className="w-16 h-16 rounded-full bg-primary-light text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm relative z-10">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-brand-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Small pointer for layout connection (Desktop) */}
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-3.5 h-3.5 bg-white border-t border-r border-gray-200 rotate-45 -translate-y-1/2 group-last:hidden" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
