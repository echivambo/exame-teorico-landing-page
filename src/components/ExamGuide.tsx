"use client";

import { motion, Variants } from "framer-motion";
import { 
  BookOpen, 
  HelpCircle, 
  CheckCircle2, 
  Award, 
  Info, 
  Lightbulb, 
  ArrowRight, 
  FileText,
  Clock,
  ShieldCheck
} from "lucide-react";

export default function ExamGuide() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="guia-exame" className="py-20 md:py-28 bg-brand-bg border-y border-gray-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-xs font-bold text-primary tracking-widest uppercase mb-3">
            Guia de Preparação Completo
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight">
            Exame Teórico de Condução em Moçambique: Tudo o que Precisa de Saber
          </p>
          <div className="w-16 h-1.5 bg-primary rounded-full mx-auto mt-4" />
          <p className="mt-4 text-gray-500 text-base sm:text-lg">
            Prepare-se com as melhores estratégias e compreenda em detalhe o funcionamento do código de estrada e as provas do INATRO.
          </p>
        </div>

        {/* Dynamic Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
        >
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Section 1: O que é */}
            <motion.div variants={itemVariants} className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-150/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 bg-primary-light rounded-2xl text-primary">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-dark">
                  O que é o exame teórico de condução?
                </h3>
              </div>
              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  O <strong>exame teórico de condução</strong> é a primeira grande etapa e um marco obrigatório na jornada de qualquer pessoa que deseja obter a sua carta de condução em Moçambique. O objetivo fundamental deste exame é testar e comprovar o domínio do candidato sobre os diversos regulamentos rodoviários, sinalética, normas de segurança e regras cívicas essenciais para o convívio saudável nas vias públicas.
                </p>
                <p>
                  Coordenado sob as diretrizes do <strong>INATRO (Instituto Nacional dos Transportes Terrestres)</strong>, a aprovação neste exame certifica que o futuro condutor conhece a fundo os seus direitos e deveres na estrada, compreende os limites de velocidade, regras de prioridade, marcas rodoviárias e sinalização luminosa. Independentemente de estar a preparar-se para conduzir veículos ligeiros, pesados ou motociclos, a avaliação teórica garante que entra para as aulas práticas com o embasamento técnico necessário para evitar acidentes e garantir a segurança coletiva.
                </p>
              </div>
            </motion.div>

            {/* Section 2: Como funciona */}
            <motion.div variants={itemVariants} className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-150/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 bg-cta-light rounded-2xl text-cta">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-dark">
                  Como funciona o exame oficial em Moçambique?
                </h3>
              </div>
              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  A prova de código oficial segue um padrão rigoroso. Conhecer a estrutura do exame ajuda a reduzir a ansiedade e melhora consideravelmente o tempo de reação durante o teste oficial:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <li className="flex items-start gap-3 bg-brand-bg p-4 rounded-xl border border-gray-100">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs mt-0.5">25</span>
                    <div>
                      <h4 className="font-bold text-brand-dark text-sm sm:text-base">Perguntas de Escolha Múltipla</h4>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">O exame é composto por vinte e cinco questões de múltipla escolha com imagens de situações reais de trânsito.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 bg-brand-bg p-4 rounded-xl border border-gray-100">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs mt-0.5">30</span>
                    <div>
                      <h4 className="font-bold text-brand-dark text-sm sm:text-base">Minutos de Duração</h4>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">O tempo limite para concluir e submeter a prova inteira é de trinta minutos, o que exige foco e atenção.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 bg-brand-bg p-4 rounded-xl border border-gray-100">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs mt-0.5">18</span>
                    <div>
                      <h4 className="font-bold text-brand-dark text-sm sm:text-base">Nota Mínima de Passagem</h4>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">Para ser aprovado, o candidato precisa de acertar um mínimo de dezoito perguntas (72% de aproveitamento mínimo).</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 bg-brand-bg p-4 rounded-xl border border-gray-100">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs mt-0.5">A-D</span>
                    <div>
                      <h4 className="font-bold text-brand-dark text-sm sm:text-base">Categorias do Exame</h4>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">Os simulados englobam questões de Categoria A (motos), B (ligeiros) e C/D (pesados e serviços públicos).</p>
                    </div>
                  </li>
                </ul>
                <p className="mt-3">
                  Errar oito ou mais perguntas resulta em reprovação automática, obrigando o candidato a realizar uma nova inscrição e a pagar as taxas correspondentes para repetir o exame teórico.
                </p>
              </div>
            </motion.div>

            {/* Section 3: Quantas perguntas existem */}
            <motion.div variants={itemVariants} className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-150/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 bg-yellow-50 rounded-2xl text-yellow-600">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-dark">
                  Quantas perguntas existem no banco de dados e nos simulados?
                </h3>
              </div>
              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  O Código de Estrada de Moçambique abrange uma vasta gama de regras de trânsito, o que significa que o banco de dados oficial do INATRO possui centenas de questões catalogadas. Para garantir que está totalmente preparado, a nossa aplicação possui um banco de simulados atualizado com mais de 500 perguntas cobrindo todos os módulos regulamentares.
                </p>
                <p>
                  Cada simulado feito na aplicação é gerado por algoritmos inteligentes que misturam as categorias de perguntas de forma equilibrada. Isso significa que fará testes contendo perguntas sobre:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold text-brand-dark">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Sinalização Vertical e Marcas Rodoviárias</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Regras Gerais de Prioridade de Passagem</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Limites de Velocidade por Tipo de Via</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Ultrapassagem, Mudança de Direção e Cruzamentos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Paragem, Estacionamento e Manobras Especiais</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Noções de Mecânica Geral e Manutenção do Veículo</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 4: Como estudar */}
            <motion.div variants={itemVariants} className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-150/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 bg-green-50 rounded-2xl text-green-600">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-dark">
                  Como estudar para passar no Exame Teórico à primeira?
                </h3>
              </div>
              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Para muitos candidatos, o código de estrada pode parecer intimidante devido à quantidade de informação e pequenos detalhes técnicos. Contudo, adotar uma estratégia de estudo focada e utilizar a nossa aplicação de forma estruturada pode fazer a diferença entre passar ou reprovar:
                </p>
                <div className="space-y-5 mt-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark">Estabeleça uma Rotina Diária de Simulados</h4>
                      <p className="text-sm text-gray-500 mt-1">
                        Estudar 15 a 30 minutos todos os dias é muito mais eficaz do que estudar 5 horas seguidas na véspera do exame. Faça pelo menos dois simulados completos por dia para manter o conteúdo fresco na memória.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark">Analise a Fundo os Seus Erros</h4>
                      <p className="text-sm text-gray-500 mt-1">
                        Sempre que errar uma resposta na nossa aplicação, pare e analise o porquê de ter errado. Veja a explicação detalhada e a regra do código aplicada. O erro é o melhor professor para não falhar na prova oficial.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark">Domine as Imagens de Intersecções e Cruzamentos</h4>
                      <p className="text-sm text-gray-500 mt-1">
                        As perguntas de prioridade em cruzamentos e rotundas com carros de várias direções geram muitas dúvidas e reprovações. Pratique intensamente essas imagens na nossa secção especializada de prioridades.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 5: Dicas cruciais */}
            <motion.div variants={itemVariants} className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-150/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 bg-amber-50 rounded-2xl text-amber-600">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-dark">
                  Dicas de ouro para o dia do seu exame
                </h3>
              </div>
              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Mesmo estando bem preparado teoricamente, fatores psicológicos e falta de atenção no dia do exame podem comprometer o seu resultado. Considere as seguintes dicas fundamentais:
                </p>
                <div className="bg-amber-50/50 rounded-2xl p-5 border border-amber-100 flex gap-4">
                  <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="space-y-3 text-sm text-amber-900">
                    <p>
                      <strong>Atenção ao vocabulário rodoviário:</strong> Palavras como "deve", "pode", "obrigatoriamente", "salvo se", "exclusivamente" alteram totalmente o significado de uma regra. Leia cada alternativa até o fim, pois a resposta correta é sempre a mais precisa e completa.
                    </p>
                    <p>
                      <strong>Gerencie o seu tempo:</strong> Com 30 minutos disponíveis, tem aproximadamente 72 segundos para cada questão. Se ficar preso numa pergunta muito confusa ou difícil, salte-a e passe para a seguinte. No final do teste, poderá voltar com mais calma para resolver as pendentes.
                    </p>
                    <p>
                      <strong>Cuidado com o nervosismo:</strong> A maioria das pessoas erra perguntas fáceis por pressa ou ansiedade. Respire fundo, relaxe os ombros e lembre-se de que os simulados que fez na nossa aplicação treinaram-no exatamente para aquele formato de perguntas.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Sidebar Info Column */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Quick Stats Widget */}
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-primary/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-white/10 rounded-full blur-xl" />
              <h4 className="font-extrabold text-lg sm:text-xl mb-4">
                Porquê treinar com a nossa aplicação?
              </h4>
              <ul className="space-y-4 text-sm text-green-50/90">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-green-200 shrink-0" />
                  <span><strong>100% Offline:</strong> Pratique em qualquer lugar em Moçambique sem gastar dados.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-green-200 shrink-0" />
                  <span><strong>Simulados idênticos:</strong> Siga as regras exatas do INATRO com limite de tempo real.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-green-200 shrink-0" />
                  <span><strong>Estatísticas detalhadas:</strong> Acompanhe os seus pontos fracos e veja a sua evolução histórica.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-green-200 shrink-0" />
                  <span><strong>Sem registos complexos:</strong> Baixe o app na Play Store e comece a estudar instantaneamente.</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.echivambo.exameteorico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-primary font-bold px-5 py-3 rounded-2xl hover:bg-green-50 transition-colors shadow-md w-full justify-center text-sm"
                >
                  <span>Descarregar Simulados</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Legislation Alert Widget */}
            <motion.div variants={itemVariants} className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-150/60 shadow-sm">
              <div className="flex items-center gap-3 mb-4 text-brand-dark">
                <FileText className="w-5 h-5 text-cta shrink-0" />
                <h4 className="font-bold text-base sm:text-lg">
                  Código de Estrada Moçambicano
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                Todas as perguntas da nossa aplicação estão baseadas no Código de Estrada aprovado pelo Decreto-Lei n.º 1/2011 de 15 de Junho e alterações vigentes em Moçambique. Garantimos que estuda apenas conteúdos em estrita conformidade com as leis rodoviárias em vigor, protegendo-o de materiais de estudo desatualizados ou de outros países.
              </p>
            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
