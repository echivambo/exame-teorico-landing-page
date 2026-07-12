"use client";

import { motion } from "framer-motion";
import { Check, CheckCircle2, TrendingUp, Award, Clock } from "lucide-react";
import Image from "next/image";

export default function Features() {
  const featuresList = [
    { title: "Simulados com tempo", desc: "Cronómetro regressivo para simular a pressão de tempo do exame oficial." },
    { title: "Histórico de resultados", desc: "Registo de todas as provas efetuadas para acompanhar a sua curva de aprendizagem." },
    { title: "Questões por categoria", desc: "Foque os seus estudos especificamente nos temas onde sente maior dificuldade." },
    { title: "Interface rápida", desc: "Sem carregamentos lentos ou anúncios invasivos. Foco total nos estudos." },
    { title: "Atualizações constantes", desc: "Questões e sinalizações atualizadas de acordo com o regulamento de trânsito em vigor." },
    { title: "Experiência semelhante ao exame oficial", desc: "Prepare-se exatamente no mesmo modelo mental das provas do INATRO." },
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Mockup showing stats and progress */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-[300px] h-[600px] md:w-[320px] md:h-[640px] rounded-[48px] border-[12px] border-neutral-900 bg-neutral-950 shadow-2xl shadow-neutral-950/40 overflow-hidden shrink-0"
            >
              {/* Speaker and Camera notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-neutral-900 rounded-b-3xl z-40 flex items-center justify-center">
                <div className="w-12 h-1 bg-neutral-800 rounded-full mb-1" />
                <div className="w-2.5 h-2.5 bg-neutral-950 rounded-full ml-3 border border-neutral-800" />
              </div>

              {/* Screen Content */}
              <div className="absolute inset-0 bg-brand-bg font-sans flex flex-col justify-between pt-7 pb-4">
                
                {/* Simulated StatusBar */}
                <div className="px-5 pt-2 flex justify-between items-center text-[10px] font-bold text-gray-600 z-30 select-none">
                  <span>21:32</span>
                  <div className="flex items-center gap-1">
                    <span className="text-[9px]">4G</span>
                    <div className="w-4 h-2.5 border border-gray-600 rounded-sm p-[1px] flex items-center">
                      <div className="w-full h-full bg-primary rounded-sm" />
                    </div>
                  </div>
                </div>

                {/* App Content Pane */}
                <div className="flex-1 flex flex-col justify-start px-4 pt-3 overflow-y-hidden">
                  
                  {/* Local header in App */}
                  <div className="flex items-center justify-between pb-3 border-b border-gray-200/80 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-6 bg-primary rounded-full" />
                      <h4 className="text-xs font-bold text-brand-dark">O meu Desempenho</h4>
                    </div>
                    <span className="text-[9px] font-bold text-gray-500">Mês de Julho</span>
                  </div>

                  {/* App Dashboard Mockup */}
                  <div className="flex-1 flex flex-col space-y-4">
                    
                    {/* Radial Progress Score Card */}
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                      <div className="text-left">
                        <span className="text-[9px] font-bold uppercase text-gray-400">Pontuação Média</span>
                        <h5 className="text-base font-black text-brand-dark mt-0.5">Excelente</h5>
                        <p className="text-[9px] text-gray-500">Pronto para o exame real!</p>
                      </div>
                      
                      {/* Circular Gauge */}
                      <div className="relative w-14 h-14 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="28" cy="28" r="24" stroke="#f3f4f6" strokeWidth="4" fill="transparent" />
                          <circle cx="28" cy="28" r="24" stroke="#15803d" strokeWidth="4" fill="transparent"
                            strokeDasharray="150" strokeDashoffset="15" />
                        </svg>
                        <span className="absolute text-[10px] font-extrabold text-primary-dark">90%</span>
                      </div>
                    </div>

                    {/* Category List Stats */}
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 space-y-2.5">
                      <h6 className="text-[9px] font-bold uppercase text-gray-400 text-left">Estatísticas por Tema</h6>
                      
                      {/* Category item 1 */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-[9px] font-bold text-gray-700">
                          <span>Sinalização Rodoviária</span>
                          <span>95%</span>
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: "95%" }} />
                        </div>
                      </div>

                      {/* Category item 2 */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-[9px] font-bold text-gray-700">
                          <span>Regras de Prioridade</span>
                          <span>88%</span>
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: "88%" }} />
                        </div>
                      </div>

                      {/* Category item 3 */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-[9px] font-bold text-gray-700">
                          <span>Velocidades e Manobras</span>
                          <span>84%</span>
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-yellow-500 rounded-full" style={{ width: "84%" }} />
                        </div>
                      </div>
                    </div>

                    {/* Recent Exam History Mock Cards */}
                    <div className="space-y-2 text-left">
                      <h6 className="text-[9px] font-bold uppercase text-gray-400">Histórico de Simulados</h6>
                      
                      {/* Exam 1 */}
                      <div className="bg-white px-3 py-2 rounded-xl border border-gray-100 flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                          <div>
                            <p className="text-[9px] font-bold text-brand-dark">Simulado Geral #12</p>
                            <span className="text-[7px] text-gray-400">Hoje, 14:20</span>
                          </div>
                        </div>
                        <span className="text-[8px] font-bold text-primary bg-primary-light px-1.5 py-0.5 rounded">
                          22/25 Aprovado
                        </span>
                      </div>

                      {/* Exam 2 */}
                      <div className="bg-white px-3 py-2 rounded-xl border border-gray-100 flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                          <div>
                            <p className="text-[9px] font-bold text-brand-dark">Simulado Geral #11</p>
                            <span className="text-[7px] text-gray-400">Ontem, 18:05</span>
                          </div>
                        </div>
                        <span className="text-[8px] font-bold text-primary bg-primary-light px-1.5 py-0.5 rounded">
                          24/25 Aprovado
                        </span>
                      </div>

                    </div>

                  </div>
                </div>

                {/* Simulated Bottom Navigation */}
                <div className="border-t border-gray-200 pt-2 px-5 flex justify-between items-center bg-white z-20">
                  <div className="flex flex-col items-center gap-0.5 text-gray-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <span className="text-[8px] font-semibold">Simulado</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 text-gray-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="text-[8px] font-semibold">Temas</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 text-primary">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="text-[8px] font-bold">Estatísticas</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 text-gray-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-[8px] font-semibold">Perfil</span>
                  </div>
                </div>

                {/* Simulated Android Navigation gesture bar */}
                <div className="w-24 h-1 bg-neutral-300 rounded-full mx-auto mt-2" />

              </div>

            </motion.div>
          </div>

          {/* Right Column: Detailed checklist of features */}
          <div className="lg:col-span-6 flex flex-col space-y-8 order-1 lg:order-2 text-center lg:text-left">
            <div>
              <h2 className="text-xs font-bold text-primary tracking-widest uppercase mb-3">
                Recursos Avançados
              </h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight">
                Estude de forma inteligente com ferramentas de ponta
              </h3>
              <div className="w-16 h-1.5 bg-primary rounded-full mt-4 mx-auto lg:mx-0" />
            </div>

            <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
              O aplicativo foi projetado para recriar as mesmas condições do exame teórico oficial, reduzindo a ansiedade e aumentando as chances de sucesso.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              {featuresList.map((feat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-primary-light text-primary flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark">
                      {feat.title}
                    </h4>
                    <p className="text-gray-500 text-xs mt-1 leading-normal">
                      {feat.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
