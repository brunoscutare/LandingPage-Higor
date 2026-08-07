import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { House, Brain, Activity, CalendarCheck, CircleUserRound, ShieldAlert, HelpCircle } from 'lucide-react'

const SCROLL_SPY_OFFSET = 96
const SCROLL_SPY_TOLERANCE = 12
const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)'
const DURATION_MS = 850

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (!element) return

  const top = element.getBoundingClientRect().top + window.scrollY - SCROLL_SPY_OFFSET
  window.scrollTo({ top, behavior: 'smooth' })
}

function isSectionScrollSettled(sectionId) {
  const element = document.getElementById(sectionId)
  if (!element) return true

  const top = element.getBoundingClientRect().top
  return Math.abs(top - SCROLL_SPY_OFFSET) <= SCROLL_SPY_TOLERANCE
}

const MENUS = [
  { icon: House, text: 'Hero', sectionId: 'hero' },
  { icon: Brain, text: 'Reconhecimento', sectionId: 'bloco-de-reconhecimento' },
  { icon: Activity, text: 'Tratamento da dor', sectionId: 'psicologia-e-dor' },
  { icon: CalendarCheck, text: 'Atendimento', sectionId: 'como-funciona' },
  { icon: CircleUserRound, text: 'Quem sou', sectionId: 'quem-sou' },
  { icon: ShieldAlert, text: 'O que não vai acontecer', sectionId: 'nao-acontece' },
  { icon: HelpCircle, text: 'FAQ', sectionId: 'perguntas-frequentes' },
]

const CLOSED_WIDTH = MENUS.length * 52 + 50
const SECTION_IDS = MENUS.map((item) => item.sectionId)

function MenuButton({ item, open, isActive, onClick }) {
  const Icon = item.icon

  return (
    <button
      type="button"
      title={item.text}
      onClick={onClick}
      className={`relative z-10 flex flex-none items-center justify-center gap-2 rounded-full px-3 py-2 transition-colors duration-500 ease-out ${isActive
        ? 'bg-[var(--color-accent-active-bg)] text-[var(--color-accent-light)] shadow-[0_0_0_1px_var(--color-accent-active-ring)]'
        : 'text-white hover:bg-white/5 hover:text-[var(--color-accent)]'
        }`}
    >
      <span className="shrink-0">
        <Icon size={20} />
      </span>
      <span
        className="grid transition-[grid-template-columns] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          gridTemplateColumns: open ? '1fr' : '0fr',
          transitionDuration: `${DURATION_MS}ms`,
        }}
      >
        <span
          className="overflow-hidden whitespace-nowrap text-sm font-medium"
          style={{
            opacity: open ? 1 : 0,
            transition: `opacity ${DURATION_MS}ms ${EASE}`,
          }}
        >
          {item.text}
        </span>
      </span>
    </button>
  )
}

function Topbar() {
  const [open, setOpen] = useState(false)
  const [openWidth, setOpenWidth] = useState(CLOSED_WIDTH)
  const [activeSection, setActiveSection] = useState('hero')
  const measureRef = useRef(null)
  const pendingSectionRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  useLayoutEffect(() => {
    const measure = () => {
      if (!measureRef.current) return

      const measured = Math.ceil(measureRef.current.getBoundingClientRect().width)
      const max = window.innerWidth - 24
      setOpenWidth(Math.min(measured, max))
    }

    measure()
    document.fonts?.ready?.then(measure)
    window.addEventListener('resize', measure)

    return () => window.removeEventListener('resize', measure)
  }, [])

  useEffect(() => {
    if (location.pathname !== '/home') return undefined

    let ticking = false

    const updateActiveSection = () => {
      if (pendingSectionRef.current) {
        setActiveSection(pendingSectionRef.current)

        if (isSectionScrollSettled(pendingSectionRef.current)) {
          pendingSectionRef.current = null
        } else {
          ticking = false
          return
        }
      }

      const pageBottom = window.scrollY + window.innerHeight
      const scrollHeight = document.documentElement.scrollHeight

      if (pageBottom >= scrollHeight - 8) {
        setActiveSection(SECTION_IDS[SECTION_IDS.length - 1])
        ticking = false
        return
      }

      const activationLine = SCROLL_SPY_OFFSET + SCROLL_SPY_TOLERANCE
      let current = SECTION_IDS[0]

      for (const sectionId of SECTION_IDS) {
        const element = document.getElementById(sectionId)
        if (!element) continue

        if (element.getBoundingClientRect().top <= activationLine) {
          current = sectionId
        }
      }

      setActiveSection(current)
      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [location.pathname])

  const isActiveMenu = (path) => {
    if (!path) return false
    return location.pathname === path || location.pathname.startsWith(`${path}/`)
  }

  const isActiveSectionMenu = (sectionId) => {
    return location.pathname === '/home' && activeSection === sectionId
  }

  const handleMenuClick = (item) => {
    if (item.sectionId) {
      pendingSectionRef.current = item.sectionId
      setActiveSection(item.sectionId)

      if (location.pathname !== '/home') {
        navigate('/home', { replace: false })
        window.setTimeout(() => scrollToSection(item.sectionId), 0)
        return
      }

      scrollToSection(item.sectionId)
      return
    }

    if (item.path) {
      navigate(item.path)
    }
  }

  const barWidth = open ? openWidth : CLOSED_WIDTH

  return (
    <>
      <div
        ref={measureRef}
        aria-hidden
        className="pointer-events-none invisible fixed left-0 top-0 flex h-16 w-max items-center gap-1 px-3"
      >
        {MENUS.map((item) => {
          const Icon = item.icon

          return (
            <div key={item.text} className="flex w-max flex-none items-center gap-2 rounded-full px-3 py-2">
              <Icon size={20} />
              <span className="whitespace-nowrap text-sm font-medium">{item.text}</span>
            </div>
          )
        })}
      </div>

      <div className="fixed left-1/2 top-4 z-50 -translate-x-1/2">
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          style={{
            width: barWidth,
            maxWidth: 'calc(100vw - 24px)',
            transition: `width ${DURATION_MS}ms ${EASE}`,
          }}
          className="relative flex h-16 items-center justify-start gap-1 overflow-hidden rounded-full border border-white/10 bg-[var(--color-topbar)] px-3 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl will-change-[width] transition-[background] duration-400"
        >
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-70" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-8 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/20 blur-xl" />

          {MENUS.map((item) => (
            <MenuButton
              key={item.text}
              item={item}
              open={open}
              isActive={isActiveSectionMenu(item.sectionId) || isActiveMenu(item.path)}
              onClick={() => handleMenuClick(item)}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Topbar
