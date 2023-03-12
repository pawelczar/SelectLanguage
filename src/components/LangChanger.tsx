import { useContext, ReactNode } from 'react'
import LangContext from '../store/lang-context'

const LangChanger = () => {
  const ctx = useContext(LangContext)

  return (
    <div>
      <>
        <button
          onClick={() => ctx.langChangeHandler('en')}
        >
          <img src="https://img.icons8.com/color/48/null/great-britain-circular.png" />
        </button>
        <button
          onClick={() => ctx.langChangeHandler('pl')}
        >
          <img src="https://img.icons8.com/color/48/null/poland-circular.png" />
        </button>
      </>
    </div>
  )
}

export default LangChanger
