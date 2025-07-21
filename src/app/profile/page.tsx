'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import type { User } from '@supabase/supabase-js';

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user ?? null);
    };
    getSession();
  }, []);

  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center p-8 bg-white">
        <p className="text-center text-gray-600">
          Please log in to view your profile.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8 bg-white max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      <p className="text-lg mb-4">
        <strong>Email:</strong> {user.email}
      </p>
      <p className="text-lg mb-4">
        <strong>User ID:</strong> {user.id}
      </p>
    </main>
  );
}
