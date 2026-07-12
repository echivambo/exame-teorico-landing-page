"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, FileText, CheckCircle, MapPin } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function Counter({ value, suffix = "", duration = 1.5 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * value));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(value);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Statistics() {
  const stats = [
    {
      icon: BookOpen,
      value: 500,
      suffix: "+",
      label: "Questões",
      desc: "Banco de perguntas atualizadas e comentadas.",
    },
    {
      icon: FileText,
      value: 25,
      suffix: "",
      label: "Perguntas por Simulado",
      desc: "Exatamente a mesma extensão do teste real.",
    },
    {
      icon: CheckCircle,
      value: 18,
      suffix: "",
      label: "Acertos Mínimos",
      desc: "Para aprovação necessária em cada simulado.",
    },
    {
      icon: MapPin,
      value: 100,
      suffix: "%",
      label: "Focado em Moçambique",
      desc: "Totalmente alinhado ao código de estrada do INATRO.",
    },
  ];

  return (
    <section className="py-20 bg-primary-dark text-white relative overflow-hidden">
      {/* Pattern overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_70%)] z-0" />
      <div className="absolute -top-36 -left-36 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-36 -right-36 w-96 h-96 bg-cta/15 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="p-3.5 bg-white/10 text-primary-light rounded-2xl mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                
                <div className="text-4xl md:text-5xl font-black tracking-tight mb-2 font-mono">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                <div className="text-sm font-bold tracking-wide uppercase text-green-300 mb-1">
                  {stat.label}
                </div>

                <p className="text-xs text-gray-300 max-w-[200px] leading-relaxed">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
