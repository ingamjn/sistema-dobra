'use client';

import Link from 'next/link';

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-8 text-center">
      <h1 className="text-4xl font-bold text-green-600 mb-4">
        Transfer Completed Successfully
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Thank you for your generosity. You can view your transfer history at any
        time.
      </p>
      <Link
        href="/dashboard"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Go to Dashboard
      </Link>
    </main>
  );
}
