import "./AnimatedBackground.css"

const AnimatedBackground = ({ type = "particles" }) => {
  return (
    <div className={`animated-background ${type}-background`}>
      {type === "particles" && (
        <div className="particles">
          {[...Array(20)].map((_, index) => (
            <div
              key={index}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AnimatedBackground

