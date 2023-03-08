import { useContext } from 'react'
import LangContext from '../store/lang-context'

// interface ContextKeys {
//   [key: string]: string |{}
// }

interface ContextSecion {
  [prop: string]: {}
}

interface ContextProps extends ContextSecion {
  pl: {
    attention: Attention
    newsletter: Newsletter
  }
  active: string
}

type Attention = {
  title: string
  subtitle: string
  ctaButton: string
}

type Newsletter = {
  title: string
  ctaButton: string
  action: string
}

interface ContentValues {
  [props: string]: {}
}

interface Content {
  attention: {
    title: string
    ctaButton: string
    subtitle: string
  }
}

const AttentionSection = ({ sectionName = 'attention' }) => {
  const ctx: ContextProps = useContext(LangContext)
  // texts brane z LangContex
  const lang = ctx.active
  const section: Content = ctx[lang]
  console.log('from section', ctx.pl)
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
