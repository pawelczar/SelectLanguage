// import { useContext } from 'react'
import useConetent from "../hooks/use-Content"
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
  // const ctx= useContext(LangContext)
  // const lang = ctx.active
  // const section = ctx[lang][sectionName]
  // console.log("section data", section)
  // const { title, subtitle, ctaButton }:{title:string, subtitle:string, ctaButton:string} = section //ZAPYTAC O TO!!!
  const content = useConetent(sectionName)
  return (
    <div>
      <h1>{content.title}</h1>
      <h2>{content.subtitle}</h2>
      <button>{content.ctaButton}</button>
    </div>
  )
}

export default AttentionSection
