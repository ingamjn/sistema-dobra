'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    const signOut = async () => {
      await supabase.auth.signOut();
      router.push('/');
    };
    signOut();
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-white p-8">
      <p className="text-center text-gray-600 text-lg">Signing out...</p>
    </main>
  );
}
