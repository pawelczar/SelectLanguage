import { useContext, ReactNode } from 'react'
import LangContext from '../store/lang-context'
import classes from './LangChanger.module.css'

const LangChanger = () => {
  const ctx = useContext(LangContext)

  return (
    <div>
      <>
        <button
          className={classes.En}
          onClick={() => ctx.langChangeHandler('en')}
        >
          <img src="https://img.icons8.com/color/48/null/great-britain-circular.png" />
        </button>
        <button
          className={classes.Pl}
          onClick={() => ctx.langChangeHandler('pl')}
        >
          <img src="https://img.icons8.com/color/48/null/poland-circular.png" />
        </button>
        {console.log(ctx.active)}
      </>
    </div>
  )
}

export default LangChanger
