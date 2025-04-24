import Link from 'next/link';
import { useNavbarStore } from '../dashboard/_components/layoutWrapper';

const Sidebar = () => {
  // Get the current user from your custom hook
  const { user } = useNavbarStore();

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <nav className="sidebar-menu">
          {user?.role === "HR" ? (
            <>
              <div className="menu-group">
                <div className="menu-title">Main</div>
                <ul className="menu-items">
                <li className="menu-item">
                    <Link href="/dashboard/home" legacyBehavior>
                      <a className="link">
                        <span className="menu-icon">🏠</span>
                        <span className="menu-text">Home</span>
                      </a>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/dashboard/chat" legacyBehavior>
                      <a className="link">
                        <span className="menu-icon">🏠</span>
                        <span className="menu-text">Chat</span>
                      </a>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/dashboard/intregation" legacyBehavior>
                      <a className="link">
                        <span className="menu-icon">🤖</span>
                        <span className="menu-text">Integration</span>
                      </a>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/dashboard/knowForm" legacyBehavior>
                      <a className="link">
                        <span className="menu-icon">🧠</span>
                        <span className="menu-text">Knowledge Base</span>
                      </a>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/dashboard/user" legacyBehavior>
                      <a className="link">
                        <span className="menu-icon">👤</span>
                        <span className="menu-text">User</span>
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
                  {/* <li className="menu-item">
                    <Link href="/resume-shortlisted" legacyBehavior>
                      <a className="link">
                        <span className="menu-icon">📄</span>
                        <span className="menu-text">Resume Shortlisted</span>
                      </a>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </>
          ) : (
            <div className="menu-group">
              <div className="menu-title">Main</div>
              <ul className="menu-items">
                <li className="menu-item">
                  <Link href="/dashboard/chat" legacyBehavior>
                    <a className="link">
                      <span className="menu-icon">🏠</span>
                      <span className="menu-text">Chat</span>
                    </a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/dashboard/intregation" legacyBehavior>
                    <a className="link">
                      <span className="menu-icon">🤖</span>
                      <span className="menu-text">Integration</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>

      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar">
            <span>JD</span>
          </div>
          <div className="user-details">
            <div className="user-name">John Doe</div>
            <div className="user-role">{user ? user.role : "Guest"}</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
