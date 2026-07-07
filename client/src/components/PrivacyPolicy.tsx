/**
 * PrivacyPolicy — Modal overlay com Política de Privacidade (LGPD)
 * Baseada em referências de empresas brasileiras de tecnologia
 */
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicy({ isOpen, onClose }: PrivacyPolicyProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.25,
            ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
          }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-3xl mx-4 my-8 md:my-16 bg-[#0d0d24] border border-white/10 rounded-2xl shadow-2xl"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{
              duration: 0.35,
              ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Header fixo */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 md:px-8 py-5 bg-[#0d0d24]/95 backdrop-blur-md border-b border-white/5 rounded-t-2xl">
              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-all duration-200"
                  aria-label="Voltar"
                >
                  <ArrowLeft size={18} />
                </button>
                <h2 className="text-lg md:text-xl font-bold text-white">
                  Política de Privacidade
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-all duration-200"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>
            </div>

            {/* Conteúdo */}
            <div className="px-6 md:px-8 py-8 text-white/70 text-sm leading-relaxed space-y-6">
              <p className="text-xs text-white/40">
                Última atualização: Julho de 2025
              </p>

              <section>
                <h3 className="text-base font-semibold text-white mb-3">
                  1. Informações Gerais
                </h3>
                <p>
                  A{" "}
                  <strong className="text-white/90">DEBUG SOFTWARE LTDA</strong>
                  , inscrita no CNPJ nº 46.428.797/0001-23, com sede na Av.
                  Paulista, nº 1636, Conjunto 4, Pavimento 15, Bairro Bela
                  Vista, São Paulo-SP, doravante denominada "Debug Software",
                  valoriza a privacidade e a proteção dos dados pessoais de
                  todas as pessoas com quem se relaciona.
                </p>
                <p className="mt-3">
                  Esta Política de Privacidade tem como objetivo explicar, de
                  forma clara e acessível, como os dados pessoais são coletados,
                  tratados, armazenados e protegidos no contexto dos sites,
                  sistemas, plataformas e serviços da Debug Software, em
                  conformidade com a Lei Geral de Proteção de Dados (Lei nº
                  13.709/2018 — LGPD) e demais legislações aplicáveis.
                </p>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-3">
                  2. Definições
                </h3>
                <p>Para os fins desta Política, consideram-se:</p>
                <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
                  <li>
                    <strong className="text-white/80">Dados Pessoais:</strong>{" "}
                    informações que identifiquem ou possam identificar uma
                    pessoa física.
                  </li>
                  <li>
                    <strong className="text-white/80">Titular:</strong> pessoa
                    física a quem se referem os dados pessoais.
                  </li>
                  <li>
                    <strong className="text-white/80">Tratamento:</strong> toda
                    operação realizada com dados pessoais (coleta,
                    armazenamento, uso, compartilhamento, eliminação, etc.).
                  </li>
                  <li>
                    <strong className="text-white/80">Controlador:</strong> a
                    Debug Software, responsável pelas decisões sobre o
                    tratamento de dados pessoais.
                  </li>
                  <li>
                    <strong className="text-white/80">Operador:</strong> pessoa
                    ou empresa que realiza o tratamento de dados em nome do
                    controlador.
                  </li>
                  <li>
                    <strong className="text-white/80">Consentimento:</strong>{" "}
                    manifestação livre, informada e inequívoca do titular
                    concordando com o tratamento de seus dados.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-3">
                  3. Dados Coletados
                </h3>
                <p>
                  A Debug Software poderá coletar os seguintes dados pessoais:
                </p>
                <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
                  <li>
                    Dados de identificação: nome completo, CPF/CNPJ, e-mail,
                    telefone.
                  </li>
                  <li>Dados profissionais: empresa, cargo, área de atuação.</li>
                  <li>
                    Dados de navegação: endereço IP, tipo de navegador, páginas
                    acessadas, tempo de permanência.
                  </li>
                  <li>
                    Dados de comunicação: mensagens enviadas via formulário de
                    contato, e-mails trocados.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-3">
                  4. Finalidades do Tratamento
                </h3>
                <p>
                  Os dados pessoais são tratados para as seguintes finalidades:
                </p>
                <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
                  <li>
                    Prestação dos serviços contratados (automações, soluções em
                    IA, consultoria).
                  </li>
                  <li>Atendimento a solicitações e suporte técnico.</li>
                  <li>Comunicação sobre produtos, serviços e atualizações.</li>
                  <li>Cumprimento de obrigações legais e regulatórias.</li>
                  <li>
                    Melhoria contínua dos serviços e experiência do usuário.
                  </li>
                  <li>Segurança das aplicações e prevenção de fraudes.</li>
                  <li>
                    Exercício regular de direitos em processos judiciais,
                    administrativos ou arbitrais.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-3">
                  5. Bases Legais
                </h3>
                <p>
                  O tratamento de dados pessoais é realizado com base nas
                  seguintes hipóteses legais previstas na LGPD:
                </p>
                <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
                  <li>Consentimento do titular (Art. 7º, I).</li>
                  <li>
                    Execução de contrato ou procedimentos preliminares (Art. 7º,
                    V).
                  </li>
                  <li>
                    Cumprimento de obrigação legal ou regulatória (Art. 7º, II).
                  </li>
                  <li>Legítimo interesse do controlador (Art. 7º, IX).</li>
                </ul>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-3">
                  6. Compartilhamento de Dados
                </h3>
                <p>
                  Os dados pessoais poderão ser compartilhados com terceiros nas
                  seguintes situações:
                </p>
                <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
                  <li>
                    Fornecedores e parceiros essenciais à prestação dos
                    serviços.
                  </li>
                  <li>
                    Provedores de infraestrutura em nuvem e serviços
                    tecnológicos.
                  </li>
                  <li>
                    Autoridades públicas, quando exigido por lei ou determinação
                    judicial.
                  </li>
                  <li>Terceiros, mediante consentimento prévio do titular.</li>
                </ul>
                <p className="mt-3">
                  Todos os terceiros envolvidos são contratualmente obrigados a
                  observar obrigações de confidencialidade, segurança da
                  informação e proteção de dados.
                </p>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-3">
                  7. Segurança dos Dados
                </h3>
                <p>
                  A Debug Software adota medidas técnicas e organizacionais
                  adequadas para proteger os dados pessoais contra acessos não
                  autorizados, perda, alteração ou qualquer forma de tratamento
                  inadequado, incluindo:
                </p>
                <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
                  <li>Criptografia de dados em trânsito e em repouso.</li>
                  <li>
                    Controle de acesso baseado no princípio do menor privilégio.
                  </li>
                  <li>Monitoramento contínuo de sistemas e infraestrutura.</li>
                  <li>Rotinas de backup e recuperação de dados.</li>
                  <li>
                    Treinamento periódico da equipe em segurança da informação.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-3">
                  8. Cookies
                </h3>
                <p>
                  Utilizamos cookies e tecnologias similares para garantir o
                  funcionamento adequado do site, melhorar a experiência de
                  navegação e analisar o uso dos serviços. O usuário pode
                  gerenciar as preferências de cookies diretamente em seu
                  navegador.
                </p>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-3">
                  9. Direitos do Titular
                </h3>
                <p>
                  Em conformidade com a LGPD (Art. 18), o titular dos dados
                  pessoais tem direito a:
                </p>
                <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
                  <li>Confirmação da existência de tratamento.</li>
                  <li>Acesso aos dados pessoais.</li>
                  <li>
                    Correção de dados incompletos, inexatos ou desatualizados.
                  </li>
                  <li>
                    Anonimização, bloqueio ou eliminação de dados desnecessários
                    ou excessivos.
                  </li>
                  <li>Portabilidade dos dados a outro fornecedor.</li>
                  <li>Eliminação dos dados tratados com consentimento.</li>
                  <li>
                    Informação sobre compartilhamento de dados com terceiros.
                  </li>
                  <li>Revogação do consentimento a qualquer momento.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-3">
                  10. Retenção dos Dados
                </h3>
                <p>
                  Os dados pessoais são armazenados pelo tempo necessário para
                  cumprir as finalidades para as quais foram coletados,
                  incluindo obrigações legais, contratuais, de prestação de
                  contas ou requisição de autoridades competentes. Após o
                  término do tratamento, os dados serão eliminados de forma
                  segura, salvo quando houver obrigação legal de retenção.
                </p>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-3">
                  11. Alterações nesta Política
                </h3>
                <p>
                  A Debug Software reserva-se o direito de alterar esta Política
                  de Privacidade a qualquer momento. As alterações entrarão em
                  vigor a partir de sua publicação no site. Recomendamos a
                  consulta periódica deste documento.
                </p>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-3">
                  12. Contato
                </h3>
                <p>
                  Para exercer seus direitos, esclarecer dúvidas ou fazer
                  solicitações relacionadas a esta Política de Privacidade,
                  entre em contato conosco:
                </p>
                <div className="mt-3 p-4 bg-white/5 rounded-lg border border-white/10">
                  <p>
                    <strong className="text-white/80">
                      Debug Software LTDA
                    </strong>
                  </p>
                  <p>Encarregado de Proteção de Dados (DPO)</p>
                  <p className="mt-2">E-mail: contato@debugsoftware.com.br</p>
                  <p>Telefone: (91) 98051-4660</p>
                  <p className="mt-2">
                    Av. Paulista, nº 1636, Conjunto 4, Pavimento 15
                    <br />
                    Bairro Bela Vista — São Paulo/SP
                  </p>
                </div>
              </section>
            </div>

            {/* Footer do modal */}
            <div className="px-6 md:px-8 py-5 border-t border-white/5 flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#7b2ff7] to-[#00b4d8] text-white text-sm font-medium hover:opacity-90 transition-opacity duration-200"
              >
                Fechar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
