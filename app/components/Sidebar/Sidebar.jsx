// import { NavLink } from "react-router-dom"
import Link from 'next/link';
import "./Sidebar.css"


const Sidebar = ({ isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <span className="logo-icon">◉</span>
          <span className="logo-text">Index</span>
        </div>
      </div>

      <div className="sidebar-content">
        <nav className="sidebar-menu">
          <div className="menu-group">
            <div className="menu-title">Main</div>
            <ul className="menu-items">
              <li className="menu-item">
                <Link href="/" className={({ isActive }) => (isActive ? "active" : "")}>
                  <span className="menu-icon">🏠</span>
                  <span className="menu-text">Dashboard</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link href="/hr-ai-agent" className={({ isActive }) => (isActive ? "active" : "")}>
                  <span className="menu-icon">🤖</span>
                  <span className="menu-text">HR AI Agent</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link href="/user-panel" className={({ isActive }) => (isActive ? "active" : "")}>
                  <span className="menu-icon">👤</span>
                  <span className="menu-text">User Panel</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="menu-group">
            <div className="menu-title">Tools</div>
            <ul className="menu-items">
              <li className="menu-item">
                <Link href="/excel-automation" className={({ isActive }) => (isActive ? "active" : "")}>
                  <span className="menu-icon">📊</span>
                  <span className="menu-text">Excel Automation</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link href="/resume-shortlisted" className={({ isActive }) => (isActive ? "active" : "")}>
                  <span className="menu-icon">📄</span>
                  <span className="menu-text">Resume Shortlisted</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar">
            <span>JD</span>
          </div>
          <div className="user-details">
            <div className="user-name">John Doe</div>
            <div className="user-role">Admin</div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar

