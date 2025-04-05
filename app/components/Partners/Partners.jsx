const Partners = () => {
  return (
    <>
      <style>
        {`
          .partners {
            padding: 60px 0;
            background-color: rgba(0, 0, 0, 0.3);
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
  );
};

export default Partners;
