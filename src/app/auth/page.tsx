'use client';

import Link from 'next/link';

export default function AuthPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Auth Page</h1>
      <p className="text-lg mb-4">Please choose an option below:</p>
      <div className="flex space-x-4">
        <Link
          href="/auth/signin"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Sign In
        </Link>
        <Link
          href="/auth/signup"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Sign Up
        </Link>
      </div>
    </main>
  );
}
