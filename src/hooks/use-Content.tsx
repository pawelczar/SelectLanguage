import { useContext } from "react"
import LangContext from '../store/lang-context'


const useConetent = (sectionName: string) => {
  const ctx= useContext(LangContext)
  const lang = ctx.active
  const section = ctx[lang][sectionName]
  return section;
}

export default useConetent

