import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '../constants/site.js'

function WhatsAppButton({ children, className = '' }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-cta)] px-7 py-4 text-base font-medium text-white transition hover:bg-[var(--color-cta-hover)] ${className}`}
    >
      <MessageCircle size={20} strokeWidth={1.75} />
      {children}
    </a>
  )
}

export default WhatsAppButton
