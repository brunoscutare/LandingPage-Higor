function Section({ id, eyebrow, title, text, className = '' }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl border-t border-white/10 py-24 ${className}`}>
      <p className="text-sm uppercase tracking-[0.35em] text-[#E8C39A]">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
      <p className="mt-6 max-w-3xl text-base leading-8 text-white/78">{text}</p>
    </section>
  )
}

function HomePage() {
  return (
    <main className="min-h-screen px-6 pt-28 text-white">
      <section id="hero" className="mx-auto flex min-h-[70vh] w-full max-w-6xl items-center justify-center text-center">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-[#E8C39A]">Hero</p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight md:text-7xl">Uma landing para apresentar seu trabalho com clareza.</h1>
        </div>
      </section>

      <Section
        id="bloco-de-reconhecimento"
        eyebrow="Bloco de Reconhecimento"
        title="Aqui entra a abertura que faz a pessoa se reconhecer no problema."
        text="Esse bloco deve mostrar que você entende a dor, o contexto e o motivo que trouxe a pessoa até a página."
      />

      <Section
        id="psicologia-e-dor"
        eyebrow="Como a Psicologia entra no tratamento da dor"
        title="Explicação objetiva de como o atendimento conversa com a dor."
        text="Aqui vale colocar a lógica clínica do trabalho, sem prometer milagre e sem linguagem vaga."
      />

      <Section
        id="como-funciona"
        eyebrow="Como funciona o atendimento"
        title="Passo a passo simples do processo."
        text="Essa área pode explicar primeira conversa, acompanhamento, frequência e o que acontece ao longo do processo."
      />

      <Section
        id="equipe"
        eyebrow="Trabalho junto da equipe"
        title="Mostrar integração com outros profissionais."
        text="Se o atendimento conversa com médico, fisio, nutri ou outros profissionais, isso entra aqui."
      />

      <Section
        id="formatos"
        eyebrow="Formatos"
        title="Presencial, online ou os formatos que você oferece."
        text="Esse bloco organiza as opções de atendimento e ajuda a pessoa a entender como dá para começar."
      />

      <Section
        id="quem-sou"
        eyebrow="Quem sou"
        title="Apresentação profissional direta."
        text="Aqui entra sua formação, experiência e por que você trabalha com esse tema."
      />

      <Section
        id="nao-acontece"
        eyebrow="O que não vai acontecer aqui"
        title="Deixar claro o que o processo não é."
        text="Esse bloco ajuda a alinhar expectativa e dar segurança para quem está lendo."
      />

      <Section
        id="perguntas-frequentes"
        eyebrow="Perguntas frequentes"
        title="Responder dúvidas que travam a decisão."
        text="Pode incluir preço, duração, sigilo, duração do processo e dúvidas comuns antes de marcar."
      />

      <Section
        id="fechamento"
        eyebrow="Fechamento"
        title="Chamada final para agendar ou entrar em contato."
        text="Feche a página com um convite claro para o próximo passo."
        className="pb-32"
      />
    </main>
  )
}

export default HomePage
