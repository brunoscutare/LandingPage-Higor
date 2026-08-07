import { useDesign } from '../context/DesignContext.jsx'

function PreviewIcon({ type }) {
  if (type === 'classic') {
    return (
      <span className="grid h-full w-full grid-cols-2 gap-px p-px">
        <span className="rounded-[1px] bg-white/35" />
        <span className="rounded-[1px] bg-white/20" />
      </span>
    )
  }

  if (type === 'editorial') {
    return (
      <span className="flex h-full w-full flex-col items-center gap-px p-px">
        <span className="h-1 w-2 rounded-[1px] bg-white/35" />
        <span className="h-2 w-full rounded-[1px] bg-white/20" />
      </span>
    )
  }

  if (type === 'cards') {
    return (
      <span className="flex h-full w-full flex-col gap-px p-px">
        <span className="h-1.5 w-full rounded-[1px] bg-white/30" />
        <span className="h-1.5 w-full rounded-[1px] bg-white/20" />
      </span>
    )
  }

  return (
    <span className="flex h-full w-full flex-col justify-end gap-px p-px">
      <span className="h-px w-full bg-white/25" />
      <span className="h-px w-3/4 bg-white/15" />
    </span>
  )
}

function DesignSwitcher({ className = '' }) {
  const { design, setDesign, designs } = useDesign()

  return (
    <div className={`flex flex-col gap-1 ${className}`} role="radiogroup" aria-label="Modelos de design">
      {designs.map((item) => (
        <label key={item.id} title={item.label} className="flex cursor-pointer items-center">
          <input
            type="radio"
            name="design"
            value={item.id}
            checked={design === item.id}
            onChange={() => setDesign(item.id)}
            className="peer sr-only"
          />
          <span className="block size-2.5 overflow-hidden rounded-[3px] border border-white/20 p-px transition peer-checked:ring-1 peer-checked:ring-[var(--color-accent)] peer-checked:ring-offset-1 peer-checked:ring-offset-[var(--color-bg)]">
            <PreviewIcon type={item.preview} />
          </span>
        </label>
      ))}
    </div>
  )
}

export default DesignSwitcher
