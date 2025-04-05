import "./Partners.css"

const Partners = () => {
  return (
    <section className="partners">
      <div className="partners-container">
        <div className="partners-list">
          <div className="partner-item">
            <div className="partner-logo">
              <span className="partner-icon">◎</span>
              <span>Github</span>
            </div>
          </div>
          <div className="partner-item">
            <div className="partner-logo">
              <span className="partner-icon">☀</span>
              <span>MongoDB Atlas </span>
            </div>
          </div>
          <div className="partner-item">
            <div className="partner-logo">
              <span className="partner-icon">◉</span>
              <span>Google Gemini </span>
            </div>
          </div>
          <div className="partner-item">
            <div className="partner-logo">
              <span className="partner-icon">⚡</span>
              <span>Clerk</span>
            </div>
          </div>  
          <div className="partner-item">
            <div className="partner-logo">
              <span className="partner-icon">◎</span>
              <span>Vercel</span>
            </div>
          </div>  
        </div>
      </div>
    </section>
  )
}

export default Partners

