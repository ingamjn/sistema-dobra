'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import type { User } from '@supabase/supabase-js';

type Transfer = {
  id: number;
  from_user: string;
  to_user: string;
  step: string;
  timestamp: string;
  sent_at?: string | null;
  verified_at?: string | null;
  received_at?: string | null;
};

export default function HistoryPage() {
  const [user, setUser] = useState<User | null>(null);
  const [transfers, setTransfers] = useState<Transfer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user ?? null);
    }

    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!user) return;

    async function fetchTransfers() {
      setLoading(true);
      const email = user ? (user.email ?? '') : '';

      const { data, error } = await supabase
        .from('transfers')
        .select('*')
        .or(`from_user.eq.${email},to_user.eq.${email}`)
        .order('id', { ascending: false });

      if (error) {
        console.error('Error loading transfers:', error.message);
        setTransfers([]);
      } else {
        setTransfers(data ?? []);
      }

      setLoading(false);
    }

    fetchTransfers();
  }, [user]);

  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center p-8 bg-white">
        <p className="text-center text-gray-600">
          Please log in to view your history.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8 bg-white max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Transfer History</h1>

      {loading ? (
        <p>Loading...</p>
      ) : transfers.length === 0 ? (
        <p className="text-gray-500 italic">No transfers found.</p>
      ) : (
        <div className="space-y-4">
          {transfers.map((t) => (
            <div key={t.id} className="p-4 border rounded shadow bg-gray-50">
              <p>
                <strong>{t.from_user}</strong> → <strong>{t.to_user}</strong>
              </p>
              <p className="text-sm text-gray-700">{t.step}</p>
              <p className="text-xs text-gray-400">{t.timestamp}</p>
              {t.sent_at && (
                <p className="text-xs text-gray-400">Sent at: {t.sent_at}</p>
              )}
              {t.verified_at && (
                <p className="text-xs text-yellow-500">
                  Verified at: {t.verified_at}
                </p>
              )}
              {t.received_at && (
                <p className="text-xs text-purple-500">
                  Received at: {t.received_at}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
