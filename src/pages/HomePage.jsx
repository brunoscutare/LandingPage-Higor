import heroPhoto from '../assets/IMG_2681.PNG'
import profilePhoto from '../assets/IMG_4126.PNG'
import { Check, X } from 'lucide-react'
import Footer from '../components/Footer.jsx'
import LocationCard from '../components/LocationCard.jsx'
import SectionMark from '../components/SectionMark.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import { DESIGN_STYLES as s } from '../constants/designs.js'
import {
  CRP,
  FAQ_ITEMS,
  HOW_IT_WORKS_STEPS,
  PRACTICAL_CHANGES,
  PROFESSIONAL_NAME,
  RECOGNITION_QUOTES,
  WHAT_WONT_HAPPEN,
} from '../constants/site.js'

function SectionShell({ id, children, className = '', sectionClass, mark, tone = 'green' }) {
  return (
    <section id={id} className={`${sectionClass} section-tone-${tone} ${className}`}>
      <div className={s.sectionInner}>
        {children}
        {mark ? <SectionMark name={mark} /> : null}
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <main className={s.main}>
      <section id="hero" className={s.hero}>
        <div className={s.heroInner}>
          <div className={s.heroText}>
            <h1 className={s.heroTitle}>
              <span className="block">Quando a dor começa a decidir o que você faz,</span>
              <span className={s.heroSubtitle}>ela deixou de ser só uma questão do corpo.</span>
            </h1>

            <p className={s.heroLead}>
              Atendimento psicológico para pessoas que convivem com dor persistente. Presencial em Araraquara ou online.
            </p>

            <div className={s.heroCta}>
              <WhatsAppButton>Conversar comigo pelo WhatsApp</WhatsAppButton>
              <p className="max-w-md text-sm leading-7 text-white/58">
                Quem responde é o próprio psicólogo, no mesmo dia. Você não passa por secretaria nem por fila de triagem.
              </p>
            </div>
          </div>

          <div className={s.heroMedia}>
            <figure className="min-w-0">
              <div className={`group ${s.photoWrap}`}>
                <div className="transition-transform duration-500 ease-out group-hover:scale-[1.04]">
                  <img src={heroPhoto} alt={`${PROFESSIONAL_NAME}, psicólogo`} className={s.photo} />
                </div>
              </div>
              <figcaption className={s.caption}>
                {PROFESSIONAL_NAME}, psicólogo, {CRP}
              </figcaption>
            </figure>
          </div>

          <SectionMark name="psi" />
        </div>
      </section>

      <SectionShell id="bloco-de-reconhecimento" sectionClass={s.section} mark="head" tone="brown">
        <h2 className={`${s.heading} ${s.headingWrap}`}>Se alguma dessas frases parece sua</h2>

        <ul className={s.quoteGrid}>
          {RECOGNITION_QUOTES.map((quote) => (
            <li key={quote} className={`${s.quoteItem} ${s.quoteHover}`}>
              “{quote}”
            </li>
          ))}
        </ul>

        <div className={`mt-10 max-w-3xl space-y-6 ${s.body}`}>
          <p>
            A última costuma ser a que mais dói e a que menos aparece nas consultas. Você começa a recusar convites porque
            não sabe como vai estar no dia. Vira a pessoa que sempre desmarca. Passa a evitar contar como está para não
            repetir sempre o mesmo assunto. E, aos poucos, sua vida vai ficando do tamanho dos seus dias bons.
          </p>
          <p>
            Isso não é fraqueza nem drama. É o que a dor persistente faz com a rotina, com os planos e com o jeito de se ver.
          </p>
        </div>
      </SectionShell>

      <SectionShell id="psicologia-e-dor" sectionClass={s.section} mark="brain" tone="green">
        <h2 className={`${s.heading} ${s.headingWrap}`}>Por que um psicólogo no tratamento da dor?</h2>

        <div className={`mt-8 max-w-3xl space-y-6 ${s.body}`}>
          <p>
            A dor não é produzida no lugar onde você a sente. Ela é produzida pelo sistema nervoso, que decide o tempo todo o
            quanto aquele sinal importa. E essa decisão sofre influência de sono, medo, atenção, expectativa, histórico e do
            que aquele movimento significou para você antes.
          </p>
          <p>
            Nada disso quer dizer que a dor é imaginada. Quer dizer que existem partes do quadro que remédio e fisioterapia
            não alcançam sozinhos, porque não são partes do tecido: são o medo de piorar, a desconfiança no próprio corpo, o
            abandono das atividades que sustentavam sua rotina, a sensação de ter perdido quem você era.
          </p>
          <p>É nessa parte que eu trabalho, junto do restante do tratamento.</p>
        </div>

        <h3 className="mt-14 text-2xl font-medium text-[var(--color-accent)]">Em que isso muda na prática</h3>

        <ul className={s.practicalGrid}>
          {PRACTICAL_CHANGES.map((item) => (
            <li key={item} className={s.practicalItem}>
              <span className={s.practicalCheck} aria-hidden="true">
                <Check size={13} strokeWidth={2.75} />
              </span>
              <p className={s.practicalText}>{item}</p>
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell id="como-funciona" sectionClass={s.section} mark="balance" tone="brown">
        <h2 className={s.heading}>Como funciona?</h2>

        <ol className={s.stepList}>
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <li key={step.title} className={`${s.stepItem} ${s.quoteHover}`}>
              <span className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]">{index + 1}.</span>
              <div>
                <h3 className="text-xl font-medium leading-8 text-white">{step.title}</h3>
                <p className={`mt-3 max-w-3xl ${s.body}`}>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className={`mt-12 max-w-3xl ${s.body}`}>
          Alguns tratamentos são planejados com tempo definido, dentro de um plano combinado desde o início. Outros ficam
          abertos, e a gente avalia junto ao longo do caminho. Isso se decide na primeira conversa, com você sabendo o que
          está sendo combinado.
        </p>
      </SectionShell>

      <SectionShell id="quem-sou" sectionClass={s.section} mark="heartMind" tone="brown">
        <div className={s.quemSouGrid}>
          <figure className="mx-auto w-full max-w-sm md:max-w-none">
            <div className={`group ${s.profileFrame}`}>
              <div className="transition-transform duration-500 ease-out group-hover:scale-[1.04]">
                <img
                  src={profilePhoto}
                  alt={`${PROFESSIONAL_NAME} em contexto de trabalho`}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>
          </figure>

          <div>
            <h2 className={s.heading}>{PROFESSIONAL_NAME}</h2>

            <div className={`mt-8 space-y-6 ${s.body}`}>
              <p>
                Sou psicólogo, {CRP}. Minha formação é em psicologia existencial, com especialização em Tanatologia, e hoje
                curso psicologia psicossomática. Atendo em uma clínica especializada em tratamento de dor, e também atendo
                pessoas em luto e em outros sofrimentos.
              </p>
              <p>
                O que essas formações têm em comum é o assunto: o que acontece com uma pessoa quando o corpo deixa de ser
                previsível, quando existe perda, quando a vida precisa ser reorganizada sem que você tenha escolhido isso.
              </p>
              <p>
                Não trabalho com fórmula, e não tenho pressa de te oferecer conclusão. Trabalho para que a dor seja
                compreendida e respeitada, e para que ela pare de ser quem manda.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="nao-acontece" sectionClass={s.section} mark="wave" tone="green">
        <h2 className={s.heading}>O que não vai acontecer aqui</h2>

        <ul className={s.denyGrid}>
          {WHAT_WONT_HAPPEN.map((item, index) => (
            <li key={item} className={s.denyItem}>
              <div className={s.denyRail}>
                <span className={s.denyMark} aria-hidden="true">
                  <X size={14} strokeWidth={2.5} />
                </span>
                {index < WHAT_WONT_HAPPEN.length - 1 ? (
                  <span className={s.denyConnector} aria-hidden="true" />
                ) : null}
              </div>
              <p className={s.denyText}>{item}</p>
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell id="perguntas-frequentes" sectionClass={s.section} mark="spark" tone="green">
        <h2 className={s.heading}>Perguntas frequentes</h2>

        <dl className="mt-12 space-y-10">
          {FAQ_ITEMS.map((item) => (
            <div key={item.question} className={s.faqItem}>
              <dt className="text-lg font-medium leading-8 text-white">{item.question}</dt>
              <dd className={`mt-3 ${s.body}`}>{item.answer}</dd>
            </div>
          ))}
        </dl>
      </SectionShell>

      <SectionShell id="fechamento" sectionClass={s.section} className={s.closing} mark="psi" tone="brown">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-stretch md:gap-16">
          <div>
            <h2 className={s.heading}>Se você chegou até aqui, a dor já tomou espaço demais</h2>

            <p className={`mt-8 ${s.body}`}>
              Você não precisa decidir nada hoje sobre tratamento. Só me contar o que está acontecendo e eu te digo com
              sinceridade se posso ajudar.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4">
              <WhatsAppButton>Me contar seu caso pelo WhatsApp</WhatsAppButton>
              <p className="max-w-md text-sm leading-7 text-white/58">
                Quem responde sou eu, no mesmo dia. A partir da conversa a gente combina o horário.
              </p>
            </div>
          </div>

          <LocationCard />
        </div>
      </SectionShell>

      <Footer />
    </main>
  )
}

export default HomePage
