import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Exame Teórico Moçambique 2026",
  description: "Política de privacidade oficial do aplicativo Exame Teórico Moçambique 2026. Saiba como lidamos com os seus dados.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-brand-bg py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm text-left">
            <h1 className="text-3xl font-extrabold text-brand-dark mb-2">
              Política de Privacidade
            </h1>
            <p className="text-xs text-gray-400 mb-8 uppercase tracking-wider font-bold">
              Última atualização: 12 de Julho de 2026
            </p>

            <div className="space-y-6 text-gray-600 text-sm sm:text-base leading-relaxed">
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-brand-dark">1. Introdução</h2>
                <p>
                  Bem-vindo ao <strong>Exame Teórico Moçambique 2026</strong>. A sua privacidade é de extrema importância para nós. Esta Política de Privacidade explica como o nosso aplicativo recolhe, utiliza e protege as suas informações quando utiliza o nosso serviço.
                </p>
                <p>
                  O aplicativo foi desenvolvido para ser executado de forma autónoma e, por padrão, <strong>não recolhe informações de identificação pessoal</strong> dos seus utilizadores.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-brand-dark">2. Recolha de Dados e Funcionamento Offline</h2>
                <p>
                  O nosso aplicativo funciona 100% offline. Isso significa que as suas respostas aos simulados, notas obtidas e estatísticas de progresso são guardadas localmente e de forma segura apenas no seu próprio dispositivo Android.
                </p>
                <p>
                  Não enviamos as suas estatísticas pessoais para servidores externos e nenhum terceiro tem acesso ao seu histórico de estudos através da nossa infraestrutura.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-brand-dark">3. Permissões Requeridas</h2>
                <p>
                  Para o correto funcionamento do aplicativo, poderemos solicitar algumas permissões básicas no seu dispositivo Android, tais como:
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li><strong>Acesso ao Armazenamento/Memória:</strong> Necessário exclusivamente para guardar localmente o progresso dos seus simulados e preferências de interface.</li>
                  <li><strong>Acesso à Rede (Opcional):</strong> Utilizado apenas para verificar se existem novas atualizações de perguntas na Google Play Store.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-brand-dark">4. Anúncios e Publicidade (AdMob)</h2>
                <p>
                  Para manter o aplicativo gratuito e apoiar o desenvolvimento contínuo, poderemos exibir anúncios através do serviço Google AdMob. O AdMob poderá recolher identificadores anónimos do dispositivo (como o ID de publicidade do Android) para fins de personalização de anúncios e análise de tráfego, em conformidade com as políticas da Google.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-brand-dark">5. Segurança dos Dados</h2>
                <p>
                  Embora as suas informações de progresso fiquem guardadas exclusivamente no seu telemóvel, recomendamos que mantenha o seu sistema operativo atualizado e não realize alterações de segurança não autorizadas (root) no seu dispositivo, a fim de garantir a integridade dos seus dados armazenados.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-brand-dark">6. Alterações a Esta Política</h2>
                <p>
                  Poderemos atualizar a nossa Política de Privacidade periodicamente. Qualquer alteração será publicada nesta página, com a respetiva data de atualização no topo. Aconselhamos a leitura regular deste documento.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-brand-dark">7. Contacto</h2>
                <p>
                  Se tiver qualquer dúvida ou sugestão sobre a nossa Política de Privacidade, não hesite em contactar-nos através do e-mail:{" "}
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
