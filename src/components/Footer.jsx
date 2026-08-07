import { CRP, INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE_DISPLAY, PROFESSIONAL_NAME, WHATSAPP_URL } from '../constants/site.js'

function Footer() {
  return (
    <footer id="rodape" className="border-t border-white/10 bg-[var(--color-footer)] transition-[background] duration-400">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-12 text-sm leading-7 text-white/65">
        <p>
          {PROFESSIONAL_NAME}, psicólogo, {CRP} · Araraquara, SP. Atendimento presencial e online.
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="transition hover:text-[var(--color-accent)]">
            WhatsApp {PHONE_DISPLAY}
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="transition hover:text-[var(--color-accent)]">
            Instagram: {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
