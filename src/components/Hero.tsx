"use client";

import { motion } from "framer-motion";
import { ArrowDown, Check, Smartphone, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.echivambo.exameteorico";

  const handleLearnMore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById("benefits");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-bg to-white py-16 md:py-24 lg:py-32">
      {/* Background soft shapes */}
      <div className="absolute top-1/4 -left-36 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-cta/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-center lg:text-left">
            {/* Play Store rating badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center lg:justify-start gap-1.5 self-center lg:self-start px-3 py-1.5 rounded-full bg-primary-light border border-primary/20 text-xs font-semibold text-primary"
            >
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Avaliação 4.9/5 estrelas na Google Play</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-dark leading-[1.1]"
            >
              Prepare-se para passar no{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                exame teórico
              </span>{" "}
              de condução à primeira tentativa.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Estude onde e quando quiser com centenas de perguntas atualizadas, simulados completos e acompanhamento em tempo real do seu desempenho teórico para as estradas de Moçambique.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              {/* Google Play Button */}
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-black text-white hover:bg-neutral-900 active:scale-98 transition-all duration-150 shadow-xl shadow-black/10 border border-neutral-800 w-full sm:w-auto justify-center"
              >
                {/* SVG Google Play Icon */}
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                  <path d="M5.00003 3.03001C4.72003 3.03001 4.45003 3.14001 4.25003 3.35001L13.12 12.22L17.5 7.84001L5.00003 3.03001Z" fill="#00E5FF"/>
                  <path d="M21.19 10.74C21.84 11.08 22 11.53 22 12C22 12.47 21.84 12.92 21.19 13.26L17.5 15.12L13.12 12.75L17.5 7.84001L21.19 10.74Z" fill="#FFC107"/>
                  <path d="M4.25003 20.65C4.45003 20.86 4.72003 20.97 5.00003 20.97L17.5 15.12L13.12 12.75L4.25003 20.65Z" fill="#FF3D00"/>
                  <path d="M3.24002 4.39999C3.09002 4.72999 3.00002 5.11 3.00002 5.53999V18.46C3.00002 18.89 3.09002 19.27 3.24002 19.6L12.38 12L3.24002 4.39999Z" fill="#4CAF50"/>
                </svg>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400 leading-none">
                    Disponível no
                  </p>
                  <p className="text-base font-bold leading-tight">
                    Google Play
                  </p>
                </div>
              </a>

              {/* Saiba Mais Button */}
              <button
                onClick={handleLearnMore}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white border border-gray-200 text-gray-700 hover:text-primary hover:border-primary/30 active:scale-98 transition-all duration-150 shadow-md shadow-gray-100/50 w-full sm:w-auto cursor-pointer"
              >
                <span>Saiba Mais</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>
            </motion.div>
          </div>

          {/* Right Smartphone Mockup Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-[300px] h-[600px] md:w-[320px] md:h-[640px] rounded-[48px] border-[12px] border-neutral-900 bg-neutral-950 shadow-2xl shadow-neutral-950/40 overflow-hidden shrink-0"
            >
              {/* Speaker and Camera notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-neutral-900 rounded-b-3xl z-40 flex items-center justify-center">
                {/* Speaker */}
                <div className="w-12 h-1 bg-neutral-800 rounded-full mb-1" />
                {/* Camera lens */}
                <div className="w-2.5 h-2.5 bg-neutral-950 rounded-full ml-3 border border-neutral-800" />
              </div>

              {/* Internal Screen Content */}
              <div className="absolute inset-0 bg-brand-bg font-sans flex flex-col justify-between pt-7 pb-4">
                
                {/* Simulated StatusBar */}
                <div className="px-5 pt-2 flex justify-between items-center text-[10px] font-bold text-gray-600 z-30 select-none">
                  <span>21:31</span>
                  <div className="flex items-center gap-1">
                    {/* Signal bars */}
                    <div className="flex gap-[1px] items-end h-2">
                      <div className="w-[2px] h-1 bg-gray-600 rounded-sm" />
                      <div className="w-[2px] h-1.5 bg-gray-600 rounded-sm" />
                      <div className="w-[2px] h-2 bg-gray-600 rounded-sm" />
                    </div>
                    {/* Wifi symbol indicator */}
                    <span className="text-[9px]">LTE</span>
                    {/* Battery */}
                    <div className="w-4 h-2.5 border border-gray-600 rounded-sm p-[1px] flex items-center">
                      <div className="w-full h-full bg-primary rounded-sm" />
                    </div>
                  </div>
                </div>

                {/* App Main Panel */}
                <div className="flex-1 flex flex-col justify-start px-4 pt-3 overflow-y-hidden">
                  {/* App Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-gray-200/80">
                    <div className="flex items-center gap-2">
                      <div className="relative w-7 h-7 overflow-hidden rounded-md border border-gray-100">
                        <Image
                          src="/logo.png"
                          alt="Mini Logo"
                          fill
                          sizes="28px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold text-brand-dark leading-none">Exame Teórico</h4>
                        <span className="text-[8px] text-primary font-bold">Moçambique</span>
                      </div>
                    </div>
                    <span className="text-[9px] font-bold bg-primary-light text-primary px-2 py-0.5 rounded-full">
                      Simulado 1
                    </span>
                  </div>

                  {/* App Question Simulator Component */}
                  <div className="mt-4 flex-1 flex flex-col space-y-3">
                    
                    {/* Question Header Card */}
                    <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[8px] font-bold uppercase text-gray-400">Questão 7 de 25</span>
                        <span className="text-[8px] font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded">
                          Tempo: 23:14
                        </span>
                      </div>
                      <p className="text-[11px] font-bold text-brand-dark leading-relaxed">
                        Perante esta sinalização de perigo na via pública, qual deve ser a atitude imediata do condutor?
                      </p>
                    </div>

                    {/* Question Options */}
                    <div className="space-y-2">
                      
                      {/* Option A */}
                      <div className="flex items-center gap-2.5 p-2.5 rounded-xl border border-gray-200 bg-white text-left opacity-75">
                        <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center text-[8px] font-bold text-gray-400">
                          A
                        </div>
                        <span className="text-[10px] font-semibold text-gray-500">
                          Acelerar para desobstruir a via o mais rápido possível.
                        </span>
                      </div>

                      {/* Option B (Correct selected state) */}
                      <motion.div
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.6 }}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl border-2 border-primary bg-primary-light text-left shadow-sm shadow-primary/5"
                      >
                        <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center text-[8px] font-bold text-white shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="text-[10px] font-bold text-primary-dark">
                          Reduzir a velocidade, aumentar a distância de segurança e redobrar a atenção.
                        </span>
                      </motion.div>

                      {/* Option C */}
                      <div className="flex items-center gap-2.5 p-2.5 rounded-xl border border-gray-200 bg-white text-left opacity-75">
                        <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center text-[8px] font-bold text-gray-400">
                          C
                        </div>
                        <span className="text-[10px] font-semibold text-gray-500">
                          Parar obrigatoriamente e aguardar que outros veículos passem primeiro.
                        </span>
                      </div>

                    </div>

                    {/* Result Card popup mock */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.4 }}
                      className="bg-green-50 border border-green-200 p-2.5 rounded-xl flex items-center gap-2"
                    >
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-left">
                        <h5 className="text-[9px] font-bold text-green-800">Resposta Correta!</h5>
                        <p className="text-[8px] text-green-700">Artigo 45.º do Regulamento de Trânsito.</p>
                      </div>
                    </motion.div>

                  </div>
                </div>

                {/* Simulated Bottom Navigation */}
                <div className="border-t border-gray-200 pt-2 px-5 flex justify-between items-center bg-white">
                  <div className="flex flex-col items-center gap-0.5 text-primary">
                    <Smartphone className="w-4 h-4" />
                    <span className="text-[8px] font-bold">Simulado</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 text-gray-400 hover:text-primary transition-colors cursor-pointer">
                    {/* Book icon */}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="text-[8px] font-semibold">Temas</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 text-gray-400 hover:text-primary transition-colors cursor-pointer">
                    {/* Stats icon */}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="text-[8px] font-semibold">Estatísticas</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 text-gray-400 hover:text-primary transition-colors cursor-pointer">
                    {/* User Profile */}
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

        </div>
      </div>
    </section>
  );
}
