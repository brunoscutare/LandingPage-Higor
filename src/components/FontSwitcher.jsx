import { useFont } from '../context/FontContext.jsx'

function FontSwitcher({ className = '' }) {
  const { font, setFont, fonts } = useFont()

  return (
    <div className={`flex flex-col gap-1 ${className}`} role="radiogroup" aria-label="Fontes">
      {fonts.map((item) => (
        <label key={item.id} title={item.label} className="flex cursor-pointer items-center">
          <input
            type="radio"
            name="font"
            value={item.id}
            checked={font === item.id}
            onChange={() => setFont(item.id)}
            className="peer sr-only"
          />
          <span
            className="flex size-2.5 items-center justify-center rounded-[3px] border border-white/20 text-[8px] leading-none text-white/80 transition peer-checked:ring-1 peer-checked:ring-[var(--color-accent)] peer-checked:ring-offset-1 peer-checked:ring-offset-[var(--color-bg)] peer-checked:text-[var(--color-accent-light)]"
            style={{ fontFamily: item.family, fontWeight: item.weight }}
          >
            A
          </span>
        </label>
      ))}
    </div>
  )
}

export default FontSwitcher
