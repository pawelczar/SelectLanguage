import { useContext } from 'react'
import LangContext from '../store/lang-context'

// interface contextData extends DataIndex {
//   pl: AttentionData
//   en: AttentionData
//   active: string
//   langChangeHandler: (lang: string) => void
// }

// type AttentionData = {
//   attention: {
//     title: string
//     subtitle: string
//     ctaButton: string
//   }
// }

// interface DataIndex {
//   [key: string]: {}
// }

const AttentionSection = ({ sectionName = 'attention' }) => {
  const ctx= useContext(LangContext)
  const lang = ctx.active
  const section = ctx[lang][sectionName]
  console.log("section data", section)
  const { title, subtitle, ctaButton }:{title:string, subtitle:string, ctaButton:string} = section //ZAPYTAC O TO!!!
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <button>{ctaButton}</button>
    </div>
  )
}

export default AttentionSection
