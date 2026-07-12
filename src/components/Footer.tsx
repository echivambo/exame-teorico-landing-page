import Link from "next/link";
import Image from "next/image";
import { Mail, Globe, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-brand-dark text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
          {/* Brand Column */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-lg border border-gray-700">
                <Image
                  src="/logo.png"
                  alt="Logótipo Exame Teórico Moçambique"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-white text-base leading-tight">
                  Exame Teórico
                </h3>
                <p className="text-xs text-primary font-semibold tracking-wider uppercase">
                  Moçambique 2026
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Prepare-se para o seu exame teórico de condução com segurança, praticidade e eficácia. Estude em qualquer lugar, offline e passe de primeira.
            </p>
          </div>

          {/* Links Column */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Links Legais e Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-primary transition-colors duration-150 focus:outline-none focus:text-primary"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-primary transition-colors duration-150 focus:outline-none focus:text-primary"
                >
                  Termos de Utilização
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors duration-150 focus:outline-none focus:text-primary"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Developer Column */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contacto & Programador
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="mailto:suporte@echivambo.co.mz"
                  className="hover:text-primary transition-colors duration-150 focus:outline-none"
                >
                  suporte@echivambo.co.mz
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="https://echivambo.co.mz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-150 focus:outline-none"
                >
                  Website do Desenvolvedor
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-800" />

        {/* Bottom Area */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="flex flex-col space-y-1.5 text-center md:text-left">
            <p>
              &copy; {currentYear} Exame Teórico Moçambique. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 font-medium">
              Este website é o website oficial do aplicativo Exame Teórico Moçambique 2026 disponível na Google Play.
            </p>
          </div>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-800 hover:border-gray-700 hover:text-white transition-all duration-150 focus:outline-none focus:ring-1 focus:ring-primary"
            aria-label="Voltar ao Topo"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Voltar ao topo</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
