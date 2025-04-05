"use client"
import Link from "next/link";

const Navbar = ({ toggleSidebar, onLogout }) => {
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
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          font-weight: 700;
          font-size: 1.5rem;
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
        }

        .navbar-item a {
          color: #ffffff;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .navbar-item a:hover {
          color: #00e676;
        }

        .dropdown-icon {
          font-size: 0.7rem;
          margin-left: 4px;
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
        }

        .navbar-search input {
          background: none;
          border: none;
          color: #ffffff;
          outline: none;
          width: 150px;
        }

        .navbar-search input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .search-button {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.5);
          cursor: pointer;
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
        }

        .logout-button {
          background-color: rgba(0, 230, 118, 0.1);
          color: #00e676;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          font-size: 0.9rem;
          transition: background-color 0.3s ease;
        }

        .logout-button:hover {
          background-color: rgba(0, 230, 118, 0.2);
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
              <span className="logo-text">aHRi</span>
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