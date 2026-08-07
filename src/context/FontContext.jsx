import { createContext, useContext, useLayoutEffect, useState } from 'react'
import { DEFAULT_FONT, FONTS } from '../constants/fonts.js'

const FontContext = createContext(null)

export function FontProvider({ children }) {
  const [font, setFont] = useState(DEFAULT_FONT)

  useLayoutEffect(() => {
    document.documentElement.dataset.font = font
  }, [font])

  return <FontContext.Provider value={{ font, setFont, fonts: FONTS }}>{children}</FontContext.Provider>
}

export function useFont() {
  const context = useContext(FontContext)

  if (!context) {
    throw new Error('useFont must be used within FontProvider')
  }

  return context
}
