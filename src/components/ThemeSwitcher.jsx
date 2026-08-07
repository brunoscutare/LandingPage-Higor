import { useTheme } from '../context/ThemeContext.jsx'

function ThemeSwitcher({ className = '' }) {
  const { theme, setTheme, themes } = useTheme()

  return (
    <div className={`flex flex-col gap-1 ${className}`} role="radiogroup" aria-label="Temas de cor">
      {themes.map((item) => (
        <label
          key={item.id}
          title={item.label}
          className="flex cursor-pointer items-center gap-1.5"
        >
          <input
            type="radio"
            name="theme"
            value={item.id}
            checked={theme === item.id}
            onChange={() => setTheme(item.id)}
            className="peer sr-only"
          />
          <span
            className="block size-2.5 rounded-[3px] border border-white/20 transition peer-checked:ring-1 peer-checked:ring-[var(--color-accent)] peer-checked:ring-offset-1 peer-checked:ring-offset-[var(--color-bg)]"
            style={{ backgroundColor: item.swatch }}
          />
        </label>
      ))}
    </div>
  )
}

export default ThemeSwitcher
