"use client";

import { motion } from "framer-motion";
import { BookOpen, ClipboardList, Zap, BarChart3, WifiOff, Layout } from "lucide-react";

export default function Benefits() {
  const benefitsData = [
    {
      icon: BookOpen,
      title: "Centenas de Perguntas",
      description: "Banco de questões sempre atualizado com base nos exames teóricos de condução oficiais de Moçambique.",
    },
    {
      icon: ClipboardList,
      title: "Simulados Completos",
      description: "Faça testes idênticos ao exame oficial da Direção Nacional de Transportes Terrestres (INATRO).",
    },
    {
      icon: Zap,
      title: "Correção Automática",
      description: "Saiba a resposta correta imediatamente com explicações detalhadas para acelerar o seu estudo.",
    },
    {
      icon: BarChart3,
      title: "Estatísticas de Desempenho",
      description: "Acompanhe a sua evolução diária, taxas de acerto por categorias e saiba quando está pronto para o exame.",
    },
    {
      icon: WifiOff,
      title: "Funciona Offline",
      description: "Estude onde e quando quiser, sem gastar dados móveis. Perfeito para estudar em trânsito.",
    },
    {
      icon: Layout,
      title: "Interface Simples",
      description: "Visual moderno, limpo e intuitivo para que se foque unicamente no que importa: aprender.",
    },
  ];

  // Motion variants for container and items
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="benefits" className="py-20 md:py-28 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-xs font-bold text-primary tracking-widest uppercase mb-3">
            Porquê escolher o nosso app?
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Tudo o que precisa para ser aprovado no exame teórico de condução
          </p>
          <div className="w-16 h-1.5 bg-primary rounded-full mx-auto mt-4" />
        </div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefitsData.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white border border-gray-100 rounded-3xl p-8 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left"
              >
                {/* Icon wrapper */}
                <div className="p-4 rounded-2xl bg-primary-light text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-6 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                  {benefit.description}
                </p>
                
                {/* Tiny corner accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
