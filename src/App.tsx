import './App.css'
import AttentionSection from './components/AttentionSection'
import LangChanger from './components/LangChanger'
import NewsletterSection from './components/NewsLetterSection'
import { LangContextProvider } from './store/lang-context'

function App() {
  return (
    <LangContextProvider>
      <div className="App">
        <AttentionSection sectionName="attention" />
        <NewsletterSection sectionName="newsletter" />
        <LangChanger />
      </div>
    </LangContextProvider>
  )
}

export default App
