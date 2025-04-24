
const Home = () => {
  return (
    <div style={{marginLeft:"13rem"}} className="home-page">
      <div className="herooo">
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
            <a href="/dashboard/home" className="primary-button">
              Get Started
            </a>
            <a  className="secondary-button">
              Now Free
            </a>
          </div>
        </div>
      </section>
    </>
      </div>
      <div className="dashboard">
      <>
      <style>
        {`
          .dashboard {
          background-color:black;
            padding: 40px 0;
            position: relative;
          }

          .dashboard-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }

          .dashboard-image {
            position: relative;
            background: linear-gradient(to right, rgba(0, 230, 118, 0.1), transparent);
            border-radius: 12px;
            padding: 40px;
            max-width: 700px;
            margin: 0 auto;
          }

          .dashboard-logo {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
          }

          .dashboard-logo-icon {
            color: #00e676;
            margin-right: 8px;
            font-size: 1.2rem;
          }

          .dashboard-logo-text {
            color: #00e676;
            font-weight: 600;
          }

          .dashboard-mockup {
            background-color: rgba(30, 30, 30, 0.8);
            border-radius: 8px;
            overflow: hidden;
          }

          .dashboard-header {
            display: flex;
            justify-content: space-between;
            padding: 12px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .dashboard-search {
            width: 40%;
            height: 10px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
          }

          .dashboard-controls {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .dashboard-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.2);
          }

          .dashboard-line {
            width: 30px;
            height: 8px;
            border-radius: 4px;
            background-color: rgba(255, 255, 255, 0.2);
          }

          .dashboard-content {
            display: flex;
            padding: 12px;
            gap: 12px;
          }

          .dashboard-sidebar {
            width: 20%;
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .sidebar-item {
            height: 10px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
          }

          .dashboard-main {
            width: 80%;
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
          }

          .dashboard-card {
            width: calc(33.333% - 8px);
            height: 60px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
          }

          .dashboard-row {
            width: 100%;
            height: 30px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
            margin-top: 8px;
          }
        `}
      </style>

      <section className="dashboard">
        <div className="dashboard-container">
          <div className="dashboard-image">
            <div className="dashboard-logo">
              <span className="dashboard-logo-icon">◉</span>
              <span className="dashboard-logo-text">aHRi</span>
            </div>
            <div className="dashboard-mockup">
              <div className="dashboard-header">
                <div className="dashboard-search"></div>
                <div className="dashboard-controls">
                  <div className="dashboard-dot"></div>
                  <div className="dashboard-dot"></div>
                  <div className="dashboard-line"></div>
                </div>
              </div>
              <div className="dashboard-content">
                <div className="dashboard-sidebar">
                  <div className="sidebar-item"></div>
                  <div className="sidebar-item"></div>
                  <div className="sidebar-item"></div>
                  <div className="sidebar-item"></div>
                </div>
                <div className="dashboard-main">
                  <div className="dashboard-card"></div>
                  <div className="dashboard-card"></div>
                  <div className="dashboard-card"></div>
                  <div className="dashboard-row"></div>
                  <div className="dashboard-row"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
      </div>
      <div className="partner">
      <>
      <style>
        {`
          .partners {

          background-color:black;
            padding: 60px 0;
            
          }

          .partners-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }

          .partners-list {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 30px;
          }

          .partner-item {
            flex: 1;
            min-width: 150px;
            text-align: center;
          }

          .partner-logo {
            display: flex;
            align-items: center;
            justify-content: center;
            color: rgba(255, 255, 255, 0.6);
            font-weight: 500;
            gap: 8px;
          }

          .partner-icon {
            font-size: 1.2rem;
          }
        `}
      </style>

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
                <span>MongoDB Atlas</span>
              </div>
            </div>
            <div className="partner-item">
              <div className="partner-logo">
                <span className="partner-icon">◉</span>
                <span>Google Gemini</span>
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
    </>
      </div>
      <div className="feature">
      <>
      <style>
        {`
          .features {
          background-color:black;
            padding: 100px 0;
            text-align: center;
          }

          .features-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 20px;
          }

          .features-title {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 24px;
          }

          .features-description {
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.7);
            line-height: 1.6;
          }
        `}
      </style>

      <section className="features">
        <div className="features-container">
          <h2 className="features-title">Access to the future of work</h2>
          <p className="features-description">
            Experience AI-driven features: intelligent automation, seamless integrations, and real-time insights. Benefit
            from a user-friendly interface and top-notch security, boosting your team's productivity.
          </p>
        </div>
      </section>
    </>
      </div>
      <div className="Scalebiity">
      <>
      <style>
        {`

          .scalability {
          background-color:black;
            padding: 40px 0;
          }

          .scalability-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }

          .scalability-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
          }

          .scalability-content {
            background-color: #00843e;
            padding: 60px 40px;
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .scalability-badge {
            display: inline-block;
            background-color: rgba(255, 255, 255, 0.1);
            padding: 6px 12px;
            border-radius: 4px;
            font-size: 0.8rem;
            margin-bottom: 20px;
            align-self: flex-start;
          }

          .scalability-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 20px;
            line-height: 1.2;
            color: white;
          }

          .scalability-description {
            font-size: 1rem;
            color: rgba(255, 255, 255, 0.8);
          }

          .scalability-video {
            position: relative;
            border-radius: 12px;
            overflow: hidden;
            height: 100%;
          }

          .video-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1;
          }

          .play-button {
            width: 60px;
            height: 60px;
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }

          .play-icon {
            color: #000;
            font-size: 1.2rem;
          }

          .video-placeholder {
            height: 100%;
            width: 100%;
          }

          .video-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          @media (max-width: 768px) {
            .scalability-grid {
              grid-template-columns: 1fr;
            }

            .scalability-content {
              padding: 40px 20px;
            }
          }
        `}
      </style>

      <section className="scalability">
        <div className="scalability-container">
          <div className="scalability-grid">
            <div className="scalability-content">
              <div className="scalability-badge">Scalability</div>
              <h2 className="scalability-title">
                Build Scalable product with the help of our AI
              </h2>
              <p className="scalability-description">
                Easily scale your resources up or down based on business needs without hardware limitations.
              </p>
            </div>

            <div className="scalability-video">
              <div className="video-overlay">
                <div className="play-button">
                  <span className="play-icon">▶</span>
                </div>
              </div>
              <div className="video-placeholder">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Person working on laptop"
                  className="video-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
      </div>
      <div className="just">
        <>
        
        </>
      </div>
      {/* <Stats /> */}
    </div>
  )
}

export default Home