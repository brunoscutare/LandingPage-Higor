import { ADDRESS_DETAILS, ADDRESS_STREET, MAPS_EMBED_URL, MAPS_URL } from '../constants/site.js'

function LocationCard({ className = '' }) {
  return (
    <div className={`flex h-full w-full max-w-xl flex-col ${className}`}>
      <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">Onde atendo</p>

      <p className="mt-3 text-lg leading-8 text-white">{ADDRESS_STREET}</p>
      <p className="text-sm leading-7 text-white/55">{ADDRESS_DETAILS}</p>

      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-6 block min-h-56 flex-1 overflow-hidden rounded-2xl border border-white/10 transition-colors duration-300 hover:border-[var(--color-accent-border)]"
      >
        <iframe
          title="Localização do consultório"
          src={MAPS_EMBED_URL}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="pointer-events-none block h-full min-h-56 w-full grayscale-[0.85] contrast-[0.9] brightness-[0.72] transition duration-500 ease-out group-hover:grayscale-0 group-hover:brightness-100"
        />
      </a>
    </div>
  )
}

export default LocationCard
