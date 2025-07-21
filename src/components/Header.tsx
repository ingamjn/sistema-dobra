'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-gray-100 border-b border-gray-200">
      <nav className="max-w-5xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-black">
          iTip
        </Link>
        <div className="flex gap-4">
          <Link
            href="/dashboard"
            className="text-sm text-gray-700 hover:underline"
          >
            Dashboard
          </Link>
          <Link
            href="/profile"
            className="text-sm text-gray-700 hover:underline"
          >
            Profile
          </Link>
        </div>
        <a href="/profile" className="text-blue-500 hover:underline ml-4">
          Profile
        </a>
      </nav>
    </header>
  );
}
