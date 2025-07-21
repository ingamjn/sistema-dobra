'use client';

import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white p-8 text-center">
      <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
