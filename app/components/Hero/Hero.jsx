const Hero = () => {
  return (
    <>
      <style>{`
        .hero {
          position: relative;
          height: 100vh;
          min-height: 450px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
          background-color: black;
        }

        .hero-grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: linear-gradient(rgba(0, 230, 118, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 230, 118, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          z-index: -1;
        }

        .hero-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        .funding-badge {
          display: inline-flex;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          padding: 8px 16px;
          font-size: 0.9rem;
          margin-bottom: 30px;
        }

        .funding-icon {
          margin-right: 8px;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 700;
          margin-bottom: 24px;
          line-height: 1.1;
          color: white;
        }

        .hero-description {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.7);
          max-width: 600px;
          margin: 0 auto 40px;
        }

        .hero-buttons {
          display: flex;
          justify-content: center;
          gap: 16px;
        }

        .primary-button {
          background-color: #00e676;
          color: #000000;
          padding: 12px 24px;
          border-radius: 50px;
          font-weight: 600;
          transition: background-color 0.3s ease;
          text-decoration: none;
        }

        .primary-button:hover {
          background-color: #00c853;
        }

        .secondary-button {
          background-color: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 50px;
          font-weight: 600;
          transition: background-color 0.3s ease;
          text-decoration: none;
        }

        .secondary-button:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
      `}</style>

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
              Get Template
            </a>
            <a href="#" className="secondary-button">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
