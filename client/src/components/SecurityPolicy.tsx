/**
 * SecurityPolicy — Modal overlay com Política de Segurança da Informação
 * Baseada em referências de empresas brasileiras de tecnologia
 */
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";

interface SecurityPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SecurityPolicy({
  isOpen,
  onClose,
}: SecurityPolicyProps) {
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
                  Política de Segurança
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
                  1. Objetivo
                </h3>
                <p>
                  Esta Política de Segurança da Informação tem como objetivo
                  estabelecer diretrizes claras e abrangentes para garantir a
                  segurança, integridade, confidencialidade e disponibilidade
                  das informações tratadas pela{" "}
                  <strong className="text-white/90">DEBUG SOFTWARE LTDA</strong>
                  , em conformidade com a Lei Geral de Proteção de Dados (LGPD —
                  Lei nº 13.709/2018) e as melhores práticas de mercado.
                </p>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-3">
                  2. Escopo e Aplicabilidade
                </h3>
                <p>
                  Esta política se aplica a todos os colaboradores, prestadores
                  de serviço, parceiros e terceiros que acessem, utilizem ou
                  processem informações, sistemas e recursos tecnológicos da
                  Debug Software, independentemente de sua localização
                  geográfica.
                </p>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-3">
                  3. Princípios de Segurança
                </h3>
                <p>
                  A Debug Software fundamenta sua política nos seguintes
                  princípios:
                </p>
                <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
                  <li>
                    <strong className="text-white/80">
                      Confidencialidade:
                    </strong>{" "}
                    garantir que as informações sejam acessíveis apenas a
                    pessoas autorizadas.
                  </li>
                  <li>
                    <strong className="text-white/80">Integridade:</strong>{" "}
                    assegurar que as informações sejam precisas, completas e não
                    sofram alterações indevidas.
                  </li>
                  <li>
                    <strong className="text-white/80">Disponibilidade:</strong>{" "}
                    garantir que as informações e sistemas estejam acessíveis
                    quando necessário.
                  </li>
                  <li>
                    <strong className="text-white/80">Autenticidade:</strong>{" "}
                    assegurar a veracidade da origem das informações.
                  </li>
                  <li>
                    <strong className="text-white/80">Não repúdio:</strong>{" "}
                    garantir que ações realizadas não possam ser negadas
                    posteriormente.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-3">
                  4. Medidas Técnicas de Proteção
                </h3>
                <p>
                  A Debug Software implementa as seguintes medidas técnicas:
                </p>
                <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
                  <li>
                    Criptografia TLS/SSL em todas as comunicações de dados.
                  </li>
                  <li>
                    Criptografia de dados em repouso em bancos de dados e
                    armazenamento.
                  </li>
                  <li>
                    Firewall e sistemas de detecção/prevenção de intrusão
                    (IDS/IPS).
                  </li>
                  <li>
                    Monitoramento contínuo de logs e eventos de segurança.
                  </li>
                  <li>
                    Atualizações regulares de sistemas operacionais e softwares.
                  </li>
                  <li>
                    Testes periódicos de vulnerabilidade e análise de riscos.
                  </li>
                  <li>
                    Segregação de ambientes (desenvolvimento, homologação,
                    produção).
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-3">
                  5. Controle de Acesso
                </h3>
                <p>
                  O acesso a sistemas, dados e recursos tecnológicos é concedido
                  com base no princípio do menor privilégio, garantindo que cada
                  pessoa tenha acesso apenas às informações estritamente
                  necessárias para o desempenho de suas funções.
                </p>
                <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
                  <li>Credenciais de acesso são pessoais e intransferíveis.</li>
                  <li>
                    Autenticação multifator (MFA) obrigatória para acessos
                    críticos.
                  </li>
                  <li>
                    Senhas devem conter no mínimo 8 caracteres com complexidade
                    adequada.
                  </li>
                  <li>Revisão periódica de permissões e acessos concedidos.</li>
                  <li>
                    Bloqueio imediato de contas em caso de desligamento ou
                    suspeita de comprometimento.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-3">
                  6. Gestão de Incidentes
                </h3>
                <p>
                  A Debug Software mantém um processo estruturado para
                  identificação, contenção, erradicação e recuperação de
                  incidentes de segurança da informação:
                </p>
                <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
                  <li>
                    Todos os incidentes devem ser reportados imediatamente à
                    equipe de segurança.
                  </li>
                  <li>
                    Incidentes são classificados por severidade e impacto.
                  </li>
                  <li>
                    Plano de resposta a incidentes com procedimentos
                    documentados.
                  </li>
                  <li>
                    Comunicação à ANPD e aos titulares afetados quando aplicável
                    (Art. 48, LGPD).
                  </li>
                  <li>
                    Análise pós-incidente para identificação de causas e
                    implementação de melhorias.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-3">
                  7. Backup e Recuperação
                </h3>
                <p>
                  A Debug Software realiza rotinas periódicas de backup para
                  garantir a recuperação de dados em caso de perda, corrupção ou
                  desastre:
                </p>
                <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
                  <li>
                    Backups automáticos diários com retenção mínima de 30 dias.
                  </li>
                  <li>
                    Armazenamento de cópias em localidades geograficamente
                    distintas.
                  </li>
                  <li>
                    Testes periódicos de restauração para validação da
                    integridade.
                  </li>
                  <li>
                    Criptografia dos dados de backup em trânsito e em repouso.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-3">
                  8. Desenvolvimento Seguro
                </h3>
                <p>
                  Todos os sistemas e soluções desenvolvidos pela Debug Software
                  seguem práticas de desenvolvimento seguro:
                </p>
                <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
                  <li>Revisão de código e análise estática de segurança.</li>
                  <li>
                    Testes de vulnerabilidade antes da implantação em produção.
                  </li>
                  <li>
                    Princípio de segurança por design (security by design).
                  </li>
                  <li>
                    Gestão segura de credenciais e segredos (secrets
                    management).
                  </li>
                  <li>Versionamento e rastreabilidade de alterações.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-3">
                  9. Infraestrutura e Hospedagem
                </h3>
                <p>
                  A infraestrutura da Debug Software é projetada para alta
                  disponibilidade e segurança:
                </p>
                <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
                  <li>
                    Servidores em provedores de nuvem com certificações de
                    segurança reconhecidas.
                  </li>
                  <li>Isolamento de ambientes via containerização (Docker).</li>
                  <li>
                    Proxy reverso com certificados SSL/TLS gerenciados
                    automaticamente.
                  </li>
                  <li>Proteção contra DDoS e ataques de força bruta.</li>
                  <li>Monitoramento 24/7 de disponibilidade e performance.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-3">
                  10. Inteligência Artificial e Dados
                </h3>
                <p>
                  No contexto dos serviços de inteligência artificial oferecidos
                  pela Debug Software:
                </p>
                <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
                  <li>
                    Dados utilizados em modelos de IA são anonimizados quando
                    possível.
                  </li>
                  <li>
                    Resultados gerados por IA possuem caráter auxiliar e devem
                    ser validados pelo usuário.
                  </li>
                  <li>
                    Não utilizamos dados de clientes para treinamento de modelos
                    sem consentimento explícito.
                  </li>
                  <li>
                    Logs de interação com IA são armazenados de forma segura e
                    com acesso restrito.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-3">
                  11. Responsabilidades
                </h3>
                <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
                  <li>
                    <strong className="text-white/80">Direção:</strong> aprovar
                    e garantir recursos para a implementação desta política.
                  </li>
                  <li>
                    <strong className="text-white/80">Equipe Técnica:</strong>{" "}
                    implementar e manter os controles de segurança.
                  </li>
                  <li>
                    <strong className="text-white/80">Colaboradores:</strong>{" "}
                    cumprir as diretrizes e reportar incidentes.
                  </li>
                  <li>
                    <strong className="text-white/80">
                      Terceiros e Parceiros:
                    </strong>{" "}
                    observar as obrigações contratuais de segurança.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-3">
                  12. Conformidade Legal
                </h3>
                <p>
                  Esta política está alinhada com as seguintes legislações e
                  normas:
                </p>
                <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
                  <li>
                    Lei Geral de Proteção de Dados — LGPD (Lei nº 13.709/2018).
                  </li>
                  <li>Marco Civil da Internet (Lei nº 12.965/2014).</li>
                  <li>
                    Decreto nº 11.856/2023 — Política Nacional de
                    Cibersegurança.
                  </li>
                  <li>Boas práticas ISO 27001 e ISO 27002.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-3">
                  13. Revisão e Atualização
                </h3>
                <p>
                  Esta Política de Segurança será revisada anualmente ou sempre
                  que houver mudanças significativas na legislação, na
                  infraestrutura tecnológica ou nos processos da empresa. Casos
                  não previstos serão analisados pela equipe técnica e pela
                  direção da Debug Software.
                </p>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-3">
                  14. Contato
                </h3>
                <p>
                  Para reportar incidentes de segurança, esclarecer dúvidas ou
                  fazer solicitações relacionadas a esta política, entre em
                  contato:
                </p>
                <div className="mt-3 p-4 bg-white/5 rounded-lg border border-white/10">
                  <p>
                    <strong className="text-white/80">
                      Debug Software LTDA
                    </strong>
                  </p>
                  <p>Responsável pela Segurança da Informação</p>
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
