import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Utilização | Exame Teórico Moçambique 2026",
  description: "Termos e condições de uso oficiais do aplicativo Exame Teórico Moçambique 2026.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-brand-bg py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm text-left">
            <h1 className="text-3xl font-extrabold text-brand-dark mb-2">
              Termos de Utilização
            </h1>
            <p className="text-xs text-gray-400 mb-8 uppercase tracking-wider font-bold">
              Última atualização: 12 de Julho de 2026
            </p>

            <div className="space-y-6 text-gray-600 text-sm sm:text-base leading-relaxed">
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-brand-dark">1. Aceitação dos Termos</h2>
                <p>
                  Ao descarregar, instalar ou utilizar o aplicativo <strong>Exame Teórico Moçambique 2026</strong>, o utilizador concorda expressamente em cumprir todos os termos e condições descritos neste documento. Caso não concorde com algum destes termos, não deve utilizar o aplicativo.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-brand-dark">2. Licença de Uso Limitada</h2>
                <p>
                  Concedemos ao utilizador uma licença pessoal, revogável, não exclusiva, intransmissível e limitada para utilizar o aplicativo apenas para fins educativos de preparação para o exame de condução, em conformidade com as regras estabelecidas nestes Termos.
                </p>
                <p>
                  É estritamente proibido:
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Copiar, descompilar, realizar engenharia reversa ou tentar extrair o código-fonte do aplicativo.</li>
                  <li>Modificar ou criar trabalhos derivados baseados no aplicativo ou no seu banco de dados de perguntas.</li>
                  <li>Utilizar o aplicativo para fins comerciais não autorizados.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-brand-dark">3. Isenção de Responsabilidade Oficial</h2>
                <p>
                  O aplicativo <strong>Exame Teórico Moçambique 2026</strong> é uma ferramenta de estudo complementar e independente.{" "}
                  <strong className="text-brand-dark">Não temos qualquer ligação oficial, afiliação ou parceria com o Instituto Nacional dos Transportes Terrestres (INATRO)</strong> ou qualquer outra entidade governamental de Moçambique.
                </p>
                <p>
                  Embora nos esforcemos ao máximo para manter todas as perguntas, respostas e sinalizações atualizadas de acordo com o regulamento de trânsito em vigor, não garantimos a aprovação no exame oficial nem nos responsabilizamos por eventuais falhas, reprovações ou erros no conteúdo das questões reais aplicadas pelos examinadores oficiais.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-brand-dark">4. Funcionamento Offline e Modificações</h2>
                <p>
                  Reservamo-nos o direito de alterar, suspender ou descontinuar o aplicativo ou qualquer funcionalidade a qualquer momento, bem como lançar atualizações corretivas ou evolutivas sem aviso prévio. O funcionamento do aplicativo está condicionado à compatibilidade do dispositivo Android do utilizador.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-brand-dark">5. Propriedade Intelectual</h2>
                <p>
                  Todos os logótipos, designs, gráficos, código de programação e textos criados pelo desenvolvedor são de propriedade intelectual exclusiva do criador do aplicativo, protegidos pela legislação de direitos de autor aplicável.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-brand-dark">6. Contacto e Dúvidas</h2>
                <p>
                  Caso pretenda esclarecer qualquer questão relativa a estes Termos de Utilização, por favor envie uma mensagem para:{" "}
                  <a href="mailto:edsonchivambo@gmail.com" className="text-primary hover:underline font-bold">
                    edsonchivambo@gmail.com
                  </a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
