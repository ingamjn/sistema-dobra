import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import type { User } from '@supabase/supabase-js';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function getSession() {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user ?? null);
    }

    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { user };
}
