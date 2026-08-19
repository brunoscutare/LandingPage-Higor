import { useState } from 'react'
import heroPhoto from '../assets/IMG_2681.PNG'
import profilePhoto from '../assets/IMG_4126.PNG'
import { Check, X } from 'lucide-react'
import Footer from '../components/Footer.jsx'
import RevealCard from '../components/RevealCard.jsx'
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

function FaqItem({ question, answer, open, onToggle }) {
  return (
    <div className="group">
      <dt>
        <button type="button" aria-expanded={open} onClick={onToggle} className={s.faqTrigger}>
          <span className={`${s.faqQuestion} ${open ? s.faqQuestionOpen : ''}`}>{question}</span>
          <span className={`${s.faqToggle} ${open ? s.faqToggleOpen : ''}`} aria-hidden="true">
            <span className={s.faqToggleBar} />
            <span className={`${s.faqToggleBar} ${open ? 'rotate-0' : 'rotate-90'}`} />
          </span>
        </button>
      </dt>
      <dd className={`${s.faqAnswerWrap} ${open ? s.faqAnswerOpen : ''}`}>
        <div className="min-h-0 overflow-hidden">
          <div className={`${s.faqAnswer} ${open ? s.faqAnswerVisible : ''}`}>
            {answer.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </dd>
    </div>
  )
}

function FaqList() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <dl className={s.faqList}>
      {FAQ_ITEMS.map((item, index) => (
        <FaqItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          open={openIndex === index}
          onToggle={() => setOpenIndex((current) => (current === index ? null : index))}
        />
      ))}
    </dl>
  )
}

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
              <span className="block">Quando você não sabe mais quem é, isso não significa que sumiu.</span>
              <span className={s.heroSubtitle}>Significa que está mudando.</span>
            </h1>

            <p className={s.heroLead}>
              Trabalho com dois momentos: quando você ainda não decidiu quem quer ser, e quando perde o que sustentava quem você era.
            </p>

            <div className={s.heroCta}>
              <WhatsAppButton>Conversar comigo pelo WhatsApp</WhatsAppButton>
              <p className={s.helper}>
                Quem responde é o próprio psicólogo, no mesmo dia.
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
            <RevealCard as="li" key={quote} className={`${s.quoteItem} ${s.quoteHover}`}>
              “{quote}”
            </RevealCard>
          ))}
        </ul>

        <div className={`mt-10 max-w-3xl space-y-6 ${s.body}`}>
          <p>
           A última costuma ser a que mais pesa e a que menos aparece em conversa. Você continua dando conta do que precisa ser feito, mas começa a sentir que está representando um papel, não vivendo ele.
            Evita falar sobre isso pra não parecer ingrato ou dramático. E, aos poucos, a distância entre quem você é e quem você aparenta ser vai crescendo.
          </p>
          <p>
           Isso não é fraqueza nem crise passageira. É o que acontece quando uma identidade para de fazer sentido, seja porque ainda não foi escolhida, seja porque o que a sustentava não existe mais.
          </p>
        </div>
      </SectionShell>

      <SectionShell id="psicologia-e-dor" sectionClass={s.section} mark="brain" tone="green">
        <h2 className={`${s.heading} ${s.headingWrap}`}>Por que terapia existencial?</h2>

        <div className={`mt-8 max-w-3xl space-y-6 ${s.body}`}>
          <p>
            Terapia existencial ajuda a trabalhar o que está por trás de não saber quem você é: sentido, escolha, liberdade, e a forma como você lida com o que não pode controlar. Isso não significa ficar filosofando sem rumo, significa que o trabalho também precisa considerar como você reconstrói identidade, não só resolve um sintoma. 
          </p>
          <p>É nessa parte que eu trabalho, junto do restante do tratamento.</p>
        </div>

        <h3 className="mt-14 text-2xl font-medium text-[var(--color-accent)]">Em que isso muda na prática</h3>

        <ul className={s.practicalGrid}>
          {PRACTICAL_CHANGES.map((item) => (
            <RevealCard as="li" key={item} className={s.practicalItem}>
              <span className={s.practicalCheck} aria-hidden="true">
                <Check size={13} strokeWidth={2.75} />
              </span>
              <p className={s.practicalText}>{item}</p>
            </RevealCard>
          ))}
        </ul>
      </SectionShell>

      <SectionShell id="como-funciona" sectionClass={s.section} mark="balance" tone="brown">
        <h2 className={s.heading}>Como funciona?</h2>

        <ol className={s.stepList}>
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <RevealCard as="li" key={step.title} className={`${s.stepItem} ${s.quoteHover}`}>
              <span className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]">{index + 1}.</span>
              <div>
                <h3 className="text-xl font-medium leading-8 text-white">{step.title}</h3>
                <p className={`mt-3 max-w-3xl ${s.body}`}>{step.text}</p>
              </div>
            </RevealCard>
          ))}
        </ol>

        <p className={`mt-12 max-w-3xl ${s.body}`}>
         Alguns tratamentos são planejados com tempo definido, dentro de um plano combinado desde o início. Outros ficam abertos, e a gente avalia junto ao longo do caminho. Isso se decide na primeira conversa,com você sabendo o que está sendo combinado.
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
                Sou psicólogo, {CRP}.  Minha formação é em psicologia existencial e fenomenológica, com especialização em Tanatologia. Atendo pessoas que ainda não decidiram quem querem ser, e pessoas em luto ou em outros fins de ciclo.
              </p>
              <p>
                O que essas formações têm em comum é o assunto: o que acontece com uma pessoa quando a identidade que ela conhecia para de fazer sentido, seja porque nunca foi escolhida, seja porque o que a sustentava desapareceu.
              </p>
              <p>
                Não trabalho com fórmula, e não tenho pressa de te oferecer conclusão. Trabalho para que quem você é seja compreendido e respeitado, não decidido por outra pessoa.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="nao-acontece" sectionClass={s.section} mark="wave" tone="green">
        <h2 className={s.heading}>O que não vai acontecer aqui</h2>

        <ul className={s.denyGrid}>
          {WHAT_WONT_HAPPEN.map((item, index) => (
            <RevealCard as="li" key={item} className={s.denyItem}>
              <div className={s.denyRail}>
                <span className={s.denyMark} aria-hidden="true">
                  <X size={14} strokeWidth={2.5} />
                </span>
                {index < WHAT_WONT_HAPPEN.length - 1 ? (
                  <span className={s.denyConnector} aria-hidden="true" />
                ) : null}
              </div>
              <p className={s.denyText}>{item}</p>
            </RevealCard>
          ))}
        </ul>
      </SectionShell>

      <SectionShell id="perguntas-frequentes" sectionClass={s.section} mark="spark" tone="green">
        <h2 className={s.heading}>Perguntas frequentes</h2>

        <FaqList />
      </SectionShell>

      <SectionShell id="fechamento" sectionClass={s.section} className={s.closing} mark="psi" tone="brown">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-stretch md:gap-16">
          <div>
            <h2 className={s.heading}>Se você chegou até aqui, alguma coisa nessas frases já era sua</h2>

            <p className={`mt-8 ${s.body}`}>
              Você não precisa decidir nada hoje. Só me contar o que está acontecendo e eu te digo com sinceridade se posso ajudar.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4">
              <WhatsAppButton>Me contar seu caso pelo WhatsApp</WhatsAppButton>
              <p className={s.helper}>
                Quem responde sou eu, no mesmo dia. A partir da conversa a gente combina o horário.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      <Footer />
    </main>
  )
}

export default HomePage
