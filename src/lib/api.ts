import { supabase } from './supabaseClient';

export async function fetchUsers() {
  const { data, error } = await supabase
    .from('users')
    .select('id, email, full_name');
  if (error) {
    throw error;
  }
  return data;
}

export async function fetchTransfers(userEmail: string, sent: boolean) {
  let query = supabase.from('transfers').select('*');
  if (sent) {
    query = query.eq('from_user', userEmail);
  } else {
    query = query.eq('to_user', userEmail);
  }
  const { data, error } = await query.order('id', { ascending: false });
  if (error) {
    throw error;
  }
  return data;
}
