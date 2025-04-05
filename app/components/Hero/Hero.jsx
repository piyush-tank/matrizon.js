import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-grid-overlay"></div>
      <div className="hero-container">

        <h1 className="hero-title">The AI SaaS your product needs</h1>

        <p className="hero-description">
          Our AI SaaS solution enhances your product with advanced artificial intelligence, streamlining operations and
          driving efficiency and innovation.
        </p>

        <div className="hero-buttons">
          <a href="#" className="primary-button">
            Get Started
          </a>
          <a href="#" className="secondary-button">
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

