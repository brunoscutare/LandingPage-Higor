import { createContext, useContext, useLayoutEffect, useState } from 'react'
import { DEFAULT_DESIGN, DESIGNS } from '../constants/designs.js'

const DesignContext = createContext(null)

export function DesignProvider({ children }) {
  const [design, setDesign] = useState(DEFAULT_DESIGN)

  useLayoutEffect(() => {
    document.documentElement.dataset.design = design
  }, [design])

  return <DesignContext.Provider value={{ design, setDesign, designs: DESIGNS }}>{children}</DesignContext.Provider>
}

export function useDesign() {
  const context = useContext(DesignContext)

  if (!context) {
    throw new Error('useDesign must be used within DesignProvider')
  }

  return context
}
