"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic client validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Por favor, preencha todos os campos obrigatórios (*).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Por favor, introduza um endereço de e-mail válido.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    // Simulate server action
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMessage("Ocorreu um erro ao enviar a sua mensagem. Tente novamente mais tarde.");
    }
  };

  return (
    <>
      <Header />
      <main className="flex-1 bg-brand-bg py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main heading */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Fale Connosco
            </h1>
            <p className="text-gray-500 text-sm sm:text-base mt-3 max-w-xl mx-auto">
              Tem dúvidas sobre o funcionamento do aplicativo, sugestões de novas perguntas ou quer reportar um erro? Envie uma mensagem!
            </p>
            <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Contact details card (4 cols) */}
            <div className="lg:col-span-4 bg-primary-dark text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-xl">
              {/* Blur highlights background */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-cta/10 rounded-full blur-2xl" />

              <div className="relative z-10 space-y-8">
                <h3 className="text-xl font-bold">Informações de Contacto</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Estamos sempre abertos a sugestões da comunidade de condutores de Moçambique para tornar este aplicativo a ferramenta de estudo número um do país.
                </p>

                <div className="space-y-6 pt-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-xl text-primary-light">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-gray-400 font-bold leading-none">Email</h4>
                      <a href="mailto:suporte@echivambo.co.mz" className="text-sm font-semibold hover:text-green-300 transition-colors mt-1 block">
                        suporte@echivambo.co.mz
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-xl text-primary-light">
                      <GlobeIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-gray-400 font-bold leading-none">Website</h4>
                      <a href="https://echivambo.co.mz" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-green-300 transition-colors mt-1 block">
                        echivambo.co.mz
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-xl text-primary-light">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-gray-400 font-bold leading-none">Localização</h4>
                      <span className="text-sm font-semibold text-gray-200 mt-1 block">
                        Maputo, Moçambique
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Small branding footer */}
              <div className="relative z-10 border-t border-white/10 pt-6 mt-10">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Disponibilidade</span>
                <span className="text-xs text-green-300 font-semibold mt-1 block">Resposta em menos de 24 horas úteis</span>
              </div>
            </div>

            {/* Interactive form card (8 cols) */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-12 flex flex-col items-center"
                  >
                    <div className="w-16 h-16 bg-primary-light text-primary rounded-full flex items-center justify-center mb-6 shadow-sm">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-dark mb-2">Mensagem Enviada!</h3>
                    <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto mb-8">
                      Agradecemos o seu contacto. A sua mensagem foi registada e responderemos para o endereço de e-mail fornecido o mais breve possível.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-6 py-3 rounded-full bg-primary hover:bg-primary-dark text-white text-sm font-bold shadow-md cursor-pointer transition-colors"
                    >
                      Enviar Nova Mensagem
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                  >
                    {/* Error notification banner */}
                    {status === "error" && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-red-700">{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-bold uppercase text-gray-500 tracking-wider">
                          Nome Completo <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors duration-150 text-sm"
                          placeholder="Ex: João Muthemba"
                          required
                          disabled={status === "loading"}
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-bold uppercase text-gray-500 tracking-wider">
                          E-mail <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors duration-150 text-sm"
                          placeholder="Ex: joao@email.com"
                          required
                          disabled={status === "loading"}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-xs font-bold uppercase text-gray-500 tracking-wider">
                        Assunto
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors duration-150 text-sm"
                        placeholder="Ex: Sugestão de Pergunta, Erro no Simulador, Dúvida"
                        disabled={status === "loading"}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-bold uppercase text-gray-500 tracking-wider">
                        Mensagem <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors duration-150 text-sm resize-none"
                        placeholder="Escreva aqui a sua mensagem detalhada..."
                        required
                        disabled={status === "loading"}
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-cta hover:bg-cta-dark disabled:bg-blue-300 text-white font-bold text-sm shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer transition-colors duration-150"
                      >
                        {status === "loading" ? (
                          <>
                            {/* Simple inline spinning SVG loader */}
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            <span>A enviar...</span>
                          </>
                        ) : (
                          <>
                            <span>Enviar Mensagem</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

// Simple Globe Icon helper
function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}
