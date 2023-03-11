import { Children, createContext, ReactChild, ReactNode, useState } from 'react'
import { pl, en } from '../assets/data'

interface childrenProp {
  children: ReactNode
}

const LangContext = createContext({
  pl,
  en,
  active: 'pl',
  langChangeHandler: (langs: string) => {},
})

export const LangContextProvider = ({ children }: childrenProp) => {
  const [activeLng, setActiveLng] = useState('pl')
  const langChangeHandler = (langs: string) => {
    setActiveLng(langs)
  }
  return (
    <LangContext.Provider
      value={{ pl, en, active: activeLng, langChangeHandler }}
    >
      {children}
    </LangContext.Provider>
  )
}

export default LangContext
