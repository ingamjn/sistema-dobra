'use client';

import Link from 'next/link';

export default function ErrorPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white p-8 text-center">
      <div>
        <h1 className="text-4xl font-bold text-red-600 mb-4">Error</h1>
        <p className="text-lg text-gray-700 mb-6">
          Something went wrong. Please try again later.
        </p>
        <Link
          href="/dashboard"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Go to Dashboard
        </Link>
      </div>
    </main>
  );
}
