import Image from "next/image";
import { Header } from "@/components/header";
import { Arrow, Mark } from "@/components/icons";
import { Motion } from "@/components/motion";
import { Study } from "@/components/study";
import { CareExplorer } from "@/components/care-explorer";
import { clinic, siteName, faq, hasContact, whatsappUrl } from "@/lib/site";
const stages = [
  [
    "Escutar.",
    "O começo é a sua história.",
    "Antes de qualquer cuidado, espaço para ouvir. Entender o que você sente, o que procura e o que faz parte da sua rotina.",
  ],
  [
    "Compreender.",
    "Cada pessoa, uma necessidade.",
    "Um olhar individual ajuda a entender as possibilidades de atendimento. Com explicações claras e tempo para suas dúvidas.",
  ],
  [
    "Cuidar.",
    "Atenção que acompanha você.",
    "Orientações para o dia a dia e próximos passos construídos com respeito às suas necessidades e aos limites de cada prática.",
  ],
];
export default function Home() {
  const whatsapp = whatsappUrl(clinic.contact?.whatsapp);
  return (
    <>
      <Motion />
      <Header name={clinic.name} />
      <main id="conteudo">
        <section id="inicio" className="hero">
          <div className="hero-image" data-parallax>
            <Image
              src={clinic.photos?.hero ?? "/images/cuidado-editorial.png"}
              alt="Composição editorial ilustrativa: escultura de um pé em vidro fosco, ramo de eucalipto e linho em luz natural"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 65vw"
            />
          </div>
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="seed-dot" /> PODOLOGIA & TERAPIAS INTEGRATIVAS
            </p>
            <h1>
              Cuidado para <br />
              os seus pés.
              <br />
              <span>
                Atenção para você <br />
                por inteiro.
              </span>
            </h1>
            <p>
              Um espaço de escuta e cuidado individualizado. Atenção à saúde dos
              pés e práticas complementares de bem-estar.
            </p>
            <a href="#cuidados" className="button">
              Conhecer os cuidados <Arrow />
            </a>
            <a href="#primeiro-contato" className="text-link hero-how">
              Como funciona <Arrow />
            </a>
            <div className="hero-index">
              <span>01 / CUIDADO QUE COMEÇA EM VOCÊ</span>
              <span aria-hidden="true">↓</span>
            </div>
          </div>
          <div className="image-note">
            IMAGEM CONCEITUAL · CRIADA PARA ESTE PROJETO
          </div>
        </section>
        <section className="intro section wrap" aria-labelledby="intro-title">
          <p className="eyebrow">CONEXÕES QUE IMPORTAM</p>
          <div className="intro-layout">
            <h2 id="intro-title" data-reveal>
              Seus pés sustentam
              <br />a sua história.
              <br />
              <span>
                O cuidado começa
                <br />
                pela atenção.
              </span>
            </h2>
            <div className="intro-copy" data-reveal>
              <p>
                Há um caminho entre cuidar dos pés e olhar para você por
                inteiro.
              </p>
              <p>
                A podologia e as terapias integrativas se encontram na escuta e
                no cuidado individualizado. Cada área tem sua própria proposta.
                O ponto de partida é sempre você.
              </p>
              <a href="#abordagem" className="text-link">
                Conheça nossa abordagem <Arrow />
              </a>
            </div>
          </div>
        </section>
        <section
          id="cuidados"
          className="dark-section section"
          aria-labelledby="care-title"
        >
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">DOIS CAMINHOS. UM OLHAR ATENTO.</p>
                <h2 id="care-title" data-reveal>
                  Encontre espaço
                  <br />
                  para o seu cuidado.
                </h2>
              </div>
              <p>
                Possibilidades que começam com escuta.
                <br />
                Cuidados definidos para cada pessoa.
              </p>
            </div>
            <div className="care-grid">
              <article className="care-area" id="podologia" data-reveal>
                <div className="care-visual foot-visual">
                  <span className="number-pill">PODOLOGIA</span>
                  <svg
                    className="foot-study"
                    viewBox="0 0 300 300"
                    role="img"
                    aria-label="Estudo ilustrado de um pé"
                  >
                    <g fill="none" stroke="currentColor" strokeWidth="1.1">
                      <circle cx="150" cy="150" r="112" strokeDasharray="1 5" />
                      <path d="M125 249c-29-28-16-58 1-94 16-35 12-57 14-89 2-25 17-40 36-33 21 7 19 27 10 48-15 31-20 52-9 80 13 35 23 61 11 82-13 23-44 25-63 6Z" />
                      <ellipse cx="202" cy="31" rx="11" ry="15" />
                      <ellipse cx="177" cy="17" rx="7" ry="10" />
                      <ellipse cx="159" cy="20" rx="5" ry="8" />
                      <ellipse cx="144" cy="28" rx="4" ry="6" />
                      <path d="M149 229c-9-22 11-46 10-71-1-24-8-42 4-68M25 150h20m-10-10v20M255 150h20m-10-10v20" />
                    </g>
                  </svg>
                  <span className="visual-caption">
                    ATENÇÃO À SAÚDE DOS PÉS
                  </span>
                </div>
                <div className="care-title">
                  <h3>Podologia</h3>
                  <span className="mono">01</span>
                </div>
                <p>
                  Atenção às necessidades dos pés e orientações de cuidado para
                  o dia a dia.
                </p>
                <a className="text-link" href="#explorar-podologia">
                  Conhecer esse cuidado <Arrow />
                </a>
              </article>
              <article className="care-area" id="terapias" data-reveal>
                <div className="care-visual botanical-visual">
                  <span className="number-pill">TERAPIAS INTEGRATIVAS</span>
                  <svg
                    viewBox="0 0 300 300"
                    role="img"
                    aria-label="Ramo botânico original em linhas delicadas"
                  >
                    <g fill="none" stroke="currentColor" strokeWidth="1">
                      <circle cx="150" cy="150" r="110" />
                      <circle cx="150" cy="150" r="91" strokeDasharray="2 6" />
                      <path d="M144 266c25-68-11-113 18-176 10-23 12-38 8-61M156 147c-51-9-72-44-56-80 47 11 62 43 56 80Zm4-31c43-4 68-26 72-60-41 3-69 27-72 60Zm-7 81c-53 0-85-31-84-70 47 4 76 30 84 70Zm-1 29c46 0 78-25 90-62-48-1-81 28-90 62Z" />
                    </g>
                  </svg>
                  <span className="visual-caption">
                    ACOLHIMENTO E BEM-ESTAR
                  </span>
                </div>
                <div className="care-title">
                  <h3>Terapias integrativas</h3>
                  <span className="mono">02</span>
                </div>
                <p>
                  Práticas complementares de acolhimento, com respeito à sua
                  individualidade.
                </p>
                <a className="text-link" href="#explorar-terapias">
                  Conhecer esse cuidado <Arrow />
                </a>
              </article>
            </div>
            {clinic.services.length ? (
              <div className="services-list">
                {clinic.services.map((service) => (
                  <article key={service.name}>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <a href="#contato" className="text-link">
                      Consultar atendimento <Arrow />
                    </a>
                  </article>
                ))}
              </div>
            ) : (
              <p className="care-note">
                Os serviços específicos serão apresentados após confirmação com
                a profissional.
              </p>
            )}
          </div>
        </section>
        <section
          id="explorar"
          className="section wrap explore-section"
          aria-labelledby="explore-title"
        >
          <div>
            <p className="eyebrow">CONHEÇA AS POSSIBILIDADES</p>
            <h2 id="explore-title" data-reveal>
              Um cuidado.
              <br />
              Diferentes olhares.
            </h2>
            <p>Entenda a proposta de cada área.</p>
            <div className="explore-mark" aria-hidden="true">
              <Mark />
            </div>
          </div>
          <CareExplorer />
        </section>
        <section
          id="abordagem"
          className="approach-section"
          aria-labelledby="approach-title"
        >
          <div className="wrap approach-heading">
            <p className="eyebrow">A NATUREZA DO NOSSO CUIDADO</p>
            <h2 id="approach-title" data-reveal>
              Precisão no cuidado.
              <br />
              Presença no atendimento.
            </h2>
          </div>
          <div className="wrap scroll-story">
            <div className="study-sticky">
              <div className="study-frame">
                <Study />
                <div className="study-progress" aria-hidden="true">
                  <span />
                </div>
                <p className="study-caption">
                  <span>UM OLHAR QUE CONECTA.</span>
                  <span data-stage-label>01 — ESCUTAR</span>
                </p>
              </div>
            </div>
            <div className="story-stages">
              {stages.map(([title, subtitle, text], i) => (
                <article className="story-stage" data-stage={i} key={title}>
                  <span className="mono">0{i + 1} / A ABORDAGEM</span>
                  <h3 data-reveal>{title}</h3>
                  <p className="stage-subtitle">{subtitle}</p>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="sobre" className="about-section section">
          <div className="wrap about-layout">
            <div className="about-photo" data-reveal>
              <Image
                src={
                  clinic.professional?.photo ?? "/images/cuidado-editorial.png"
                }
                alt={
                  clinic.professional?.photo
                    ? clinic.professional.name
                    : "Composição conceitual de vidro fosco, eucalipto e linho; não representa o local de atendimento"
                }
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
              />
              <span className="photo-label">
                {clinic.professional?.photo
                  ? "SOBRE A PROFISSIONAL"
                  : "ESTUDO VISUAL DO CUIDADO"}
              </span>
            </div>
            <div className="about-copy">
              <p className="eyebrow">
                {clinic.professional
                  ? "SOBRE A PROFISSIONAL"
                  : "A PROPOSTA DE ATENDIMENTO"}
              </p>
              <h2 data-reveal>
                {clinic.professional?.name ?? (
                  <>
                    Cuidar é olhar
                    <br />
                    com atenção.
                  </>
                )}
              </h2>
              <p>
                {clinic.professional?.biography ??
                  "Um encontro entre o olhar atento às necessidades dos pés e o acolhimento das práticas complementares de bem-estar."}
              </p>
              <p>
                Com escuta, respeito à individualidade e explicações claras, o
                cuidado encontra o seu próprio ritmo.
              </p>
              {clinic.professional?.qualifications?.map((item) => (
                <p key={item} className="small-copy">
                  {item}
                </p>
              ))}
              <a href="#contato" className="text-link">
                Vamos conversar <Arrow />
              </a>
            </div>
          </div>
        </section>
        <section id="primeiro-contato" className="section wrap first-contact">
          <div className="section-heading">
            <div>
              <p className="eyebrow">O PRIMEIRO PASSO É SIMPLES</p>
              <h2 data-reveal>
                Uma conversa.
                <br />
                Novas possibilidades.
              </h2>
            </div>
            <p>
              Não é preciso saber por onde começar.
              <br />O primeiro contato é para isso.
            </p>
          </div>
          <ol className="steps">
            {[
              [
                "Entre em contato.",
                hasContact
                  ? "Use os canais de contato para consultar os atendimentos."
                  : "Os canais de atendimento serão disponibilizados nesta página.",
              ],
              [
                "Conte sua necessidade.",
                "Converse sobre o que você procura e esclareça suas dúvidas.",
              ],
              [
                "Combine os próximos passos.",
                "Consulte a disponibilidade e aguarde a confirmação do horário.",
              ],
            ].map(([title, text], i) => (
              <li data-reveal key={title}>
                <span className="mono">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
          <p className="small-copy muted">
            Uma solicitação de avaliação não representa um agendamento
            confirmado.
          </p>
        </section>
        <section id="duvidas" className="faq-section section">
          <div className="wrap faq-layout">
            <div>
              <p className="eyebrow">INFORMAÇÃO TAMBÉM É CUIDADO</p>
              <h2 data-reveal>
                Dúvidas, com calma
                <br />e clareza.
              </h2>
              <p>
                O que você precisa saber
                <br />
                para dar o primeiro passo.
              </p>
            </div>
            <div className="faq-list">
              {faq.map((item) => (
                <details key={item.question}>
                  <summary>
                    {item.question}
                    <span className="faq-indicator" aria-hidden="true" />
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section id="contato" className="dark-section contact-section section">
          <div className="wrap">
            <p className="eyebrow">ESPAÇO PARA VOCÊ</p>
            <div className="contact-layout">
              <div>
                <h2 data-reveal>
                  Seu cuidado começa
                  <br />
                  com uma conversa.
                </h2>
                <p>
                  No seu tempo.
                  <br />
                  Com atenção a cada detalhe.
                </p>
              </div>
              <div className="contact-panel">
                {hasContact ? (
                  <>
                    {whatsapp && (
                      <a
                        className="button inverse"
                        href={whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Solicitar avaliação <Arrow />
                      </a>
                    )}
                    {clinic.contact?.phone && (
                      <a
                        href={`tel:${clinic.contact.phone.replace(/[^+\d]/g, "")}`}
                        className="text-link"
                      >
                        {clinic.contact.phone} <Arrow />
                      </a>
                    )}
                    {clinic.contact?.email && (
                      <a
                        href={`mailto:${clinic.contact.email}`}
                        className="text-link"
                      >
                        {clinic.contact.email} <Arrow />
                      </a>
                    )}
                    <p className="small-copy">
                      Horário sujeito a confirmação direta com a profissional.
                    </p>
                  </>
                ) : (
                  <>
                    <span className="contact-badge">EM BREVE</span>
                    <h3>Vamos nos encontrar.</h3>
                    <p>
                      Os canais de atendimento serão disponibilizados aqui.
                      Volte para consultar as informações de contato.
                    </p>
                  </>
                )}
                {clinic.contact?.address && <p>{clinic.contact.address}</p>}
                {clinic.contact?.hours && <p>{clinic.contact.hours}</p>}
              </div>
            </div>
            <div className="contact-bottom">
              <Mark />
              <span>PODOLOGIA & TERAPIAS INTEGRATIVAS</span>
              <a href="#inicio" aria-label="Voltar ao início">
                ↑
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer wrap">
        <p>
          © {new Date().getFullYear()} {siteName}
        </p>
        <nav aria-label="Navegação do rodapé">
          <a href="#cuidados">Cuidados</a>
          <a href="#sobre">Sobre</a>
          <a href="#duvidas">Dúvidas</a>
          <a href="#contato">Contato</a>
          {clinic.social?.map((item) => (
            <a
              key={item.url}
              href={item.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <span>Cuidado em cada detalhe.</span>
      </footer>
    </>
  );
}
