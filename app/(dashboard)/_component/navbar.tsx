import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-xl font-bold">My App</h1>
        </Link>
        <nav className="space-x-4 flex items-center">
          <Link href="/dashboard" className="text-gray-600 hover:text-gray-800">
            Dashboard
          </Link>
          <Link href="/profile" className="text-gray-600 hover:text-gray-800">
            Profile
          </Link>
          <Link href="/settings" className="text-gray-600 hover:text-gray-800">
            Settings
          </Link>
          <Button variant="outline" size="sm">
            Sign Out
          </Button>
        </nav>
      </div>
    </header>
  );
}
