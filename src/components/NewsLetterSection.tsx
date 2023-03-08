const AttentionSection = ({ sectionName = 'newsletter' }) => {
  // texts brane z LangContext
  const { title, ctaButton, action } = texts[sectionName]
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <button>{ctaButton}</button>
    </div>
  )
}

export default NewsLetterSection
