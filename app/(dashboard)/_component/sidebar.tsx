import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64  bg-gray-50 border-r">
      <nav className="p-6">
        <ul className="space-y-4">
          <li>
            <Link href="/dashboard/chat" className="block p-2 rounded hover:bg-gray-200">
              Chat
            </Link>
          </li>
          <li>
            <Link href="/dashboard/knowForm" className="block p-2 rounded hover:bg-gray-200">
              Knowledge Base
            </Link>
          </li>
          <li>
            <Link href="/settings" className="block p-2 rounded hover:bg-gray-200">
             Create user
            </Link>
          </li>
          <li>
            <Link href="/dashboard/intregation" className="block p-2 rounded hover:bg-gray-200">
             Intregation
            </Link>
          </li>
          
        </ul>
      </nav>
    </aside>
  );
}
