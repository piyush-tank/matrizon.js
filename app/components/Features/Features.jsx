const Features = () => {
  return (
    <>
      <style>
        {`
          .features {
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
  );
};

export default Features;
