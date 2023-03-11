import useConetent from "../hooks/use-Content"



const NewsletterSection = ({ sectionName = 'newsletter' }) => {
  const content = useConetent(sectionName)
  return (
    <div>
      <h1>{content.title}</h1>
      <h2>{content.subtitle}</h2>
      <button>{content.ctaButton}</button>
    </div>
  )
}

export default NewsletterSection

