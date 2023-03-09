import { useContext } from 'react'
import LangContext from '../store/lang-context'

interface contextData extends AttentionContent {
  pl: AttentionData
  en: AttentionData
  active: string
  langChangeHandler: (lang: string) => void
}

interface AttentionData extends AttentionContent {
  attention: AttentionContent
}

interface AttentionContent {
  [key: string]: string | {}
}

const AttentionSection = ({ sectionName = 'attention' }) => {
  const ctx: contextData = useContext(LangContext)
  // texts brane z LangContex
  const lang = ctx.active
  const section = ctx[lang]
  console.log('secion data', section)
  const { title, subtitle, ctaButton } = section[sectionName]
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <button>{ctaButton}</button>
    </div>
  )
}

export default AttentionSection
