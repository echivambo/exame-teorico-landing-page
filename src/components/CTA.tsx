"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export default function CTA() {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.echivambo.exameteorico";

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Inner Banner Card */}
        <div className="relative bg-gradient-to-br from-primary-dark to-primary rounded-[3rem] p-10 md:p-16 lg:p-20 overflow-hidden shadow-2xl shadow-primary/20 text-center text-white">
          
          {/* Subtle decoration lines/blobs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center space-y-6">
            
            {/* Playstore Star highlights */}
            <div className="flex gap-1 justify-center items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-xs font-bold uppercase tracking-wider text-green-200 ml-2">
                4.9 Classificação Geral
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Comece hoje mesmo a preparar-se.
            </h2>
            
            <p className="text-green-100 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
              Junte-se a milhares de estudantes em Moçambique que já passaram na primeira tentativa com o nosso aplicativo. Estude de forma simples, gratuita e totalmente offline.
            </p>

            <div className="pt-6">
              {/* Google Play Download Button */}
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-brand-dark hover:bg-gray-50 transition-all duration-150 shadow-xl shadow-black/10 group font-bold text-base md:text-lg shrink-0 border border-white"
              >
                {/* SVG Google Play Icon */}
                <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M5.00003 3.03001C4.72003 3.03001 4.45003 3.14001 4.25003 3.35001L13.12 12.22L17.5 7.84001L5.00003 3.03001Z" fill="#00E5FF"/>
                  <path d="M21.19 10.74C21.84 11.08 22 11.53 22 12C22 12.47 21.84 12.92 21.19 13.26L17.5 15.12L13.12 12.75L17.5 7.84001L21.19 10.74Z" fill="#FFC107"/>
                  <path d="M4.25003 20.65C4.45003 20.86 4.72003 20.97 5.00003 20.97L17.5 15.12L13.12 12.75L4.25003 20.65Z" fill="#FF3D00"/>
                  <path d="M3.24002 4.39999C3.09002 4.72999 3.00002 5.11 3.00002 5.53999V18.46C3.00002 18.89 3.09002 19.27 3.24002 19.6L12.38 12L3.24002 4.39999Z" fill="#4CAF50"/>
                </svg>
                <div className="text-left leading-none flex flex-col gap-0.5">
                  <span className="text-[10px] uppercase font-semibold text-gray-500 tracking-wider">
                    Descarregue da
                  </span>
                  <span className="text-base sm:text-lg font-black text-brand-dark">
                    Google Play Store
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-primary ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>

            <p className="text-xs text-green-200/80 pt-2 font-medium">
              Compatível com todos os smartphones Android. Tamanho leve (~15MB).
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}
