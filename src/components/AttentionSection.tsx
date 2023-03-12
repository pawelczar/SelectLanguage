import { useContext } from 'react'
import LangContext from '../store/lang-context'

// const dataObject = {
// pl:{
//   attention: {
//     title: 'Dobrze, że jesteś, sprawdź to zadanie',
//     subtitle: 'Pomoże Ci ogarnąć jak zmieniać język w apkach reacta',
//     ctaButton: 'Dowiedź się więcej',
// },
// newsletter: {
//   title: 'Bądź na bieżąco',
//   ctaButton: 'Idź do repo ->',
//   action: '/new-subscriber?lang=pl',
// },
//   },
// en :{
//   attention: {
//     title: 'Hey, check this task',
//     subtitle: 'It can help You to learn how to change language in react app',
//     ctaButton: 'More',
// },
//   newsletter: {
//     title: "Let's keep in touch",
//     ctaButton: 'To repository !!!',
//     action: '/new-subscriber?lang=en',
// },
//   },
// active: "pl",

// }


interface contextData{
  pl: AttentionData
  en: AttentionData
  active: string
}

interface AttentionData{
  attention: ContentIndex
  newsletter: ContentIndex

}

type DataIndex = {
  [key: string]: string | {} 
}

type ContentIndex = {
  [key: string]: string ;
}

type ContentData = Record<'title'| 'subtitle'| 'ctaButton', string>


const AttentionSection = ({ sectionName = 'attention' }) => {
  const ctx:contextData = useContext(LangContext)
  const lang = ctx.active
  const section: ContentData = ctx[lang][sectionName]
  console.log("section data", section)
  const { title, subtitle, ctaButton } = section //ZAPYTAC O TO!!!
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <button>{ctaButton}</button>
    </div>
  )
}

export default AttentionSection
