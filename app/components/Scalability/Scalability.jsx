const Scalability = () => {
  return (
    <>
      <style>
        {`
          .scalability {
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
  );
};

export default Scalability;
