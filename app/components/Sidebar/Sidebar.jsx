import Link from 'next/link';

const Sidebar = ({ isOpen }) => {
  return (
    <>
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
          transition: transform 0.3s ease;
          z-index: 1000;
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
        }

        .sidebar-logo {
          display: flex;
          align-items: center;
          font-weight: 700;
          font-size: 1.2rem;
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

        .menu-item a {
          display: flex;
          align-items: center;
          padding: 10px 20px;
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .menu-item a:hover {
          background-color: rgba(0, 230, 118, 0.1);
          color: #ffffff;
        }

        .menu-item a.active {
          background-color: rgba(0, 230, 118, 0.2);
          color: #00e676;
          border-left: 3px solid #00e676;
        }

        .menu-icon {
          margin-right: 10px;
          font-size: 1.1rem;
        }

        .sidebar-footer {
          padding: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .user-info {
          display: flex;
          align-items: center;
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
