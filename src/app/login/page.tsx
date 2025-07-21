'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function handleLogin() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Check your email for the login link!');
    }
    setLoading(false);
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-white max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Login to iTipLive</h1>
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 border rounded mb-4"
        disabled={loading}
      />
      <button
        onClick={handleLogin}
        disabled={loading || !email}
        className="w-full bg-blue-600 text-white p-3 rounded disabled:opacity-50"
      >
        {loading ? 'Sending...' : 'Send Magic Link'}
      </button>
      {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
    </main>
  );
}
