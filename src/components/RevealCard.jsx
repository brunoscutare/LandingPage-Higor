import { useEffect, useRef } from 'react'

const MOBILE_MEDIA = '(max-width: 767px)'

function RevealCard({ as: Component = 'div', className = '', children, ...props }) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const mobileQuery = window.matchMedia(MOBILE_MEDIA)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const reveal = () => node.classList.add('visible')

    if (!mobileQuery.matches || reduceMotion.matches) {
      reveal()
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        reveal()
        observer.unobserve(node)
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)

    const handleChange = () => {
      if (!mobileQuery.matches) reveal()
    }

    mobileQuery.addEventListener('change', handleChange)

    return () => {
      observer.disconnect()
      mobileQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return (
    <Component ref={ref} className={['card', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </Component>
  )
}

export default RevealCard
