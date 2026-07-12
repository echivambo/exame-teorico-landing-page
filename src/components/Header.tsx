"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Funcionalidades", href: "/#benefits" },
    { label: "Como Funciona", href: "/#how-it-works" },
    { label: "Perguntas Frequentes", href: "/#faq" },
    { label: "Contacto", href: "/contact" },
  ];

  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.echivambo.exameteorico";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/85 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-xl shadow-md border border-gray-100 group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/logo.png"
                alt="Logótipo do Exame Teórico Moçambique 2026"
                fill
                sizes="(max-w-48px) 100vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold text-brand-dark tracking-tight leading-tight group-hover:text-primary transition-colors duration-200">
                Exame Teórico
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-primary tracking-wider uppercase leading-none">
                Moçambique 2026
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 lg:space-x-10">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-5 py-2.5 rounded-full bg-cta hover:bg-cta-dark text-white text-sm font-bold shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2"
            >
              Baixar App
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-t border-border bg-white"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-base font-semibold text-gray-700 hover:text-primary hover:bg-primary-light transition-all duration-150"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-2 w-full px-5 py-3 rounded-full bg-cta hover:bg-cta-dark text-white text-base font-bold text-center shadow-lg shadow-blue-500/10"
                >
                  Baixar App
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
