import { useContext } from 'react'
import LangContext from '../store/lang-context'



const NewsletterSection = ({ sectionName = 'newsletter' }) => {
  const ctx= useContext(LangContext)
  const lang = ctx.active
  const section = ctx[lang][sectionName]
  const { title, subtitle, ctaButton }:{title:string, subtitle:string, ctaButton:string} = section 
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <button>{ctaButton}</button>
    </div>
  )
}

export default NewsletterSection

