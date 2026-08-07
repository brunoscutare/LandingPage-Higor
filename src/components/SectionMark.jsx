const ICONS = {
  psi: (
    <path
      d="M12 21V9.5M7 4.5c0 3.2 2.2 5 5 5s5-1.8 5-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  brain: (
    <>
      <path
        d="M12.5 20.5c-2.2 0-4-1.5-4.5-3.5-.8.4-1.7.6-2.7.5C3.4 17.3 2 15.6 2 13.5c0-1.3.6-2.4 1.5-3.2C3.2 9.5 3 8.8 3 8c0-2.2 1.8-4 4-4 .5 0 1 .1 1.4.3C9 3.3 10.4 2.5 12 2.5c1.4 0 2.6.6 3.5 1.5.5-.2 1.1-.3 1.7-.3 2.2 0 4 1.8 4 4 0 .6-.1 1.1-.4 1.6.9.8 1.5 1.9 1.5 3.2 0 1.8-1.1 3.3-2.7 3.9-.3 1.8-1.8 3.2-3.6 3.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 7.5v13M8.5 10.5c1.2.8 2.3 1 3.5 1M15.5 10.5c-1.2.8-2.3 1-3.5 1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  head: (
    <>
      <path
        d="M13 21c-4.5 0-8-3.2-8-8.2C5 8.2 8.2 4.5 12.5 4.5c3.8 0 6.8 2.6 7.3 6.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 21v-3.2c0-1.4.8-2.6 2-3.2 1.5-.8 2.5-2.3 2.5-4.1 0-.6-.1-1.1-.3-1.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10.5" cy="11" r="0.9" fill="currentColor" />
    </>
  ),
  lotus: (
    <>
      <path
        d="M12 19c-2.8-2.2-4.5-4.6-4.5-7.2 0-2.4 1.7-3.8 4.5-3.8s4.5 1.4 4.5 3.8C16.5 14.4 14.8 16.8 12 19z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8V5.5M7.5 10.5C6 9.2 5.2 7.6 5.2 6M16.5 10.5c1.5-1.3 2.3-2.9 2.3-4.5M8.5 15.5c-2 .2-3.8-.4-5-1.6M15.5 15.5c2 .2 3.8-.4 5-1.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  heartMind: (
    <>
      <path
        d="M12 20.5S4.5 15.8 4.5 10.2C4.5 7.4 6.6 5.5 9 5.5c1.4 0 2.6.7 3 1.8.4-1.1 1.6-1.8 3-1.8 2.4 0 4.5 1.9 4.5 4.7 0 5.6-7.5 10.3-7.5 10.3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 11.5c.8-.8 1.7-1.2 2.5-1.2s1.7.4 2.5 1.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  balance: (
    <>
      <path
        d="M12 4v16M5 9h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 9c0 2.2 1.6 4 3.5 4S12 11.2 12 9M12 9c0 2.2 1.6 4 3.5 4S19 11.2 19 9M8 20h8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  spark: (
    <>
      <path
        d="M12 3.5v4M12 16.5v4M3.5 12h4M16.5 12h4M6.2 6.2l2.8 2.8M15 15l2.8 2.8M17.8 6.2 15 9M9 15l-2.8 2.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
  wave: (
    <>
      <path
        d="M3.5 9c2.2-2.4 4.3-2.4 6.5 0s4.3 2.4 6.5 0 4.3-2.4 6.5 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 13c2.2-2.4 4.3-2.4 6.5 0s4.3 2.4 6.5 0 4.3-2.4 6.5 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 17c2.2-2.4 4.3-2.4 6.5 0s4.3 2.4 6.5 0 4.3-2.4 6.5 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
}

function SectionMark({ name = 'psi' }) {
  const icon = ICONS[name] || ICONS.psi

  return (
    <span
      aria-hidden
      className="pointer-events-none absolute bottom-5 right-5 z-0 text-[var(--color-section-mark,#b8d4c4)] opacity-50 md:bottom-7 md:right-7"
    >
      <svg viewBox="0 0 24 24" width="32" height="32" className="block" fill="none">
        {icon}
      </svg>
    </span>
  )
}

export default SectionMark
