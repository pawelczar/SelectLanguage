import { useState } from 'react'
import './App.css'
import AttentionSection from './components/AttentionSection'
import LangChanger from './components/LangChanger'
import { LangContextProvider } from './store/lang-context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <LangContextProvider>
      <div className="App">
        <AttentionSection sectionName="attention" />
        <LangChanger />
      </div>
    </LangContextProvider>
  )
}

export default App
