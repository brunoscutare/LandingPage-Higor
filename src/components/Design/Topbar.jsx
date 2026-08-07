import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { House, Brain, Activity, CalendarCheck, Users, LayoutGrid, CircleUserRound, ShieldAlert, HelpCircle, MessageSquare } from 'lucide-react'

function Topbar() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const navigate = useNavigate()
  const location = useLocation()

  const menus = [
    { icon: <House size={20} />, text: 'Hero', sectionId: 'hero' },
    { icon: <Brain size={20} />, text: 'Reconhecimento', sectionId: 'bloco-de-reconhecimento' },
    { icon: <Activity size={20} />, text: 'Tratamento da dor', sectionId: 'psicologia-e-dor' },
    { icon: <CalendarCheck size={20} />, text: 'Atendimento', sectionId: 'como-funciona' },
    { icon: <Users size={20} />, text: 'Trabalho junto da equipe', sectionId: 'equipe' },
    { icon: <LayoutGrid size={20} />, text: 'Formatos', sectionId: 'formatos' },
    { icon: <CircleUserRound size={20} />, text: 'Quem sou', sectionId: 'quem-sou' },
    { icon: <ShieldAlert size={20} />, text: 'Nossa proposta', sectionId: 'nao-acontece' },
    { icon: <HelpCircle size={20} />, text: 'FAQ', sectionId: 'perguntas-frequentes' },
    { icon: <MessageSquare size={20} />, text: 'Fechamento', sectionId: 'fechamento' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0]

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        root: null,
        threshold: [0.35, 0.5, 0.65]
      }
    )

      ;['hero', 'bloco-de-reconhecimento', 'psicologia-e-dor', 'como-funciona', 'equipe', 'formatos', 'quem-sou', 'nao-acontece', 'perguntas-frequentes', 'fechamento'].forEach((sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
          observer.observe(element)
        }
      })

    return () => observer.disconnect()
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
      if (location.pathname !== '/home') {
        navigate('/home', { replace: false })
        window.setTimeout(() => {
          document.getElementById(item.sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 0)
        return
      }

      document.getElementById(item.sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    if (item.path) {
      navigate(item.path)
    }
  }

  const getBarWidth = (isExpanded) => {
    const itemCount = menus.length

    if (isExpanded) {
      return `${itemCount * 129 + 120}px`
    }

    return `${itemCount * 52 + 50}px`
  }

  const closedWidth = getBarWidth(false)
  const openWidth = getBarWidth(true)

  return (
    <div className="fixed left-1/2 top-4 z-50 -translate-x-1/2">
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        style={{ width: open ? openWidth : closedWidth, minWidth: closedWidth }}
        className="relative flex h-16 items-center justify-start gap-1 overflow-hidden rounded-full border border-white/10 bg-[#1A100B]/75 px-3 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-[width] duration-500 ease-[cubic-bezier(.34,1.56,.64,1)]"
      >
        <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-70" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-8 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/20 blur-xl" />

        {menus.map((item) => (
          <button
            key={item.text}
            type="button"
            title={item.text}
            onClick={() => handleMenuClick(item)}
            className={`relative z-10 flex flex-none items-center justify-center gap-2 rounded-full px-3 py-2 transition-all duration-300 ${isActiveSectionMenu(item.sectionId) || isActiveMenu(item.path)
              ? 'bg-[#F3D7B6]/14 text-[#F3D7B6] shadow-[0_0_0_1px_rgba(243,215,182,0.18)]'
              : 'text-white hover:bg-white/5 hover:text-[#E8C39A]'
              }`}
          >
            <span className="shrink-0">{item.icon}</span>
            <span
              style={{
                maxWidth: open ? '14rem' : '0px',
                opacity: open ? 1 : 0,
                transform: open ? 'translateX(0)' : 'translateX(-6px)',
                transition: 'max-width 300ms ease, opacity 220ms ease, transform 300ms ease'
              }}
              className="overflow-hidden whitespace-nowrap text-sm font-medium"
            >
              {item.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Topbar
