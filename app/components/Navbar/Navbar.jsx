"use client"
import Link from "next/link";
import { useState } from "react";

const Navbar = ({ toggleSidebar, onLogout }) => {

  const [showBackgroundMenu, setShowBackgroundMenu] = useState(false)

  const toggleBackgroundMenu = () => {
    setShowBackgroundMenu(!showBackgroundMenu)
  }

  const handleBackgroundChange = (type) => {
    onChangeBackground(type)
    setShowBackgroundMenu(false)
  }
  return (
    <>
      <style jsx>{`
        .navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  height: 70px;
  animation: fadeIn 0.5s ease-out;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.sidebar-toggle {
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  margin-right: 15px;
  padding: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.sidebar-toggle:hover {
  transform: rotate(90deg);
  color: #00e676;
}

.navbar-logo {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.navbar-logo:hover {
  transform: scale(1.05);
}

.logo-icon {
  color: #00e676;
  margin-right: 8px;
}

.logo-text {
  color: #00e676;
}

.navbar-menu {
  display: flex;
  list-style: none;
}

.navbar-item {
  margin: 0 15px;
  position: relative;
}

.navbar-item a {
  color: #ffffff;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  position: relative;
}

.navbar-item a::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #00e676;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.navbar-item a:hover {
  color: #00e676;
}

.navbar-item a:hover::after {
  transform: scaleX(1);
}

.dropdown-icon {
  font-size: 0.7rem;
  margin-left: 4px;
  transition: transform 0.3s ease;
}

.navbar-item:hover .dropdown-icon {
  transform: rotate(180deg);
}

.navbar-right {
  display: flex;
  align-items: center;
}

.navbar-search {
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 5px 10px;
  margin-right: 15px;
  transition: all 0.3s ease;
}

.navbar-search:focus-within {
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 0 2px rgba(0, 230, 118, 0.3);
}

.navbar-search input {
  background: none;
  border: none;
  color: #ffffff;
  outline: none;
  width: 150px;
  transition: width 0.3s ease;
}

.navbar-search:focus-within input {
  width: 180px;
}

.navbar-search input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.search-button {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.search-button:hover {
  transform: scale(1.2);
  color: #00e676;
}

.navbar-actions {
  display: flex;
  align-items: center;
}

.notification-button {
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.2rem;
  margin-right: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.notification-button:hover {
  transform: scale(1.1);
  color: #00e676;
}

.notification-button::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 8px;
  height: 8px;
  background-color: #ff3b30;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}

.logout-button {
  background-color: rgba(0, 230, 118, 0.1);
  color: #00e676;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.logout-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: all 0.5s ease;
}

.logout-button:hover {
  background-color: rgba(0, 230, 118, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 230, 118, 0.2);
}

.logout-button:hover::before {
  left: 100%;
}

@media (max-width: 768px) {
  .navbar-menu {
    display: none;
  }

  .navbar-search {
    display: none;
  }
}


      `}</style>

<nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <span className="toggle-icon">☰</span>
          </button>

          <div className="navbar-logo">
            <span className="logo-icon">◉</span>
            <span className="logo-text">Index</span>
          </div>
        </div>

        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link href="/">Home</Link>
          </li>
          <li className="navbar-item dropdown">
            <a href="#">
              All Pages <span className="dropdown-icon">▾</span>
            </a>
          </li>
          <li className="navbar-item">
            <a href="/pricing">Pricing</a>
          </li>
          <li className="navbar-item">
            <a href="/blog">Blog</a>
          </li>
          <li className="navbar-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>

        <div className="navbar-right">
          <div className="navbar-search">
            <input type="text" placeholder="Search..." />
            <button className="search-button">🔍</button>
          </div>

          <div className="navbar-actions">
            <div className="background-selector">
              <button className="background-button" onClick={toggleBackgroundMenu}>
                🎨
              </button>
              {showBackgroundMenu && (
                <div className="background-menu">
                  <div className="background-menu-header">
                    <span>Background Style</span>
                  </div>
                  <div
                    className={`background-option ${currentBackground === "particles" ? "active" : ""}`}
                    onClick={() => handleBackgroundChange("particles")}
                  >
                    <span className="option-icon">✨</span>
                    <span className="option-text">Particles</span>
                  </div>
                  <div
                    className={`background-option ${currentBackground === "gradient" ? "active" : ""}`}
                    onClick={() => handleBackgroundChange("gradient")}
                  >
                    <span className="option-icon">🌈</span>
                    <span className="option-text">Gradient</span>
                  </div>
                  <div
                    className={`background-option ${currentBackground === "grid" ? "active" : ""}`}
                    onClick={() => handleBackgroundChange("grid")}
                  >
                    <span className="option-icon">📏</span>
                    <span className="option-text">Grid</span>
                  </div>
                  <div
                    className={`background-option ${currentBackground === "waves" ? "active" : ""}`}
                    onClick={() => handleBackgroundChange("waves")}
                  >
                    <span className="option-icon">🌊</span>
                    <span className="option-text">Waves</span>
                  </div>
                </div>
              )}
            </div>
            <button className="notification-button">🔔</button>
            <button className="logout-button" onClick={onLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;