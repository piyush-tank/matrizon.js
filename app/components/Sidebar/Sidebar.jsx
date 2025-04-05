import Link from 'next/link';

const Sidebar = ({ isOpen }) => {
  return (
    <>
      <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <span className="logo-icon">◉</span>
            <span className="logo-text">aHRi</span>
          </div>
        </div>

        <div className="sidebar-content">
          <nav className="sidebar-menu">
            <div className="menu-group">
              <div className="menu-title">Main</div>
              <ul className="menu-items">
                <li className="menu-item">
                  <Link href="/" legacyBehavior>
                    <a className="link">
                      <span className="menu-icon">🏠</span>
                      <span className="menu-text">Dashboard</span>
                    </a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/hr-ai-agent" legacyBehavior>
                    <a className="link">
                      <span className="menu-icon">🤖</span>
                      <span className="menu-text">HR AI Agent</span>
                    </a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/user-panel" legacyBehavior>
                    <a className="link">
                      <span className="menu-icon">👤</span>
                      <span className="menu-text">User Panel</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="menu-group">
              <div className="menu-title">Tools</div>
              <ul className="menu-items">
                <li className="menu-item">
                  <Link href="/excel-automation" legacyBehavior>
                    <a className="link">
                      <span className="menu-icon">📊</span>
                      <span className="menu-text">Excel Automation</span>
                    </a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/resume-shortlisted" legacyBehavior>
                    <a className="link">
                      <span className="menu-icon">📄</span>
                      <span className="menu-text">Resume Shortlisted</span>
                    </a>
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

      <style jsx>{`
        .sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: #111111;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
}

.sidebar.closed {
  transform: translateX(-100%);
}

.sidebar-header {
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  height: 70px;
  display: flex;
  align-items: center;
  animation: fadeIn 0.5s ease-out;
}

.sidebar-logo {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.sidebar-logo:hover {
  transform: scale(1.05);
}

.logo-icon {
  color: #00e676;
  margin-right: 8px;
}

.logo-text {
  color: #00e676;
}

.sidebar-content {
  flex: 1;
  overflow-y: auto;
  padding: 20px 0;
}

.menu-group {
  margin-bottom: 30px;
  animation: slideInLeft 0.5s ease-out;
}

.menu-title {
  padding: 0 20px;
  margin-bottom: 10px;
  font-size: 0.8rem;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 1px;
}

.menu-items {
  list-style: none;
}

.menu-item {
  margin-bottom: 2px;
}

.menu-item a {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.menu-item a::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 3px;
  background-color: #00e676;
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.menu-item a:hover {
  background-color: rgba(0, 230, 118, 0.1);
  color: #ffffff;
}

.menu-item a:hover::before {
  transform: scaleY(1);
}

.menu-item a.active {
  background-color: rgba(0, 230, 118, 0.2);
  color: #00e676;
  border-left: 3px solid #00e676;
}

.menu-item a.active::before {
  transform: scaleY(1);
}

.menu-icon {
  margin-right: 10px;
  font-size: 1.1rem;
  transition: transform 0.3s ease;
}

.menu-item a:hover .menu-icon {
  transform: scale(1.2);
}

.sidebar-footer {
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  animation: slideInUp 0.5s ease-out;
}

.user-info {
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
}

.user-info:hover {
  transform: translateY(-2px);
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 230, 118, 0.2);
  color: #00e676;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-right: 12px;
  transition: all 0.3s ease;
}

.user-info:hover .user-avatar {
  box-shadow: 0 0 15px rgba(0, 230, 118, 0.5);
}

.user-name {
  font-weight: 600;
  font-size: 0.9rem;
}

.user-role {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
  }

  .sidebar.open {
    transform: translateX(0);
  }
}


      `}</style>
    </>
  );
};

export default Sidebar;
